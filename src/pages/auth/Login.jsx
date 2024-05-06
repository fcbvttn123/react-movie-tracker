import { useNavigate } from "react-router-dom"
import { useGoogleLogin } from "../../hooks/useGoogleLogin"

export function Login() {

    const navigate = useNavigate()

    return (
        <button onClick={() => useGoogleLogin("/", navigate)} className="m-4 px-8 py-3 bg-slate-400 rounded-xl">Login Using Google Account</button>
    )

}