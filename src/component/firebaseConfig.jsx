import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDWezvNIlVKcQ637yUuy1TIckW1s5G2kkY",
  authDomain: "my-docket.firebaseapp.com",
  projectId: "my-docket",
  storageBucket: "my-docket.appspot.com",
  messagingSenderId: "374108137851",
  appId: "1:374108137851:web:04234a5df44213f721f5de",
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

export { auth };
