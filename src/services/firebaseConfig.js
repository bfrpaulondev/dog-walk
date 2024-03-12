// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import "firebase/database";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVtjfv2kD0TxnFfxrWwfU3-BpO8qsD-4c",
  authDomain: "dog-walkers-2c4f8.firebaseapp.com",
  databaseURL: "https://dog-walkers-2c4f8-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "dog-walkers-2c4f8",
  storageBucket: "dog-walkers-2c4f8.appspot.com",
  messagingSenderId: "972239463093",
  appId: "1:972239463093:web:d4fa56505419f9eebf54fc",
  measurementId: "G-0H2PHF65M5"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const analytics = getAnalytics(app);

export default { firebase, analytics };