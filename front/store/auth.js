import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth'

import firebaseApp from '~/plugins/firebase'

const auth = getAuth(firebaseApp)

export const state = () => ({
  isLogin: false, // ログイン状態
  user: {
    uid: '',
    displayName: '',
    email: '',
    emailVerified: '',
    photoURL: '',
  }, // ログイン情報
})

export const getters = {
  // "!!"で真偽値に変換している
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
}

export const actions = {
  userInfoInit({ commit }) {
    commit('updateUserInfo', {
      uid: '',
      displayName: '',
      email: '',
      emailVerified: '',
      photoURL: '',
    })
    commit('updateIsLogin', false)
  },

  async googleAuthLogin({ commit }) {
    const provider = new GoogleAuthProvider()
    await signInWithPopup(auth, provider)
      .then((res) => {
        commit('updateIsLogin', true)
        console.log('Success: login')
        this.$router.push('/menu')
      })
      .catch((err) => {
        console.error('Error: ' + err.code)
      })
  },

  async loginUser({ commit }, { email, password }) {
    await signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        commit('updateIsLogin', true)
        console.log('Success: createUser')
        this.$router.push('/menu')
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
        commit('updateIsLogin', true)
        console.log('Success: createUser')
        this.$router.push('/menu')
      })
      .catch((err) => {
        const errorCode = err.code
        const errMsg = err.message
        console.error(errorCode, errMsg)
      })
  },

  async logout({ commit }) {
    await signOut(auth)
      .then((res) => {
        console.log('Success: Logout')
        commit('updateIsLogin', false)
        commit('updateUserInfo', {
          uid: '',
          displayName: '',
          email: '',
          emailVerified: '',
          photoURL: '',
        })
      })
      .catch((err) => {
        console.error('Error: ' + err.code)
      })
  },

  async stateChanged({ commit }, { userName }) {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          uid: user.uid,
          displayName: userName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
        }
        commit('updateUserInfo', userInfo)
      }
    })
  },
  async googleStateChanged({ commit }) {
    await onAuthStateChanged(auth, (user) => {
      if (user) {
        const userInfo = {
          uid: user.uid,
          displayName: user.displayName,
          email: user.email,
          emailVerified: user.emailVerified,
          photoURL: user.photoURL,
        }
        commit('updateUserInfo', userInfo)
      }
    })
  },
}
