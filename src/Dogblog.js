import React from "react"
//redirect will take you to a designated path(when someone is not logged in they are redirected to the login)
import { Route } from "react-router-dom"
//import { Login } from "./auth/Login"
//applicationview is what is rendered on a certain pathway
import { ApplicationView } from "./components/AplicationViews.js"
//import { Nav } from "./Nav/Nav"
//import "./Dogblog.css"
import { Login } from "./components/auth/Login.js"


export const DogBlog = () => (
  <>
    {/* <Route render={props => <Nav {...props} />} /> */}
    <Route path="/login" render={props => <Login {...props} />} />
  </>
)
