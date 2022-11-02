import {
  GoogleAuthProvider,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  child,
  getDatabase,
  onValue,
  push,
  ref,
  set,
  update,
} from "firebase/database";
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
const database = getDatabase(firebase);

export const signInWithGoogle = () => {
  signInWithPopup(getAuth(firebase), new GoogleAuthProvider());
};

const firebaseSignOut = () => signOut(getAuth(firebase));

export { firebaseSignOut as signOut };

export const useAuthState = () => {
  const [user, setUser] = useState();

  useEffect(() => onAuthStateChanged(getAuth(firebase), setUser));

  return user;
};

export const useDbData = (path) => {
  const [data, setData] = useState();
  const [error, setError] = useState(null);

  useEffect(
    () =>
      onValue(
        ref(database, path),
        (snapshot) => {
          setData(snapshot.val());
        },
        (error) => {
          setError(error);
        }
      ),
    [path]
  );

  return [data, error];
};

//Add new user
export const addNewUser = (newUser, uid) => {
  set(ref(database, "users/" + uid), newUser);
};

// Get user from user uid
export const getUserWithId = (uid) => {
  const path = `/users/${uid}`;
  const [user, error] = useDbData(path);

  if (error) return error.toString();
  if (user === undefined) return "Loading...";
  if (!user) return "Organizer not found";

  return user;
};

