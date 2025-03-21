// Import the functions you need from the SDKs you need
import React, { useState, createContext, useContext, useEffect } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  addDoc,
  collection,
  query,
  where,
  getDocs,
  getDoc,
} from "firebase/firestore";
import { stringify as uuidStringify } from "uuid";
import { getDatabase, ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBoEMlNj8DeAanC-crnbUMRJ5V3x7V_61M",
  authDomain: "newexpenses-a5680.firebaseapp.com",
  projectId: "newexpenses-a5680",
  storageBucket: "newexpenses-a5680.appspot.com",
  messagingSenderId: "831810817888",
  appId: "1:831810817888:web:c75149272cc1664533d805",
  measurementId: "G-PPYELVG84W",
};
const FirebaseContext = createContext(null);

// Initialize Firebase

export const useFirebase = () => useContext(FirebaseContext);
const firebaseApp = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();
const firebaseDatabase = getFirestore(firebaseApp);
const database = getDatabase(firebaseApp);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setUser(user);
        console.log(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signupwithEmailAndPassword = (email, password) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, password);
  };

  const signinWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(firebaseAuth, email, password);
  };
  const uuidBytes = [
    0x6e, 0xc0, 0xbd, 0x7f, 0x11, 0xc0, 0x43, 0xda, 0x97, 0x5e, 0x2a, 0x8a,
    0xd9, 0xeb, 0xae, 0x0b,
  ];
  function writeUserData(title, amount, date) {
    set(
      ref(database, `users/${user.uid}/expenses/rajesh/rajpayal`),
      {
        title: title,
        amount: amount,
        date: date,
      }
    );
  }

  const signinWithGoogle = () => {
    return signInWithPopup(firebaseAuth, googleProvider);
  };
  const signout = () => {
    return signOut(firebaseAuth);
  };
  const addExpensesToDatabase = async (title, amount, date) => {
    await addDoc(collection(firebaseDatabase, "expenses"), {
      title,
      amount: +amount,
      date,
      userID: user.uid,
      username: user.displayName,
      useremail: user.email,
    });
  };
  console.log(user);
  const getAllData = async () => {
    const q = query(
      collection(firebaseDatabase, "expenses"),
      where("userID", "==", user.uid)
    );

    const querySnapshot = await getDocs(q);
    return querySnapshot;
  };

  const LoggedIn = user ? true : false;

  return (
    <FirebaseContext.Provider
      value={{
        signupwithEmailAndPassword,
        LoggedIn,
        addExpensesToDatabase,
        getAllData,
        signinWithEmailAndPassword,
        signinWithGoogle,
        signout,
        writeUserData,
        user,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
