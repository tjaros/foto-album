import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Category from "../components/category"

const categories = new Array(4).fill({
  data: Array(8).fill({
    imageLink: "https://thispersondoesnotexist.com/image",
    personName: "Your Papa",
  }),
  categoryName: "MEN",
})

const Categories = () => {
  return (
    <Layout>
      <SEO title="Categories" />
      <div className="flex flex-col">
        {categories.map(e => {
          return (<Category data={e.data} categoryName={e.categoryName} />)
        })}
      </div>
    </Layout>
  )
}

export default Categories
