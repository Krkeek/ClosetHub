import styles from './navabr.module.css'
import brandIcon from '../../assets/brandIcon.png'
const Navbar = (props: any)=> {

    const handleNav = (navFocus: string)=> {
        props.setFilterNav(navFocus);
    }

    return(
        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.BrandDiv}`}>
                    <img src={`${brandIcon}`} alt={'brandIcon'} />
                    <p className={`${styles.Brand}`}>Closet<span>Hub</span></p></div>
                <div className={`${styles.NavElementsContainer}`}>
                    <button className={`${styles.NavElement}`} onClick={()=> handleNav('t-shirt')} >T-Shirts</button>
                    <button className={`${styles.NavElement}`}  onClick={()=> handleNav('pullover')}>Pullovers</button>
                    <button className={`${styles.NavElement}`}  onClick={()=> handleNav('jeans')}>Jeans</button>
                    <button className={`${styles.NavElement} ${styles.LaundryButton}`}  onClick={()=> handleNav('laundry')}>Laundry</button>

                </div>


            </div>
        </>
    );
}
export default Navbar;