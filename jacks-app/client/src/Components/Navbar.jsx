import React, { Component } from "react";
import { Link } from "react-router-dom";

class Navbar extends Component {
	render(){
return(
<div className='nav_bar'>
  <div className="nav_links"><Link to='/Login'>Login</Link></div>
  <div className="nav_links"><Link to='/Signup'>Sign up</Link></div>
  <div className="nav_links"><Link to='/orders'>Previous Orders</Link></div>
  <div className="nav_links"><Link to='/kitchen'>Kitchen Orders</Link></div>
 </div>

)}}
export default Navbar;