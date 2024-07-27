import React from 'react'
// import ResumePdf from '../../assests/files/resume.22.pdf'
import Badge from '../../assets/images/badge-code.png'
import { Link } from 'react-router-dom'
import './style.css'
import HeaderResume from '../../assets/images/resume-header.jpeg'

function Resume() {
  return (
<div className='min-h-screen bg-[#000000] flex flex-col items-center justify-center'>
<div className="max-w mt-9 mx-auto bg-black">
<figure className='pt-14'><img src={HeaderResume} alt="Album"/></figure>

</div>
    <div className='pt-1 flex flex-wrap justify-center'>
            <div className=" card lg:card-side w-10/12 p-5 glass">
            <figure><img src={Badge} alt="Album"/></figure>
            <div className="card-body justify-around ">
                <h2 className="uou card-title text-3xl">University of Utah </h2>
                <div className='card-text'>
                <p className='min-w-fit'>Obtained my coding certification from The University of Utah where I learned specialized skills in full-stack development. </p>
                </div>
                <div className='card-text'>
                <p className='min-w-fit'>Frontend: HTML, CSS, React.js, JavaScript</p>
                </div>
                <div className='card-text'>
                <p className='min-w-fit'>Backend: Node.js, Mongo.DB, Express.js, Python</p>
                </div>
                <div className='flex flex-wrap p-3 justify-center'>
                <button className="btn-wide nav-a btn btn-primary">
                <a href='https://www.credly.com/badges/e6040418-d001-43ac-ade5-cc7f8da2fe4d/linked_in_profile'>View Credentials</a>
            </button>
                    </div>
                </div>
            </div>
            </div>


{/* <h2 className='resHeaders landing-skills text-center pt-10 text-5xl	text-white'>SKILLS</h2>
  <div className='resume-skills flex flex-wrap justify-center p-8 space-x-4 '>
    <div data-aos="fade-right" className="card w-96 bg-neutral ">
      <div className="card-body items-center text-center glass">
        <h2 className="card-title">FRONTEND</h2>
        <div className='frontend'>
            <dl>
                <dt>HTML:</dt>
                    <dd> - Forms & Validation</dd>
                    <dd> - Semantic Tags</dd>
                    <dd> - Accessibility</dd>
                <dt>CSS:</dt>
                    <dd>- Flexbox</dd>
                    <dd>- Responsive Design</dd>
                    <dd>- Media Queries</dd>
                <dt>JavaScript:</dt>
                    <dd> - ES6 + Syntax </dd>
                    <dd> - DOM Manipulation </dd>
                    <dd> - Fetch API or AJAX</dd>
                    <dd> - Hoisting, Closures, Event Bubbling</dd>
            </dl>
            </div>
        <div className="card-actions justify-end">

        </div>
      </div>
    </div>

    <div className="nav-a divider divider-horizontal text-xl">&</div>

    <div data-aos="fade-left" className="card w-96 bg-neutral">
      <div className="card-body items-center text-center glass">
        <h2 className="card-title">BACKEND</h2>
        <div className='backend'>
          
            <dl>
                <dt>Node.js</dt>
                <dt>Database:</dt>
                    <dd>- MongoDB</dd>
                    <dd>- GraphQL</dd>
                    <dd>- MySQL</dd>
                <dt>API:</dt>
                    <dd>- REST</dd>
                    <dd>- JSON</dd>
                    <dd>- SOAP</dd>
                <dt>Express.js</dt>
                <dt>Frameworks:</dt>
                    <dd>- React.js</dd>
                    <dd>- Bootstrap</dd>
                    <dd>- Tailwind</dd>
            </dl>
            </div>
        <div className="card-actions justify-end">
        </div>
      </div>
    </div>

    </div> */}





    {/* <div className="flex flex-wrap justify-center">
        <div download="resume.22.pdf" className="button-36 btn">
          <a href={ResumePdf} download="resume.22.pdf"> Download Resume
          </a>
        </div>
    </div> */}

{/* button test */}
    <div download="resume.22.pdf" className="flex items-center justify-center pt-10 ">
        <label className="w-64 flex flex-col items-center py-6 glass text-blue rounded-lg shadow-lg tracking-wide uppercase border border-blue cursor-pointer hover:bg-primary hover:text-white">
            <svg className="w-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
            </svg>
            {/* <a  href={ResumePdf} download="resume.22.pdf" className="mt-2 text-base leading-normal">Download Resume</a> */}
        </label>
    </div>


<div>
            <div className="card w-auto	 bg-[#000000] text-neutral-content p-14 ">
                    <div className="card-body items-center text-center text-white">
                    <h2 className="card-title ">Want to hire me for your next project? </h2>
                    <p>Please contact me via email garcia.valeria001@outlook.com</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary  text-white"><Link to={'/contact'}>Contact</Link></button>
                    </div>
                    </div>
                </div>
            </div>

    </div>
  )
}

export default Resume