// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCL5FHhJEeHc3cIS6kZ-YRem6VI__m-mRc",
  authDomain: "expenses-7a0fc.firebaseapp.com",
  projectId: "expenses-7a0fc",
  storageBucket: "expenses-7a0fc.appspot.com",
  messagingSenderId: "446174726181",
  appId: "1:446174726181:web:953311e6b194adec9257cc",
  databaseURL: "https://expenses-7a0fc-default-rtdb.firebaseio.com/",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
