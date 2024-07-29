import React from 'react';
import { FaGithub, FaInstagram, FaFigma, FaDiscord } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import ContactSection from '../assets/images/building.jpeg';

function Footer() {
    const iconSize = 32; // Define the desired icon size
    const location = useLocation();

    return (
        <div className='bg-black text-white'>
            {location.pathname !== '/contact' && (
                <div id='Contact-footer' className='w-full flex flex-col items-center bg-black mb-8'>
                    <div className="card w-10/12 p-5 glass" style={{ backgroundImage: `url(${ContactSection})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                        <div className="card-body flex flex-col items-center justify-around">
                            <h2 className="card-title text-3xl">Have any inquires?</h2>
                            <p className="text-center">Feel free to reach out</p>
                            <div className="card-actions justify-center mt-4">
                                <button className="btn btn-primary">
                                    <Link to={'../pages/Contact'}>CONTACT</Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            <footer className="footer bg-white text-black footer-center p-10">
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://github.com/vhivestate' className=''>
                            <FaGithub size={iconSize} />
                        </a>
                        <a href='https://www.instagram.com/plvnt/' className=''>
                            <FaInstagram size={iconSize} />
                        </a>
                        <a href='https://github.com/vhivestate' className=''>
                            <FaFigma size={iconSize} />
                        </a>
                        <a href='https://discord.com/users/tylerscreators' className=''>
                            <FaDiscord size={iconSize} />
                        </a>
                    </div>
                </div>
                <p className="text-black">&copy; 2024 - WEB 2890 - Portfolio</p>
            </footer>
        </div>
    );
}

export default Footer;
