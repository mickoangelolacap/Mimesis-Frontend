import React from 'react'
// import ReactDOM from 'react-dom'
// import {graphql} from 'react-apollo'
// import {flowRight as compose} from 'lodash'
import homeBG from '../images/homeBG.png'

import About from '../components/About'
import Footer from '../components/Footer'
import scrolldown from '../images/scrolldown.gif'

import AppNavbar2 from '../components/AppNavBar2'

// function App() {
//   function refreshPage() {
//     window.location.reload(false)
//   }
// }

const HomePage = ()=> {
	return(
		<React.Fragment>
		<AppNavbar2/>
		<div id="home" className="container-fluid p-md-5 p-4">
			<div className="row justify-content-md-center text-md-left text-center">
				<div className="col-lg-7">
					<h1 className="lora yellow">Mimesis.</h1>
					<h2 className="px-3 py-0">Learn Arts Professionally</h2>
					<a href="#about" className="btn btn-outline-warning btn-lg px-5 ml-3 mt-3 lora">Learn more</a>
				</div>
				<div className="col-lg-3 col-md-8 p-5 mt-lg-0 mt-5">
					<img src={homeBG} alt="" className="img-fluid"/>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<a href="#about" className="text-center d-block mt-5">
						<img id="scroll" src={scrolldown} alt=""/>
					</a>
				</div>
			</div>
		</div>

		<About/>
		<Footer/>
		</React.Fragment>
	)
}

export default HomePage