import React from "react"
import { Route } from "react-router-dom"
import { NavBar } from "./nav/Nav.js"
import { Login } from "./auth/Login.js"
import { PostProvider } from "./post/PostProvider.js"
import { PostList } from "./post/PostList.js"


export const ApplicationView = (props) => {
    return (
        <>
            <div className="Structure">
                <Route exact path="/" render={
                    props => <PostList {...props} />
                } />
                <Route exact path="/login" render={props => <Login {...props} />} />

            </div>
        </>
    )
}