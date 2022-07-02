import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyANVMfhXP0qa8uny66asR1Glz2DfdSqXR8",
  authDomain: "linkedin-clone-a1197.firebaseapp.com",
  projectId: "linkedin-clone-a1197",
  storageBucket: "linkedin-clone-a1197.appspot.com",
  messagingSenderId: "105916905436",
  appId: "1:105916905436:web:5ccb7cf11b6de36a684119",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };