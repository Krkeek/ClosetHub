import styles from './sideBar.module.css'
import tshirt from '../../assets/sideBarIcons/tshirt.png'
import pullover from '../../assets/sideBarIcons/pullover.png'
import jeans from '../../assets/sideBarIcons/jeans.png'
import laundry from '../../assets/sideBarIcons/laundry.png'
import {addData} from "../../backend/addData";

const SideBar = (props: any)=> {

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
                <button onClick={() => handleNav('t-shirt')} className={`${styles.NavElement}`}><img src={`${tshirt}`} alt={'icon'} /></button>
                <button onClick={() => handleNav('pullover')} className={`${styles.NavElement}`}><img src={`${pullover}`} alt={'icon'}/></button>
                <button onClick={() => handleNav('jeans')} className={`${styles.NavElement}`}><img src={`${jeans}`} alt={'icon'}/></button>
                <button onClick={() => handleNav('Laundry')} className={`${styles.NavElement}`}><img src={`${laundry}`} alt={'icon'}/></button>
                <button  onClick={addItem} className={`${styles.NavElement} ${styles.Plus}`}>+</button>
            </div>
        </>
    );
}
export default SideBar;