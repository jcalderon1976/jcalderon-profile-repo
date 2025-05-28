import React, {  useEffect } from 'react';
import './App.css';
import ContactForm from './components/ContactForm';


function App() {
  useEffect(() => {
    // Cargar scripts externos después de renderizar
    const scripts = [
      '/assets/js/jquery.js',
      '/assets/js/bootstrap.bundle.min.js',
      '/assets/js/owl.carousel.js',
      '/assets/js/gsap.min.js',
      '/assets/js/ScrollTrigger.min.js',
      '/assets/js/ScrollToPlugin.min.js',
      '/assets/js/lightbox.min.js',
      '/assets/js/main.js'
    ];

    scripts.forEach(src => {
      const script = document.createElement('script');
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
    });
  }, []);

  return (
      <div className="home1-page">
        <div className="app-container">
            <video className="background-video" muted autoPlay loop playsInline  >
                <source src="/assets/images/video4.mp4" type="video/mp4" />
            </video>

          {/* Preloader  */}
          <div className="page-loader">
              <div className="bounceball"></div>
          </div> 

          <span className="icon-menu">
            <span className="bar"></span>
            <span className="bar"></span>
          </span>

          {/*<!-- Side Menu Bar --> */}
          <div className="responsive-sidebar-menu">
              <div className="overlay">
                <div className="sidebar-menu-inner">
                    <div className="menu-wrap">
                        <p>Menu</p>
                        <ul className="menu scroll-nav-responsive d-flex">
                            <li>
                                <a className="scroll-to" href="#home">
                                    <i className="las la-home"></i> <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="#about">
                                    <i className="lar la-user"></i> <span>About</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="#resume">
                                    <i className="las la-briefcase"></i> <span>Resume</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="#services">
                                    <i className="las la-stream"></i> <span>Services</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="#skills">
                                    <i className="las la-shapes"></i> <span>Skills</span>
                                </a>
                            </li>
                            <li>
                                <a className="scroll-to" href="#contact">
                                    <i className="las la-envelope"></i> <span>Contact</span>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="sidebar-social">
                        <p>Social</p>
                        <ul className="social-links d-flex align-items-center">
                            <li>
                                <a href="https://www.linkedin.com/in/jose-javier-calderon-guzman-9564a2364/"><i className="lab la-linkedin"></i></a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/jcal.deron1976/"><i className="lab la-instagram"></i></a>
                            </li>
                            <li>
                                <a href="https://www.facebook.com/?sk=welcome"><i className="lab la-facebook"></i></a>
                            </li>
                        </ul>
                    </div>
                </div>
              </div>
          </div>
      
          <ul className="menu scroll-nav d-flex">
            <li>
                <a className="scroll-to" href="#home">
                    <span>Home</span> <i className="las la-home"></i>
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#about">
                    <span>About</span> <i className="lar la-user"></i>
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#resume">
                    <span>Resume</span> <i className="las la-briefcase"></i>
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#services">
                    <span>Services</span> <i className="las la-stream"></i>
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#skills">
                    <span>Skills</span> <i className="las la-shapes"></i>
                </a>
            </li>
            <li>
                <a className="scroll-to" href="#contact">
                    <span>Contact</span> <i className="las la-envelope"></i>
                </a>
            </li>
          </ul>
      
          <div className="left-sidebar">
              <div className="sidebar-header d-flex align-items-center justify-content-between">
                  <img src="./assets/images/logo.png" alt="Logo" style={{width: '130px', height: '130px'}}/>
                  <span className="designation">Software Engineer</span>
              </div>
              <img className="me" src="./assets/images/me.jpg" alt="Me" />
              <h4 className="email">jcalderon@orchidspr.com</h4>
              <h4 className="address">Base in San Juan, PR</h4>
            
              <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                  <li>
                      <a href="https://www.linkedin.com/in/jose-javier-calderon-guzman-9564a2364/"><i className="lab la-linkedin"></i></a>
                  </li>
                  <li>
                      <a href="https://github.com/jcalderon1976"><i className="lab la-github"></i></a>
                  </li>
                  <li>
                      <a href="https://www.instagram.com/jcal.deron1976/"><i className="lab la-instagram"></i></a>
                  </li>
                  <li>
                      <a href="https://www.facebook.com/?sk=welcome"><i className="lab la-facebook"></i></a>
                  </li>
                  
              </ul>
                  <a href="mailto:jcalderon@orchidspr.com" className="theme-btn">
                  <i className="las la-envelope"></i> Send Message!
              </a>
          </div>

          {/*-- Main Section -- */}
          <main className="Javi-main">
              <div id="smooth-wrapper">
                  <div id="smooth-content">

                      <div className="left-sidebar">
                          <div className="sidebar-header d-flex align-items-center justify-content-between">
                              <img src="./assets/images/logo.png" alt="Logo" />
                              <span className="designation">Software Engineer</span>
                          </div>
                          <img className="me" src="./assets/images/me.jpg" alt="Me" />
                          <h2 className="email">jcalderon@orchidspr.com</h2>
                          <h2 className="address">Base in San Juan, PR</h2>
                          <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
                              <li>
                                  <a href="https://www.linkedin.com/in/jose-javier-calderon-guzman-9564a2364/"><i className="lab la-linkedin"></i></a>
                              </li>
                              <li>
                                  <a href="https://github.com/jcalderon1976"><i className="lab la-github"></i></a>
                              </li>
                              <li>
                                  <a href="https://www.instagram.com/jcal.deron1976/"><i className="lab la-instagram"></i></a>
                              </li>
                              <li>
                                  <a href="https://www.facebook.com/?sk=welcome"><i className="lab la-facebook"></i></a>
                              </li>
                          </ul>
                          <a href="mailto:jcalderon@orchidspr.com" className="theme-btn">
                              <i className="las la-envelope"></i> Send Message!
                          </a>
                      </div>

                      {/*-- Hero Section --*/}
                      <section className="hero-section page-section scroll-to-page" id="home">

                          <div className="custom-container">
                              <div className="hero-content content-width">
                                  <div className="section-header">
                                      <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                          <i className="las la-home"></i> Introduce
                                      </h4>
                                      <h1 className="scroll-animation" data-animation="fade_from_bottom">Hi from <span>Jose Javier Calderon</span>, Software Engineer</h1>
                                  </div>
                                  <p className="scroll-animation" data-animation="fade_from_bottom">Welcome to my professional page. I am a Software Engineer and Data Management Specialist 
                                      with over 25 years of experience developing innovative technology solutions. This space is designed to showcase who I am and how I can help you 
                                      transform your operations through the strategic use of technology. From artificial intelligence and machine learning to process automation and 
                                      full-stack development, here you'll find everything related to my background and capabilities.</p>
                                  
                                  
                                  
                                  <a href="#services" 
                                      className="go-to-project-btn scroll-to scroll-animation" 
                                      data-animation="rotate_up">
                                      <img src="./assets/images/round-text.png" alt="Rounded Text"/>
                                      <i className="las la-arrow-down"></i>
                                  </a>
              
                                  <div className="facts d-flex">
                                      <div className="left scroll-animation" data-animation="fade_from_left">
                                          <h1>25+</h1>
                                          <p>Years of <br />Experience</p>
                                      </div>
                                      <div className="right scroll-animation" data-animation="fade_from_right">
                                          <h1>50+</h1>
                                          <p>projects completed</p>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
              
                      {/*-- About Section --*/}
                      <section className="about-area page-section scroll-to-page" id="about">
                          <div className="custom-container">
                              <div className="about-content content-width">
                                  <div className="section-header">
                                      <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                          <i className="lar la-user"></i> About
                                      </h4>
                                      <h1 className="scroll-animation" data-animation="fade_from_bottom">Every great design begin with<br />
                                          an even <span>better story</span></h1>
                                  </div>
                                  <p className="scroll-animation" data-animation="fade_from_bottom">I am passionate about technology with a solid background in Software Engineering, 
                                      Database Administration, and Systems Analysis. I specialize in the design and development of scalable and robust solutions, applying agile 
                                      methodologies and modern tools. Throughout my career, I have led complex projects in corporate environments, always ensuring quality, innovation, 
                                      and measurable results. Bilingual in Spanish and English, I firmly believe that technology is a tool to transform the world and improve efficiency
                                      in all sectors.</p>
                              </div>
                          </div>
                      </section>
              
                      {/*-- Resume Section --*/}
                      <section className="resume-area page-section scroll-to-page" id="resume">
                          <div className="custom-container">
                              <div className="resume-content content-width">
                                  <div className="section-header">
                                      <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                          <i className="las la-briefcase"></i> Resume
                                      </h4>
                                      <h1 className="scroll-animation" data-animation="fade_from_bottom">Education & <span>Experience</span></h1>
                                  </div>
              
                                  <div className="resume-timeline">
                                      <div className="item scroll-animation" data-animation="fade_from_right">
                                          <span className="date">2021 - 2025</span>
                                          <h2>FinCEN - Solution Specialist </h2>
                                          <p>Deloitte   </p>
                                          <h2>Ginnie Mae - Solution Specialist </h2>
                                          <p>Deloitte </p>
                                          <h2>Cardinal Health - Solution Specialist </h2>
                                          <p>Deloitte </p>
                                      </div>
                                      <div className="item scroll-animation" data-animation="fade_from_right">
                                          <span className="date">2018 - 2021</span>
                                          <h2>Senior Full Stack Developer </h2>
                                          <p>MMM Holdings</p>
                                      </div>
                                      <div className="item scroll-animation" data-animation="fade_from_right">
                                          <span className="date">2003 - 2018</span>
                                          <h2>Senior Business & Systems Analyst / Developer  </h2>
                                          <p>MAPFRE Puerto Rico </p>
                                      </div>
                                      <div className="item scroll-animation" data-animation="fade_from_right">
                                          <span className="date">1999 - 2003</span>
                                          <h2>Database Administrator & System Administrator </h2>
                                          <p>TOLIC </p>
                                      </div>
                                      <div className="item scroll-animation" data-animation="fade_from_right">
                                          <span className="date">2012 - 2014</span>
                                          <h2>Master of Science in Computer Engineering & Software Engineering </h2>
                                          <p>Polytechnic University of Puerto Rico</p>
                                      </div>
                                      <div className="item scroll-animation" data-animation="fade_from_right">
                                          <span className="date">1994 - 1999</span>
                                          <h2>Bachelor of Science in Electrical Engineering & Computer Science  </h2>
                                          <p>Polytechnic University of Puerto Rico</p>
                                      </div>
                                  </div>
              
                              </div>
                          </div>
                      </section>
              
                      {/*-- Services Section --*/}
                      <section className="services-area page-section scroll-to-page" id="services">
                          <div className="custom-container">
                              <div className="services-content content-width">
                                  <div className="section-header">
                                      <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                          <i className="las la-stream"></i> Services
                                      </h4>
                                      <h1 className="scroll-animation" data-animation="fade_from_bottom">My <span>Specializations</span></h1>
                                  </div>
              
                                  <div className="services-items">
                                      
                                      <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                          <i className="las la-robot"></i>
                                          <h2>Process and Workflow Automation</h2>
                                          <p>Process automation focuses on automating entire end-to-end business processes, including interconnected tasks, activities, and systems. </p>
                                          
                                      </div>
                                      <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                          <i className="las la-brain"></i>
                                          <h2>Artificial Intelligence and LLM Model Integration</h2>
                                          <p>Embedding LLMs within existing AI systems or applications to enhance their capabilities or automate tasks. This integration leverages the 
                                              advanced language processing abilities of LLMs to improve user experience, increase efficiency, and unlock new functionalities, forming 
                                              the foundation for AI and Generative AI tools</p>
                                          
                                      </div>
                                      <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                          <i className="las la-bezier-curve"></i> 
                                          <h2> Enterprise Solutions Architecture</h2>
                                          <p>Design and oversee the implementation of enterprise-wide solutions to meet business needs.</p>
                                        
                                      </div>
                                      <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                          <i className="las la-mobile"></i>
                                          <h2>UI/UX designer</h2>
                                          <p>Design visual appearance (UI) and the overall experience (UX) of digital products like websites and mobile apps.</p>
                                        
                                      </div>
                                      <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                          <i className="las la-retweet"></i>
                                          <h2> CI/CD and DevOps Implementation</h2>
                                          <p>CI/CD (Continuous Integration/Continuous Delivery/Deployment) and DevOps Implementation refer to distinct, yet related, practices in software development. 
                                              CI/CD automates the software delivery process by integrating code changes, building, testing, and deploying applications in a continuous manner, while DevOps 
                                              is a broader cultural and organizational approach that fosters collaboration and automation between development and operations teams, often using CI/CD as a 
                                              key component. </p>
                                          
                                      </div>
                                      <div className="service-item scroll-animation" data-animation="fade_from_bottom">
                                          <i className="las la-code"></i>
                                          <h2>Legacy Systems Migration and Modernization</h2>
                                          <p>Increase the traffic for your website with SEO optimized</p>
                                          
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </section>
              
                      {/*-- Skills Section -- */}
                      <section className="skills-area page-section scroll-to-page" id="skills">
                          <div className="custom-container">
                              <div className="skills-content content-width">
                                  <div className="section-header">
                                      <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                          <i className="las la-shapes"></i> my skills
                                      </h4>
                                      <h1 className="scroll-animation" data-animation="fade_from_bottom">My <span>Advantages</span></h1>
                                  </div>
              
                                  <div className="row skills text-center">
                                      <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                                          <div className="skill">
                                              <div className="skill-inner">
                                                  <img src="./assets/images/java.png" alt="java"/>
                                                  <h1 className="percent">82%</h1>
                                              </div>
                                              <p className="name">Java</p>
                                          </div>
                                      </div>
                                      <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                          <div className="skill">
                                              <div className="skill-inner">
                                                  <img src="./assets/images/_net.png" alt=".Net" />
                                                  <h1 className="percent">95%</h1>
                                              </div>
                                              <p className="name">.Net</p>
                                          </div>
                                      </div>
                                      <div className="col-md-3 scroll-animation" data-animation="fade_from_top">
                                          <div className="skill">
                                              <div className="skill-inner">
                                                  <img src="./assets/images/angular.png" alt="Webflow" />
                                                  <h1 className="percent">85%</h1>
                                              </div>
                                              <p className="name">Angular</p>
                                          </div>
                                      </div>
                                      <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                                          <div className="skill">
                                              <div className="skill-inner">
                                                  <img src="./assets/images/react.png" alt="React" />
                                                  <h1 className="percent">85%</h1>
                                              </div>
                                              <p className="name">React</p>
                                          </div>
                                      </div>
                                      <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                          <div className="skill">
                                              <div className="skill-inner">
                                                  <img src="./assets/images/node.png" alt="Node JS" />
                                                  <h1 className="percent">85%</h1>
                                              </div>
                                              <p className="name">Node JS</p>
                                          </div>
                                      </div>
                                      <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                          <div className="skill">
                                              <div className="skill-inner">
                                                  <img src="./assets/images/jenkins.png" alt="Jenkins" />
                                                  <h1 className="percent">73%</h1>
                                              </div>
                                              <p className="name">Jenkins</p>
                                          </div>
                                      </div>
                                      <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                                          <div className="skill">
                                              <div className="skill-inner">
                                                  <img src="./assets/images/aws.png" alt="AWS" />
                                                  <h1 className="percent">86%</h1>
                                              </div>
                                              <p className="name">AWS</p>
                                          </div>
                                      </div>
                                      <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                                          <div className="skill">
                                              <div className="skill-inner">
                                                  <img src="./assets/images/azure.png" alt="Azure" />
                                                  <h1 className="percent">70%</h1>
                                              </div>
                                              <p className="name">Azure</p>
                                          </div>
                                      </div>
                                    
                                  </div>
              
                              </div>
                          </div>
                      </section>
              
              
                      {/*-- Testimonial Section --*/}
                      <section className="testimonial-area page-section scroll-to-page" id="testimonial">
                          <div className="custom-container">
                              <div className="testimonial-content content-width">

                                  
                                  <div className="clients-logos">
                                      <h4 className="scroll-animation" data-animation="fade_from_bottom">work with brands worldwide</h4>
                                      <div className="row align-items-center">
                                          <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                                              <img src="./assets/images/client-4.png" alt="client" />
                                          </div>
                                          <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                              <img src="./assets/images/client-5.png" alt="client" />
                                          </div>
                                          <div className="col-md-3 scroll-animation" data-animation="fade_from_top">
                                               <img src="./assets/images/client-6.png" alt="client" />
                                          </div>
                                          <div className="col-md-3 scroll-animation" data-animation="fade_from_right">
                                              <img src="./assets/images/client-1.png" alt="client" />
                                          </div>
                                          <div className="col-md-3 scroll-animation" data-animation="fade_from_left">
                                              <img src="./assets/images/client-2.png" alt="client" />
                                          </div>
                                          <div className="col-md-3 scroll-animation" data-animation="fade_from_bottom">
                                              <img src="./assets/images/client-3.png" alt="client" />
                                          </div>
                                          <div className="col-md-3 scroll-animation" data-animation="fade_from_top">
                                              <img src="./assets/images/client-7.png" alt="client" />
                                          </div>
                                        
                                      </div>
                                  </div>
              
                              </div>
                          </div>
                      </section>
            
                    
                      {/*-- Contact Section --*/}
                        {/* Contact Section */}
                        <section className="contact-area page-section scroll-content" id="contact">
                          <div className="custom-container">
                              <div className="contact-content content-width">
                                  <div className="section-header">
                                      <h4 className="subtitle scroll-animation" data-animation="fade_from_bottom">
                                          <i className="las la-envelope"></i> contact
                                      </h4>
                                      <h1 className="scroll-animation" data-animation="fade_from_bottom">Let's Work <span>Together!</span></h1>
                                  </div>
                                  <h3 className="scroll-animation" data-animation="fade_from_bottom">jcalderon@orchidspr.com</h3>
                                  <p id="required-msg">* Marked fields are required to fill.</p>
                                  <div className="app-container">
                                    <ContactForm />
                                  </div>
                              </div>
                          </div>
                      </section>

                  </div>
              </div>
          </main>
        </div>
      </div>  
  );
}

export default App;
