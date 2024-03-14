const combat = {
    namespaced: true,
    state: {
        gab: 0,
    },
    mutations: {
        changeGAB(state, payload) {
            if(payload === 'decrease') {
                state.gab--
            } else {
                state.gab++
            }
        }
    },
};
export default combat