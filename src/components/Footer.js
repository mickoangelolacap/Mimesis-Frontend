import React from 'react'
import scrolldown from '../images/scrolldown.gif'

const Footer = ()=> {
	return(
		<section id="footer" className="container-fluid p-5">
			<div className="row justify-content-center">
				<div className="col-md-8">
					<h2 className="yellow">ABOUT</h2>
					<span className="grey">Mimesis is an Online / Home-based tutorial web app for aspiring Artists.</span>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="col-md-8">
					<div className="row">
						<div className="col-lg-4 col-md-6 mt-5">
							<h2 className="yellow">EMAIL</h2>
							<span className="grey">mickoangelolacap@gmail.com</span>
						</div>
						<div className="col-lg-4 col-md-6 mt-5">
							<h2 className="yellow">PHONE</h2>
							<span className="grey">+63956-872-0280</span>
						</div>
						<div className="col-lg-4 mt-5">
							<h2 className="yellow">SOCIAL</h2>
							<span className="social-media">
		                        <a href="https://www.facebook.com/mickoangelolacap" target="_blank" rel="noopener noreferrer">
		                            <i className="fab fa-facebook-square"></i>
		                        </a>
		                        <a href="https://www.instagram.com/mickoangelolacap/" target="_blank" rel="noopener noreferrer">
		                            <i className="fab fa-instagram"></i>
		                        </a>
		                        <a href="https://www.twitter.com/angelolacap" target="_blank" rel="noopener noreferrer">
		                            <i className="fab fa-twitter"></i>
		                        </a> 
		                        <a href="https://www.linkedin.com/in/mickoangelolacap" target="_blank" rel="noopener noreferrer">
		                            <i className="fab fa-linkedin"></i>
		                        </a>
		                    </span>
						</div>
					</div>
				</div>
			</div>
			<div className="row justify-content-center mt-5">
				<div className="col-md-8 mt-lg-5">
					<h2 className="yellow">DISCLAIMER</h2>
					<span className="grey">This website is for educational purposes only and not for commercial use.</span>
				</div>
			</div>
			<div className="row justify-content-center mt-5">
				<div className="col-8 mt-5 text-lg-left text-center">
					<span className="grey">&copy; 2020 | <strong className="yellow">Micko Angelo C. Lacap</strong> | All rights reserved.</span>
					<a href="#top" className="text-center ml-lg-5">
						<img src={scrolldown} alt="" className="img-fluid mt-lg-0 mt-5"/>
					</a>
				</div>
			</div>
		</section>
	)
}

export default Footer