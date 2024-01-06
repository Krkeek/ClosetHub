import styles from './clothItem.module.css'
// @ts-ignore
import {useContext, useEffect, useState} from "react";
import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../../../../firebase";
import {changeStatus} from "../../../../controllers/changeStatus";
import {DocumentData} from "firebase/firestore";
import {authUserContext} from "../../../../auth/authUserContext";


const ClothItem = (props: any) => {
    const clothItem = props.item;
    const [imgUrl, setImgUrl] = useState('');
    const {currentUser} = useContext(authUserContext);

    const handleStatus = () => {
        if (clothItem.status === 'Ready')
            return 'Laundry'
        return 'Ready'
    }

    const getImg = async ():Promise<any> => {
            const pathReference = ref(storage, props.item?.imgUrl);
            return await getDownloadURL(pathReference)
    }

    const handleChangeStatus = async (uniqueKey: string, status: string)=> {
        if (currentUser){
            await changeStatus(uniqueKey, status)
                .then(()=>{
                    props.setDataChanged()
                    //Edit the local Area
                    const updatedArray = updateStatusLocally(props.data,uniqueKey, status)
                    props.setData(updatedArray)

                })
        }
        else {
            props.setOpenLoginModal()
        }
    }

    const updateStatusLocally = (clothesArray: DocumentData, itemId: string, newStatus: string) => {
        return clothesArray.map((cloth: { uniqueKey: string; }) => {
            if (cloth.uniqueKey === itemId) {
                // Return a new object with updated status
                return { ...cloth, status: newStatus };
            }
            return cloth; // For other items, return as is
        });
    };

    useEffect(() => {
        getImg().then((url)=> setImgUrl(url))
    }, []);


    return(
        <>
            <div className={`${styles.Container}`}>
                <img className={`${styles.ImgContainer}`} src={`${imgUrl}`} alt={'img'}/>


                <div  onClick={() => handleChangeStatus(clothItem.uniqueKey, handleStatus())} className={`${styles.OptionsContainer}`}>
                    <div className={`${styles.StatusGroup}`}>
                        <p>{clothItem.status === 'Ready' ? 'In closet' : 'Out of closet'}</p>
                        <div className={`${clothItem.status === 'Ready' ? styles.BlueIndicator : styles.RedIndicator}`}></div>
                    </div>
                </div>


            </div>

        </>
    );
}

export default ClothItem;
