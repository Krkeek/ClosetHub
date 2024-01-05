import styles from './sideBar.module.css'
import tshirt from '../../assets/sideBarIcons/tshirt.png'
import pullover from '../../assets/sideBarIcons/pullover.png'
import jeans from '../../assets/sideBarIcons/jeans.png'
import laundry from '../../assets/sideBarIcons/laundry.png'
import logo from '../../assets/logo.png'

const SideBar = (props: any)=> {

    const handleNav = (navFocus: string)=> {
        navFocus === 'Laundry' ? props.setFilterNav(navFocus):props.setFilterNav(navFocus);
    }

    return(
        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.BrandDiv}`}><img src={`${logo}`} alt={'logo'} /><p>Closet<span style={{color: '#1366A7'}}>Hub</span></p></div>
                <div className={`${styles.ButtonDiv} ${props.filter === 't-shirt' ? styles.ActiveButtonDiv : ''} `}><button onClick={() => handleNav('t-shirt')} className={`${styles.NavElement} ${props.filter === 't-shirt' ? styles.ActiveNavElement : ''}`}><img src={`${tshirt}`} alt={'icon'}/></button></div>
                <div className={`${styles.ButtonDiv} ${props.filter === 'pullover' ? styles.ActiveButtonDiv : ''}`}><button onClick={() => handleNav('pullover')} className={`${styles.NavElement}  ${props.filter === 'pullover' ? styles.ActiveNavElement : ''}`}><img src={`${pullover}`} alt={'icon'}/></button></div>
                <div className={`${styles.ButtonDiv} ${props.filter === 'jeans' ? styles.ActiveButtonDiv : ''}`}><button onClick={() => handleNav('jeans')} className={`${styles.NavElement}  ${props.filter === 'jeans' ? styles.ActiveNavElement : ''}`}><img src={`${jeans}`} alt={'icon'}/></button></div>
                <div className={`${styles.ButtonDiv} ${props.filter === 'Laundry' ? styles.ActiveButtonDiv : ''}`}><button onClick={() => handleNav('Laundry')} className={`${styles.NavElement}  ${props.filter === 'Laundry' ? styles.ActiveNavElement : ''}`}><img src={`${laundry}`} alt={'icon'}/></button></div></div>
                </>
                );
                }
                export default SideBar;