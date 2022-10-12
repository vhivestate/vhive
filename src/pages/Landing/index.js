import React from 'react'
import '../../App.css'
import Headshot from '../../assests/images/headshot.png'
import { Link } from 'react-router-dom';
import { ArrowDownCircle } from 'react-feather';

function Landing(){
    return(
        <div>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url("https://sat02pap005files.storage.live.com/y4mccQegH1llhIfqRKMdAXiRthJjyBcQ1H1eBSvib3C8Nx5u_C181cxK4SgIMiBjg8lZJw4ul0AR1ZxSLO-bWrWZ8WrFU3-_wVy1qA0K530m8otUr5vNpgZBdEzMG52cbqwhyDZqoo8js9ZCM8sLZntIjyjRzx9jcPb8HhDyqcQz-MiC4NhBT4g4JjRFMn_hfb1?width=1024&height=683&cropmode=none")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">WEB DEVELOPER</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div class="group">
                        <button className='hover:animate-bounce btn-lg'>
                        <a href='#about'><ArrowDownCircle className='arrow'></ArrowDownCircle></a>
                        </button>
                            <p className="invisible group-hover:visible">Scroll Down</p>
                        </div>
                    </div>
                </div>
            </div>

    {/* ABOUT */}

            <h2 id='about' className='landing-skills text-center pt-10 text-5xl	bg-white'>ABOUT</h2>
            <div className='bg-white'>
            <div className='about pt-14 flex flex-wrap justify-center '>
            <div className="card lg:card-side w-10/12 p-5 glass">
            <figure><img src={Headshot} alt="Album"/></figure>
            <div className="card-body justify-around ">
                <h2 className="card-title">Valeria Garcia</h2>
                <div className='card-text'>
                <p className='min-w-fit'>Full-stack web developer based out of Salt Lake City, Utah. Graduated from The University of Utah. Here to provide everything you will need for your ideal website. </p>
                </div>
                <div className='flex flex-wrap p-3 justify-center'>
                <button className="about-btn btn btn-active btn-wide text-white"><Link to={'/projects'}>View Work</Link></button>  
                    </div>
                </div>
            </div>
            </div>


               {/* services */}
        <h2 className='text-center pt-10 text-5xl	'>SERVICES</h2>
        <div className='flex flex-wrap justify-center p-8 space-x-4 '>
            <div className="card w-96 bg-neutral ">
            <div className="card-body items-center text-center">
                <h2 className="card-title underline">WEB DEVELOPMENT</h2>
            <div className='frontend'>
                <dl>
                    <dt>Landing Page</dt>
                    <dt>Ecommerce Website</dt>
                    <dt>Booking Website</dt>
                    <dt>Management System</dt>
                    <dt>Contact Form</dt>
                    <dt>Portfolio</dt>
                </dl>
            </div>
        </div>
    </div>

    <div className="nav-a divider divider-horizontal text-xl">&</div>

    <div className="card w-96 bg-neutral ">
            <div className="card-body items-center text-center">
                <h2 className="card-title underline">TUTORING</h2>
            <div className='frontend'>
                <dl>
                    <dt>HTML/CSS</dt>
                    <dt>JavaScript</dt>
                    <dt>Backend</dt>
                    <dt>Frontend</dt>
                    <dt>Portfolio Building</dt>
                </dl>
            </div>
        </div>
    </div>
    
    </div>


  <div className="divider pt-9"></div> 

{/* skills */}
<h2 className='landing-skills text-center pt-10 text-5xl	'>SKILLS</h2>
  <div className='resume-skills flex flex-wrap justify-center p-8 space-x-4 '>
    <div className="card w-96 bg-neutral ">
      <div className="card-body items-center text-center">
        <h2 className="card-title">FRONTEND</h2>
        <div className='frontend'>
            <dl>
                <dt>HTML:</dt>
                    <dd> - Forms & Validation</dd>
                    <dd> - Semantic Tags</dd>
                    <dd> - Accessibility</dd>
                <dt>CSS:</dt>
                    <dd>- Flexbox</dd>
                    <dd>- Responsive Design</dd>
                    <dd>- Media Queries</dd>
                <dt>JavaScript:</dt>
                    <dd> - ES6 + Syntax </dd>
                    <dd> - DOM Manipulation </dd>
                    <dd> - Fetch API or AJAX</dd>
                    <dd> - Hoisting, Closures, Event Bubbling</dd>
            </dl>
            </div>
        <div className="card-actions justify-end">

        </div>
      </div>
    </div>

    <div className="nav-a divider divider-horizontal text-xl">&</div>

    <div className="card w-96 bg-neutral">
      <div className="card-body items-center text-center">
        <h2 className="card-title">BACKEND</h2>
        <div className='backend'>
          
            <dl>
                <dt>Node.js</dt>
                <dt>Database:</dt>
                    <dd>- MongoDB</dd>
                    <dd>- GraphQL</dd>
                    <dd>- MySQL</dd>
                <dt>API:</dt>
                    <dd>- REST</dd>
                    <dd>- JSON</dd>
                    <dd>- SOAP</dd>
                <dt>Express.js</dt>
                <dt>Frameworks:</dt>
                    <dd>- React.js</dd>
                    <dd>- Bootstrap</dd>
                    <dd>- Tailwind</dd>
            </dl>
            </div>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>

    </div>

                <div>
                <div className="card w-auto	 bg-white text-neutral-content p-14 ">
        <div className="card-body items-center text-center text-black">
          <h2 className="card-title ">Want to hire me for you next project? </h2>
          <p>Please contact me via email garcia.valeria001@outlook.com</p>
          <div className="card-actions justify-end">
            <button className="btn btn-active  text-white"><Link to={'/contact'}>Contact</Link></button>
          </div>
        </div>
      </div>
                      </div>
          </div>
        </div>
    )
}

export default Landing