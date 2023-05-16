import React from 'react';
import { NavLink } from 'react-router-dom';
import { navLinks } from '../constants'

const Navbar = () => {
  const [toggle, setToggle] = React.useState(true)
  const [active, setActive] = React.useState('')
  const [ipInfo, setIpInfo] = React.useState('')
  const ipInfoToken = import.meta.env.VITE_IPINFO_TOKEN
  console.log(ipInfoToken);

  React.useEffect(() => {
    const fetchClientInfo = async () => {
      try {
        const response = await fetch('https://ipinfo.io/json', {
          headers: {
            "method": "GET",
            "Host": "ipinfo.io",
            "Sec-Fetch-Site": "cross-site",
            "Accept-Encoding": "gzip, deflate, br",
            "Connection": "keep-alive",
            "Sec-Fetch-Mode": "navigate",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8",
            "Authorization": `Bearer ${ipInfoToken}`,
            "Alt-Used" : "ipinfo.io",
            "Access-Control-Allow-Credentials": "true",
            "Access-Control-Allow-Origin": "*"
          }
        });
        const data = await response.json();
        setIpInfo(data);
      } catch (error) {
        console.error('Error fetching client info:', error);
      }
    };

    fetchClientInfo();
  }, []);



  console.log(ipInfo);
  return (
    <nav className="bg-none border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
      <NavLink className="flex items-center" href='#' onClick={()=>setActive('')}>
          <img src="/logo-no-background.svg" className="h-14 mr-3" alt="Rami Logo"/>
          <span className="text-blue-600 self-center text-2xl font-semibold whitespace-nowrap hidden xs:block">Rami</span>
          <span className="text-blue-600 self-center text-2xl font-semibold whitespace-nowrap hidden sm:block">&nbsp;| Developer </span>
      </NavLink>
      <div className={` items-center justify-between w-full md:flex md:w-auto order-1 ${toggle ? ' hidden ' : ''}` } id="navbar-cta">
        <ul className="text-slate-200 flex flex-col font-medium p-3 md:p-0 mt-4 border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0">
          {
            navLinks.map((link) => (
              <li key={link.id}>
                <NavLink onClick={()=>setActive(link.id)} to={`#${link.id}`} className={"font-semibold block py-2 pl-3 pr-4 rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent " + ( active===link.id ? "text-blue-400 " : "")}>{link.title}</NavLink>
              </li>
            ))
          }
        </ul>
      </div>
      <div className="flex md:order-2">
          <NavLink type="button" to={'#contact'} onClick={(e)=>{setActive('contact'); window.open(`${"mailto:als"+"aadi.r"+"ami24@gmail.com"+"?cc=rami"+"belo@gmail.com&subject=Job Offer from: &body=Dear Rami, "}`, '_blank', 'noopener,noreferrer')}} className="text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">Hire me</NavLink>
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