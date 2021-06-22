import React from "react"
import { Link, useHistory } from "react-router-dom"
import "./Nav.css"

export const NavBar = (props) => {
    const history = useHistory()
    if (localStorage.getItem("Post_user")) {
        return (
            <ul className="navbar">
                <li className="navbar__item">
                    <Link className="navbar__link" to="/">Blog List</Link>
                </li>
                <li className="navbar__item">
                    <Link className="navbar__link" to="/create">Create</Link>
                </li>

                <button className="navbar_item"
                    onClick={() => {
                        localStorage.removeItem("Post_user")
                        history.push({ pathname: "/" })
                    }}
                >Logout</button>


            </ul>
        )
    } else return (
        <ul className="navbar">
            <li className="navbar__item">
                <Link className="navbar__link" to="/">Blog List</Link>
            </li>
            <li className="navbar__item">
                <Link className="navbar__link" to="/login">Login</Link>
            </li>
        </ul>
    )
}