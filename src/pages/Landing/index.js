import React from 'react';
import '../../App.css';
import '../../main.scss';
import Headshot from '../../assets/images/hero.JPG';
import Project from '../../assets/images/landing-card.jpeg';
import { Link } from 'react-router-dom';
import { ArrowDownCircle } from 'react-feather';
import './font.css';

function Landing() {
    return (
        <div className='bg-black'>
            <div className="hero min-h-screen bg-fixed" style={{ backgroundImage: "url(https://i.pinimg.com/564x/4c/88/70/4c88703ef41abe3864b4fff55e2adf7a.jpg)" }}>
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
            <div className='bg-[#000000] text-white w-full flex flex-col items-center py-14'>
                <div className='w-10/12 flex flex-col lg:flex-row lg:space-x-8'>
                    <div className="card w-full lg:w-1/2 p-5 glass mb-8 lg:mb-0">
                        <figure className='max-w-50' id='about'>
                            <img src={Headshot} alt="Album" />
                        </figure>
                        <div className="card-body flex flex-col items-center justify-around">
                            <h2 className="signature card-title text-5xl">Valeria Garcia</h2>
                            <h3>UX/UI Designer</h3>
                            <div className='card-text'>
                                <p className='min-w-fit'> College student at Weber State University majoring in Web and User Experience. Combining my love for art and technology, I focus on creating designs that are not just pretty but also user-friendly. </p>
                            </div>
                            <div className='pt-3'>
                                <a href='../About'>
                                    <button className="about-btn btn btn-primary btn-wide text-white"><Link to={'/about'}>ABOUT</Link>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* New Glass Card with Carousel */}
                    <div className="card w-full lg:w-1/2 p-5 glass lg:mb-0">
                        <div className="card-body flex flex-col items-center justify-around">
                            <div className='card-text'>
                                <h2 className=' card-title min-w-fit text-2xl'> Explore my work across web design, programming, and artistic endeavors. </h2>
                            </div>



                            <figure className='max-w-50' id='about'>
                            <img src={Project} alt="Album" />
                        </figure>
                            <div className='pt-3'>
                                <a href='../Projects'>
                                    <button className="about-btn btn btn-primary btn-wide text-white"><Link to={'/projects'}>Projects</Link>
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
