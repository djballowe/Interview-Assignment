import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBi17Q2bx_9FBUJVV0LYww-ibGUcsp2rfA",
  authDomain: "timesheet-980c9.firebaseapp.com",
  projectId: "timesheet-980c9",
  storageBucket: "timesheet-980c9.appspot.com",
  messagingSenderId: "516848484780",
  appId: "1:516848484780:web:d7bacbfefd4a4e4170ba09",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

function createWithEmail(email, password, first, last) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

function signInWithEmail(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    });
}

export const user = auth.currentUser;

function accountSignOut() {
  signOut(auth)
    .then(() => {})
    .catch((error) => {
      alert("An error has occurred");
    });
}

export { signInWithEmail, accountSignOut, createWithEmail };
