import React from 'react'
import { CiTwitter } from "react-icons/ci";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Navbar() {
  return (
    <>
        <nav className="">
            <div className=""></div>
            <div className="">
                <CiTwitter />
                <FaGithub />
                <FaLinkedin/>
            </div>
        </nav>
    </>
)
}

export default Navbar