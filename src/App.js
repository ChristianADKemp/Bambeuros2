import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Login from './components/login';
import Register from './components/register';
import Dashboard from './components/dashboard';

function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-sm navbar-green fixed-top">
        <div className="container">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-success " to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-success " to={"/register"}>Register</Link>
              </li>
            </ul>
          
        </div>
      </nav>
      <Switch>
        <Route exact path='/' component={Login} />
        <Route path="/sign-in" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
  
    </div></Router>
  );
}



export default App;
