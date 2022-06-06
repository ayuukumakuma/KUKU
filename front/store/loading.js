export const state = () => ({
  loadingCount: 0,
})

export const getters = {
  loadingCount: (state) => state.loadingCount,
  isLoading: (state) => state.loadingCount > 0,
}

export const mutations = {
  incrementLoadingCount(state) {
    ++state.loadingCount
  },
  decrementLoadingCount(state) {
    if (state.loadingCount > 0) {
      --state.loadingCount
    }
  },
}

export const actions = {
  incrementLoadingCount({ commit }) {
    return commit('incrementLoadingCount')
  },
  decrementLoadingCount({ commit }) {
    return commit('decrementLoadingCount')
  },
}
