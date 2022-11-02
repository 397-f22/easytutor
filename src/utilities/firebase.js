import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDHGoWS3Le521ma3vb1zoMiikS2KsOIug",
  authDomain: "easytutor-purple.firebaseapp.com",
  projectId: "easytutor-purple",
  storageBucket: "easytutor-purple.appspot.com",
  messagingSenderId: "471238932752",
  appId: "1:471238932752:web:1fc694bcd82f5e69268d95",
  measurementId: "G-12K7LBJ4Q1",
};

const firebase = initializeApp(firebaseConfig);

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();

  useEffect(() => onAuthStateChanged(getAuth(firebase), setUser));

  return [user];
};
