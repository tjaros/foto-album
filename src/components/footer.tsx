import React, { useState } from "react"
import { FaFacebook, FaInstagram, FaGlobe } from "react-icons/fa"

function Footer() {
  useState(false)
  return (
    <div className="flex flex-col h-72 items-center bg-black text-white">
      <nav className="flex flex-row justify-evenly pt-12">
        <a href="" className="no-underline text-white text-2xl px-4">
          Contact Us
        </a>
        <a href="" className="no-underline text-white text-2xl px-4">
          Advertising
        </a>
        <a href="" className="no-underline text-white text-2xl px-4">
          Privacy Policy
        </a>
        <a href="" className="no-underline text-white text-2xl px-4">
          Terms Of Use
        </a>
      </nav>
      <nav className="flex flex-row justify-evenly pt-8">
        <a href="" className="no-underline text-white text-2xl px-4">
          <FaInstagram size="3rem" />
        </a>
        <a href="" className="no-underline text-white text-2xl px-4">
          <FaFacebook size="3rem" />
        </a>
        <a href="" className="no-underline text-white text-2xl px-4">
          <FaGlobe size="3rem"/>
        </a>
      </nav>
      <span className="pt-14">
      All content Copyright © 2000-2021 ??????.com, Inc.  made with big pepee by us.
      </span>
    </div>
  )
}

export default Footer
