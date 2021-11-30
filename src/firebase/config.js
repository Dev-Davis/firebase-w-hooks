import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD2YH6AGuZ88cASkvRqi9k7gO9HboTiFRg",
  authDomain: "auth-cc275.firebaseapp.com",
  databaseURL: "https://auth-cc275-default-rtdb.firebaseio.com",
  projectId: "auth-cc275",
  storageBucket: "auth-cc275.appspot.com",
  messagingSenderId: "39402510766",
  appId: "1:39402510766:web:deee3dac1865d74962103f",
  measurementId: "G-Y2VKJJWRKN"
};

// init firebase
initializeApp(firebaseConfig)

// init firestore
const db = getFirestore()

// init firebase auth
const auth = getAuth()

export { db, auth }

