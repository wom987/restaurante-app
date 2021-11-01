import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyCieKVhye77e7h_phO21ylaREARIwSlhBU",
  authDomain: "react-native-7dff5.firebaseapp.com",
  databaseURL: "https://react-native-7dff5-default-rtdb.firebaseio.com",
  projectId: "react-native-7dff5",
  storageBucket: "react-native-7dff5.appspot.com",
  messagingSenderId: "297658676393",
  appId: "1:297658676393:web:f7ae05a24f291ca62565b8",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
