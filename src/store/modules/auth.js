// auth
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
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
        async FetchAuthUser({state}, {userId}) {
            console.log(userId)
            const db = getDatabase();
            const authUser = ref(db,'users/' + userId);
            onValue(authUser, (snapshot) => {
                const data = snapshot.val();
                console.log(data)
                state.authUser = data
            });
        }
    },

    mutations: {

    }
}