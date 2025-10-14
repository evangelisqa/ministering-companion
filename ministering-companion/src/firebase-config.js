import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from  "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA...yourKey",
  authDomain: "ministeringcompanion.firebaseapp.com",
  projectId: "ministeringcompanion",
  storageBucket: "ministeringcompanion.appspot.com",
  messagingSenderId: "1234567890",
  appId: "1:1234567890:web:abcdef123456"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);


export { auth, provider, db};