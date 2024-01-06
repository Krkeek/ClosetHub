import {useEffect, useState} from "react";
import {User} from "firebase/auth";
import {authUserContext} from "./authUserContext";


// @ts-ignore
const AuthUserProvider = ({children})=> {
    const [currentUser, setCurrentUser] = useState<User|null>(null)

    const loginUser = (userData: User)=> setCurrentUser(userData);
    const logoutUser = ()=> setCurrentUser(null);

    useEffect(() => {
        if (currentUser){
            console.log('User logged in successfully: ')
            console.log(currentUser)
        }

    }, [currentUser]);

    return(
        <>
            <authUserContext.Provider value={{currentUser, loginUser, logoutUser}}>
                {children}
            </authUserContext.Provider>
        </>
    );
}
export default AuthUserProvider