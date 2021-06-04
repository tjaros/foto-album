import Portrait from "./portrait"
import React from "react"

type Data = { imageLink: String; personName: String }

const Category = ({ data, categoryName }) => {
  return (
    <div className="flex flex-col items-center pb-16">
      <h1 className="pb-10 text-5xl font-semibold">{categoryName}</h1>
      <div className="flex flex-col pb-10 md:flex-row">
        {data.slice(0, 4).map((e: Data) => {
          return <Portrait imageLink={e.imageLink} personName={e.personName} />
        })}
      </div>
      <div className="flex flex-col pb-10 md:flex-row">
        {data.slice(4, 8).map((e: Data) => {
          return <Portrait imageLink={e.imageLink} personName={e.personName} />
        })}
      </div>
      <div className="flex flex-row">
        <button className="w-32 h-12 border-2 border-black border-solid rounded-md">
          <p>All</p>
        </button>
      </div>
    </div>
  )
}

export default Category
