import React, {useState} from 'react'
// import ReactDOM from 'react-dom'
import {graphql} from 'react-apollo'
import {flowRight as compose} from 'lodash'

import bemDP from '../images/bemDP.JPG'
import b1 from '../images/b1.png'
import b2 from '../images/b2.jpg'

import joemDP from '../images/joemDP.JPG'
import j1 from '../images/j1.jpg'
import j2 from '../images/j2.jpg'
import j3 from '../images/j3.jpg'
import j4 from '../images/j4.jpg'

import pilDP from '../images/pilDP.jpg'
import p1 from '../images/p1.png'
import p2 from '../images/p2.png'

import dapDP from '../images/dapDP.jpg'
import d1 from '../images/d1.jpg'
import d2 from '../images/d2.jpg'


import Footer from '../components/Footer'

import {getArtistsQuery} from '../graphql/queries'
import {addTransactionMutation} from '../graphql/mutations'

import AppNavbar2 from '../components/AppNavBar2'

const ArtistPage = (props)=> {
	
	// console.log(props.getArtistsQuery.artists)
	// console.log(userID)
	const userID = localStorage.getItem('id')
	const artists = props.getArtistsQuery.artists

	const [category, setCategory] = useState('')
	const [artistID, setArtistID] = useState('')
	const [hours, setHours] = useState('')
	const [day, setDay] = useState('')

	const transaction = {
		category: category,
		userID: userID,
		artistID: artistID,
		day: day,
		hours: parseInt(hours),
		total: parseInt(category * hours)
	}

	const addTransaction = (e, newTransaction) => {
		// console.log(newTransaction)
		// e.preventDefault()
		props.addTransactionMutation({
			variables: newTransaction
		})
	}

	let bem
	let joem
	let pil
	let dap

	if (artists === undefined) {
		bem = <span>Loading</span>
		joem = <span>Loading</span>
		pil = <span>Loading</span>
		dap = <span>Loading</span>
	}
	else {
		bem = artists.map((artist)=>{
			return <div key={artist.id} className="">
				{artist.id === "5ee9df128d9a226854f12b61"?
					<span>
						<h2 className="lora">{artist.name}</h2>
						<p className="grey">University of Santo Tomas—College of Music <br/> Major in Violin Performance</p>
						<p className="grey">Manila Symphony Orchestra <br/> Manila Symphony Junior Orchestra <br/> Manila Symphony Orchestra Music Academy</p>
						<p className="grey">ASCA - Canadian American School <br/>...</p>
						
						<button type="button" className="btn btn-outline-warning px-5" data-toggle="modal" data-target="#bemmodal" onClick={()=> setArtistID(artist.id)}>
						  Book Now
						</button>

						<div className="modal fade" id="bemmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
						    <div className="modal-content">
						      <div className="modal-body">
						        <button type="button" className="close m-3" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">&times;</span>
						        </button>
						        <h5 className="modal-title yellow p-3" id="exampleModalLongTitle">{artist.name}</h5>
						        <div className="row justify-content-center">
						        	<div className="col-8">
						        		<form onSubmit={(e)=> addTransaction(e, transaction)} className="p-5">
											<div className="form-group">
											    <select className="form-control" id="category"
											    	value={category} 
									    			onChange={(event)=> setCategory(event.target.value)} required>
											      <option>Select Category</option>
											      <option value={artist.online}>Online Tutorial</option>
											      <option value={artist.home}>Home-Based Tutorial</option>
											    </select>
											    <small className="form-text text-muted">Online Rate - ₱ 1000/hr  |  Home Rate - ₱ 1200/hr  </small>
											</div>
										  <div className="form-group">
										    <input type="date" className="form-control" id="date"
										    	value={day} 
									    		onChange={(event)=> setDay(event.target.value)} required/>
										  </div>
										  <div className="form-group">
										    <input type="number" className="form-control" id="hours" placeholder="Number of Hours"
										    	value={hours}
									    		onChange={(event)=> setHours(event.target.value)} required/>
										  </div>
										  
										  <button type="submit" className="btn btn-outline-warning lora px-5 mt-5 btn-block font-weight-bold">BOOK NOW</button>
										</form>
						        	</div>
						        </div>
						        <div className="row">
									<div className="col-6 p-0">
										<img src={b1} alt="" className="img-fluid"/>
									</div>
									<div className="col-6 p-0">
										<img src={b2} alt="" className="img-fluid"/>
									</div>
						        </div>

						      </div>
						    </div>
						  </div>
						</div>
						
					</span>
				 : null}
			</div>
		})
		joem = artists.map((artist)=>{
			return <div key={artist.id} className="">
				{artist.id === "5ee9ddeb8d9a226854f12b5f"?
					<span>
						<h2 className="lora">{artist.name}</h2>
						<p className="grey">University of the Philippines Diliman <br/> Bachelor of Music – Cello</p>
						<p className="grey">Metro Music Orchestra <br/> University of the Philippines Orchestra  <br/> University of the Philippines Symphony Orchestra - Assistant Principal <br/>...</p>

						<button type="button" className="btn btn-outline-warning px-5" data-toggle="modal" data-target="#joemmodal" onClick={()=> setArtistID(artist.id)}>
						  Book Now
						</button>

						<div className="modal fade" id="joemmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
						    <div className="modal-content">
						      <div className="modal-body">
						        <button type="button" className="close m-3" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">&times;</span>
						        </button>
						        <h5 className="modal-title yellow p-3" id="exampleModalLongTitle">{artist.name}</h5>
						        <div className="row justify-content-center">
						        	<div className="col-8">
						        		<form onSubmit={(e)=> addTransaction(e, transaction)} className="p-5">
											<div className="form-group">
											    <select className="form-control" id="category"
											    	value={category} 
									    			onChange={(event)=> setCategory(event.target.value)} required>
											      <option>Select Category</option>
											      <option value={artist.online}>Online Tutorial</option>
											      <option value={artist.home}>Home-Based Tutorial</option>
											    </select>
											    <small className="form-text text-muted">Online Rate - ₱ 1000/hr  |  Home Rate - ₱ 1500/hr  </small>
											</div>
										  <div className="form-group">
										    <input type="date" className="form-control" id="date"
										    	value={day} 
									    		onChange={(event)=> setDay(event.target.value)} required/>
										  </div>
										  <div className="form-group">
										    <input type="number" className="form-control" id="hours" placeholder="Number of Hours"
										    	value={hours}
									    		onChange={(event)=> setHours(event.target.value)} required/>

										  </div>
										  
										  <button type="submit" className="btn btn-outline-warning lora px-5 mt-5 btn-block font-weight-bold">BOOK NOW</button>
										</form>
						        	</div>
						        </div>
						        <div className="row">
									<div className="col-6 p-0">
										<img src={j1} alt="" className="img-fluid"/>
									</div>
									<div className="col-6 p-0">
										<img src={j2} alt="" className="img-fluid"/>
									</div>
									<div className="col-6 p-0">
										<img src={j3} alt="" className="img-fluid"/>
									</div>
									<div className="col-6 p-0">
										<img src={j4} alt="" className="img-fluid"/>
									</div>
						        </div>

						      </div>
						    </div>
						  </div>
						</div>

					</span>
				 : null}
			</div>
		})
		pil = artists.map((artist)=>{
			return <div key={artist.id} className="">
				{artist.id === "5ee9df3b8d9a226854f12b62"?
					<span>
						<h2 className="lora">{artist.name}</h2>
						<p className="grey">Rizal Technological University <br/> Bachelor of Science in Business Administration </p>
						<p className="grey">Smilebox PH - Owner <br/> Freelance Photographer  <br/> EMAPTA Versatile Services Inc. <br/>...</p>

						<button type="button" className="btn btn-outline-warning px-5" data-toggle="modal" data-target="#pilmodal" onClick={()=> setArtistID(artist.id)}>
						  Book Now
						</button>

						<div className="modal fade" id="pilmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
						    <div className="modal-content">
						      <div className="modal-body">
						        <button type="button" className="close m-3" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">&times;</span>
						        </button>
						        <h5 className="modal-title yellow p-3" id="exampleModalLongTitle">{artist.name}</h5>
						        <div className="row justify-content-center">
						        	<div className="col-8">
						        		<form onSubmit={(e)=> addTransaction(e, transaction)} className="p-5">
											<div className="form-group">
											    <select className="form-control" id="category"
											    	value={category} 
									    			onChange={(event)=> setCategory(event.target.value)} required>
											      <option>Select Category</option>
											      <option value={artist.online}>Online Tutorial</option>
											      <option value={artist.home}>Home-Based Tutorial</option>
											    </select>
											    <small className="form-text text-muted">Online Rate - ₱ 800/hr  |  Home Rate - ₱ 1000/hr  </small>
											</div>
										  <div className="form-group">
										    <input type="date" className="form-control" id="date"
										    	value={day} 
									    		onChange={(event)=> setDay(event.target.value)} required/>
										  </div>
										  <div className="form-group">
										    <input type="number" className="form-control" id="hours" placeholder="Number of Hours"
										    	value={hours}
									    		onChange={(event)=> setHours(event.target.value)} required/>
										  </div>
										  
										  <button type="submit" className="btn btn-outline-warning lora px-5 mt-5 btn-block font-weight-bold">BOOK NOW</button>
										</form>
						        	</div>
						        </div>
						        <div className="row">
									<div className="col-6 p-0">
										<img src={p1} alt="" className="img-fluid"/>
									</div>
									<div className="col-6 p-0">
										<img src={p2} alt="" className="img-fluid"/>
									</div>
						        </div>

						      </div>
						    </div>
						  </div>
						</div>

					</span>
				 : null}
			</div>
		})
		dap = artists.map((artist)=>{
			return <div key={artist.id} className="">
				{artist.id === "5eea46ca6c13ed344cbadbb6"?
					<span>
						<h2 className="lora">{artist.name}</h2>
						<p className="grey">Far Eastern University <br/> Major in Fine Arts </p>
						<p className="grey">Philippine Ballet Theatre <br/> FEU Dance Company  <br/> Kinection <br/>...</p>

						<button type="button" className="btn btn-outline-warning px-5" data-toggle="modal" data-target="#dapmodal" onClick={()=> setArtistID(artist.id)}>
						  Book Now
						</button>

						<div className="modal fade" id="dapmodal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
						  <div className="modal-dialog modal-dialog-centered modal-lg" role="document">
						    <div className="modal-content">
						      <div className="modal-body">
						        <button type="button" className="close m-3" data-dismiss="modal" aria-label="Close">
						          <span aria-hidden="true">&times;</span>
						        </button>
						        <h5 className="modal-title yellow p-3" id="exampleModalLongTitle">{artist.name}</h5>
						        <div className="row justify-content-center">
						        	<div className="col-8">
						        		<form onSubmit={(e)=> addTransaction(e, transaction)} className="p-5">
											<div className="form-group">
											    <select className="form-control" id="category"
											    	value={category} 
									    			onChange={(event)=> setCategory(event.target.value)} required>
											      <option>Select Category</option>
											      <option value={artist.online}>Online Tutorial</option>
											      <option value={artist.home}>Home-Based Tutorial</option>
											    </select>
											    <small className="form-text text-muted">Online Rate - ₱ 800/hr  |  Home Rate - ₱ 1000/hr  </small>
											</div>
										  <div className="form-group">
										    <input type="date" className="form-control" id="date"
										    	value={day} 
									    		onChange={(event)=> setDay(event.target.value)} required/>
										  </div>
										  <div className="form-group">
										    <input type="number" className="form-control" id="hours" placeholder="Number of Hours"
										    	value={hours}
									    		onChange={(event)=> setHours(event.target.value)} required/>
										  </div>
										  
										  <button type="submit" className="btn btn-outline-warning lora px-5 mt-5 btn-block font-weight-bold">BOOK NOW</button>
										</form>
						        	</div>
						        </div>
						        <div className="row">
									<div className="col-6 p-0">
										<img src={d1} alt="" className="img-fluid"/>
									</div>
									<div className="col-6 p-0">
										<img src={d2} alt="" className="img-fluid"/>
									</div>
						        </div>

						      </div>
						    </div>
						  </div>
						</div>

					</span>
				 : null}
			</div>
		})
		
	}

	return(
		<React.Fragment>
		<AppNavbar2/>
		<div id="artist" className="container-fluid pb-5 mb-5">
			<div className="container p-5">
				<div className="row">
					<div className="col-12 text-center">
						<h1 className="lora grey">Our <strong className="lora yellow">Artists</strong></h1>
						<hr/>
					</div>
					<div className="col-12">
						<h1 className="lora grey mt-4">Music <strong className="yellow">.</strong></h1>
					</div>

					<div className="col-md-6 p-5">
						<img src={bemDP} className="img-fluid dp" alt=""/>
					</div>
					<div className="col-md-6 p-5">
						{bem}
					</div>
					<div className="col-md-6 p-5">
						{joem}
					</div>
					<div className="col-md-6 p-5">
						<img src={joemDP} className="img-fluid dp" alt=""/>
					</div>	

					<div className="col-12">
						<h1 className="lora grey mt-4">Dance <strong className="yellow">.</strong></h1>
					</div>
					<div className="col-md-6 p-5">
						<img src={dapDP} className="img-fluid dp" alt=""/>
					</div>
					<div className="col-md-6 p-5">
						{dap}
					</div>

					<div className="col-12">
						<h1 className="lora grey mt-4">Multimedia <strong className="yellow">.</strong></h1>
					</div>
					<div className="col-md-6 p-5">
						{pil}
					</div>
					<div className="col-md-6 p-5">
						<img src={pilDP} className="img-fluid dp" alt=""/>
					</div>

				</div>
			</div>
		</div>
		<Footer/>
		</React.Fragment>
	)
}

export default compose(
	graphql(getArtistsQuery, {name: 'getArtistsQuery'}),
	graphql(addTransactionMutation, {name: 'addTransactionMutation'}),
)(ArtistPage)