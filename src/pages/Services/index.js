import React from "react";
import { Link } from "react-router-dom";

function Services(){
    return(
        <div>
        <div className="hero h-64 bg-fixed" style={{ backgroundImage: `url("https://placeimg.com/1000/800/arch")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-white">SERVICES</h1>
                </div>
            </div>
            </div>

            <div className='services flex flex-wrap justify-center pt-9'>
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
                    <div className="card-actions justify-end">

                    </div>
                </div>
                </div>
            </div>

            <div className='services flex flex-wrap justify-center pt-9'>
                <div className="card w-96 bg-neutral ">
                    <div className="card-body items-center text-center">
                    <h2 className="card-title underline">TUTORING</h2>
                    <div className='frontend'>
                        <dl>
                            <dt>HTML</dt>
                            <dt>CSS</dt>
                            <dt>JavaScript</dt>
                        </dl>
                        </div>
                    <div className="card-actions justify-end">

                    </div>
                </div>
                </div>
            </div>


            </div>
    )
}
export default Services