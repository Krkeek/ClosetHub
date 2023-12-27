import styles from './homePage.module.css'
import Navbar from "../navbar/navbar";
import Collection from "./collection/collection";
const HomePage = ()=> {
    return(
        <>
            <div className={`${styles.Container}`}>
                <Navbar />
                <Collection />
            </div>
        </>
        )
}
export default HomePage