import React from 'react'
import perform1 from '../images/perform1.png'
import perform2 from '../images/perform2.jpg'
import perform3 from '../images/perform3.jpg'
import perform4 from '../images/perform4.jpg'
import perform5 from '../images/perform5.png'
import perform6 from '../images/perform6.png'
import artistoverview from '../images/artistoverview.png'

const About = ()=> {
	return(
		<section id="about" className="container-fluid p-0">
			<div id="meaning" className="p-5">
				<h1 className="lora">mi·me·sis</h1>
				<h2 className="yellow lora">/məˈmēsis/</h2>
				<h3 className="mt-4">Representation or imitation of the real world <br/> in art and literature.</h3>
			</div>
			<div id="artwork" className="text-center p-5">
				<h1 className="p-5 lora grey">Artworks . <strong className="yellow lora">Shots</strong> . Performances</h1>
				<div className="container bg-warning mt-5">
					<div className="row">
						<div data-aos="fade-up" className="col-md-6 p-0">
							<img src={perform1} alt="" className="img-fluid"/>
						</div>
						<div data-aos="fade-up" className="col-md-6 p-0">
							<img src={perform2} alt="" className="img-fluid"/>
						</div>
						<div className="col-md-6 p-0">
							<img src={perform3} alt="" className="img-fluid" data-aos="fade-up"/>
						</div>
						<div className="col-md-6 p-0">
							<img src={perform4} alt="" className="img-fluid" data-aos="fade-up"/>
						</div>
						<div className="col-md-6 p-0">
							<img src={perform5} alt="" className="img-fluid" data-aos="fade-up"/>
						</div>
						<div className="col-md-6 p-0">
							<img src={perform6} alt="" className="img-fluid" data-aos="fade-up"/>
						</div>
					</div>
				</div>
			</div>
			<div id="artistOverview">
				<div className="container">
					<div className="row">
						<div className="col-lg-8">
							<img src={artistoverview} alt="" className="img-fluid"/>
						</div>
						<div className="col-lg-4 text-center p-lg-2 pt-5">
							<h4 ><strong className="lora">Tell us which artists you like</strong></h4>
							<p className="">We'll create an experience just for you</p>
							<a href="#top" className="btn btn-warning lora px-5 mt-3 font-weight-bold">LET'S GO</a>
						</div>
					</div>
				</div>
			</div>
			<div id="quote">
				<div className="container text-center">
					<h1 className="lora black">"Every child is an artist. The problem is how to remain an artist once we grow up."</h1>
					<h1 className="lora grey mt-5">- Picasso</h1>
				</div>
			</div>
		</section>
	)
}

export default About