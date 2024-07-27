import React from 'react';
import '../../App.css'
import Label from '../../assets/images/about-header.jpeg';

const About = () => {
    return (
<div className="min-h-screen bg-[#000000] flex flex-col items-center justify-center">
<figure className='' id='about'><img src={Label} alt="Album"/></figure>

</div>
    );
};

export default About;