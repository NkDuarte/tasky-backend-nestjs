// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
export const firebaseConfig = {
    apiKey: "AIzaSyCtH6xeG7-HxP5xhHexEJrUS_XS7eILvbc",
    authDomain: "tasky-ee9c0.firebaseapp.com",
    projectId: "tasky-ee9c0",
    storageBucket: "https://tasky-ee9c0-default-rtdb.firebaseio.com/",
    messagingSenderId: "407002998945",
    appId: "1:407002998945:web:a5e643f531c72be484e8e0"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const firebaseDataBase = getDatabase(app)
