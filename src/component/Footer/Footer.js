import React from 'react'
import { IoStarSharp } from "react-icons/io5";

import "./Footer.css"
const Footer = () => {
    return (
        <footer className='footerContainer'>
            <div className="leftFooter">
                <IoStarSharp color='green' size={20} />
                <IoStarSharp color='green' size={20} />
                <IoStarSharp color='green' size={20} />
                <IoStarSharp color='green' size={20} />
                <IoStarSharp color='green' size={20} />
            </div>
            <div className="middleFooter">
                <ol>
                    <li>AML Policy</li>
                    <li>Cookie Policy</li>
                    <li>Contact</li>
                    <li>Terms Of Service</li>
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>Provably Fair</li>
                    <li>Privacy Statement</li>
                </ol>
            </div>
            <div className="rightFooter">
                <img src="/images/twitter.png" alt="twitter" />
                <img src="/images/insta.png" alt="insta" />
                <img src="/images/chats.png" alt="chats" />
                <img src="/images/yt.png" alt="yt" />


            </div>
        </footer>
    )
}

export default Footer