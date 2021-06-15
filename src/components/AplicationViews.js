import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/Nav.js"
import { Login } from "./auth/Login.js"


export const ApplicationView = (props) => {
    return (
        <>
            <div className="Structure">
                <Route render={props => <NavBar {...props} />} />
                <Route path="/login" render={props => <Login {...props} />} />
            </div>
        </>
    )
}