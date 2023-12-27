import styles from './collection.module.css'
import ClothItem from "./clothItem/clothItem";
import {clothData} from "../../../data";
const Collection = ()=>{


    return(
        <>
            <div className={`${styles.Container}`}>
                {clothData.map((item)=>(
                    <div key={item.id}>
                        <ClothItem item={item}  />
                    </div>
                )) }
            </div>
        </>
    );

}
export default Collection