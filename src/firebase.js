// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyADk1u6YcNk-sq3LWZDR1Uirx3QEMf8iRE",
    authDomain: "clone-28b67.firebaseapp.com",
    projectId: "clone-28b67",
    storageBucket: "clone-28b67.appspot.com",
    messagingSenderId: "406701956679",
    appId: "1:406701956679:web:1cd627058708c1c1729b62",
    measurementId: "G-PV42X99FPK"
};
  
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };