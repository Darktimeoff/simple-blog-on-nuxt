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
        try {
            const token = await new Promise((resolve, reject) => {
                setTimeout(() => resolve('mock-token'), 2000)
            });
            
            dispatch('setToken', token);
        } catch (err) {
            commit('setError', err, {root: true})
            throw err;
        }
    },
    async logout({commit}) {
        commit('setToken', null)
    },
    async createUser({commit}, formData) {
        try {
            console.log(formData)
        } catch (err) {
            commit('setError', err, {root: true});
            throw err;
        }
    },
    setToken({commit}, token) {
        commit('setToken', token)
    }
}