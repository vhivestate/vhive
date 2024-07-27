import React from 'react';
import '../../App.css';
// import '../../main.scss';
import Label from '../../assets/images/about-header.jpeg';
import drink1 from '../../assets/images/drink1.jpeg';
import drink2 from '../../assets/images/drink2.jpeg';
import drink3 from '../../assets/images/drink3.jpeg';

const About = () => {
    return (
        <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center">
            <figure className='' id='about'>
                <img src={Label} alt="Album" />
            </figure>

            {/* New Glass Card with Carousel */}
            <div className='pt-14 flex flex-wrap justify-center'>
                <div className="card w-10/12 p-5 glass">
                    <figure className='max-w-50'>
                        <div className="carousel carousel-end rounded-box">
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
                    <div className="card-body justify-around">
                        <h2 className="card-title">Carousel Example</h2>
                        <p>This is a glass card with a carousel inside.</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Explore more!</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
