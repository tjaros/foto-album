import { React, useState } from "react"
import { FaFacebook, FaInstagram, FaGlobe } from "react-icons/fa"

function Footer() {
  useState(false)
  return (
    <div className="flex flex-col items-center text-white bg-black h-72">
      <nav className="flex flex-row pt-12 justify-evenly">
        <a href="" className="px-4 text-2xl text-white no-underline">
          Contact Us
        </a>
        <a href="" className="px-4 text-2xl text-white no-underline">
          Advertising
        </a>
        <a href="" className="px-4 text-2xl text-white no-underline">
          Privacy Policy
        </a>
        <a href="" className="px-4 text-2xl text-white no-underline">
          Terms Of Use
        </a>
      </nav>
      <nav className="flex flex-row pt-8 justify-evenly">
        <a href="" className="px-4 text-2xl text-white no-underline">
          <FaInstagram size="3rem" />
        </a>
        <a href="" className="px-4 text-2xl text-white no-underline">
          <FaFacebook size="3rem" />
        </a>
        <a href="" className="px-4 text-2xl text-white no-underline">
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
