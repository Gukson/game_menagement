import { getDatabase, ref, child, push, update } from "firebase/database";


export default {
    namespaced: true,
    state: {
        items: []
    },
    actions: {
        CreateTournament({ commit }, { tournamentObject }) {
            const db = getDatabase();

            // stwórz klucz dla turnieju
            const newTournamentKey = push(child(ref(db), 'tournaments')).key;

            // docelowy obiekt turnieju, rootState - globlany state
            const tournament = {
                ...tournamentObject,
                tournamentId: newTournamentKey
            };

            // zapisz turniej
            const added = {};
            console.log(tournament)
            added['/tournaments/' + newTournamentKey] = tournament;
            commit('setTournament', tournament)
            return update(ref(db), added);
        }
    },
    getters: {},
    mutations: {
        setTournament(state, tour) {
            state.items.push(tour)
        }
    }
}