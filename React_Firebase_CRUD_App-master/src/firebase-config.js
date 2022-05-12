// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBOcIqvoR6ysMhHSqhIjSR--QbP1ofh0A",
  authDomain: "first-d88a2.firebaseapp.com",
  projectId: "first-d88a2",
  storageBucket: "first-d88a2.appspot.com",
  messagingSenderId: "499001025019",
  appId: "1:499001025019:web:c78b4e9a71baf1db496b5e",
  measurementId: "G-84JY7T7HCH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
const db=getFirestore(app);
export {db}