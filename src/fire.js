// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACjxvZdbl17CkTp2z_ZOIgZmzFSJYLIds",
  authDomain: "login-da447.firebaseapp.com",
  projectId: "login-da447",
  storageBucket: "login-da447.appspot.com",
  messagingSenderId: "239287211075",
  appId: "1:239287211075:web:a4ebfa75539e259d6c30f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);