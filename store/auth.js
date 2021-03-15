export const state = () => ({
    token: null,
});

export const getters = {
    token: (state) => state.token,
    isAuth: (_, getters) => Boolean(getters.token),
}

export const mutations = {
    setToken(state, token) {
        state.token = token;
    }
}

export const actions = {
    async login({commit, dispatch}, loginData) {
        const token = await new Promise((resolve, reject) => {
            setTimeout(() => resolve('mock-token'), 2000)
        })
        
        dispatch('setToken', token);
        console.log('token:' + token)
    },
    setToken({commit}, token) {
        commit('setToken', token)
    }
}