import React, {useState} from 'react'
// import ReactDOM from 'react-dom'
import {graphql} from 'react-apollo'
import {flowRight as compose} from 'lodash'
import Footer from '../components/Footer'

import {getTransactionsQuery, getUsersQuery, getArtistsQuery} from '../graphql/queries'

import {deleteTransactionMutation, updateTransactionMutation, deleteUserMutation, addArtistMutation, deleteArtistMutation} from '../graphql/mutations'

import AppNavbar2 from '../components/AppNavBar2'

const AdminPage = (props)=> {

	// console.log(localStorage.getItem('id'))
	// const id = localStorage.getItem('id')

	// console.log(props.getTransactionsQuery.transactions)
	const transactions = props.getTransactionsQuery.transactions

	// console.log(props.getUsersQuery.users)
	const users = props.getUsersQuery.users

	// console.log(props.getArtistsQuery.artists)
	const artists = props.getArtistsQuery.artists

	const updateTransaction1 = (id) => {
		let statusUpdate = {
			id: id,
			status: 1
		}
		console.log(statusUpdate)
		props.updateTransactionMutation({
			variables: statusUpdate,
			refetchQueries: [{query: getTransactionsQuery}]
		})
	}
	const updateTransaction2 = (id) => {
			let statusUpdate = {
				id: id,
				status: 2
			}
			console.log(statusUpdate)
			props.updateTransactionMutation({
				variables: statusUpdate,
				refetchQueries: [{query: getTransactionsQuery}]
			})
		}
	const deleteTransaction = (id) => {
		alert('Are you sure you want to delete this appointment?')
		props.deleteTransactionMutation({
			variables: {id: id},
			refetchQueries: [{query: getTransactionsQuery}]
		})
	}

	let pending
	let active
	let completed

	if (transactions === undefined) {
		pending = <tbody><tr><td><strong>Loading...</strong></td></tr></tbody>
		active = <tbody><tr><td><strong>Loading...</strong></td></tr></tbody>
		completed = <tbody><tr><td><strong>Loading...</strong></td></tr></tbody>
	}
	else {
		pending = transactions.map((transaction)=>{
					return <tbody key={transaction.id} id="myTable1">
						{transaction.status === 0? <tr>
							<td className="shelterOverflow grey py-4">{transaction.id}</td>
							<td className="py-4">{transaction.user.firstName + " " + transaction.user.lastName + ", " + transaction.user.age + ", " + transaction.user.gender }</td>
							<td className="py-4">{transaction.artist.name}</td>
							<td className="py-4">{transaction.day}</td>
							<td className="py-4">{"₱ " + transaction.total}</td>
							<td className="py-4">
								<button className="btn btn-outline-warning btn-block" onClick={()=> updateTransaction1(transaction.id)}>Approve</button>
								<button className="btn btn-outline-secondary btn-block mt-2"  onClick={()=> deleteTransaction(transaction.id)}>Cancel</button>

								<div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
								  <div className="modal-dialog modal-dialog-centered" role="document">
								    <div className="modal-content">
								      <div className="modal-body text-center p-4">
								        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
								          <span aria-hidden="true">&times;</span>
								        </button>
								        <h1>Are you sure you want to cancel this appointment?</h1>
								        <button type="button" className="btn btn-outline-warning mt-4" data-dismiss="modal" data-toggle="modal" data-target="#exampleModalCenter">Yes, I want to cancel</button>
								      </div>
								    </div>
								  </div>
								</div>
							</td>
						</tr> : null}
					</tbody>
			  	})
		active = transactions.map((transaction)=>{
					return <tbody key={transaction.id} id="myTable1">
						{transaction.status === 1? <tr>
							<td className="shelterOverflow grey py-4">{transaction.id}</td>
							<td className="py-4">{transaction.user.firstName + " " + transaction.user.lastName + ", " + transaction.user.age + ", " + transaction.user.gender }</td>
							<td className="py-4">{transaction.artist.name}</td>
							<td className="py-4">{transaction.day}</td>
							<td className="py-4">{"₱ " + transaction.total}</td>
							<td className="py-4">
								<button className="btn btn-outline-warning btn-block" onClick={()=> updateTransaction2(transaction.id)}>Done</button>
							</td>
						</tr> : null}
					</tbody>
			  	})
		completed = transactions.map((transaction)=>{
					return <tbody key={transaction.id} id="myTable1">
						{transaction.status === 2? <tr>
							<td className="shelterOverflow grey py-4">{transaction.id}</td>
							<td className="py-4">{transaction.user.firstName + " " + transaction.user.lastName + ", " + transaction.user.age + ", " + transaction.user.gender }</td>
							<td className="py-4">{transaction.artist.name}</td>
							<td className="py-4">{transaction.day}</td>
							<td className="py-4">{"₱ " + transaction.total}</td>
							<td className="py-4">
								<button className="btn btn-outline-warning btn-block"  onClick={()=> deleteTransaction(transaction.id)}>Remove</button>

								<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalTitle" aria-hidden="true">
								  <div className="modal-dialog modal-dialog-centered" role="document">
								    <div className="modal-content">
								      <div className="modal-body">
								        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
								          <span aria-hidden="true">&times;</span>
								        </button>
								        Are you sure you want to remove this record?
								        <button type="button" className="btn btn-primary" data-dismiss="modal" data-toggle="modal" data-target="#exampleModal">Yes</button>
								      </div>
								    </div>
								  </div>
								</div>
							</td>
						</tr> : null}
					</tbody>
			  	})
	}

	const deleteUser = (userid) => {
		alert('Are you sure you want to delete this user?')
		props.deleteUserMutation({
			variables: {id: userid},
			refetchQueries: [{query: getUsersQuery}]
		})
	}

	let userRow
	if (users === undefined) {
		userRow = <tr><td><strong>Loading...</strong></td></tr>
	}
	else {
		userRow = users.map((user)=>{
			return <tr key={user.id}>
				<td className="py-4">{user.firstName + " " + user.lastName}</td>
				<td className="py-4">{user.email}</td>
				<td className="py-4">{user.contact}</td>
				<td className="py-4">{user.age}</td>
				<td className="py-4">{user.gender}</td>
				<td className="py-4">{user.address}</td>
				<td className="py-4">
					<button className="btn btn-outline-secondary btn-block" onClick={()=> deleteUser(user.id)}>Remove</button>
				</td>
			</tr>
		})
	}

	const deleteArtist = (id) => {
		alert('Are you sure you want to delete this artist?')
		props.deleteArtistMutation({
			variables: {id: id},
			refetchQueries: [{query: getArtistsQuery}]
		})
	}

	let artistRow
	if (artists === undefined) {
		artistRow = <tr><td><strong>Loading...</strong></td></tr>
	}
	else {
		artistRow = artists.map((artist)=>{
			return <tr key={artist.id}>
				<td className="py-4">{artist.name}</td>
				<td className="py-4">{artist.art}</td>
				<td className="py-4">{artist.address}</td>
				<td className="py-4">{artist.contact}</td>
				<td className="py-4">{"₱ " + artist.online}</td>
				<td className="py-4">{"₱ " + artist.home}</td>
				<td className="py-4">{artist.status === 1? <span className="text-success">Available</span> : <span className="text-danger">Not Available</span>}</td>
				<td className="py-4">
					<button className="btn btn-outline-warning btn-block" onClick={()=> deleteArtist(artist.id)}>Remove</button>
				</td>
			</tr>
		})
	}

	const [name, setName] = useState('')
	const [art, setArt] = useState('')
	const [address, setAddress] = useState('')
	const [contact, setContact] = useState('')
	const [online, setOnline] = useState('')
	const [home, setHome] = useState('')

	const artist = {
		name: name,
		art: art,
		address: address,
		contact: contact,
		online: parseInt(online),
		home: parseInt(home)
	}

	const addArtist = (e, newArtist) => {
		// console.log(newArtist)
		// e.preventDefault()
		props.addArtistMutation({
			variables: newArtist,
			refetchQueries: [{query: getArtistsQuery}]
		})
	}



	return(
		
		<div id="admin" className="container-fluid p-0">
		<AppNavbar2/>
			<div id="book" className="container p-4">
				<h1 className="lora yellow py-5">Booking Requests</h1>
				<form className="form-inline mb-5">
					<i className="fa fa-search search-icon mx-3 text-warning d-md-block d-none"></i>
			      	<input className="form-control" type="text" placeholder="Search" aria-label="Search" id="myInput1"/>
			    </form>
				<ul className="nav nav-tabs mb-4 red" id="nav-tab" role="tablist">
				  <li className="nav-item">
				    <a className="nav-link grey active" id="pills-home-tab" data-toggle="tab" href="#pills-home" role="tab" aria-controls="pills-home" aria-selected="true">Pending</a>
				  </li>
				  <li className="nav-item">
				    <a className="nav-link grey" id="pills-profile-tab" data-toggle="tab" href="#pills-profile" role="tab" aria-controls="pills-profile" aria-selected="false">Active</a>
				  </li>
				  <li className="nav-item">
				    <a className="nav-link grey" id="pills-contact-tab" data-toggle="tab" href="#pills-contact" role="tab" aria-controls="pills-contact" aria-selected="false">Completed</a>
				  </li>
				</ul>
			    <div className="tableOverflow">
					<div className="tab-content" id="nav-tabContent">
					  <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
						<table className="table table-hover">
						  <thead>
						    <tr>
						      <th scope="col" className="py-4">Reference</th>
						      <th scope="col"className="py-4">User</th>
						      <th scope="col"className="py-4">Artist</th>
						      <th scope="col"className="py-4">Date</th>
						      <th scope="col"className="py-4">Payment</th>
						      <th scope="col"className="py-4">Action</th>
						    </tr>
						  </thead>
						  {
						  	pending
						  }	
						</table>
					  </div>
					  <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
						<table className="table table-hover">
						  <thead>
						    <tr>
						      <th scope="col"className="py-4">Reference</th>
						      <th scope="col"className="py-4">User</th>
						      <th scope="col"className="py-4">Artist</th>
						      <th scope="col"className="py-4">Date</th>
						      <th scope="col"className="py-4">Payment</th>
						      <th scope="col"className="py-4">Action</th>
						    </tr>
						  </thead>
						  {
						  	active
						  }	
						</table>
					  </div>
					  <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
						<table className="table table-hover">
						  <thead>
						    <tr>
						      <th scope="col"className="py-4">Reference</th>
						      <th scope="col"className="py-4">User</th>
						      <th scope="col"className="py-4">Artist</th>
						      <th scope="col"className="py-4">Date</th>
						      <th scope="col"className="py-4">Payment</th>
						      <th scope="col"className="py-4">Action</th>
						    </tr>
						  </thead>
						  {
						  	completed
						  }	
						</table>
					  </div>
					</div>
			    </div>
			</div>
			
			<div id="users" className="container p-4">
				<h1 className="lora yellow py-5">User Records</h1>
				<form className="form-inline mb-4">
					<i className="fa fa-search search-icon mx-3 text-warning d-md-block d-none"></i>
			      	<input className="form-control" type="text" placeholder="Search" aria-label="Search" id="myInput2"/>
			    </form>
			    <div className="tableOverflow">
					<table className="table table-hover">
					  <thead>
					    <tr>
					      <th scope="col"className="py-4">Name</th>
					      <th scope="col"className="py-4">Email</th>
					      <th scope="col"className="py-4">Contact</th>
					      <th scope="col"className="py-4">Age</th>
					      <th scope="col"className="py-4">Gender</th>
					      <th scope="col"className="py-4">Address</th>
					      <th scope="col"className="py-4">Action</th>
					    </tr>
					  </thead>
					  <tbody id="myTable2">
						  {
						  	userRow
						  }	
					  </tbody>
					</table>
			    </div>
			</div>
			
			<div id="artists" className="container pb-5 mb-5 p-4">
				<h1 className="lora yellow py-5">Artist Records</h1>
				<form className="form-inline mb-4">
					<i className="fa fa-search search-icon mx-3 text-warning d-md-block d-none"></i>
			      	<input className="form-control" type="text" placeholder="Search" aria-label="Search" id="myInput3"/>
			    </form>
			    <div className="tableOverflow">
					<table className="table table-hover">
					  <thead>
					    <tr>
					      <th scope="col"className="py-4">Name</th>
					      <th scope="col"className="py-4">Art Field</th>
					      <th scope="col"className="py-4">Address</th>
					      <th scope="col"className="py-4">Contact</th>
					      <th scope="col"className="py-4">Online Rate /hr</th>
					      <th scope="col"className="py-4">Home Rate /hr</th>
					      <th scope="col"className="py-4">Status</th>
					      <th scope="col"className="py-4">Action</th>
					    </tr>
					  </thead>
					  <tbody id="myTable3">
						  {
						  	artistRow
						  }	
					  </tbody>
					</table>
			    </div>

				<button type="button" className="btn btn-warning px-5 mt-4 lora font-weight-bold" data-toggle="modal" data-target="#addartist">
				  ADD ARTIST
				</button>
			</div>


			<div className="modal fade" id="addartist" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
			  <div className="modal-dialog modal-dialog-centered" role="document">
			    <div className="modal-content">
			      <div className="modal-header">
			        <h5 className="modal-title yellow lora p-2" id="exampleModalLongTitle">Add Artist</h5>
			        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div className="modal-body p-5">
			        
					<form onSubmit={(e)=> addArtist(e, artist)}>
					  <div className="form-group">
					    <input 
					    	value={name} 
					    	onChange={(event)=> setName(event.target.value)} 
					    	type="text" 
					    	name="name" 
					    	className="form-control"
					    	placeholder="NAME" required/>
					  </div>
					  <div className="form-group">
					    <input 
					    	value={art} 
					    	onChange={(event)=> setArt(event.target.value)} 
					    	type="text" 
					    	name="art" 
					    	className="form-control"
					    	placeholder="ART FIELD" required/>
					  </div>
					  <div className="form-group">
					    <input 
					    	value={address} 
					    	onChange={(event)=> setAddress(event.target.value)} 
					    	type="text" 
					    	name="address" 
					    	className="form-control"
					    	placeholder="ADDRESS" required/>
					  </div>
					  <div className="form-group">
						 <input
							value={contact} 
							onChange={(event)=> setContact(event.target.value)} 
						 	name="contact"
						 	type="text"
						 	className="form-control"
						 	placeholder="CONTACT" required/>
					  </div>
					  <div className="form-group">
						 <input
							value={online} 
							onChange={(event)=> setOnline(event.target.value)} 
						 	name="online"
						 	type="number"
						 	className="form-control"
						 	placeholder="ONLINE RATE PER HOUR" required/>
					  </div>
					  <div className="form-group">
						 <input
							value={home} 
							onChange={(event)=> setHome(event.target.value)} 
						 	name="home"
						 	type="number"
						 	className="form-control"
						 	placeholder="HOME RATE PER HOUR" required/>
					  </div>
					  
					  <button type="submit" className="btn btn-outline-warning btn-block mt-5">ADD</button>
					</form>

			      </div>
			    </div>
			  </div>
			</div>

			
			<Footer/>
			
		</div>

	)
}

export default compose(
	graphql(getTransactionsQuery, {name: 'getTransactionsQuery'}),
	graphql(updateTransactionMutation, {name: 'updateTransactionMutation'}),
	graphql(deleteTransactionMutation, {name: 'deleteTransactionMutation'}),
	graphql(getUsersQuery, {name: 'getUsersQuery'}),
	graphql(deleteUserMutation, {name: 'deleteUserMutation'}),
	graphql(getArtistsQuery, {name: 'getArtistsQuery'}),
	graphql(addArtistMutation, {name: 'addArtistMutation'}),
	graphql(deleteArtistMutation, {name: 'deleteArtistMutation'})
)(AdminPage)