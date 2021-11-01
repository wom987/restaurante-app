import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyD1BhMwZIarePkUSW4KlWjIAetJqdXh1KE",
  authDomain: "restaurate-app.firebaseapp.com",
  projectId: "restaurate-app",
  storageBucket: "restaurate-app.appspot.com",
  messagingSenderId: "64781286413",
  appId: "1:64781286413:web:214e63672ecfeaeee76944",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
