import {createContext} from "react";
import {User} from "firebase/auth";

export const authUserContext = createContext<AuthUserContextProps>({
    currentUser: null,
    loginUser: ()=>{},
    logoutUser: ()=>{}
});


interface AuthUserContextProps {
    currentUser: User | null;
    loginUser: (userData: User) => void;
    logoutUser: () => void;
}