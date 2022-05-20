
export const state = () => ({
  isCheckUpdate: false
})

export const getters = {
  isCheckUpdate: (state) => state.isCheckUpdate,
}

export const mutations = {
  changeCheckUpdate(state, status) {
    state.isCheckUpdate = status
  }
}

export const actions = {
  async change({ commit }, bool) {
    await commit('changeCheckUpdate', bool)
  }
}
