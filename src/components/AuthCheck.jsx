import { Navigate, Outlet } from "react-router-dom"

export function AuthCheck() {
    let authenticated = localStorage.getItem("auth")
    if(authenticated === "false") {
        return <Navigate to={"/login"}/>
    } 
    return <Outlet />
}