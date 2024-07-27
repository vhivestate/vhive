import React from 'react'
import '../App.css'
import { Twitter } from 'react-feather';
import { GitHub } from 'react-feather';
import { Instagram } from 'react-feather';
import { Slack } from 'react-feather';
import { Figma } from 'react-feather';



function Footer(){
    return(
        <div>
          <footer className="footer bg-black footer-center p-10">
            <div>
                <div className="grid grid-flow-col gap-4">
                    <button href='https://twitter.com/vhivestbuttonte' clbuttonssNbuttonme=''> <Twitter></Twitter> </button>
                    <button href='https://github.com/vhivestate' className=' '> <GitHub></GitHub> </button>
                    <button href='https://www.instagram.com/plvnt/' className=''> <Instagram></Instagram> </button>
                    <button href='https://github.com/vhivestate' className=''> <Slack></Slack> </button>
                    <button href='https://github.com/vhivestate' className=''> <Figma></Figma> </button>
                </div>
            </div> 
          </footer>
        </div>
    )
}

export default Footer