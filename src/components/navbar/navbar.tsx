import styles from './navabr.module.css'
import brandIcon from '../../assets/brandIcon.png'
import {addData} from "../../backend/addData";
const Navbar = (props: any)=> {



    const handleNav = (navFocus: string)=> {
        navFocus === 'Laundry' ? props.setFilterNav(navFocus):props.setFilterNav(navFocus);
    }

    const  generateRandomId = () => {
        const timestamp = new Date().getTime();
        const randomNum = Math.floor(Math.random() * 1000); // Adjust the range as needed
        return `${timestamp}-${randomNum}`;
    }

    const addItem = ()=> {
        addData({
            uniqueKey: generateRandomId(),
            imgUrl: '../../assets/tshirts/1.jpg',
            type: 't-shirt',
            status: 'Ready',
            color:'blue'
        }).then()
    }

    return(
        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.BrandDiv}`}>
                    <img src={`${brandIcon}`} alt={'brandIcon'} />
                    <p className={`${styles.Brand}`}>Closet<span>Hub</span></p></div>
                <div className={`${styles.NavElementsContainer}`}>
                    <button className={`${styles.NavElement}`} onClick={addItem}>Add</button>
                    <button className={`${styles.NavElement}`} onClick={() => handleNav('t-shirt')}>T-Shirts</button>
                    <button className={`${styles.NavElement}`} onClick={() => handleNav('pullover')}>Pullovers</button>
                    <button className={`${styles.NavElement}`} onClick={() => handleNav('jeans')}>Jeans</button>
                    <button className={`${styles.NavElement} ${styles.LaundryButton}`} onClick={() => handleNav('Laundry')}>Laundry</button>
                </div>
            </div>
        </>
    );
}
export default Navbar;