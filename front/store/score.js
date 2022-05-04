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
        console.log(params)
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
  },
  // eslint-disable-next-line no-empty-pattern
  async getScoreFromApi({}, { today }) {
    await auth.currentUser.getIdToken().then((res) => {
      const url = '/api/vi/users/acquisitions'
      const param = {
        token: res,
        acquisition: {
          before_date: today + '00:00:00',
          after_date: today + '23:59:59',
        },
      }
      this.$axios.get(url, param)
        .then((res) => {

        })
    })
  },
}
