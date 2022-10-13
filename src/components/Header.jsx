import { useState } from "react"
import { Link, useLocation } from "react-router-dom"

const links = [
  {name: "Home", url: '/'},
  {name: "Help", url: '/help'},
  {name: "Contact us", url: '/contact-us'},
]

const Header = () => {
  const [toggleNav, setToggleNav] = useState(false)
  const location = useLocation()

  return (  
    <nav className="px-4 py-2">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black">NaWee</span>
        </a>

        <button
          onClick={() => setToggleNav((value) => !value)}
          data-collapse-toggle="navbar-default"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-md md:hidden hover:bg-gray-100 focus:outline-none"
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-6 h-6" aria-hidden="true" fill="#FA8832" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
        </button>

        <div className={`w-full md:block md:w-auto bg-gray-100 rounded-md ${toggleNav && "hidden"}`} id="navbar-default">
          <ul className="flex flex-col p-4 mt-4 md:flex-row md:space-x-8 text-md">
            {
              links.map(link => (
              <li key={link.name}>
                  <Link
                    to={link.url}
                    className={
                      `block py-2 pr-4 pl-3 text-black rounded hover:text-[#fa89328a] 
                      ${location.pathname === link.url && 'text-[#FA8832]'}`
                    }
                  >
                    {link.name}
                  </Link>
              </li>
              ))
            }

            <li>
              <button
                className="
                  block ml-2 md:mt-[-4px] mt-1 text-md border border-1px border-[#FF8233]
                  text-[#FA8832] rounded md:bg-transparent uppercase p-1 tracking-wider
                  hover:bg-[#FA8832] hover:text-white"
              >
                Download
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header