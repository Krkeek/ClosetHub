import {DocumentData} from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore";
import {db} from "../firebase";

export const addData = async (data: DocumentData) => {

    try {
        const docRef = await addDoc(collection(db, "clothData"), data);
        console.log("Document written with ID: ", docRef.id);
    } catch (e) {
        console.error("Error adding document: ", e);
    }

}