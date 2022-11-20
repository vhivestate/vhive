import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css'
import Trim from '../../assests/images/trimdown.png'
import Rolodex from '../../assests/images/rolodex.png'
import Book from '../../assests/images/book-search.png'
import Schedule from '../../assests/images/scheduler.png'
import Note from '../../assests/images/notetaker.png'

function Projects(){
    return(
        <div className='bg-[#29243c78]'>
<div className="hero h-64 bg-fixed" style={{ backgroundImage: `url("https://sat02pap005files.storage.live.com/y4mccQegH1llhIfqRKMdAXiRthJjyBcQ1H1eBSvib3C8Nx5u_C181cxK4SgIMiBjg8lZJw4ul0AR1ZxSLO-bWrWZ8WrFU3-_wVy1qA0K530m8otUr5vNpgZBdEzMG52cbqwhyDZqoo8js9ZCM8sLZntIjyjRzx9jcPb8HhDyqcQz-MiC4NhBT4g4JjRFMn_hfb1?width=1024&height=683&cropmode=none")` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content text-center text-white">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold text-white">PROJECTS</h1>
                </div>
            </div>
            </div>

            <div className='projects flex flex-wrap justify-around'>
    <div>
        <div data-aos="flip-left" className="card w-96 glass shadow-xl text-white">
        <figure className="px-10 pt-10">
        <img src={Trim} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title the-u">Trim Down</h2>
        <p>Interactive MERN SPA project, this application that creates an easy and fun way for users keep track of how much their daily habits are costing them.</p>
        <div className="card-actions">
              <button className="btn btn-primary">
                  <a href='https://trim-down.herokuapp.com/'>View website</a>
              </button>
            </div>
          </div>
        </div>
    </div>

    <div className='pt-9'>
        <div data-aos="flip-left" className="card w-96 glass shadow-xl text-white">
        <figure className="px-10 pt-10">
        <img src={Rolodex} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title the-u">Modern Rolodex</h2>
        <p>Interactive full-stack project. Taking a modern approach to a classic rolodex this websites allows users to save their contacts. </p>
        <div className="card-actions">
              <button className="btn btn-primary">
              <a href='https://modernrolodex2.herokuapp.com/'>View website</a>
              </button>
            </div>
          </div>
        </div>
    </div>

    <div className='pt-9'>
        <div data-aos="flip-right" className="card w-96 glass shadow-xl text-white">
        <figure className="px-10 pt-10">
        <img src={Book} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title the-u">Book Finder</h2>
        <p>This app was built using the MERN stack, with a React front end, MongoDB database, and Node.js/Express.js server and API.</p>
        <div className="card-actions">
        <button className="btn btn-primary">
              <a href='https://booker-finder.herokuapp.com/'>View website</a>
              </button>
                </div>
          </div>
        </div>
    </div>

    <div className='pt-9'>
        <div data-aos="flip-left" className="card w-96 glass shadow-xl text-white">
        <figure className="px-10 pt-10">
        <img src={Schedule} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title the-u"> Work Day Scheduler</h2>
        <p> A simple calendar application that allows a user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.</p>
        <div className="card-actions">
        <button className="btn btn-primary">
              <a href='https://vhivestate.github.io/Work-Scheduler/'>View website</a>
              </button>   
              </div>
          </div>
        </div>
    </div>

    <div className='pt-9 pb-9'>
        <div data-aos="flip-right" className="card w-96 glass shadow-xl text-white">
        <figure className="px-10 pt-10">
        <img src={Note} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
        <h2 className="card-title the-u">Express Note Taker</h2>
        <p>This application allows users to write and save notes. It uses an Express.js back end and saves and retrieves note data from a JSON file</p>
        <div className="card-actions">
        <button className="btn btn-primary">
              <a href='https://note-taker007474.herokuapp.com/'>View website</a>
              </button>
            </div>
          </div>
        </div>
    </div>

      </div>

      <div className="card w-auto text-neutral-content p-14 ">
                    <div className="card-body items-center text-center text-white">
                    <h2 className="card-title ">Want to hire me for your next project? </h2>
                    <p>Please contact me via email garcia.valeria001@outlook.com</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary  text-white"><Link to={'/contact'}>Contact</Link></button>
                    </div>
                    </div>
                </div>

        </div>
    )
}

export default Projects