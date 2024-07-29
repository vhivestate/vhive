import React from 'react';
// import { Link } from 'react-router-dom';
import '../../App.css';
import HeaderPro from '../../assets/images/projects-header.jpeg';
import Art from '../../assets/images/art.JPG';
import Flash from '../../assets/images/flash.JPG';

function Projects() {
    return (
        <div className='bg-[#000000]'>
            <div className="max-w mx-auto bg-black">
                <figure className='pt-1'>
                    <img src={HeaderPro} alt="Album" />
                </figure>
            </div>

            {/* Web Design and Programming Projects Section */}
            <div className="pt-1 flex flex-wrap justify-center">
                <div className="glass-card flex w-10/12 p-5 bg-black mb-10">
                    <div className="ml-5">
                        <h1 className='text-4xl text-white'>Web Design and Programming </h1>
                        
                        <div className="mt-5">
                            <h2 className="text-2xl text-white font-bold mb-2">Portfolio Website</h2>
                            <p className="text-white mb-4">
                                <strong>Description:</strong> A personal portfolio website designed to showcase my unique style and skills in web design and user experience. The site features a bold and edgy aesthetic, reflecting my personality and design philosophy.
                            </p>
                            <p className="text-white mb-4">
                                <strong>Technologies Used:</strong> HTML, CSS, Sass, JavaScript, React, Bootstrap, Node.js
                            </p>
                            <p className="text-white mb-4">
                                <strong>Features:</strong>
                                <ul className="list-disc list-inside">
                                    <li>Responsive design for optimal viewing on all devices</li>
                                    <li>Custom animations and interactive elements</li>
                                    <li>Integrated blog for sharing insights and updates</li>
                                </ul>
                            </p>
                        </div>
                        
                        <div className="mt-5">
                            <h2 className="text-2xl text-white font-bold mb-2">Tattoo Booking Site</h2>
                            <p className="text-white mb-4">
                                <strong>Description:</strong> Developed an online booking platform for tattoo artists, allowing clients to schedule appointments, view portfolios, and manage bookings seamlessly.
                            </p>
                            <p className="text-white mb-4">
                                <strong>Technologies Used:</strong> HTML, CSS, JavaScript, React, Node.js, MongoDB
                            </p>
                            <p className="text-white mb-4">
                                <strong>Features:</strong>
                                <ul className="list-disc list-inside">
                                    <li>Online appointment scheduling</li>
                                    <li>Artist portfolio galleries</li>
                                    <li>Secure client login and booking management</li>
                                </ul>
                            </p>
                            <a href='https://remarkable-conkies-285884.netlify.app/'>Visit Site</a>
                        </div>
                        
                        <div className="mt-5">
                            <h2 className="text-2xl text-white font-bold mb-2">Senior Dog Fostering Website</h2>
                            <p className="text-white mb-4">
                                <strong>Description:</strong> Created a website dedicated to fostering senior dogs, providing a platform for people to learn about, support, and adopt senior dogs in need.
                            </p>
                            <p className="text-white mb-4">
                                <strong>Technologies Used:</strong> HTML, CSS, JavaScript
                            </p>
                            <p className="text-white mb-4">
                                <strong>Features:</strong>
                                <ul className="list-disc list-inside">
                                    <li>Detailed profiles of available dogs</li>
                                    <li>Online application forms for fostering and adoption</li>
                                    <li>Resources and support for senior dog care</li>
                                </ul>
                            </p>
                            <a href='https://fancy-faloodeh-571e0d.netlify.app//'>Visit Site</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Drawing and Tattooing Projects Section */}
            <div id='Tattoo' className="flex flex-wrap justify-center text-center">
                <div className="flex p-5 bg-black mb-10">
                    <div className="ml-5">
                        <h1 className='text-4xl text-white'>Drawing and Tattooing </h1>
                        
                        <div className="mt-5">
                            <h2 className="text-2xl text-white font-bold mb-2">Blackwork Series</h2>
                            <p className="text-white mb-4">
                                <strong>Description:</strong> A series of blackwork tattoos that explore various themes and styles. Each design is meticulously crafted to create bold, striking imagery.
                            </p>
                              <div className="max-w mx-auto bg-black">
                                  <figure className='pt-1'>
                                      <img src={Art} alt="Album" />
                                  </figure>
                              </div>
                        </div>
                        
                        <div className="mt-5">
                            <h2 className="text-2xl text-white font-bold mb-2">Flash Collection</h2>
                            <p className="text-white mb-4">
                                <strong>Description:</strong> A collection of pre-designed tattoo flash available for clients to choose from. The collection includes a variety of styles, from traditional to modern.
                            </p>
                        <div className="max-w mx-auto bg-black">
                            <figure className='pt-1'>
                                <img src={Flash} alt="Album" />
                            </figure>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Projects;
