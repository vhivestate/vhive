import React from 'react';
import '../App.css';
import { Twitter, GitHub, Instagram, Slack, Figma } from 'react-feather';

function Footer() {
    const iconSize = 32; // Define the desired icon size

    return (
        <div>
            <footer className="footer bg-white text-black footer-center p-10">
                <div>
                    <div className="grid grid-flow-col gap-4">
                        <a href='https://twitter.com/vhivestbuttonte' className=''>
                            <Twitter size={iconSize} />
                        </a>
                        <a href='https://github.com/vhivestate' className=''>
                            <GitHub size={iconSize} />
                        </a>
                        <a href='https://www.instagram.com/plvnt/' className=''>
                            <Instagram size={iconSize} />
                        </a>
                        <a href='https://github.com/vhivestate' className=''>
                            <Slack size={iconSize} />
                        </a>
                        <a href='https://github.com/vhivestate' className=''>
                            <Figma size={iconSize} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
