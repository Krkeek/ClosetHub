import styles from './clothItem.module.css'
import shirt from '../../../../assets/tshirts/1.jpg'
import {clothData} from "../../../../data";

const ClothItem = (props: any) => {
    const clothItem = props.item;

    const changeStatus = ()=> {
        //Change from the data base
        //--------------------------

    }

    return(
        <>
            <div className={`${styles.Container}`}>
                <img className={`${styles.ImgContainer}`} src={`${shirt}`} alt={'img'}/>
                <div className={`${styles.OptionsContainer}`}>
                    <div className={`${styles.StatusGroup}`}>
                        <div className={`${styles.LightIndicator}`}></div>
                        <p>Ready</p>
                    </div>
                    <button onClick={changeStatus}>{clothItem.status === 'ready' ? 'To Laundry' : 'To Closet'}</button>
                </div>
            </div>

        </>
    );
}

export default ClothItem;
