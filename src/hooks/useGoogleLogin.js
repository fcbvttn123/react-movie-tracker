import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {app} from "../config/firebase-config"

const auth = getAuth(app)
const provider = new GoogleAuthProvider()


export async function useGoogleLogin(goTo, hook) {
    try {
        let accountInfo = await signInWithPopup(auth, provider)
        localStorage.setItem("accountInfo", JSON.stringify(accountInfo))
        localStorage.setItem("auth", true)
        hook(goTo, {replace: true})
    } catch (error) {
        console.error('An error occurred:', error);
    }
}