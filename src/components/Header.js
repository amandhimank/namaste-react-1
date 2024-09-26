import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";  

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
    
    return (
        <div className='header'>
            <Link to="/" className='logo-container'>
                <img className='logo' src={LOGO_URL} />
            </Link>
            <div className='nav-items'>
                <ul>
                    <li><Link to="/" style={linkStyle}>Home</Link></li>
                    <li><Link to="/about" style={linkStyle}>About Us</Link></li>
                    <li><Link to="/contact" style={linkStyle}>Contact Us</Link></li>
                    <li>Cart</li>
                    <button onClick={() => {
                        btn === "Login" ? setBtn("Logout") : setBtn("Login")
                    }} className="login-btn">{btn}</button>
                </ul>
            </div>

        </div>
    )
};

export default Header;