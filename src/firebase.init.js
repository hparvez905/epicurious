// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDzSbs81guP2dCghJBQTx5PYTytBu1Xohk",
  authDomain: "project-epicurious.firebaseapp.com",
  projectId: "project-epicurious",
  storageBucket: "project-epicurious.appspot.com",
  messagingSenderId: "438881106637",
  appId: "1:438881106637:web:ad4c1cba9844dd3d2f4784",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
