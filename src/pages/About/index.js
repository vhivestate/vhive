import React from 'react';
import '../../App.css';
import '../../main.scss';
import Label from '../../assets/images/about-header.jpeg';
import drink1 from '../../assets/images/drink1.jpeg';
import drink2 from '../../assets/images/drink2.jpeg';
import drink3 from '../../assets/images/drink3.jpeg';
import AboutImg from '../../assets/images/about.jpg';

const About = () => {
    return (
        <div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center">
            <figure className='' id='about'>
                <img src={Label} alt="Album" />
            </figure>

            {/* New Glass Card Section */}
            <div className="pt-1 flex flex-wrap justify-center">
                <div className="glass-card flex w-10/12 p-5 bg-black mb-10">
                    <img className="w-1/3 rounded-lg" src={AboutImg} alt="AboutImage" />
                    <div className="ml-5">
                        <h1 className='text-4xl'>UX/UI Designer</h1>
                        <h2 className="text-2xl font-bold mb-4">Incompetent Programmer, Failed Graphic Designer</h2>
                        <p>
                            I'm V, a multi-faceted creative currently majoring in Web and User Experience at Weber State University. Merging art and technology, I strive to create designs that are as bold and edgy as they are functional.
                        </p>
                        <h3 className="text-xl font-semibold mt-4">Passion and Dedication</h3>
                        <p>
                            I am dedicated to constantly improving my skills and embracing the learning process. While I joke about my struggles, the reality is that I am committed to mastering the craft and making meaningful contributions through computer science.
                        </p>
                        <h3 className="text-xl font-semibold mt-4">Design Philosophy</h3>
                        <p>
                            I believe that good design is about making technology accessible and enjoyable for everyone. My goal is to create visually appealing and meaningful designs that resonate with people. I take pride in my ability to merge functionality with aesthetic appeal.
                        </p>
                        <h3 className="text-xl font-semibold mt-4">Artistry</h3>
                        <p>
                            I love conceptualizing and drawing tattoo designs. Seeing my work become a part of someones identity is rewarding. Drawing and tattooing keep my creativity sharp and allows me to experiment with different styles and ideas. Its a unique way to blend my artistic skills with personal expression, continuously inspiring me to keep creating.
                        </p>
                    </div>
                </div>
            </div>

            {/* Existing Glass Card with Carousel */}
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
