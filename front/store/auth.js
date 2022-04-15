import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

import firebaseApp  from '~/plugins/firebase'

const auth = getAuth(firebaseApp)

export const state = () => ({
  isLogin: false, // ログイン状態
  user: null // ログイン情報
})

export const getters = {
  // "!!"で真偽値に変換している
  isLogin: state => state.isLogin,
  userInfo: state => state.user
}

export const mutations = {
  updateIsLogin(state, status) {
    state.isLogin = status
  },
  updateUserInfo(state, status) {
    state.user = status
  }
}

export const actions = {
  userInfoInit({ commit }) {
    commit('updateUserInfo', null)
    commit('updateIsLogin', false)
  },

  async googleAuthLogin({ commit }) {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
      .then((res) => {
        commit('updateIsLogin', true)
        console.log("Success: login")
        this.$router.push('/auth_test')
      })
      .catch((err) => {
        console.error("Error: " + err.code)
      })
  },

  async loginUser({ commit }, { email, password }) {
     await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Success: createUser")
        this.$router.push('/auth_test')
      })
      .catch((err) => {
        const errorCode = err.code
        const errMsg = err.message
        console.error(errorCode, errMsg)
      })
  },
  async createUser({ commit }, { email, password }) {
     await createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        console.log("Success: createUser")
        this.$router.push('/auth_test')
      })
      .catch((err) => {
        const errorCode = err.code
        const errMsg = err.message
        console.error(errorCode, errMsg)
      })
  },

  async logout({ commit }) {
    await signOut(auth)
      .then(() => {
        console.log("Success: Logout")
        commit('updateIsLogin', false)
      })
      .catch((err) => {
        console.error("Error: " + err.code)
      })
  },

  async googleUpdateUserInfo({ commit }) {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
        }
        commit('updateUserInfo', userInfo)
      }
    })
  },

  async updateUserInfo({ commit }) {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          uid: user.uid,
          displayName: user.email,
          email: user.email,
          emailVerified: user.emailVerified,
        }
        commit('updateUserInfo', userInfo)
      }
    })
  }

}