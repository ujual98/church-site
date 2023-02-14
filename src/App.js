import React, { Component } from 'react';
import Login from './components/login/Login';
import Pass from  './components/login/passwordReset'
import Otp from './components/login/Otp'
import Home from './components/home/home'
// import Admin_Home from './components/home/Admin_home'
import Meal_confirm from './components/home/Meal_confirm'

import './App.css';
import Dailymeal_listing from './components/home/Dailymeal_listing';
import New_password from './components/login/New_password';
import Dailymeal_view from './components/home/Dailymeal_view';

/**
 * Custom router for hash based routing
 */
// const Router = function(){

//   // Get current hash value from location and remove the # from it.
//   let route = window.location.hash.replace("#",'');

//   if(route=='login'){
//     return (<Login/>)
//   }else if(route=="home")
//   return (<Home/>)
// }

function App()  {
  return(
     <div>
      <Login/> 
      <Pass/>
      <Otp/>
      <Home/>
      <Meal_confirm/>
      <Dailymeal_listing/> 
      <New_password/>
      <Dailymeal_view/>
     </div>
  );
  return Router();
}

export default App;
