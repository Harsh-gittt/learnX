import { Link, useLocation } from 'react-router-dom';


const Navbar = () => {

  const location = useLocation()

  return (
    <nav className='flex justify-between items-center px-30 py-4 bg-white border-b border-gray-100 shadow-sm'>
      <div className='flex items-center gap-2.5'>
        
        <h1 className='font-bold text-4xl text-gray-900 tracking-tight '>LearnX</h1>
      </div>

      <div className='flex items-center gap-4'>
        <a className='text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors duration-200' href="#">Home</a>
        <a className='text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors duration-200' href="#">Explore courses</a>
        <a className='text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors duration-200' href="#">About</a>
        <a className='text-gray-500 hover:text-gray-900 font-medium text-sm transition-colors duration-200' href="#">Contact</a>
        <Link to="/signin" state={{ backgroundLocation: location }}>
          <button className='text-gray-900 bg-white border border-gray-300 text-sm font-semibold rounded-xl px-5 py-2.5 cursor-pointer transition-all duration-300 hover:bg-gray-100 active:scale-95'>
            Sign In
          </button>
        </Link>
        <Link to="/signup" state={{ backgroundLocation: location }}>
          <button className='bg-gray-900 text-white text-sm font-semibold rounded-xl px-5 py-2.5 cursor-pointer transition-all duration-300 hover:bg-blue-600 hover:shadow-lg active:scale-95' >
            Get Started
          </button>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
