import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your config
const config = {
  apiKey: "AIzaSyBCGT5WKU-9fL1z7rvlJdySPkY36VRuft8",
  authDomain: "crwn-db-3e2f9.firebaseapp.com",
  projectId: "crwn-db-3e2f9",
  storageBucket: "crwn-db-3e2f9.appspot.com",
  messagingSenderId: "852041918265",
  appId: "1:852041918265:web:84fa865f1de3aa1e2aeae8",
  measurementId: "G-FWN5JEHHMK",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
