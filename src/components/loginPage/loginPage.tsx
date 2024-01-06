import styles from './loginPage.module.css'
import {useContext, useEffect, useState} from "react";
import {checkAuthentication, signInUser, signOutUser} from "../../auth/authentication";
import {authUserContext} from "../../auth/authUserContext";

const LoginPage = (props: any) => {
    const handleBack = ()=> props.setOpenLoginModal();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    let {currentUser, loginUser, logoutUser} = useContext(authUserContext);
    // @ts-ignore
    const handleLoginButton = async  () => {
        if (isValid()){

                const userCredentials = await signInUser(email,password);
                if (userCredentials){
                    loginUser(userCredentials);
                    handleBack();
                }
                else {
                    setErrors('Invalid email or password,try again.')
            }
        }
        else {
            setErrors('Invalid Input')
        }
    }

    const isValid = ():boolean=> {
        return !(email === '' || password === '');
    }

    const handleSignOut = ()=> {
        signOutUser();
        logoutUser();
        checkAuthentication()
            .then(() => {
                    handleBack();
            })
    }


    return(
        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.LoggedInDiv}`}>{`${currentUser === null ? 'Only Authenticated users can edit or add clothes' : 'Logged in by '+currentUser?.email}`}</div>
                <div><input style={ currentUser !== null ? {display: 'none'} : {display: "block"}} type={'email'} onChange={(event)=> setEmail(event.target.value)} className={`${styles.Input}`} placeholder={'Email'}/></div>
                <div><input style={ currentUser !== null ? {display: 'none'} : {display: "block"}} type={'password'} onChange={(event)=> setPassword(event.target.value)} className={`${styles.Input}`} placeholder={'Password'}/></div>
                <div className={`${styles.ButtonDiv}`}>
                    <button style={ currentUser !== null ? {display: 'none'} : {display: "block"}} onClick={handleLoginButton} className={`${styles.LoginButton}`}>Login</button>
                    <button style={ currentUser !== null ? {display: 'none'} : {display: "block"}} onClick={handleBack} className={`${styles.LoginButton}`}>Back</button>
                    <button style={ currentUser ? {display: 'block'} : {display: "none"}} onClick={handleSignOut} className={`${styles.LoginButton}`}>Logout</button>
                </div>
                <div className={`${styles.ErrorDiv}`}>{errors}</div>
            </div>
        </>
    );
}
export default LoginPage;
