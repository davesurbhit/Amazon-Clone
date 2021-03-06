import React, {useEffect} from 'react';
import './App.css';
import Header from './Header.js';
import Home from './Home.js';
import Checkout from './Checkout.js';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from './Login';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
      //Will only run once when the app component loads...
    auth.onAuthStateChanged(authUser => {
      console.log('The User is >>> ', authUser);

      if (authUser) {
        //user has logged in / the user was logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    }) 
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        
        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
          <Header/>
            <Checkout />
          </Route>
          <Route path="/">
          <Header/>
          <Home />
          </Route>
        </Switch>
        
        </div>
    </Router>
  );
}

export default App;