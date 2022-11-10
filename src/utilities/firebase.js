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

export const addUser = (user) => {
  const newUser = {
    email: user.email,
    displayName: user.displayName,
    photoURL: user.photoURL,
    phoneNumber: user.phoneNumber,
  };

  set(ref(database, "users/" + user.uid), newUser);
};

export const addSession = (course, date, duration, location, student) => {
  const newSession = {
    course: course,
    date: date,
    duration: duration,
    location: location,
    student: student,
    tutor: "",
  };

  const key = push(child(ref(database), "sessions")).key;

  const updates = {};
  updates["/sessions/" + key] = newSession;

  return update(ref(database), updates);
};

export const hasTutor = (sessid) => {
  const [tutor, error] = useDbData("/sessions/" + sessid + "/tutor");

  if (error) throw "error checking for user in database";

  return tutor != null && tutor != "";
};

export const tutorSession = (tutorid, sessid) => {
  // add user to session as tutor
  set(ref(database, "/sessions/" + sessid + "/tutor"), tutorid);

  // add session to user's tutoring list
  const key = push(
    child(ref(database), "/users/" + tutorid + "/teacherOf")
  ).key;

  const updates = {};
  updates[path + "/" + key] = sessid;
  return update(ref(database), updates);
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
