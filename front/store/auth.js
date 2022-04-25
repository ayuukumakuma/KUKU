import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from 'firebase/auth'

import firebaseApp from '~/plugins/firebase'

const auth = getAuth(firebaseApp)

export const state = () => ({
  isLogin: false, // ログイン状態
  user: {
    uid: '',
    displayName: '',
    email: '',
    emailVerified: false,
    photoURL: '',
  }, // ログイン情報
})

export const getters = {
  isLogin: (state) => state.isLogin,
  userInfo: (state) => state.user,
}

export const mutations = {
  updateIsLogin(state, status) {
    state.isLogin = status
  },
  updateUserInfo(state, status) {
    state.user = status
  },
  updateUserVerified(state, verified) {
    state.user.emailVerified = verified
  },
}

export const actions = {
  async userInfoInit({ commit }) {
    await commit('updateUserInfo', {
      uid: '',
      displayName: '',
      email: '',
      emailVerified: false,
      photoURL: null,
    })
    await commit('updateIsLogin', false)
  },

  async googleAuthLogin({ commit }) {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
      .then((res) => {
        const user = res.user
        commit('updateIsLogin', true)
        commit('updateUserInfo', {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
        })
        console.log('Success: login')
        this.$router.push('/menu')
      })
      .catch((err) => {
        console.error('google login error' + err)
      })
  },

  async loginUser({ commit, dispatch }, { email, password, userName }) {
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user
        if (user.emailVerified) {
          commit('updateIsLogin', true)
          commit('updateUserInfo', {
            uid: user.uid,
            displayName: userName,
            email: user.email,
            emailVerified: user.emailVerified,
            photoURL: null,
          })
          console.log('Success: LoginUser')
          console.log(res)
          this.$router.push('/menu')
        } else {
          dispatch('sendVerifiedEmail')
        }
      })
      .catch((err) => {
        console.error(err)
      })
  },

  async createUser({ commit, dispatch }, { email, password, userName}) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        const user = res.user
        commit('updateUserInfo', {
          uid: user.uid,
          displayName: userName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: null,
        })
        console.log('Success: createUser')
        // 認証メール送信
        dispatch('sendVerifiedEmail')
        console.log('success:login')
      })
      .catch((err) => {
        console.error(err)
      })
  },

  async sendVerifiedEmail() {
    await sendEmailVerification(auth.currentUser)
      .then(() => {
        // 待機画面へ遷移
        this.$router.push('/await-auth')
        console.log('success send email')
      })
      .catch((err) => {
        console.error(err)
      })
  },

  async watchUserVerified({ commit }) {
    // ユーザー情報を更新
    await auth.currentUser.reload()
    commit('updateUserVerified', auth.currentUser.emailVerified)
  },

  async changeIsLogin({ commit }, bool) {
    await commit('updateIsLogin', bool)
  },

  async logout({ commit, dispatch }) {
    await signOut(auth)
      .then(() => {
        console.log('Success: Logout')
        commit('updateIsLogin', false)
        dispatch('userInfoInit')
      })
      .catch((err) => {
        console.error(err)
      })
  },
}
