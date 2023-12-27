import styles from './navabr.module.css'
import brandIcon from '../../assets/brandIcon.png'
const Navbar = ()=> {
    return(
        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.BrandDiv}`}>
                    <img src={`${brandIcon}`} alt={'brandIcon'} />
                    <p className={`${styles.Brand}`}>Closet<span>Hub</span></p></div>
                <div className={`${styles.NavElementsContainer}`}>
                    <button className={`${styles.NavElement}`}>T-Shirts</button>
                    <button className={`${styles.NavElement}`}>Pullovers</button>
                    <button className={`${styles.NavElement}`}>Jeans</button>
                </div>


            </div>
        </>
    );
}
export default Navbar;