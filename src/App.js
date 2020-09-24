import React, { createContext, useState } from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";

import Home from './Components/Home/Home';
import Book from './Components/Book/Book';
import PrivateRoute from './Components/Privateroute/Privateroute';
import Destination from './Components/Destination/Destination';
import Login from './Components/Login/Login';
 
export const UserContext = createContext();
  
function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
    <Switch>
    
    <Route  path ="/home">
    <Home></Home>
    </Route>
    <Route  exact path ="/">
    <Home></Home>
    </Route>
    <Route   path ="/login">
    <Login></Login>
    </Route>
    <Route path = "/book/:bookid">
    <Book></Book>
    </Route>
    <PrivateRoute path ="/destination/:destinationid">
    <Destination></Destination>
    </PrivateRoute>
    </Switch>
    </Router>
   </UserContext.Provider>
  );
}

export default App;
