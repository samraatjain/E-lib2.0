import firebase from "firebase"
require("@firebase/firestore")

const firebaseConfig = {
    apiKey: "AIzaSyA22be6JtOz0JPkEujnN_KqsbuftkU8ty4",
    authDomain: "e-lib-11dd2.firebaseapp.com",
    projectId: "e-lib-11dd2",
    storageBucket: "e-lib-11dd2.appspot.com",
    messagingSenderId: "961387937547",
    appId: "1:961387937547:web:1d241587faa93f3440ac0e"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase.firestore