import { Logotext } from './logotext'
import Hamburgermenu2 from "../components/Hamburgermenu2"
import { Link } from 'react-router-dom'



const Nav = (hasnotif = true) => {

  return (
    <>



      <nav className="bg-white px-0 py-1 rounded ">
        <div className="container flex flex-wrap justify-between">
          <a href="/" className="flex items-center ">
            <Logotext small={true} />
          </a>
          < Hamburgermenu2 />
          <div className="md:block md:w-auto lg:flex hidden mr-20" id="navbar-default">
            <div className="flex justify-between  mr-10 py-4 items-center md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <div>
                <a href="/" className="block ul-purple text-2xl px-16 rounded" aria-current="page">Home</a>
              </div>
              <div>
                <a href="/" className="block ul-purple text-2xl   px-16 rounded h md:border-0 ">About us</a>
              </div>
              <div className='mr-0'>
                <a href="/" className="block ul-purple text-2xl pl-16 pr-28  rounded h md:border-0 ">Contact Us</a>
              </div>
              <button  className="text-white px-16 py-4 text-2xl"style={{ background: "#460273"  }}>
                     <Link to="/signup" >Join WaitList</Link>
                  </button>
            </div>
          </div>
        </div>
      </nav>

    </>
  )
}

export default Nav