// auth
import {createUserWithEmailAndPassword, getAuth,
    onAuthStateChanged, signInWithEmailAndPassword, signOut}
    from "firebase/auth";
// database
import { getDatabase, ref, set, child, get } from "firebase/database";



export default {
    namespaced: true,

    state: {
        authId: null,
        authUser: {}
    },

    getters: {},

    actions: {
        async RegisterUserWithEmailAndPassword({ dispatch }, { username, password, email }) {
            const auth = getAuth()
            const result = await createUserWithEmailAndPassword(auth, email, password)
            await dispatch('CreateUser', { id: result.user.uid, email, password, username } )
        },
        InitAuthentication({dispatch, commit}) {
            return new Promise((resolve) => {
                const auth = getAuth();
                 onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        commit('setAuthId', user.uid)
                        await dispatch('FetchAuthUser')
                        resolve(user)
                    }else {
                        resolve(null)
                    }
                })

        })},
            // const auth = getAuth();
            // await onAuthStateChanged(auth, (user) => {
            //     if (user) {
            //         commit('setAuthId', user.uid)
            //         dispatch('FetchAuthUser')
            //     } else {
            //         return null
            //     }
            // });
        async CreateUser({commit}, {id, email, password, username}) {
            const user = {id, email, password, username}
            commit('setAuthUser', {user, id})
            const db = getDatabase()
            await set(ref(db, 'users/' + id), {
                username,
                email,
                password,
                userId: id
            })
        },
        async FetchAuthUser({commit}) {
            const dbRef = ref(getDatabase());
            const auth = getAuth();
            const userId = auth.currentUser?.uid;
            await get(child(dbRef, `users/${userId}`))
                .then((snapshot) => {
                if (snapshot.exists()) {
                    commit('setAuthUser', { user: snapshot.val(), id: userId})
                    // console.log(snapshot.val());
                } else {
                    // console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
            // const db = getDatabase();
            // const auth = getAuth();
            // const userId = auth.currentUser?.uid;
            // if (!userId) return
            // const authUser = ref(db,'users/' + userId);
            // await onValue(authUser, (snapshot) => {
            //     commit('setAuthUser', {user: snapshot.val(), id: userId})
            // });
        },
        async SignInWithEmailAndPassword({dispatch}, {email, password}) {
            const auth = getAuth();
            await signInWithEmailAndPassword(auth, email, password)
                .then((user) => {
                    if (!user) return
                    dispatch('FetchAuthUser')
                })
                .catch((error) => {
                    console.log(error)
                });
        },
        async SignOut( {commit} ) {
            const auth = getAuth();
            signOut(auth).then(() => {
                commit('setAuthUser', {user: null, id: ''})
            }).catch((error) => {
                console.log(error)
            });
        }
    },

    mutations: {
        setAuthUser(state, {user}) {
            state.authUser = user
        },
        setAuthId(state, id) {
            console.log(id)
            state.authId = id
        }
    }
}