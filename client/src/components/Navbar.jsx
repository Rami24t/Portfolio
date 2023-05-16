import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = React.useState(true)
  return (
    <nav className="bg-none border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <a className="flex items-center">
          <img src="/logo-no-background.svg" className="h-14 mr-3" alt="Rami Logo"/>
          <span className="text-blue-600 self-center text-2xl font-semibold whitespace-nowrap">Rami</span>
      </a>
      <div className={" items-center justify-between w-full md:flex md:w-auto order-1 " + (toggle ? ' hidden ' : '') } id="navbar-cta">
        <ul className="text-slate-200 flex flex-col font-medium p-3 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          {/* <li>
            <a href="#" className=" block py-2 pl-3 pr-4-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:text-blue-500" aria-current="page">Home</a>
          </li> */}
          {/* <li>
            <a href="#" className=" block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">About</a>
          </li>
          <li>
            <a href="#" className=" block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Work</a>
          </li>
          <li>
            <a href="#" className=" block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">Contact</a>
          </li> */}
          {
            navLinks.map((link, index) => (
              <li key={index}>
                <NavLink to={`#${link.id}`} className=" block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent">{link.title}</NavLink>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="flex md:order-2">
          <button type="button" className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Hire me</button>
          <button onClick={()=>setToggle(prev=>!prev)} type="button" className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>
      </div>
      </div>
    </nav>
  )
}

export default Navbar