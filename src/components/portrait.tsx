import React from "react"

const Portrait = ({ imageLink, personName }) => {
  return (
    <div className="flex flex-col items-center px-5 pb-4 md:pb-0">
      <div className="flex flex-row">
        <img srcSet={imageLink} className="object-fill rounded-md h-80 w-72" />
      </div>
      <div className="flex flex-row">
        <p>{personName}</p>
      </div>
    </div>
  )
}

export default Portrait
