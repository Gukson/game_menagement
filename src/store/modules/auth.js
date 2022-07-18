// auth
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged} from "firebase/auth";
// database
import { getDatabase, ref, set, onValue } from "firebase/database";



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
        async InitAuthentication({dispatch}) {
            const auth = getAuth();
            await onAuthStateChanged(auth, (user) => {
                if (user) {
                    dispatch('FetchAuthUser')
                } else {
                    return null
                }
            });
        },
        async CreateUser({state}, {id, email, password, username}) {
            state.authUser = {id, email, password, username}
            const db = getDatabase()
            await set(ref(db, 'users/' + id), {
                username,
                email,
                password,
                userId: id
            })
        },
        async FetchAuthUser({commit}) {
            const db = getDatabase();
            const auth = getAuth();
            const userId = auth.currentUser?.uid;
            if (!userId) return
            const authUser = ref(db,'users/' + userId);
            onValue(authUser, (snapshot) => {
                commit('setAuthUser', {user: snapshot.val(), id: userId})
            });
        }
    },

    mutations: {
        setAuthUser(state, {user, id}) {
            state.authUser = user
            state.authId = id
        }
    }
}