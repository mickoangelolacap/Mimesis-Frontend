import React from 'react'
// import {Link} from 'react-router-dom'
import logo from '../images/logoM.png'

const AppNavBar2 = ()=> {

	let name = localStorage.getItem('name')
	const logout = ()=> {
		localStorage.clear()
		window.location.href = "/"
	}

	let admin
	if (localStorage.getItem('role') == 1) {
		admin = <React.Fragment>
		<a className="dropdown-item " href="/admin">Admin</a>
		<a className="dropdown-item " onClick={()=> logout()}>Logout</a>
		</React.Fragment>
	}
	else {
		admin = <a className="dropdown-item " onClick={()=> logout()}>Logout</a>
	}

	return(

		<nav id="top" className="navbar navbar-expand-lg navbar-dark p-5 mx-5">
		  <a className="navbar-brand" href="#">
			<img src={logo} alt="" className="img-fluid m-3"/>
		  	Mimesis
		  </a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
		    <span className="navbar-toggler-icon"></span>
		  </button>
		  <div className="collapse navbar-collapse" id="navbarNavDropdown">	
			<ul className="navbar-nav ml-auto">
			<li className="nav-item">
		        <a className="nav-link" href="/home">Home <span className="sr-only">(current)</span></a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="/artist">Artist</a>
		      </li>
		      <li className="nav-item">
		        <a className="nav-link" href="/transaction">Transaction</a>
		      </li>
		      <li className="nav-item dropdown">
		        <a className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
		          {name}
		        </a>
		        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
		          {admin}
		        </div>
		      </li>
		</ul>
		  </div>
		</nav>

		)
}
export default AppNavBar2