import React from 'react'
import { Link } from 'react-router-dom';
import '../index.css'

function Nav(props){
    return (
        <div>
            <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                <label tabIndex={0} className="btn btn-ghost btn-circle">
                </label>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                    <li><a><Link to={'/projects'}>Projects</Link></a></li>
                    <li><a><Link to={'/contact'}>Contact</Link></a></li>
                    <li><a><Link to={'/resume'}>Resume</Link></a></li>
                </ul>
                </div>
            </div>
        <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl"><Link to={'/'}>vhive</Link></a>
        </div>
        <div className="navbar-end">
            </div>

            </div>
        </div>
    )
}

export default Nav