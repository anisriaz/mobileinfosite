import Navbar from "./components/Navbar"
import { NavLink } from 'react-router-dom'

function Error() {
  return ( 
    <div className="text-center"> <Navbar /> 
      <div className="mt-44">
      <h2 className="text-7xl mb-2">
  <span className="text-white bg-red-600 border-red-700 rounded-lg inline-block px-10 py-2 mt-2">404</span>
</h2>
      <h2 className="text-2xl mt-7">OHH! you're lost.</h2>
      <p className="text-base mt-9">
        The page you are looking does not exist. how you got here is a mystry.
        but you can click button below to go back to the homepage
      </p>
    
      <NavLink to="/">
      <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-12 border border-blue-700 rounded">
  Back to Home
</button>
      </NavLink>
      </div>
    </div>
  )
}

export default Error
