import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth"
import app from "../Firebase/firebase.config";

export const AuthContext =createContext(null)

const auth = getAuth(app);


const AuthProvider = ({children}) => {

    const [user,setUser]= useState(null)

    // User create

    const  createUser = (email ,password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // SigIn
    const signIn = (email,password)=>{
        return signInWithEmailAndPassword(auth,email,password);

    }

    // Loge out
    const logOut = ()=>{
        return signOut(auth)
    }


    // Logged user
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,loggedUser=>{
            console.log('user paici',loggedUser);
            setUser(loggedUser);
        })
        return()=>{
            unsubscribe();
        }
    },[])


    const AuthInfo ={
        user,
        createUser,
        signIn,
        logOut

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;