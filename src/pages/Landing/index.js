import React from 'react'
import '../../App.css'
import Headshot from '../../assests/images/headshot.png'
import { Link } from 'react-router-dom';
import { ArrowDownCircle } from 'react-feather';
import './font.css'

function Landing(){
    return(
        <div>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url("https://sat02pap005files.storage.live.com/y4mccQegH1llhIfqRKMdAXiRthJjyBcQ1H1eBSvib3C8Nx5u_C181cxK4SgIMiBjg8lZJw4ul0AR1ZxSLO-bWrWZ8WrFU3-_wVy1qA0K530m8otUr5vNpgZBdEzMG52cbqwhyDZqoo8js9ZCM8sLZntIjyjRzx9jcPb8HhDyqcQz-MiC4NhBT4g4JjRFMn_hfb1?width=1024&height=683&cropmode=none")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <div className='inner-text'>
                        <h1 className="mb-5 text-5xl font-bold pt-40 text-white">MERN STACK WEB DEVELOPER</h1>
                        <p className="mb-5"></p>
                        </div>
                        <div className="group pt-40 hover:animate-bounce">
                        <button>
                        <a href='#about'><ArrowDownCircle className='arrow'></ArrowDownCircle></a>
                        </button>
                            <p className="invisible group-hover:visible">Scroll Down</p>
                        </div>
                    </div>
                </div>
            </div>

    {/* ABOUT */}

            <h2 data-aos="fade-right" id='about' className='landing-skills text-center pt-10 text-5xl	bg-[#29243c78] text-white landingH2'>ABOUT</h2>
            <div className='bg-[#29243c78] text-white '>
            <div data-aos="zoom-in" data-aos-duration="2000" className='about pt-14 flex flex-wrap justify-center'>
            <div className=" card lg:card-side w-10/12 p-5 glass">
            <figure><img src={Headshot} alt="Album"/></figure>
            <div className="card-body justify-around ">
                <h2 className="signature card-title">Valeria Garcia</h2>
                <div className='card-text'>
                <p className='min-w-fit'>Full-stack web developer based out of Salt Lake City, Utah. Graduated from The University of Utah. Here to provide everything you will need for your perfect website and tutoring for computer science students of all ages interested in programming. </p>
                </div>
                <div className='flex flex-wrap p-3 justify-center'>
                <button className="about-btn btn btn-primary btn-wide text-white"><Link to={'/projects'}>View Work</Link></button>  
                    </div>
                </div>
            </div>
            </div>

            <div className="divider pt-9"></div> 

               {/* services */}
        <h2 className='text-center pt-10 text-5xl landingH2'>SERVICES</h2>
        <div className='flex flex-wrap justify-center p-8 space-x-4 '>
            <div data-aos="fade-right" className="card w-96 bg-neutral ">
            <div className="card-body items-center text-center">
                <h2 className="card-title underline">WEB DEVELOPMENT</h2>
            <div className='frontend'>
                <dl>
                    <dt>Landing Page</dt>
                    <dt>Ecommerce Website</dt>
                    <dt>Booking Website</dt>
                    <dt>Contact Form</dt>
                    <dt>Portfolio</dt>
                </dl>
            </div>
        </div>
    </div>

    <div className="nav-a divider divider-horizontal text-xl">&</div>

    <div data-aos="fade-left" className="card w-96 bg-neutral ">
            <div className="card-body items-center text-center">
                <h2 className="card-title underline">TUTORING</h2>
            <div className='frontend'>
                <dl>
                    <dt>Basic Web Development</dt>
                    <dt>Backend Development</dt>
                    <dt>Frontend Decelopment</dt>
                    <dt>Portfolio Building</dt>
                </dl>
            </div>
        </div>
    </div>
    
    </div>


  <div className="divider pt-9"></div> 
{/* skills */}
<h2 className='landing-skills text-center pt-10 text-5xl landingH2'>SKILLS</h2>
  <div className='resume-skills flex flex-wrap justify-center p-8 space-x-4 '>
    <div data-aos="fade-right" className="card w-96 bg-neutral ">
      <div className="card-body items-center text-center">
        <h2 className="card-title">FRONTEND</h2>
        <div className='frontend'>
            <dl>
                <dt>HTML</dt>
                <dt>CSS</dt>
                <dt>JavaScript</dt>
                <dt>React.js</dt>
            </dl>
            </div>
        <div className="card-actions justify-end">

        </div>
      </div>
    </div>

    <div className="nav-a divider divider-horizontal text-xl">&</div>

    <div data-aos="fade-left" className="card w-96 bg-neutral">
      <div className="card-body items-center text-center">
        <h2 className="card-title">BACKEND</h2>
        <div className='backend'>
          
            <dl>
                <dt>Node.js</dt>
                <dt>MongoDB</dt>
                <dt>GraphQL</dt>
                <dt>MySQL</dt>
                <dt>Express.js</dt>
            </dl>
            </div>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>

    </div>
    <div className="divider pt-9"></div> 
                <div>
                <div className="card w-auto	 bg-[#29243c78] text-neutral-content p-14 ">
                    <div className="card-body items-center text-center text-white">
                    <h2 className="card-title ">Want to hire me for your next project? </h2>
                    <p>Please contact me via email garcia.valeria001@outlook.com</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary  text-white"><Link to={'/contact'}>Contact</Link></button>
                    </div>
                    </div>
                </div>
            </div>
          </div>
        </div>
    )
}

export default Landing