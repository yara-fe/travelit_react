import { Link, Outlet } from "react-router-dom"

function NavBar() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                {/* <Link to="/itinerary">Itinerary</Link> */}
                <Link to="/rewards">Reward</Link>
            </nav>
            <Outlet />
        </div>
    )
}

export default NavBar;