import { getDatabase, ref, onValue} from "firebase/database";


export default {
    namespaced: true,
    state: {
        items: []
    },
    getters: {},
    actions: {
        async ReadAllUsers({commit}) {
            const db = getDatabase();
            const usersRef = ref(db, 'users/');
            await onValue(usersRef, (snapshot) => {
                commit('setUsers', { users: snapshot.val()})
            });
        }
    },
    mutations: {
        setUsers(state, {users}) {
            state.items = users
        }
    }
}