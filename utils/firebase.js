// import firebase from "firebase/compat/app";
// import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA3NmrroEWw8vCA-cEFDF1xopFIlFeHKxk",
  authDomain: "medit-c2842.firebaseapp.com",
  projectId: "medit-c2842",
  storageBucket: "medit-c2842.appspot.com",
  messagingSenderId: "496752970830",
  appId: "1:496752970830:web:e13d1c47700e46869fc71f",
};

export const firebase = initializeApp(firebaseConfig);
// export const firebaseApp = firebase.initializeApp(firebaseConfig);
// export const firebaseDB = firebaseApp.firestore();
export const database = getFirestore(firebase);
export const auth = getAuth(firebase);
