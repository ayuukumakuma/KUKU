import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth'

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

  async googleAuthLogin(context) {
    const provider = new GoogleAuthProvider()
    const auth = getAuth()
    await signInWithPopup(auth, provider)
      .then((res) => {
        context.commit('updateIsLogin', true)
        console.log("Success: login")
        this.$router.push('/auth_test')
      })
      .catch((err) => {
        console.error("Error: " + err.code)
      })
  },

  async logout() {
    const auth = getAuth()
    await signOut(auth)
      .then(() => {
        console.log("Success: Logout")
      })
      .catch((err) => {
        console.error("Error: " + err.code)
      })
  },

  async updateUserInfo({ commit }) {
    const auth = getAuth()
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL
        }
        commit('updateUserInfo', userInfo)
      }
    })
  }

}