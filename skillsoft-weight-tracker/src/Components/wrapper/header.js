import React from "react";
import {Link} from "react-router-dom";
import logo from '../../images/chart.png'

function Header() {

    function reloadPage() {
        document.location.reload();
    }

    return(
        <header>
            <img src={logo} id="logo" alt="logo"/>
            <h1><a href="index.html">Skillsoft Weight Tracker </a></h1>
            <nav>
                <ul>
                    <li><Link to="/">home</Link></li>
                    <li><Link to="/register">register</Link></li>
                    <li><Link to="/customers">customers</Link></li>
                    <li><Link to="/login">login</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;