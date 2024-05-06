import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import {app} from "../config/firebase-config"

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

/**
 * A simple method used for Google Login. 
 * After successful login: 
 * - Account Information will be saved in localStorage as key "accountInfo"
 * - The key "auth" will be true in localStorage.
 * 
 * @param {string} path - A string of path to which it will direct you after successful login. For example: "/home"
 * @param {function} useNavigate - A React Hook named useNavigate(). For example: const navigate = useNavigate() --> useGoogleLogin("/", navigate)
 * @example - useGoogleLogin("/", navigate)
 */
export async function useGoogleLogin(path, navigate) {
    try {
        let accountInfo = await signInWithPopup(auth, provider)
        localStorage.setItem("accountInfo", JSON.stringify(accountInfo.user))
        localStorage.setItem("auth", true)
        navigate(path, {replace: true})
    } catch (error) {
        console.error('An error occurred:', error);
    }
}