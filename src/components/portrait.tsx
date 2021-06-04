import React from "react"

const Portrait = ({ imageLink, personName }) => {
  return (
    <div className="flex flex-col px-5 items-center pb-4 md:pb-0">
      <div className="flex flex-row">
        <img srcSet={imageLink} className="object-fill h-80 w-72 rounded-md" />
      </div>
      <div className="flex flex-row">
        <p>{personName}</p>
      </div>
    </div>
  )
}

export default Portrait
