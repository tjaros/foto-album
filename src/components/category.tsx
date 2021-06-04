import Portrait from "./portrait"
import React from "react"

const Category = props => {
  return (
    <div className="flex flex-col pb-16 items-center">
      <h1 className="text-5xl pb-10 font-semibold">{props.categoryName}</h1>
      <div className="flex flex-row pb-10">
        <Portrait src={props.imageLinks[0]} name={props.names[0]} />
        <Portrait src={props.imageLinks[1]} name={props.names[1]} />
        <Portrait src={props.imageLinks[2]} name={props.names[2]} />
        <Portrait src={props.imageLinks[3]} name={props.names[3]} />
      </div>
      <div className="flex flex-row pb-10">
        <Portrait src={props.imageLinks[4]} name={props.names[4]} />
        <Portrait src={props.imageLinks[5]} name={props.names[5]} />
        <Portrait src={props.imageLinks[6]} name={props.names[6]} />
        <Portrait src={props.imageLinks[7]} name={props.names[7]} />
      </div>
      <div className="flex flex-row">
        <button className="w-32 h-12 outline-black">
          <p>All</p>
        </button>
      </div>
    </div>
  )
}

export default Category
