export const state = () => ({
  score: 0
})

export const getters = {
  getScore(state) {
    return state.score
  }
}