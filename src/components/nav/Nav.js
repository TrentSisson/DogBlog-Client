import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

export const NavBar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/login">Login</Link>
            </li>
        </ul>
    )
}