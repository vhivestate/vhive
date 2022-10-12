import React from 'react'
import '../App.css'
import { Twitter } from 'react-feather';
import { GitHub } from 'react-feather';
import { Instagram } from 'react-feather';
import { Linkedin } from 'react-feather';
import { Mail } from 'react-feather';

function Footer(){
    return(
        <div>
          <footer className="footer footer-center p-10">
            <div className="grid grid-flow-col gap-4">
                <a className="link link-hover">About</a> 
                <a className="link link-hover">Contact</a> 
                <a className="link link-hover">Services</a> 
            </div> 
            
            <div>
                <div className="grid grid-flow-col gap-4">
                    <button href='https://twitter.com/vhivestbuttonte' clbuttonssNbuttonme=''> <Twitter></Twitter> </button>
                    <button href='https://github.com/vhivestate' className=''> <GitHub></GitHub> </button>
                    <button href='https://www.instagram.com/vhive.jpg/' className=''> <Instagram></Instagram> </button>
                    <button href='https://github.com/vhivestate' className=''> <Linkedin></Linkedin> </button>
                </div>
            </div> 
          </footer>
        </div>
    )
}

export default Footer