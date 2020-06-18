import React, {useState} from 'react'
import {Redirect} from 'react-router-dom'
import Swal from 'sweetalert2'
import About from '../components/About'
import Footer from '../components/Footer'
import scrolldown from '../images/scrolldown.gif'

import {graphql} from 'react-apollo'
import {flowRight as compose} from 'lodash'

import {getUsersQuery} from '../graphql/queries'

import {addUserMutation} from '../graphql/mutations'

import AppNavbar from '../components/AppNavBar'

const RegisterPage = (props)=>{
	console.log(props.getUsersQuery.users)

	const [firstName, setFirstName] = useState('')
	const [lastName, setLastName] = useState('')
	const [age, setAge] = useState('')
	const [gender, setGender] = useState('')
	const [address, setAddress] = useState('')
	const [contact, setContact] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [redirectToLogin, setRedirectToLogin] = useState(false)

	if (redirectToLogin) {
			return <Redirect to='/?register=true'/>
		}

	const registerNewUser = (e)=> {
		// alert(firstName + " " + email + " " + username + " " +contact)
		e.preventDefault()
		
			props.addUserMutation({
				variables: {
					firstName: firstName,
					lastName: lastName,
					age: parseInt(age),
					gender: gender,
					address: address,
					contact: contact,
					email: email,
					password: password
				}
			})
			.then((response)=>{
				
				const userAdded = response.data.addUser

				 if (userAdded) {
		            Swal.fire({
		                title: 'Registration Successful',
		                text: 'You will now be redirected to the login.',
		                type: 'success',
		                background: '#333'
		            }).then(() => {
		                setRedirectToLogin(true)
		            })
	            }
	            else {
	            	Swal.fire({
	                    title: 'Registration Failed',
	                    text: 'The server encountered an error.',
	                    type: 'error'
	                })
	            }

			})
	}

	return(
		<React.Fragment>
		<AppNavbar/>
		<div id="register" className="container-fluid p-5">
			<div className="row justify-content-md-center">
				<div className="col-md-6">
					<h1 className="lora yellow">Mimesis.</h1>
					<h2 className="px-3 py-0">Learn Arts Professionally</h2>
					<a href="#about" className="btn btn-outline-warning btn-lg px-5 ml-3 mt-3 lora">Learn more</a>
				</div>
				<div className="col-md-4">
					<h3 className="lora pb-2">JOIN US NOW.</h3>	
					<form onSubmit={(e)=> registerNewUser(e)}>
						<div className="form-row">
							<div className="form-group col">
								<input 
									value={firstName}
									onChange={(e)=> setFirstName(e.target.value)}
									name="firstname"
									type="text" 
									className="form-control"
									placeholder="FIRST NAME" required/>
							</div>
							<div className="form-group col">
								<input 
									value={lastName}
									onChange={(e)=> setLastName(e.target.value)}
									name="lastname"
									type="text" 
									className="form-control"
									placeholder="LAST NAME" required/>
							</div>
						</div>
						<div className="form-row">
							<div className="form-group col">
								<input 
									value={age}
									onChange={(e)=> setAge(e.target.value)}
									name="age"
									type="number" 
									className="form-control"
									placeholder="AGE" required/>
							</div>
							<div className="form-group col">
								<select
									value={gender}
									onChange={(e)=> setGender(e.target.value)}
									name="gender"
									className="form-control py-2"
									placeholder="Gender" required>
									<option>Select Gender</option>
									<option value="Male">Male</option>
									<option value="Female">Female</option>
								 </select>
							</div>
						</div>
						<div className="form-group">
							<input 
								value={address}
								onChange={(e)=> setAddress(e.target.value)}
								name="address" 
								type="text" 
								className="form-control"
								placeholder="ADDRESS" required/>
						</div>
						<div className="form-group">
							<input 
								value={contact}
								onChange={(e)=> setContact(e.target.value)}
								name="contact" 
								type="text" 
								className="form-control"
								placeholder="CONTACT NO." required/>
						</div>
						<div className="form-group">
							<input 
								value={email}
								onChange={(e)=> setEmail(e.target.value)}
								name="email" 
								type="email" 
								className="form-control"
								placeholder="EMAIL" required/>
						</div>
						<div className="form-group">
							<input 
								value={password}
								onChange={(e)=> setPassword(e.target.value)}
								name="password" 
								type="password" 
								className="form-control"
								placeholder="PASSWORD" required/>
						</div>

						<button type="submit" className="btn btn-warning mt-5 btn-block lora font-weight-bold">REGISTER</button>
					</form>
				</div>
			</div>
			<div className="row">
				<div className="col-12">
					<a href="#about" className="text-center d-block mt-5">
						<img src={scrolldown} alt=""/>
					</a>
				</div>
			</div>
		</div>
		<About/>
		<Footer/>
		</React.Fragment>
		)
}

export default compose(
	graphql(addUserMutation, {name: 'addUserMutation'}),
	graphql(getUsersQuery, {name: 'getUsersQuery'})
)(RegisterPage)