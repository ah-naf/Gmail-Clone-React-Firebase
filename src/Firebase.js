// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, getFirestore} from 'firebase/firestore'
import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyBDTvPXOv9Ois3JSYUs3OUcO-2xdolZQnU",
  authDomain: "temp-project-fee4b.firebaseapp.com",
  projectId: "temp-project-fee4b",
  storageBucket: "temp-project-fee4b.appspot.com",
  messagingSenderId: "929437477259",
  appId: "1:929437477259:web:3828ff3e99af3dbe4a278e",
  measurementId: "G-EQP7TS1DXR"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore()
const auth = getAuth()

const provider = new GoogleAuthProvider();

const colRef = collection(db, 'emails')

export {colRef,auth, provider};
