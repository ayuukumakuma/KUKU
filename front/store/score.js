import { getAuth } from 'firebase/auth'
import firebaseApp from '~/plugins/firebase'

const auth = getAuth(firebaseApp)

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
  updateScore({ commit }) {
    commit('increment')
  },
  resetScore({ commit }) {
    commit('reset')
  },
  async pushScoreToApi({ state }) {
    await auth.currentUser
      .getIdToken()
      .then((res) => {
        const score = state.score
        const accuracyScore = score / 10
        const params = {
          token: res,
          addition: {
            accuracy: accuracyScore,
            number_of_correct_answer: score,
          },
        }
        const url = '/api/v1/users/additions'
        this.$axios
          .post(url, params)
          .then((res) => {
            console.log(res)
          })
          .catch((err) => {
            console.error(err)
          })
      })
      .catch((err) => {
        console.error(err)
      })
  }
}
