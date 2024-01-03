import {db} from '../firebase'
import {collection, doc, getDocs, query, setDoc, where} from "firebase/firestore";


export const changeStatus = async (uniqueKey: string, status: string) => {

    const q = query(collection(db, 'clothData'), where('uniqueKey', '==', uniqueKey));
    try {
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((result) => {
            setDoc(doc(db, 'clothData', result.id), { status: status }, { merge: true }).then(()=>
            {
                console.log('Status changed for '+ result.id);
                window.location.reload();
            }
         )
        });
    } catch (error) {
        console.error('Error updating document:', error);
    }
}