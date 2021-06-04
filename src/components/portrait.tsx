import React, { useState } from "react"

const Portrait = (props) => {
  return (
    <div className="flex flex-col px-5 items-center">
      <div className="flex flex-row">
        <img srcSet={props.src} className="h-80 w-72 rounded-md" />
      </div>
      <div className="flex flex-row">
        <p>{props.name}</p>
      </div>
    </div>
  )
}

export default Portrait
