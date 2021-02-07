import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyC2l1Qba0SkzlGhk_L9kATXBZ8YvdvPyUs",
    authDomain: "clone-e5e33.firebaseapp.com",
    projectId: "clone-e5e33",
    storageBucket: "clone-e5e33.appspot.com",
    messagingSenderId: "937000475552",
    appId: "1:937000475552:web:997fc4ff9a68ca76d522c5"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {db, auth, provider};