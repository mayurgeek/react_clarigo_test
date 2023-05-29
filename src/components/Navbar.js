
import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar(){
    return(
<>
<nav className="shadow border border-info navbar navbar-expand-lg navbar-dark bg-dark">
<Link className="navbar-brand" to={"/"}></Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
  aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span className="navbar-toggler-icon"></span>
</button>
<div className="collapse navbar-collapse" id="navbarNav">
  <ul className="navbar-nav ml-auto">
  <li className="nav-item">
      <Link className="nav-link" to={"/dashboard"}>Dashboard</Link>
    </li>

    <li className="nav-item">
      <Link className="nav-link" to={"/user_registeration"}>User Registration</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to={"/login"}>Login</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" onClick={async()=>{
        var token = localStorage.getItem('token')
if(token){
    localStorage.setItem('token',"");
    alert("Log out successfull")
}else{
alert("Already Logout")
}
        
    }
        } to={"/login"}>Logout</Link>
    </li>
  </ul>
</div>
</nav>
</>
    )
}