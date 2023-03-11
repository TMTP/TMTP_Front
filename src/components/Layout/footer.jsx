import * as React from "react"
import useFooterDetail from "../../hooks/components/footer/hook"
import { Link } from "gatsby"

const Footer = () => {
  const { data, copyright } = useFooterDetail()
  return (
    <div className="flex flex-col justify-center items-center w-full h-[100px] bg-black">
      <ul className="flex flex-row w-[200px] justify-between mb-[10px] text-white">
        {data.map((data, index) => {
          return (
            <Link to={data.url} key={index}>
              {data.name}
            </Link>
          )
        })}
      </ul>
      <span className=" text-red-800">
        {copyright.map(data => {
          return <Link to={data.url}>{data.name} ⓒ.All rights reserved.</Link>
        })}
      </span>
    </div>
  )
}

export default Footer
