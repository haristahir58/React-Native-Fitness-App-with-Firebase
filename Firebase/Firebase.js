// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsQuObXnk-E8CM_iopfucx6Mh5uGBKkxk",
  authDomain: "fir-auth-1cc4a.firebaseapp.com",
  projectId: "fir-auth-1cc4a",
  storageBucket: "fir-auth-1cc4a.appspot.com",
  messagingSenderId: "545432594448",
  appId: "1:545432594448:web:7113c2ee2fc432484e4295"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
}
else{
    app = firebase.app()
}

const auth = firebase.auth()
const firestore = firebase.firestore();
export { auth, firestore };
