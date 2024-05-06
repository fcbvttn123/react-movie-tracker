import { useNavigate } from "react-router-dom"

export function Home() {
    
    const navigate = useNavigate()

    function signOut() {
        localStorage.setItem("accountInfo", null)
        localStorage.setItem("auth", false)
        navigate("/login")
    }
    
    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={signOut} className="m-4 px-8 py-3 bg-slate-400 rounded-xl">Sign Out</button>
        </div>
    )
    
}