import React from "react"

export default function PageTitle({ title, description = "Hello World" }) {
  return (
    <>
      <title>TMTP | {title}</title>
      <meta name="description" content={description} />
    </>
  )
}
