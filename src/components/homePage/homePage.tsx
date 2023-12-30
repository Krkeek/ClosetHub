import styles from './homePage.module.css'
import Navbar from "../navbar/navbar";
import Collection from "./collection/collection";
import {useEffect, useState} from "react";
const HomePage = (props: any)=> {
    const [filter, setFilter] = useState('t-shirt');
    const handleSetFilter = (value: string)=> {
        setFilter(value)
    }

    return(
        <>
            <div className={`${styles.Container}`}>
                <Navbar setFilterNav={handleSetFilter}/>
                <Collection filter={filter} />
            </div>
        </>
        )
}
export default HomePage