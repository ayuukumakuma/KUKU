import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
  setPersistence,
  browserLocalPersistence,
  onAuthStateChanged,
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
  updateUserDisplayName(state, displayName) {
    state.user.displayName = displayName
  },
}

export const actions = {
  async onAuth({ commit }) {
    await onAuthStateChanged(auth, (user) => {
      user = user || {}
      commit('updateIsLogin', !!user.uid)
      commit('updateUserInfo', {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
        emailVerified: user.emailVerified,
        photoURL: user.photoURL,
      })
    })
  },

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

  async googleAuthLogin({ commit, dispatch }) {
    const provider = new GoogleAuthProvider()
    await setPersistence(auth, browserLocalPersistence).then(async () => {
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
          dispatch('addUserInfoToApi')
          console.log('Success: login')
          this.$router.push('/menu')
        })
        .catch((err) => {
          console.error('google login error' + err)
        })
    })
  },

  async loginUser({ commit, dispatch }, { email, password }) {
    await setPersistence(auth, browserLocalPersistence).then(async () => {
      await signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          if (auth.currentUser.emailVerified) {
            commit('updateIsLogin', true)
            commit('updateUserInfo', {
              uid: auth.currentUser.uid,
              displayName: auth.currentUser.displayName,
              email: auth.currentUser.email,
              emailVerified: auth.currentUser.emailVerified,
              photoURL: auth.currentUser.photoURL,
            })
            console.log('Success: LoginUser')
            this.$router.push('/menu')
          } else {
            dispatch('sendVerifiedEmail')
          }
        })
        .catch((err) => {
          console.error(err)
        })
    })
  },

  async createUser({ dispatch }, { email, password, userName }) {
    await setPersistence(auth, browserLocalPersistence).then(async () => {
      await createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          dispatch('serUserInfo', { userName })
          console.log('Success: CreateUser')
          // 認証メール送信
          dispatch('sendVerifiedEmail')
          console.log('Success: Login')
        })
        .catch((err) => {
          console.error(err)
        })
    })
  },

  async addUserInfoToApi() {
    await auth.currentUser
      .getIdToken()
      .then((res) => {
        const params = {
          token: res,
          registration: {
            email: auth.currentUser.email,
          },
        }
        const url = '/api/v1/users/registrations'
        this.$axios
          .post(url, params)
          .then(() => {
            console.log('Success: user push')
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
  async serUserInfo({ commit }, { userName }) {
    await updateProfile(auth.currentUser, { displayName: userName })
      .then(() => {
        commit('updateUserInfo', {
          uid: auth.currentUser.uid,
          displayName: auth.currentUser.displayName,
          email: auth.currentUser.email,
          emailVerified: auth.currentUser.emailVerified,
          photoURL: auth.currentUser.photoURL,
        })
        console.log('Success: Update DisplayName')
      })
      .catch((err) => {
        console.error(err)
      })
    await auth.currentUser.reload()
  },

  async sendVerifiedEmail() {
    await sendEmailVerification(auth.currentUser)
      .then(() => {
        // 待機画面へ遷移
        this.$router.push('/await-auth')
        console.log('Success: Send Email')
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
