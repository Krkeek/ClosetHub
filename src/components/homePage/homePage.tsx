import styles from './homePage.module.css'
import Collection from "./collection/collection";
import {useContext, useEffect, useState} from "react";
import SideBar from "../sideBar/sideBar";
import {fetchData} from "../../controllers/fetchData";
import {DocumentData} from "firebase/firestore";
import plusIcon from '../../assets/plus.png'
import tshirtIcon from '../../assets/sideBarIcons/tshirt.png'
import pulloverIcon from '../../assets/sideBarIcons/pullover.png'
import jeansIcon from '../../assets/sideBarIcons/jeans.png'
import laundryIcon from '../../assets/sideBarIcons/laundry.png'
import {addData} from "../../controllers/addData";
import logo from "../../assets/logo.png";
import logoMobile from '../../assets/mobile/logo.png'
import LoginPage from "../loginPage/loginPage";
import {authUserContext} from "../../auth/authUserContext";


const HomePage = () => {
    const [filter, setFilter] = useState('t-shirt');
    const isMobileView = window.innerWidth <= 767;
    const handleSetFilter = (value: string) => setFilter(value)
    const [data, setData] = useState<DocumentData>();

    const [openLoginModal, setOpenLoginModal] = useState(false);
    const setOpenLoginModalFn = () => setOpenLoginModal(!openLoginModal);
    const setDataFn = (value: any)=> setData(value)
    useEffect(() => {
        fetchData().then(fetchedData => setData(fetchedData));
    }, []);

    const {currentUser} = useContext(authUserContext);

    const setTitle = ()=> {
        switch (filter){
            case 't-shirt':
                return 'T-Shirt'
            case 'pullover':
                return 'Pullovers'
            case 'jeans':
                return 'Jeans'
            case 'Laundry':
                return 'Laundry'
        }
    }

    const setImg =()=>{
        switch (filter){
            case 't-shirt':
                return tshirtIcon
            case 'pullover':
                return pulloverIcon
            case 'jeans':
                return jeansIcon
            case 'Laundry':
                return laundryIcon
        }
    }

    const  generateRandomId = () => {
        const timestamp = new Date().getTime();
        const randomNum = Math.floor(Math.random() * 1000); // Adjust the range as needed
        return `${timestamp}-${randomNum}`;
    }

    const addItem = ()=> {
        if (currentUser){
            addData({
                uniqueKey: generateRandomId(),
                imgUrl: 'null',
                type: 't-shirt',
                status: 'Ready',
            }).then()
        } else {
            setOpenLoginModalFn();
        }
    }
    return(
        <>
                <div className={`${styles.Container}`}>
                    <div className={`${styles.ContentContainer}`}>
                        <div className={`${styles.LeftSide}`}>
                            <SideBar setOpenLoginModal={setOpenLoginModalFn} filter={filter} setFilterNav={handleSetFilter}/>
                        </div>
                        <div className={`${styles.RightSide}`}>
                            <div className={`${styles.TopDiv}`}>
                                <div onClick={()=> setOpenLoginModal(!openLoginModal)} className={`${styles.BrandDiv}`}><img src={`${isMobileView ? logoMobile : logo }`} alt={'logo'}/><p>Closet<span style={{color:'#1366A7'}}>Hub</span></p></div>
                                <button onClick={addItem}><span className={`${styles.AddClothesText}`}>Add clothes</span><img src={`${plusIcon}`} alt={'plus'}/></button>
                            </div>
                            <p className={`${styles.SectionTitle}`}><img src={`${setImg()}`} alt={'img'}/>{setTitle()}</p>
                            <Collection setOpenLoginModal={setOpenLoginModalFn} setData={setDataFn} data={data} filter={filter}/>
                        </div>
                    </div>
                </div>
                {openLoginModal ? <LoginPage setOpenLoginModal={setOpenLoginModalFn} /> : ''}
        </>
    )
}
export default HomePage