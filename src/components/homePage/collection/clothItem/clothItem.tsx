import styles from './clothItem.module.css'
// @ts-ignore
import {useEffect, useState} from "react";


const ClothItem = (props: any) => {
    const clothItem = props.item;
    const [imgUrl, setImgUrl] = useState('');

    const handleStatus = () => {
        if (clothItem.status === 'ready')
            return 'laundry'
        return 'ready'
    }

    useEffect(() => {
        props.getImg(clothItem).then((r: string) => setImgUrl(r));
    }, []);

    return(
        <>
            <div className={`${styles.Container}`}>
                <img className={`${styles.ImgContainer}`} src={`${imgUrl}`} alt={'img'}/>
                <div className={`${styles.OptionsContainer}`}>
                    <div className={`${styles.StatusGroup}`}>
                        <div className={`${styles.LightIndicator}`}></div>
                        <p>Ready</p>
                    </div>
                    <button onClick={()=> props.handleChangeStatus(clothItem.uniqueKey,handleStatus())}>{clothItem.status === 'ready' ? 'To Laundry' : 'To Closet'}</button>
                </div>
            </div>

        </>
    );
}

export default ClothItem;
