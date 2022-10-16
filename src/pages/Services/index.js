import React from "react";
import { Link } from "react-router-dom";

function Services(){
    return(
        <div className="bg-[#29243c78]">
        <div className="hero h-64 bg-fixed" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-white">SERVICES</h1>
                </div>
            </div>
            </div>

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

        <div>
            <div className="card w-auto	  text-neutral-content p-14 ">
                    <div className="card-body items-center text-center text-white">
                    <h2 className="card-title ">Want to hire me for you next project? </h2>
                    <p>Please contact me via email garcia.valeria001@outlook.com</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-active  text-white"><Link to={'/contact'}>Contact</Link></button>
                    </div>
                    </div>
                </div>
            </div>


            </div>
    )
}
export default Services