import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/Nav.js"


export const ApplicationView = (props) => {
    return (
        <>
            <div className="Structure">
                <Route render={props => <NavBar {...props} />} />
                
            </div>
        </>
    )
}