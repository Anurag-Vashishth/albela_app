import React from 'react';
import './css/style.css';
import './css/manoj.css';
import './css/alerts.css';
import './css/responsive.css';
import './css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
import 'owl.carousel/dist/assets/owl.carousel.css';
import './css/owl.theme.default.min.css';

class App extends React.Component {
	render (){
  return (
    <div className="App">
     <header>
		<div className="head-top-nav">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-12">
						<ul>
							<li><a href={"#"}><i className="fas fa-phone-alt"></i> +91 9818840286 </a></li>
							<li><a href={"https://www.facebook.com/Albela.Films.Studios"}><i className="fab fa-facebook-f"></i></a></li>
							<li><a href={"https://www.instagram.com/albela.studios.films/"}><i className="fab fa-instagram"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
		<div className="head-nav-third" id="sticker">
			<div className="container">
				<div className="row">
					<div className="col-lg-12 col-sm-12 col-md-12 col-12">
						<nav className="navbar navbar-expand-lg">
							<a className="navbar-brand" href="index.html"><img src={require('./img/logo.png').default} className="img-fluid" alt=""/></a>
							<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
								<i className="fal fa-bars"></i>
							</button>
							<div className="collapse navbar-collapse" id="collapsibleNavbar">
								<ul className="navbar-nav ml-auto">
									<li className="nav-item active">
										<a className="nav-link" href="index.html">Home </a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#about"> About Us</a>
									</li>
									<li className="nav-item">
										<a className="nav-link" href="#services">Services </a>
									</li> 
									<li className="nav-item">
										<a className="nav-link" href="#our-work"> Our Work   </a>
									</li>  
									<li className="nav-item">
										<a className="nav-link default-btn" href={"#work-process"}>Work Process </a>
									</li>  
									<li className="nav-item">
										<a className="nav-link default-btn" href={"#clients"}>Our Clients   </a>
									</li>  
									<li className="nav-item">
										<a className="nav-link default-btn" href={"#contact-us"}> Contact Us</a>
									</li>  
								</ul>
							</div>  
						</nav>
					</div>
				</div>
			</div>
		</div>
	</header>
	<section className="hero-slider-area-two">
         <div className="hero-slider-wrap-two owl-theme owl-carousel" data-slider-id="1">
            <div className="hero-slider-item bg-4">
               <div className="d-table">
                  <div className="d-table-cell">
                     <div className="container">
                        <div className="hero-slider-text">
                           <h1>Video Solution For Every Stage</h1>
                           <p>Albela is a high-quality video production house!</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className="hero-slider-item bg-5">
               <div className="d-table">
                  <div className="d-table-cell">
                     <div className="container">
                        <div className="hero-slider-text">
                           <h1>Excellent Ideas Brilliantly Done</h1>
                           <p>Albela is a high-quality video production house!</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="thumbs-wrap">
            <div className="owl-thumbs hero-slider-thumb" data-slider-id="1">
               <div className="owl-thumb-item">
                  <span>01</span>
               </div>
               <div className="owl-thumb-item">
                  <span>02</span>
               </div>
            </div>
         </div>
    </section>
	{/* slider */}
	{/* <div className="main-slider">
		<div className="full-container">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-12 padding-zero">
					<div className="owl-slider">
						<div id="main-carousel" className="owl-theme owl-carousel">
							<div className="item">
								<img className="owl-lazy" data-src="img/home-banner.png" alt="" />
								<div className="slider-text">
									<div className="container">
										<h1>Innovative Corporate Videos <span>Movie Production, Film Studio, Creative & Entertainment</span></h1>
									</div>
								</div>
							</div>
							<div className="item">
								<img className="owl-lazy" data-src="img/home-banner.png" alt="" />
								<div className="slider-text">
									<div className="container">
										<h1>Innovative Corporate Videos <span>Movie Production, Film Studio, Creative & Entertainment</span></h1>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div> */}
	{/* slider */}
	<div className="home-about-section" id="about">
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-md-6 col-sm-6 col-12">
					<img src={require("./img/home-about.png").default} className="img-fluid" alt="About Us" />
				</div>
				<div className="col-lg-6 col-md-6 col-sm-6 col-12">
					<h2>About <span>Albela</span> Films & Studio</h2>
					<h3 className="default-heading">We are a creative film and video production-based company.</h3>
					<p>We help in developing advertising and marketing content for the companies.

					We make all kind of videos & creatives for fun. To be precise, explainer videos, short social ads, product demo videos, product shoots, short films and it just goes on & on. But if you ask real nice and pay us, we can make them for you too. Plus, we are the real deal on conference calls.

					We strive for perfection with every video we produce, sites we build, or photo shoots we hold , but the reality is we only achieve it all the time.
					</p>
					<h3 className="default-heading">VIDEO PRODUCTION -Albela films and studio </h3>
					<p>If you are hunting for a content development agency or Best Ad & Corporate Film & Promotional Video Production House in Delhi NCR. Which can deliver you ace level content in arena of videos like corporate films maker, Ad Film Maker In Delhi NCR TV commercials, Documentary films, Promotional videos, Product Videos Maker, Corporate Explainer videos, Training Videos, Media Planning / Buying, 2D & 3D animation videos or motion graphics, you are at right place.</p>
				</div>
			</div>
		</div>
	</div>
	<div className="filming-service" id="services">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-12">
					<h3 className="default-heading">OUR SERVICES</h3>
					<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
					<div className="row">
						<div className="col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="service-slider-box">
								<img src={require("./img/icon/tv-commercial.png").default} className="img-fluid d-block mx-auto" alt="" />
								<h4>TVC/Digital Films - TV Commercials </h4>
								<p>Consumers buy what they see”, a reality that has been widely accepted by industry stalwarts. Not just, how product looks in TV commercial matters, but how it establishes the direct connect with consumers matters a lot too. Our TV commercial services offer our clients with fresh ideas for TV commercials that tell story with which consumers feel coupled. Our great sense of cinema, storytelling & aesthetics make the outcome impeccable for the audience to see</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="service-slider-box">
								<img src={require("./img/icon/Documentary-Films.png").default} className="img-fluid d-block mx-auto" alt=""/>
								<h4>Documentary Films </h4>
								<p>Documenting history, facts, processes, journeys etc. have never been an easy task for most of the film makers. Commenting & communicating, a key to documentary film making, has always been strong forte for Albela films. Detailed subject research blended with essentials of professional Voice overs, camera teams, editors, interviewers etc. paves way for creation of documentary that immerses viewers in its own realm.</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="service-slider-box">
								<img src={require("./img/icon/Editing-Graphic-Animation.png").default} className="img-fluid d-block mx-auto" alt=""/>
								<h4>Editing/Graphic Animation</h4>
								<p>Videos have the power to create a magical story for your business. They give it a touch of aesthetics, a hint of emotions and a whole lot of engagement. And we, go the extra mile, to make your business stand out of the clutter through our videos. go the extra mile, to make your business stand out of the clutter through our videos.</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="service-slider-box">
								<img src={require("./img/icon/Web-Graphics.png").default} className="img-fluid d-block mx-auto" alt=""/>
								<h4>Web Graphics And Product Video </h4>
								<p>Social media graphics, web banners, infographics. The essence of using the beautiful, exotic & compelling imagery in form of stills or video has always been crucial in presenting the product or services of the client. Such imagery plays vital role in enhancing the brand image as well as acting as stimulus for consumers to purchase the product. Our indoor & outdoor shooting proficiency helps us to create numero-uno product videos for our clients.</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="service-slider-box">
								<img src={require("./img/icon/Training-Videos-Maker.png").default} className="img-fluid d-block mx-auto" alt=""/>
								<h4>Testimonial video , Training Videos Maker </h4>
								<p>Gone are the days, when gaining trust was a difficult task for organizations. For most of the content that is repetitive in nature, organizations are turning towards Testimonial Videos. Our Expertise brings our clients not only the great experience but also earns them the satisfied users.</p>
							</div>
						</div>
						<div className="col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="service-slider-box">
								<img src={require("./img/icon/Digital--Advertising-Marketing.png").default} className="img-fluid d-block mx-auto" alt=""/>
								<h4>Digital/ Advertising Marketing  </h4>
								<p>While brands establish their presence across mediums in upfront manner, they also sneak into layers of subconscious through interesting presentations on all media platforms, organically or inorganically . SEO/SMO of the brand or the product . It showcase the product or service in rather indirect way. Weaved in captivating story line along with wisely placing of product or service helps us creating sensible videos for our clients.</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-lg-3 col-md-3 col-sm-3 col-12">
						</div>
						
						<div className="col-lg-6 col-md-6 col-sm-6 col-12">
							<div className="service-slider-box">
								<img src={require("./img/icon/Creative-Content--Writing.png").default} className="img-fluid d-block mx-auto" alt=""/>
								<h4>Creative Content/ Writing </h4>
								<p>Every brand requires creative approaches for product-narratives and consumer-connectivity. Every brand wants to tell its story, and that is how businesses connect with customers. The content writing is an essential thing for SEO, and if you want to rate your web pages and blogs at the top of SERPs, you need to have excellent content writing and great SEO oriented material. With the knack of developing characters, setting and telling stories around them, creative writers know exactly what connects with masses using poetry and proses. While businesses can get bewildered with the number of options available in the market, we eases the process with well-researched details of companies for creative writing.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="our-work">
		<div className="full-container" id="our-work">
			<div className="row">
				<div className="col-lg-6 col-sm-4 col-md-4 col-12">
					<div className="work-block">
						<h3 className="default-heading">Our Key Features</h3>
						<p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution</p>
					</div>
				</div>
				<div className="col-lg-3 col-sm-4 col-md-4 col-12">
					<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
						<div className="flipper">
						<div classname="front" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/work-1.png'})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '0 0'}}>
							</div>
							<div className="back">
							  <div className="back-title">Industrial Shoot</div>
							  <p>Get your factory a walkthrough with our factory video shoot services. We deliver you the best quality video at an attractive price.</p>
							</div>
						</div>
					</div>
					{/* <div className="img-box">	
						<img src={require("./img/work-1.png").default} className="img-fluid" alt="" />
					</div> */}
				</div>
				<div className="col-lg-3 col-sm-4 col-md-4 col-12">
					<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
						<div className="flipper">
							<div classname="front" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/work-2.png'})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '0 0'}}>
							</div>
							<div className="back">
							  <div className="back-title">CORPORATE FILMS</div>
							  <p>Corporate films, or corporate videos, are used to connect the boardroom to its employees and convey the company’s ethics and ethos to the consumer. we offers the best corporate video production in Delhi NCR region with state of the art production facilities</p>
							</div>
						</div>
					</div>
					{/* <div className="img-box">
						<img src={require("./img/work-2.png").default} className="img-fluid" alt="" />
					</div> */}
				</div>
				<div className="col-lg-3 col-sm-4 col-md-4 col-12">
					<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
						<div className="flipper">
							<div classname="front" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/work-3.png'})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '0 0'}}>
							</div>
							<div className="back">
							  <div className="back-title">MARKETING AND ADVERSTISING COMPANY </div>
							  <p>We are the Best Promotional Video Production House Company in Delhi & NCR region. With a 360-degree experience into video production & media buying & management, we are the most preferred video partners for various reputed brands.</p>
							</div>
						</div>
					</div>
					{/* <div className="img-box">
						<img src={require("./img/work-3.png").default} className="img-fluid" alt="" />
					</div> */}
				</div>
				<div className="col-lg-3 col-sm-4 col-md-4 col-12">
					<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
						<div className="flipper">
						<div classname="front" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/work-4.png'})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '0 0'}}>
							</div>
							<div className="back">
							  <div className="back-title">Product Demo Video  </div>
							  <h5>(2016)</h5>
							  <p>Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor imperdiet nec consequata congue id sem. Maecenas malesuada faucibus finibus. Donec vitae libero porttitor laoreet sapiena ultrices leo. Duis dictum vestibulum ante vitae ullamcorper.</p>
							</div>
						</div>
					</div>
					{/* <div className="img-box">
						<img src={require("./img/work-4.png").default} className="img-fluid" alt="" />
					</div> */}
				</div>
				<div className="col-lg-3 col-sm-4 col-md-4 col-12">
					<div className="video-demo-box">
						<h4>Product Demo Video  </h4>
						<h5> (2017)</h5>
						<p>Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor imperdiet nec consequata congue id sem. Maecenas malesuada faucibus finibus. Donec vitae libero porttitor laoreet sapiena ultrices leo. Duis dictum vestibulum ante vitae ullamcorper.</p>
					</div>
				</div>
				<div className="col-lg-3 col-sm-4 col-md-4 col-12">
					<div className="flip-container" ontouchstart="this.classList.toggle('hover');">
						<div className="flipper">
							<div classname="front" style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/img/work-5.png'})`,
							backgroundRepeat: 'no-repeat',
							backgroundPosition: '0 0'
						}}>
							</div>
							<div className="back">
							  <div className="back-title">Product Demo Video  </div>
							  <h5>(2018)</h5>
							  <p>Proin ullamcorper pretium orci. Donec nec scelerisque leo. Nam massa dolor imperdiet nec consequata congue id sem. Maecenas malesuada faucibus finibus. Donec vitae libero porttitor laoreet sapiena ultrices leo. Duis dictum vestibulum ante vitae ullamcorper.</p>
							</div>
						</div>
					</div>
					{/* <div className="img-box">
						<img src={require("./img/work-5.png").default} className="img-fluid" alt="" />
					</div> */}
				</div>
			</div>
		</div>
	</div>
	<div className="work-flow" id="work-process">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-12">
					<h2>workflow</h2>
					<h3 className="default-heading">Our Work Process</h3>
					<p>To make life of our clients easier, we have developed a comprehensive workflow.</p>
					<div className="work-flow-list">
						<ul>
							<li>
								<div className="flow-icon">
									<img src={require("./img/flow-icon-1.png").default} className="img-fluid" alt=""/>
								</div>
								<h4>Get Idea</h4>
								<p>Every project starts with a great idea.</p>
							</li>
							<li>
								<div className="flow-icon">
									<img src={require("./img/flow-icon-2.png").default} className="img-fluid" alt=""/>
								</div>
								<h4>Discuss</h4>
								<p>Your inputs are most valuable asset for success.</p>
							</li>
							<li>
								<div className="flow-icon">
									<img src={require("./img/flow-icon-3.png").default} className="img-fluid" alt=""/>
								</div>
								<h4>Make Plan</h4>
								<p>An thoughtful execution plan ensures timely delivery.</p>
							</li>
							<li>
								<div className="flow-icon">
									<img src={require("./img/flow-icon-4.png").default} className="img-fluid" alt=""/>
								</div>
								<h4>Production</h4>
								<p>Lights Camera Action! All the magic happens here.</p>
							</li>
							<li>
								<div className="flow-icon">
									<img src={require("./img/flow-icon-5.png").default} className="img-fluid" alt=""/>
								</div>
								<h4>Approval</h4>
								<p>Your approval really means a lot for our entire team.</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="our-partners" id="clients">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-12">
					<h2>Our Customers</h2>
					<h3 className="default-heading">Our Statisfied Clients</h3>
					<p>Here's list of few of our satisfied clients. You are in good company.</p>
					<div className="brand-carousel section-padding owl-carousel">
						<div className="single-logo">
							<img src={require("./img/p-1.png").default} alt="" />
						</div>
						<div className="single-logo">
							<img src={require("./img/p-2.png").default} alt="" />
						</div>
						<div className="single-logo">
							<img src={require("./img/p-3.png").default} alt="" />
						</div>
						<div className="single-logo">
							<img src={require("./img/p-4.png").default} alt="" />
						</div>
						<div className="single-logo">
							<img src={require("./img/p-5.png").default} alt="" />
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="get-in-touch" id="contact-us">
		<div className="container">
			<div className="row">
				<div className="col-lg-12 col-md-12 col-sm-12 col-12">
					<h2>The Best Ways To</h2>
					<h3 className="default-heading">Get In Touch With Us.</h3>
					<p>Your questions are important to us, so we want to provide you with direct access to the right people on our team who can support you.</p>
					<div className="row">
						<div className="col-lg-4 col-md-4 col-sm-4 col-12">
							<div className="contact-small-box">
								<h3>Contact No.</h3>
								<p>+91 9818840286  </p>
								<h3>E- Mail</h3>
								<p>albelastudios@gmail.com</p>
								<h3>Address</h3>
								<p>Hudco Place Extenstio, South Extension, New Delhi - 49</p>
							</div>
						</div>
						<div className="col-lg-8 col-md-8 col-sm-8 col-12">
							<div className="contact-big-box">
								<div className="row">
									<div className="col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Enter Name" />
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<input type="number" className="form-control" placeholder="Enter Mobile Number" />
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<input type="email" className="form-control" placeholder="Enter Email" />
										</div>
									</div>
									<div className="col-lg-6 col-md-6 col-sm-6 col-12">
										<div className="form-group">
											<input type="text" className="form-control" placeholder="Reason" />
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<textarea rows="5" cols="5" className="form-control" placeholder="Message"></textarea>
										</div>
									</div>
									<div className="col-lg-12 col-md-12 col-sm-12 col-12">
										<div className="form-group">
											<input type="submit" className="color-default-btn" value="Submit" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="upper-footer">
		<div className="container">
			<div className="row">
				<div className="col-lg-3 col-md-3 col-sm-3 col-12">
					<img src={require("./img/upperfooter-logo.png").default} className="img-fluid" alt="Albela" />
				</div>
				<div className="col-lg-2 col-md-2 col-sm-2 col-12">
					<h5><span>50+</span> Happy Clients</h5>
				</div>
				<div className="col-lg-2 col-md-2 col-sm-2 col-12">
					<h5><span>2</span> Winning Awards</h5>
				</div>
				<div className="col-lg-2 col-md-2 col-sm-2 col-12">
					<h5><span>50+</span> Completed Project</h5>
				</div>
				<div className="col-lg-2 col-md-2 col-sm-2 col-12">
					<h5><span>Unlimited</span> Best Shots</h5>
				</div>
			</div>
		</div>
	</div>
	<footer>
		<div className="container">
			<div className="row logo-row">
				<div className="col-lg-6 col-sm-6 col-md-6 col-12">
					
