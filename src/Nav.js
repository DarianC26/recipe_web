import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <nav>
            <h1>Dari's Recipes</h1>
            <ul className='nav-links'>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/about">
                    <li>About</li>
                </Link>
                <Link to="/contact">
                    <li>Contact Us</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;