import styles from './homePage.module.css'
import Collection from "./collection/collection";
import {useEffect, useState} from "react";
import brandIcon from '../../assets/brandIcon.png'
import SideBar from "../sideBar/sideBar";
import {fetchData} from "../../backend/fetchData";
import {DocumentData} from "firebase/firestore";

const HomePage = (props: any) => {
    const [filter, setFilter] = useState('t-shirt');
    const handleSetFilter = (value: string) => setFilter(value)
    const [data, setData] = useState<DocumentData>();
    const setDataFn = (value: any)=> setData(value)
    useEffect(() => {
        fetchData().then(fetchedData => setData(fetchedData));
    }, []);

    return(
        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.BrandDiv}`}>
                    <div className={`${styles.Brand}`}><img src={`${brandIcon}`} alt={'brand'}/>Closet<span style={{color: '#1366A7'}}>hub</span></div>
                </div>
                <div className={`${styles.ContentContainer}`}>
                    <div className={`${styles.LeftSide}`}>
                        <SideBar setFilterNav={handleSetFilter}/>
                    </div>
                    <div className={`${styles.RightSide}`}>
                        <Collection setData={setDataFn} data={data} filter={filter} />
                    </div>
                </div>


            </div>
        </>
    )
}
export default HomePage