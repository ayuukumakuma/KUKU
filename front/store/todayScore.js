import { getAuth } from 'firebase/auth'
import firebaseApp from '~/plugins/firebase'

const auth = getAuth(firebaseApp)

export const state = () => ({
  score: {},
})

export const getters = {
  getScore(state) {
    return state.score
  },
}

export const mutations = {
  update(state, val) {
    state.score = val
  },
}

export const actions = {
  async getScoreFromApi({ commit }, { today }) {
    await auth.currentUser
      .getIdToken()
      .then((res) => {
        const url = '/api/v1/users/acquisitions'
        const params = {
          token: res,
          acquisition: {
            before_date: today + ' 00:00:00',
            after_date: today + ' 23:59:59',
          },
        }
        console.log(params)
        this.$axios
          .get(url, params)
          .then((res) => {
            commit('update', res)
          })
          .catch((err) => {
            console.error(err)
          })
      })
      .catch((err) => {
        console.error(err)
      })
  },
}
