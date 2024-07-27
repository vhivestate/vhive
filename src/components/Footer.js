import React from 'react';
import '../App.css';
import { FaGithub, FaInstagram, FaFigma, FaDiscord } from 'react-icons/fa';

function Footer() {
    const iconSize = 32; // Define the desired icon size

    return (
        <div>
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
                        <a href='https://discord.com' className=''>
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
