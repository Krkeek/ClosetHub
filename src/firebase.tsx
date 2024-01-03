import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
    apiKey: "AIzaSyB298lemX-JF0YgmtannqjVZaF6SXi_p1w",
    authDomain: "closethub-7dde7.firebaseapp.com",
    projectId: "closethub-7dde7",
    storageBucket: "closethub-7dde7.appspot.com",
    messagingSenderId: "433682291262",
    appId: "1:433682291262:web:f4f721f0076f1e51780f6f",
    measurementId: "G-EZZ65XM90H"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);