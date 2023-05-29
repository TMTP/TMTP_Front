import React from "react";
import useFooterDetail from "../../hook/components/footer/hook";

const Footer = () => {
  const { data, copyright } = useFooterDetail();
  return (
    <footer className="bg-[#2AC1BC] sm:fixed sm: text-gray-400 py-4 px-4 sm:flex sm:justify-between sm:text-xs">
      <div className="flex justify-center sm:justify-start mb-2 sm:mb-0">
        <p className="text-center sm:text-left text-white">
          {copyright.map((item, index) => {
            return (
              <a href={item.url} key={index}>
                {item.name}
              </a>
            );
          })}{" "}
          <span>ⓒ.All rights reserved.</span>
        </p>
      </div>
      <div className="flex justify-center sm:justify-end">
        <ul className="flex flex-row justify-between mb-[10px] text-white">
          {data.map((item, index) => {
            return (
              <li className="mr-[10px]" key={index}>
                <a href={item.url}>{item.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
