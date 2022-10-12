import React from 'react'
import '../../App.css'
import Headshot from '../../assests/images/headshot.png'
import { Link } from 'react-router-dom';

function Landing(){
    return(
        <div>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: `url("https://sat02pap005files.storage.live.com/y4mccQegH1llhIfqRKMdAXiRthJjyBcQ1H1eBSvib3C8Nx5u_C181cxK4SgIMiBjg8lZJw4ul0AR1ZxSLO-bWrWZ8WrFU3-_wVy1qA0K530m8otUr5vNpgZBdEzMG52cbqwhyDZqoo8js9ZCM8sLZntIjyjRzx9jcPb8HhDyqcQz-MiC4NhBT4g4JjRFMn_hfb1?width=1024&height=683&cropmode=none")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">WEB DEVELOPER</h1>
                        <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-active text-white">Get Started</button>
                    </div>
                </div>
            </div>

            <div className='bg-white'>
              <h2>ABOUT</h2>
                <div className='about pt-14'>
                    <div className="card lg:card-side w-10/12 p-5 glass">
                            <figure><img src={Headshot} alt="Album"/></figure>
                        <div className="card-body justify-around ">
                            <h2 className="card-title">Valeria Garcia</h2>

                        <div className='card-text'>
                            <p className='min-w-fit'>Full-stack web developer based out of Salt Lake City, Utah. Experienced web developer, graduated from The University of Utah with Web Development Certificate. Here to provide everything you will need for your ideal website. </p>
                        </div>

                        <div className='flex flex-wrap p-3 justify-center'>
                            <button className="about-btn btn btn-active  text-white"><Link to={'/projects'}>View Portfolio</Link></button>  
                            <button className="about-btn btn btn-active  text-white "> <a href="mailto:garcia.valeria001@gmail.com"> Contact me</a>
                            </button> 
                        </div>
                        </div>
                    </div>
                </div>
          </div>
        </div>
    )
}

export default Landing