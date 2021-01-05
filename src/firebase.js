
import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    MY_CONFIG
  };
 // Initialize Firebase
 firebase.initializeApp(config);
 const db = firebase.firestore();
 export default db;
