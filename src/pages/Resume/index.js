import React from 'react'
import { Download } from 'react-feather';
import ResumePdf from '../../assests/files/resume.22.pdf'
import Badge from '../../assests/images/badge-code.png'
import { Link } from 'react-router-dom'
import './style.css'

function Resume() {
  return (
<div className='resume-page bg-[#0d051c]'>
<div className="hero h-64" style={{ backgroundImage: `url("https://sat02pap005files.storage.live.com/y4mccQegH1llhIfqRKMdAXiRthJjyBcQ1H1eBSvib3C8Nx5u_C181cxK4SgIMiBjg8lZJw4ul0AR1ZxSLO-bWrWZ8WrFU3-_wVy1qA0K530m8otUr5vNpgZBdEzMG52cbqwhyDZqoo8js9ZCM8sLZntIjyjRzx9jcPb8HhDyqcQz-MiC4NhBT4g4JjRFMn_hfb1?width=1024&height=683&cropmode=none")` }}>
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
      <div>
        <h1 className='text-5xl font-bold text-white'>RESUME</h1>
      </div>
      </div>
    </div>
 




{/* <div className="divider pt-9"></div>  */}

<h2 className='res-head text-center text-3xl p-5'>CERTIFICATION</h2>
<div className='flex flex-wrap justify-center text-white'>
  <div className="card w-96 glass shadow-xl ">
    <figure className='p-5'><img src={Badge} alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title justify-center the-u">University of Utah</h2>
      <p className='text-center'>Full Stack Developer Certification</p>
      <div className="card-actions justify-center">
      <button className="nav-a btn btn-primary">
                <a href='https://www.credly.com/badges/e6040418-d001-43ac-ade5-cc7f8da2fe4d/linked_in_profile'>View Credentials</a>
            </button>
        </div>
    </div>
  </div>
</div>


{/* <div className="divider pt-9"></div>  */}


<h2 className='landing-skills text-center pt-10 text-5xl	'>SKILLS</h2>
  <div className='resume-skills flex flex-wrap justify-center p-8 space-x-4 '>
    <div data-aos="fade-right" className="card w-96 bg-neutral ">
      <div className="card-body items-center text-center">
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
      <div className="card-body items-center text-center">
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

    </div>

    <div className="">
        <div download="resume.22.pdf" className="button-36 btn">
          <a href={ResumePdf} download="resume.22.pdf"> Resume
          <Download></Download> 
          </a>
        </div>
        </div>

  {/* <div className="divider pt-9"></div>  */}

<div>
            <div className="card w-auto	 bg-[#0d051c] text-neutral-content p-14 ">
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