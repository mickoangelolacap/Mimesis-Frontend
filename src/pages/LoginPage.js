import React, {useState} from 'react'
import Swal from 'sweetalert2'
import { Redirect } from 'react-router-dom'
import About from '../components/About'
import Footer from '../components/Footer'
import scrolldown from '../images/scrolldown.gif'

import { graphql} from 'react-apollo'
import { loginMutation } from '../graphql/mutations'

import AppNavbar from '../components/AppNavBar'

const LoginPage = (props)=>{

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const [isRedirected, setIsRedirected] = useState(false)

	// If the state has a value of true, redirect to the ProductsPage
	if (isRedirected) {
        return <Redirect to='/home'/>
    }

	const login = (e) => {
		e.preventDefault()

		props.loginMutation({
            variables: {
                email: email,
                password: password
            }
        }).then((response) => {
          
            let data = response.data.login

            if (data != null) {
                localStorage.setItem('id', data.id)
                localStorage.setItem('name', data.firstName + " " + data.lastName)
                localStorage.setItem('role', data.role)
                localStorage.setItem('token', data.token)
	            // console.log(localStorage)
	   			//we will be redirected to Products Page
	            setIsRedirected(true)
            } else {
                Swal.fire({
                    title: 'Login Failed',
                    text: 'Either your email or password is incorrect, please try again.',
                    type: 'error',
                    background: '#333'
                })
            }
        })
	}

	return(
		<React.Fragment>
		<AppNavbar/>
			
		<div id="login" className="container-fluid p-md-5 p-4">
			<div className="row justify-content-md-center text-md-left text-center">
				<div className="col-lg-7">
					<h1 className="lora yellow">Mimesis.</h1>
					<h2 className="px-3 py-0">Learn Arts Professionally</h2>
					<a href="#about" className="btn btn-outline-warning btn-lg px-5 ml-3 mt-3 lora">Learn more</a>
				</div>
				<div id="form" className="col-lg-3 col-md-8 p-5 mt-lg-0 mt-5">
					<h3 className="lora pb-2">LOGIN.</h3>
					<form onSubmit={(e)=> login(e)}>
						<div className="form-group">
							<input 
								value={email}
								onChange={(e)=> setEmail(e.target.value)}
								name="email"
								type="email" 
								className="form-control"
								placeholder="EMAIL"/>
						</div>
						<div className="form-group">
							<input 
								value={password}
								onChange={(e)=> setPassword(e.target.value)}
								name="password"
								type="password" 
								className="form-control"
								placeholder="PASSWORD"/>
						</div>
						<button type="submit" className="btn btn-warning mt-5 btn-block lora font-weight-bold">LOGIN</button>
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

export default graphql(loginMutation, {name: 'loginMutation'})(LoginPage)