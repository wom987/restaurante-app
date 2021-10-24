import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD1BhMwZIarePkUSW4KlWjIAetJqdXh1KE",
  authDomain: "restaurate-app.firebaseapp.com",
  projectId: "restaurate-app",
  storageBucket: "restaurate-app.appspot.com",
  messagingSenderId: "64781286413",
  appId: "1:64781286413:web:214e63672ecfeaeee76944",
};

const app = initializeApp(firebaseConfig);
const Db = getFirestore(app);

export default Db;
