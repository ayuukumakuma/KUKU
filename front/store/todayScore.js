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
        const param = {
          token: res,
          acquisition: {
            before_date: today + ' 00:00:00',
            after_date: today + ' 23:59:59',
          },
        }
        console.log(param)
        this.$axios
          // getメソッドの第二引数はdata型じゃなくてconfig型なので{ config: this.config }のように指定しましょう！！！
          .get(url, { params: param })
          .then((res) => {
            console.log(res.data)
            commit('update', res.data)
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
