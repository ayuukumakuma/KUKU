import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
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
  }
}

export const actions = {
  userInfoInit({ commit }) {
    commit('updateUserInfo', {
      uid: '',
      displayName: '',
      email: '',
      emailVerified: false,
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

  async loginUser({ commit, dispatch }, { email, password }) {
    await signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        if (res.user.emailVerified) {
          commit('updateIsLogin', true)
          console.log('Success: createUser')
          console.log(res)
          this.$router.push('/menu')
        } else {
          dispatch('checkVerified')
          commit('updateIsLogin', true)
          console.log('Success: createUser')
          console.log(res)
          this.$router.push('/menu')
        }
      })
      .catch((err) => {
        const errorCode = err.code
        const errMsg = err.message
        console.error(errorCode, errMsg)
      })
  },
  // eslint-disable-next-line no-empty-pattern
  async createUser({}, { email, password, userName }) {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log('Success: createUser')
        sendEmailVerification(auth.currentUser)
          .then(() => {
            console.log('verified: ', res.user.emailVerified)
            this.$router.push('/await-auth')
          })
          .catch(() => {
            console.error('dont send email')
          })
      })
      .catch((err) => {
        console.error('cant create user: ', err)
      })
  },

  async updateVerified({ commit }) {
    await commit('updateUserVerified', auth.currentUser.emailVerified)
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
