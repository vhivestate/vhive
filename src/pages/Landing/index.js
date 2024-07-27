import React from 'react';
import '../../App.css';
import '../../main.scss';
import Headshot from '../../assets/images/hero.JPG';
import drink1 from '../../assets/images/drink1.jpeg';
import drink2 from '../../assets/images/drink2.jpeg';
import drink3 from '../../assets/images/drink3.jpeg';
import { Link } from 'react-router-dom';
import { ArrowDownCircle } from 'react-feather';
import './font.css';

function Landing() {
    return (
        <div>
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
                    <div className="card w-full lg:w-1/2 p-5 glass flex flex-col items-center">
                        <figure className='w-full flex justify-center'>
                            <div className="carousel carousel-end rounded-box w-full">
                                <div className="carousel-item">
                                    <img className="carousel-img" src={drink1} alt="Drink 1" />
                                </div>
                                <div className="carousel-item">
                                    <img className="carousel-img" src={drink2} alt="Drink 2" />
                                </div>
                                <div className="carousel-item">
                                    <img className="carousel-img" src={drink3} alt="Drink 3" />
                                </div>
                            </div>
                        </figure>
                        <div className="card-body flex flex-col items-center justify-center w-full">
                            <h2 className="card-title text-center">Carousel Example</h2>
                            <p className="text-center">This is a glass card with a carousel inside.</p>
                            <div className="card-actions justify-center mt-4">
                                <button className="btn btn-primary"><Link to={'/projects'}>PROJECTS</Link></button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* New Card Underneath */}
                <div className='w-full flex flex-col items-center mt-8'>
                    <div className="card w-10/12 p-5 glass">
                        <div className="card-body flex flex-col items-center justify-around">
                            <h2 className="card-title text-3xl">New Glass Card</h2>
                            <p className="text-center">This is another glass card that will appear underneath the About section and carousel when the screen is wide.</p>
                            <div className="card-actions justify-center mt-4">
                                <button className="btn btn-primary">
                                <Link to={'/contact'}>CONTACT</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
