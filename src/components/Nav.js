import React from 'react'
import { Link } from 'react-router-dom';
import '../App.css'
import './font.css'

function Nav(props){
    return (
        <nav className="navbar bg-transparent text-[#fdf9fd] fixed top-0 z-40">
        <div className="navbar bg-transparent">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            <li><a><Link to={'/projects'}>Projects</Link></a></li>
                    <li><a><Link to={'/contact'}>Contact</Link></a></li>
                    <li><a><Link to={'/resume'}>Resume</Link></a></li>
                    <li><a><Link to={'/services'}>Services</Link></a></li>
            </ul>
            </div>
            <a className="logo btn btn-ghost normal-case text-2xl"> <Link to={'/'}>vhivestate</Link></a>
        </div>
        <div className="navbar-end hidden lg:flex">
            <ul className="menu menu-horizontal p-0">
            <li><a><Link to={'/projects'}>Projects</Link></a></li>
                    <li><a><Link to={'/contact'}>Contact</Link></a></li>
                    <li><a><Link to={'/resume'}>Resume</Link></a></li>
                    <li><a><Link to={'/services'}>Services</Link></a></li>
            </ul>
        </div>
        </div>
        </nav>
    )
}

export default Nav