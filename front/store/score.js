export const state = () => ({
  score: 0,
})

export const getters = {
  getScore(state) {
    return state.score
  },
}

export const mutations = {
  increment(state) {
    state.score++
  },
  reset(state) {
    state.score = 0
  },
}

export const actions = {
  updateScore(context) {
    context.commit('increment')
  },
  resetScore(context) {
    context.commit('reset')
  },
}
