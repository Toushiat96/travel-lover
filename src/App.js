import React from 'react';

import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
  } from "react-router-dom";

import Home from './Components/Home/Home';
import Book from './Components/Book/Book';
import Destination from './Components/Destination/Destination';

function App() {
  return (
    <Router>
    <Switch>
    
    <Route  path ="/home">
    <Home></Home>
    </Route>
    
    <Route path = "/book/:bookid">
    <Book></Book>
    </Route>
    <Route path="/destination">
    <Destination></Destination>
    </Route>
    </Switch>
    </Router>
  );
}

export default App;
