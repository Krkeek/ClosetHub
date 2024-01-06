import {getAuth, signInWithEmailAndPassword} from "firebase/auth";

export const signInUser =  async (email: string, password: string) =>  {
    try {
        const auth = getAuth();
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        return userCredentials.user
    }
    catch (error){
        return false
    }
}
