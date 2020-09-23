import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDYzr9f8SuqHwytpjgVib_GmOXolgNRWgc",
    authDomain: "reactecommerceapp.firebaseapp.com",
    databaseURL: "https://reactecommerceapp.firebaseio.com",
    projectId: "reactecommerceapp",
    storageBucket: "reactecommerceapp.appspot.com",
    messagingSenderId: "306938836504",
    appId: "1:306938836504:web:22b3ea8e4b39693fc4f56d",
    measurementId: "G-G0RF1RE1QV"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
