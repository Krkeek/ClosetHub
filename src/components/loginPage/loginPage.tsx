import styles from './loginPage.module.css'
import {useContext, useState} from "react";
import {signInUser} from "../../auth/authentication";
import {authUserContext} from "../../auth/authUserContext";

const LoginPage = (props: any) => {
    const handleBack = ()=> props.setOpenLoginModal();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState('');
    let {currentUser, loginUser} = useContext(authUserContext);

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

    return(
        <>
            <div className={`${styles.Container}`}>
                <div className={`${styles.LoggedInDiv}`}>{`${currentUser === null ? 'Only Authenticated users can edit or add clothes' : 'Logged in by '+currentUser?.email}`}</div>
                <div><input onChange={(event)=> setEmail(event.target.value)} className={`${styles.Input}`} placeholder={'Email'}/></div>
                <div><input onChange={(event)=> setPassword(event.target.value)} className={`${styles.Input}`} placeholder={'Password'}/></div>
                <div className={`${styles.ButtonDiv}`}>
                    <button onClick={handleLoginButton} className={`${styles.LoginButton}`}>Login</button>
                    <button onClick={handleBack} className={`${styles.LoginButton}`}>Back</button>
                </div>
                <div className={`${styles.ErrorDiv}`}>{errors}</div>
            </div>
        </>
    );
}
export default LoginPage;
