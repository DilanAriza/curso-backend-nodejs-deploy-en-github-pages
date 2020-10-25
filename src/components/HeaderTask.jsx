import React from 'react'
import { Link } from 'react-router-dom'

export default function HeaderTask() {
    return (
        <div className="header">
            <div className="header__full-frame container-98-center">
                <div className="header__full-frame--home-link">
                    <Link to="/">Tasks App</Link>
                </div>
                <ul className="header__full-frame--other-links">
                    <li>
                        <Link to="/">Dilan Ariza</Link>
                    </li>
                    <li>
                        <Link to="/">GitHub</Link>
                    </li>
                    <Link to="/task" className="btn-task button link-li">
                        <span className="">Task</span>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
