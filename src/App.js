import React from 'react';
import './App.css';
import Login from './components/login';
import "bootstrap/dist/css/bootstrap.min.css";
import Signup from './components/signup';
import {BrowserRouter,Route} from 'react-router-dom'
import Dashboard from './components/dashboard';
import Logout from './components/logout';
import Addreserve from './components/addreservation';
import EditReserve from './components/editreservation';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
      <Route exact path='/' component={Login}></Route>
      <Route exact path='/dashboard' component={Dashboard}></Route>
      <Route path='/register' component={Signup}></Route>
      <Route path='/logout' component={Logout}></Route>
      <Route path='/addreserve' component={Addreserve}></Route>
      <Route path='/editreserve/:id' component={EditReserve}></Route>


      </BrowserRouter>
    </div>
  );
}

export default App;
