// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyA_Z7BCeUpgHo4-MeGxDcNi23xlrWgN068",

  authDomain: "mistablascoder.firebaseapp.com",

  projectId: "mistablascoder",

  storageBucket: "mistablascoder.appspot.com",

  messagingSenderId: "574407196740",

  appId: "1:574407196740:web:caee58da9289b080187c11"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const initFirebase = () => app 
