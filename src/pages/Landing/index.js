import React from 'react'
import '../../App.css'
// import Headshot from '../../assests/images/hero.JPG'
import { Link } from 'react-router-dom';
import { ArrowDownCircle } from 'react-feather';
import './font.css'

function Landing(){
    return(
        <div>
            <div className="hero min-h-screen bg-fixed"   style={{
    backgroundImage: "url(https://i.pinimg.com/564x/4c/88/70/4c88703ef41abe3864b4fff55e2adf7a.jpg)",
  }}>
                <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                    <div className='inner-text'>
                        <h1 className="mb-5 text-5xl font-bold pt-40 text-white">Incompetent Programmer. Failed Graphic Designer.</h1>
                        <p className="mb-5 text-white"> design, technology, and art</p>
                        </div>
                        <div className="group pt-40 hover:animate-pulse">
                        <button>
                        <a href='#about'><ArrowDownCircle className='arrow'></ArrowDownCircle></a>
                        </button>
                            <p className="invisible group-hover:visible">Scroll Down</p>
                        </div>
                    </div>
                </div>
            </div>

    {/* ABOUT */}

            <div className='bg-[#00000078] text-white '>
            <div className='about pt-14 flex flex-wrap justify-center'>
            <div className=" card w-10/12 p-5 glass">
            {/* <figure className='' id='about'><img src={Headshot} alt="Album"/></figure> */}
            <div className="card-body justify-around ">
                <h2 className="signature card-title text-5xl">Valeria Garcia</h2>
                <h3>UX/UI Designer</h3>
                <div className='card-text'>
                <p className='min-w-fit'> College student at Weber Sate University majoring in Web and User Experience. Combining my love for art and technology, I focus on creating designs that are not just pretty but also user-friendly. </p>
                </div>
                <div className='flex flex-wrap p-3 justify-around'>
                    <div className='pt-3'>
                        <button className="about-btn btn btn-primary btn-wide text-white"><Link to={'/about'}>ABOUT</Link>
                        </button> 
                    </div> 
                    {/* <div className='pt-3'>
                        <button className="about-btn btn btn-primary btn-wide text-white"><Link to={'/services'}>Services</Link>
                        </button>  
                    </div> */}
                    </div>
                </div>
            </div>
            </div>


                <div>
                <div className="card w-auto	 bg-[#00000028] text-neutral-content p-14 ">
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