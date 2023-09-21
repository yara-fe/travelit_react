import { Link, Outlet } from "react-router-dom"
import "./NavBar.css"
import { useAuth } from "../hooks/use-auth";

function NavBar() {

    const { auth, setAuth } = useAuth()

    const handleLogout = () => {
        window.localStorage.removeItem("token")
        setAuth({ token: null })
    }

    console.log(auth)

    return (
        <>
            <nav className="nav">
                <div className='logo-cntnr'>
                <Link to="/" className='navbar-logo'>
                    <img src="/Dark_Travelit_Logo.png" alt="logo" width="200"/>
                </Link>
                </div>
                <div className='nav-links'>
                    {/* <Link to="/itinerary">Itinerary</Link> */}
                    <Link to="/rewards">Reward</Link>
                    {/* <Link to="/login">Login</Link> */}
                    {auth.token ? (
                        <Link to="/" onClick={handleLogout}>
                            Logout
                        </Link>
                    ) : (
                        <Link to="/login">Login</Link>
                    )}
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default NavBar;