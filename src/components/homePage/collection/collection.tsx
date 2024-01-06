import styles from './collection.module.css'
import ClothItem from "./clothItem/clothItem";
import {useState} from "react";
import {DocumentData} from "firebase/firestore";
const Collection = (props: any) => {
    const [dataChanged, setDataChanged] = useState(false);
    const setDataChangeFn = () => setDataChanged(!dataChanged)



    return(
        <>
            <div className={`${styles.Container}`}>
                {
                    props.data?.map((item: DocumentData) => {
                        return (
                            <div key={item.uniqueKey}
                                 style={(item.type === props.filter && item.status !== 'Laundry') || (item.status === props.filter && item.status !== 'Ready') ? {display: 'block'} : {display: 'none'}}>
                                <ClothItem setOpenLoginModal={props.setOpenLoginModal} setData={props.setData} data={props.data} setDataChanged={setDataChangeFn}
                                           item={item}/>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );

}
export default Collection