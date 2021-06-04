import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Category from "../components/category"

const imageLinks = new Array(8).fill("https://thispersondoesnotexist.com/image")
const names = new Array(8).fill("Person Name")

const Categories = () => (
  <Layout>
    <SEO title="Categories" />
    <div className="flex flex-col">
      <Category imageLinks={imageLinks} names={names} categoryName="MEN"/>
      <Category imageLinks={imageLinks} names={names} categoryName="MEN"/>
      <Category imageLinks={imageLinks} names={names} categoryName="MEN"/>
      <Category imageLinks={imageLinks} names={names} categoryName="MEN"/>
    </div>
  </Layout>
)

export default Categories
