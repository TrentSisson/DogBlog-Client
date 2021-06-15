import React from "react"
//redirect will take you to a designated path(when someone is not logged in they are redirected to the login)
import { Route } from "react-router-dom"
//import { Login } from "./auth/Login"
//applicationview is what is rendered on a certain pathway
import { ApplicationView } from "./components/AplicationViews.js"
import { NavBar } from "./components/nav/Nav.js"
//import "./Dogblog.css"



export const DogBlog = () => (
  <>
    <Route render={props => <NavBar {...props} />} />
    <Route render={props => <ApplicationView {...props} />} />
  </>
)
