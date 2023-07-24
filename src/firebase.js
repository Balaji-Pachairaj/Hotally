// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase, } from "firebase/database"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAFTmBSvdJm0VbZGSsTjlUB82Vzarif_nw",
  authDomain: "hotally-aea92.firebaseapp.com",
  projectId: "hotally-aea92",
  storageBucket: "hotally-aea92.appspot.com",
  messagingSenderId: "810482302791",
  appId: "1:810482302791:web:aeb5b56e1dd96107721662",
  measurementId: "G-RZMXRQMGP4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)