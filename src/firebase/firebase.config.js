// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDRJrKH-2m9kCaY1kD177Ca_hlBo_iW-uA",
  authDomain: "liv70mu-7208e.firebaseapp.com",
  projectId: "liv70mu-7208e",
  storageBucket: "liv70mu-7208e.appspot.com",
  messagingSenderId: "693735202301",
  appId: "1:693735202301:web:b4f07fcceb2bc2164f8d94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app) 

export const SONGS_COLLECTION = 'Songs'
export const PLAYERS_COLLECTION = 'Players'

export const CHAT_ROOM = 'ChatRoom'



export const actionCodeSettings = {
    url: 'http://127.0.0.1:5173/',
    handleCodeInApp: true,
  }