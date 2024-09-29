import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";  
import useOnlineStatus from "../utils/useOnlineStatus";

const linkStyle = {
    textDecoration: 'none',
    color: 'black'
}

const Header = () => {
    const [ btn, setBtn ] = useState("Login");
    // console.log("Header Rendered");   

    // if no dependency array, useEffect() will be called after every render of the component
    // if there is an empty dependency array, useEffect() will be called only for the initial render(or, first render of the component)
    // if the dependecy array is [btn] => useEffect() will be callled only when the dependency changes ,that is, whenever "btn" is updated useEffect() will be called 
    useEffect(() => {
        // console.log("useEffect Called");
    }, [])
    
    const onlineStatus = useOnlineStatus();

    return (
        <div className='header w-full flex justify-between items-center bg-white px-4 shadow-md sticky top-0 z-[999]'>
            <Link to="/" className='logo-container w-24 h-full'>
                <img className='logo h-full w-full object-contain' src={LOGO_URL} />
            </Link>
            <div className='nav-items'>
                <ul className="flex gap-10 items-center font-medium"> 
                    <li>Online Status: {onlineStatus ? "✅" : "❌"}</li>
                    <li><Link to="/" style={linkStyle}>Home</Link></li>
                    <li><Link to="/about" style={linkStyle}>About Us</Link></li>
                    <li><Link to="/contact" style={linkStyle}>Contact Us</Link></li>
                    <li><Link to="/grocery" style={linkStyle}>Grocery</Link></li>
                    <li>Cart</li>
                    <button onClick={() => {
                        btn === "Login" ? setBtn("Logout") : setBtn("Login")
                    }} className="login-btn bg-orange-500 w-20 px-4 text-white py-2 rounded-full">{btn}</button>
                </ul>
            </div>

        </div>
    )
};

export default Header;