import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"
import app from "../Firebase/firebase.config";

export const AuthContext = createContext()

const auth = getAuth(app);

const GoogleProvider = new GoogleAuthProvider();


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null)
    const [loading ,setLoading] = useState(true);
    // User create

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // SigIn
    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // Sign in with Google
    const signInWithGoogle =()=>{
        setLoading(true)
        return signInWithPopup(auth,GoogleProvider)
    }


    // Loge out
    const logOut = () => {
        setLoading(true);
        return signOut(auth)
    }


    // Logged user
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, loggedUser => {
            console.log('user paici', loggedUser);
            setUser(loggedUser);
            setLoading(false)
        })
        return () => {
            unsubscribe();
        }
    }, [])


    const AuthInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut,
        signInWithGoogle

    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;