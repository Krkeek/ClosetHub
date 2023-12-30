import styles from './collection.module.css'
import ClothItem from "./clothItem/clothItem";
import {clothData} from "../../../data";
const Collection = (props: any)=>{

    return(
        <>
            <div className={`${styles.Container}`}>
                {clothData.map((item)=>(
                    <div style={item.type === props.filter ? {display: 'block'} : {display: 'none'} } key={item.id}>
                        <ClothItem item={item}  />
                    </div>
                )) }
            </div>
        </>
    );

}
export default Collection