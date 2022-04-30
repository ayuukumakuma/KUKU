export const state = () => ({
  alert: false,
  content: ''
})

export const getters = {
  getAlert(state) {
    return state.alert
  },
  getContent(state) {
    return state.content
  }
}

export const mutations = {
  changeContent(state, authState) {
    state.content = authState ? 'ログインしました' : 'ログアウトしました'
  },
  changeShow(state, bool) {
    state.alert = bool
  }
}

export const actions = {
  updateContent({ commit }, authState) {
    commit('changeContent', authState)
  },
  updateShow({ commit }, bool) {
    commit('changeShow', bool)
  },
}
