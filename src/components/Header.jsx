import React, { useState } from "react";
import Info from "./Info";

const Header = ({ navOpen, onChangeNav }) => {
  return (
    <header className=" bg-gradient-to-r from-bluePrimary to-redPrimary flex items-center justify-between h-16">
      <h1 className=" text-3xl font-bold text-white pl-12">La Cabaña</h1>
      <nav className="flex items-center justify-between ">
      <button onClick={onChangeNav} className="md:hidden fixed right-5 z-20 py-2 px-3">
          <i className={`${navOpen ? "ai-cross" : "ai-text-align-justified"} text-white text-xl`}></i>
        </button>
        <ul className={`max-md:bg-redPrimary max-md:pl-6 max-md:pr-16 lg:pl-10 lg:pr-28 md:pr-2 md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10  ${navOpen ? 'right-0 shadow-[0_0_0_100vmax_rgba(0,0,0,0.4)]' : 'right-[-100%]'}`}>
          <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
            <a href="" className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3">Inicio</a>
          </li>
          <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
            <a href="" className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3">Informacion</a>
          </li>
          <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
            <a href="" className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3">Ubicacion</a>
          </li>
          <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
            <a href="" className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3">Instagram</a>
          </li>
          <li className="md:inline-block  md:ml-10 ml-5 md:my-0 my-6 border-b-2 border-transparent hover:border-white duration-300">
            <a href="" className="text-white cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3">Facebook</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
