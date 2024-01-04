import styles from './homePage.module.css'
import Collection from "./collection/collection";
import {useState} from "react";
import brandIcon from '../../assets/brandIcon.png'
import SideBar from "../sideBar/sideBar";
const HomePage = (props: any)=> {
    const [filter, setFilter] = useState('t-shirt');
    const handleSetFilter = (value: string)=> {
        setFilter(value)
    }

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
                        <Collection filter={filter} />

                    </div>
                </div>


            </div>
        </>
    )
}
export default HomePage