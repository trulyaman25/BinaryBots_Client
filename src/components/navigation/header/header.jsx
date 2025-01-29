import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="w-full flex flex-row justify-between items-center text-black">
                <Link to="/">Home</Link>
                <Link to={`/member/${"aman"}`}>Members</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </>
    )
}

export default Header;