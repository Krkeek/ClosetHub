import { collection, DocumentData, getDocs} from "firebase/firestore";
import {db} from '../firebase'

export const fetchData = async () => {
    let fetchedData: DocumentData[] = [];
    const querySnapshot = await getDocs(collection(db, "clothData"));
    querySnapshot.forEach((doc) => {
        fetchedData.push(doc.data());
    });





    return fetchedData;
}