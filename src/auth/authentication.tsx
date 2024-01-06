import {getAuth, onAuthStateChanged, signInWithEmailAndPassword, User, signOut} from "firebase/auth";


export const auth = getAuth();


export const signInUser =  async (email: string, password: string) =>  {
    try {
        const userCredentials = await signInWithEmailAndPassword(auth, email, password);
        return userCredentials.user
    }
    catch (error){
        return false
    }
}

export const checkAuthentication = (): Promise<User | null >=>{

    return new Promise((resolve)=>{
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            unsubscribe();
            resolve (user)
        })
    })

}

export const signOutUser = ()=> {
    signOut(auth).then(() => {
        console.log('Sign-out successful')
    }).catch((error) => {
        console.log('An error happened while signing out.')
    });
}
