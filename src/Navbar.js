import React from 'react';
import {Link} from 'react-router-dom';

function Navbar() {
    return(
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/privacy">Privacy</Link>
            </li>
            <li>
                <Link to="/support">Support</Link>
            </li>
        </ul>
    );
}

export default Navbar;