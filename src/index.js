// importing React allows us to access the react library
import React from 'react';
//importing browser router as router allows us to use the route function
import { BrowserRouter as Router } from 'react-router-dom';
// reactDom renders the application
import ReactDOM from 'react-dom';
// DayDrinking is my app
import { DogBlog } from "./Dogblog.js";


// Router allows us to route our application(change url)


ReactDOM.render(
  <React.StrictMode>
    <Router>
    <DogBlog />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

