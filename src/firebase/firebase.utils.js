import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDaNXERzSsvTveN-K2J0LeVM-aDITncP60",
    authDomain: "shop62pm3.firebaseapp.com",
    databaseURL: "https://shop62pm3.firebaseio.com",
    projectId: "shop62pm3",
    storageBucket: "shop62pm3.appspot.com",
    messagingSenderId: "443506282637",
    appId: "1:443506282637:web:446e33cf3f26d2eb4952c4",
    measurementId: "G-R7HD4PB4DY"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;