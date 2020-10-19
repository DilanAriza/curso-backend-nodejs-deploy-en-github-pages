//Dependences
import React from 'react';
import { Link } from 'react-router-dom'

//Styles
import '../assets/styles/components/Header.scss';

export default function Header() {
    return (
        <div className="header">
            <Link to="/" className="link__home">
                <span>
                    Home
                </span>
            </Link>
            
            <div className="header__menu">
                <ul>
                    <li><Link to="/">Task</Link></li>
                    <li><Link to="/external/github-profile">GitHub Profile</Link></li>
                    <li><Link to="/external/rest-api">REST API</Link></li>
                    <li><Link to="/external/platzi-profile">Platzi Profile</Link></li>
                </ul>
            </div>
        </div>
    )
}
