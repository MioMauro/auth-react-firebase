import { auth } from "../firebase"
import { createUserWithEmailAndPassword, sendPasswordResetEmail, signOut, updatePassword, updateEmail } from "firebase/auth"
import { createContext, useContext, useEffect, useState } from "react"


export const AuthContext = createContext()
export const useAuth = () => useContext(AuthContext)

export const AuthProvider = ({children}) => {
    const [user, setUser] = useState()
    useEffect(() => {
        const currUser = auth.onAuthStateChanged((autUser) => {
            setUser(autUser)
        })

        return currUser
    }, [])

    //signup
    function register(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //signin
    function login(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }

    //logout
    function logout(){
        return signOut()
    }

    //update email
    function updateUserEmail(user, email){
        return updateEmail(user, email)
    }

    //update password
    function updateUserPassword(user, password){
        return updatePassword(user, password)
    }

    //forgot password
    function forgotPassword(email){
        return sendPasswordResetEmail(auth, email)
    }

    return (
        <AuthContext.Provider value = {{user, login, logout, updateUserEmail, updateUserPassword, register, forgotPassword}} >
            {children}
        </AuthContext.Provider>
    )
}