				</div>
				<div className="col-lg-6 col-sm-6 col-md-6 col-12">
					<ul>
						<li><a href={"https://www.facebook.com/Albela.Films.Studios"}><i className="fab fa-facebook-f" aria-hidden="true"></i></a></li>
						<li><a href={"https://www.instagram.com/albela.studios.films/"}><i className="fab fa-instagram" aria-hidden="true"></i></a></li>
					</ul>
				</div>
			</div>
			<div className="row footer-links">
				<div className="col-lg-4 col-sm-4 col-md-4 col-12">
					<h3>Pages</h3>
					<ul>
						<li><a href={"index.html"}>Home</a></li>
						<li><a href={"#about"}>About</a></li>
						<li><a href={"#services"}>Services</a></li>
						<li><a href={"#work-process"}>Work Flow</a></li>
						<li><a href={"#clients"}>Clients</a></li>
					</ul>
				</div>
				<div className="col-lg-4 col-sm-4 col-md-4 col-12">
					<h3>Reach Us</h3>
					<ul>
						<li><a href={"https://www.facebook.com/Albela.Films.Studios"} ><i className="fab fa-facebook-f" aria-hidden="true"></i> Facebook</a></li>
						<li><a href={"https://www.instagram.com/albela.studios.films/"}><i className="fab fa-instagram" aria-hidden="true"></i> Instagram</a></li>
						<li><a href={"#contact-us"}>Contact Us</a></li>
					</ul>
				</div>
				<div className="col-lg-4 col-sm-4 col-md-4 col-12">
					<h3>Contact Us</h3>
					<ul>
						<li><i className="fas fa-map-marker-alt"></i> Hudco Place Extenstio, South Extension, New Delhi - 49</li>
						<li><i className="fas fa-mobile-alt"></i> +91 9818840286  </li>
						<li><i className="far fa-envelope"></i> albelastudios@gmail.com</li>
						<li><i className="fas fa-globe-europe"></i> www.albelaastudios.com</li>
					</ul>
				</div>
			</div>
			<div className="row page-ending">
				<div className="col-lg-12 col-md-12 col-sm-12 col-12">
					<p>© Copyright. Albela 2021. All Right Reserved.</p>
				</div>
			</div>
		</div>
	</footer>
    </div>
  );
				}
}

export default App;
