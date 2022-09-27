import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCOeKs0NFVBzpkmM_Pu3TP_DKdDMLJAVGQ",
  authDomain: "fir-authtest-5b778.firebaseapp.com",
  projectId: "fir-authtest-5b778",
  storageBucket: "fir-authtest-5b778.appspot.com",
  messagingSenderId: "1097063816925",
  appId: "1:1097063816925:web:ce6281ee5d49a9419e8534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export {auth}