import React from "react"
import { Link } from "react-router-dom"
import "./Nav.css"

export const NavBar = (props) => {
    if (localStorage.getItem("Post_user")) {
        return (
            <ul className="navbar">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/create">Create</Link>
                </li>
            </ul>
        )
    } else return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/login">Login</Link>
            </li>
        </ul>
    )
}