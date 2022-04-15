import { initializeApp,  getApps, getApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
}

const firebaseApp = !getApps().length ? initializeApp(firebaseConfig) : getApp()

export default firebaseApp