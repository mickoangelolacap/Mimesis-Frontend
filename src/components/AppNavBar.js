import React, {useState,useEffect} from 'react'
// import {Link} from 'react-router-dom'
import logo from '../images/logoM.png'

const AppNavBar = ()=> {

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
	
	let nav
	let name = localStorage.getItem('name')

	const [auth, setAuth] = useState(localStorage.getItem('token'))

	useEffect(()=>{
		setAuth(localStorage.getItem('token'))
	})

	if (auth) {
		nav = 
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
	}
	else {
		nav = 
		<ul className="navbar-nav ml-auto">
			<li className="nav-item">
				<a className="nav-link" href="/">Login</a>
			</li>
			<li className="nav-item">
				<a className="nav-link" href="/register">Register<span className="sr-only">(current)</span></a>
			</li>
		</ul>
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
			{nav}
		  </div>
		</nav>

		)
}
export default AppNavBar