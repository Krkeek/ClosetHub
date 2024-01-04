import styles from './collection.module.css'
import ClothItem from "./clothItem/clothItem";
import {useEffect, useState} from "react";
import {fetchData} from "../../../backend/fetchData";
import {DocumentData} from "firebase/firestore";
import {changeStatus} from "../../../backend/changeStatus";
import {getDownloadURL, ref} from "firebase/storage";
import {storage} from "../../../firebase";
const Collection = (props: any) => {
    const [data, setData] = useState<DocumentData>();
    const [dataChanged, setDataChanged] = useState(false);
    const setDataHandle = (value: DocumentData) => setData(value);

    useEffect(() => {
        refreshData().then()
    }, []);

    const refreshData = async ()=> {
        fetchData().then(fetchedData => setData(fetchedData))
    }

    const handleChangeStatus = (uniqueKey: string, status: string)=> {
        changeStatus(uniqueKey, status)
            .then(()=>{
                setDataChanged(!dataChanged)
            })
    }

    const getImg = async (clothItem: DocumentData):Promise<any> => {
        const pathReference = ref(storage, clothItem.imgUrl);
        if (pathReference){
            return await getDownloadURL(pathReference)
        }
    }

    return(
        <>
            <div className={`${styles.Container}`}>
                {
                    data?.map((item: DocumentData) => {
                        return (
                            <div key={item.uniqueKey}
                                 style={(item.type === props.filter && item.status !== 'Laundry') || (item.status === props.filter && item.status !== 'Ready') ? {display: 'block'} : {display: 'none'}}>
                                <ClothItem getImg={getImg} handleChangeStatus={handleChangeStatus} data={data}
                                           setDataHandle={setDataHandle} item={item}/>
                            </div>
                        );
                    })
                }
            </div>
        </>
    );

}
export default Collection