
import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyCaXMyN1eHof-osSFotr99Fp_HYgck-0Bs",
    authDomain: "test-12e00.firebaseapp.com",
    databaseURL: "https://test-12e00.firebaseio.com",
    projectId: "test-12e00",
    storageBucket: "test-12e00.appspot.com",
    messagingSenderId: "390245151105",
    appId: "1:390245151105:web:5a9edc87b3a290157a7880",
    measurementId: "G-65BNFJF5SQ"
  };
 // Initialize Firebase
 firebase.initializeApp(config);
 const db = firebase.firestore();
 export default db;