import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../firebase/firebase.init";
initializeAuthentication();


const useFirebase = () => {
    const [user, setUser] = useState({});

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const signInUsingGoogle = () => {
        return signInWithPopup(auth, googleProvider);
        // .then(result => {
        //     // console.log(result.user);
        // }).catch(error => {
        //     console.log(error.message);
        // });    
    }

    const signOutUsingGoogle = () => {
        signOut(auth)
            .then(() => {
                setUser({});
            }).catch(error => {
                console.log(error.message);
            });
    }

    //observe weather user auth state change or not
    useEffect(() => {
        onAuthStateChanged(auth, user => {
            setUser(user);
        })
    }, [auth]);

    return {
        user,
        signInUsingGoogle,
        signOutUsingGoogle
    }
}
export default useFirebase;