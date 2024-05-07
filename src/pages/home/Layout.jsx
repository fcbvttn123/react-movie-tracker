import { NavLink, Outlet, useNavigate } from "react-router-dom"

export function Layout() {
    
    const navigate = useNavigate()

    function signOut() {
        localStorage.setItem("accountInfo", null)
        localStorage.setItem("auth", false)
        navigate("/login")
    }
    
    return (
        <div className="p-2 flex flex-col gap-y-2">
            <h1 className="text-4xl font-extrabold">Movie Tracker App</h1>
            <div className="flex items-center gap-x-5">
                <NavLink to="." className={({isActive}) => `${isActive && "font-bold"}`}>Home</NavLink>
                <NavLink to="/tvshows" className={({isActive}) => `${isActive && "font-bold"}`}>TV Shows</NavLink>
                <NavLink to="/movies" className={({isActive}) => `${isActive && "font-bold"}`}>Movies</NavLink>
                <NavLink to="/mylist" className={({isActive}) => `${isActive && "font-bold"}`}>My List</NavLink>
            </div>
            <Outlet />
            <button onClick={signOut} className="px-8 py-3 bg-slate-400 rounded-xl mt-10">Sign Out</button>
        </div>
    )
    
}