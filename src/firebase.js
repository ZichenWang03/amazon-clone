import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB6mYbeANLh7mOK4HzQAH0K5nKmxatDrlY",
  authDomain: "clone-29599.firebaseapp.com",
  projectId: "clone-29599",
  storageBucket: "clone-29599.appspot.com",
  messagingSenderId: "201960144987",
  appId: "1:201960144987:web:f6340286836f2be06a7f7e",
  measurementId: "G-60PY8H3PPK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
