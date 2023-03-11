import * as React from "react"
import useFooterDetail from "../../hooks/components/footer/hook"
import { Link } from "gatsby"

const Footer = () => {
  const { data, copyright } = useFooterDetail()
  return (
    <footer className="bg-gray-800 text-gray-400 py-4 px-4 sm:flex sm:justify-between">
      <div className="flex justify-center sm:justify-start mb-2 sm:mb-0">
        <p className="text-center sm:text-left text-white">
          {copyright.map(data => {
            return <Link to={data.url}>{data.name}</Link>
          })}{" "}
          ⓒ.All rights reserved.
        </p>
      </div>
      <div className="flex justify-center sm:justify-end">
        <ul className="flex flex-row w-[200px] justify-between mb-[10px] text-white">
          {data.map((data, index) => {
            return (
              <Link to={data.url} key={index}>
                {data.name}
              </Link>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}

export default Footer
