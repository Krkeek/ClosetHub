import styles from './clothItem.module.css'
// @ts-ignore
import {useEffect, useState} from "react";


const ClothItem = (props: any) => {
    const clothItem = props.item;
    const [imgUrl, setImgUrl] = useState('');

    const handleStatus = () => {
        if (clothItem.status === 'Ready')
            return 'Laundry'
        return 'Ready'
    }

    useEffect(() => {
        props.getImg(clothItem).then((r: string) => setImgUrl(r));
    }, []);

    return(
        <>
            <div className={`${styles.Container}`}>
                <img className={`${styles.ImgContainer}`} src={`${imgUrl}`} alt={'img'}/>


                <div  onClick={() => props.handleChangeStatus(clothItem.uniqueKey, handleStatus())} className={`${styles.OptionsContainer}`}>
                    <div className={`${styles.StatusGroup}`}>
                        <p>{clothItem.status === 'Ready' ? 'In closet' : 'Out if closet'}</p>
                        <div className={`${clothItem.status === 'Ready' ? styles.BlueIndicator : styles.RedIndicator}`}></div>
                    </div>
                </div>


            </div>

        </>
    );
}

export default ClothItem;
