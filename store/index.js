export const state = () => ({
    error: null,
})

export const getters = {
    error: (state) => state.error,
    hasError: (_, getters) => Boolean(getters.error)
}

export const mutations = {
    setError(state, error) {
        state.error = error;
    },
    clearError(state) {
        state.error = null;
    },
}


