import React from 'react';
import {Link} from "react-router-dom";
export const Navbar = () => {
    return(
        <nav className="navbar navbar-dark bg-dark navbar-width">
    <div>
<ul className="navbar-nav mr-auto">
<li className="navbar-item"><Link className="nav-link" to="/addreserve"><strong>Add Reservation</strong></Link></li>
 </ul>

    </div>
    </nav>)
}