import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  return (
    <header className="bg-blue-600 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
       
          <Link
            to="/"
            className="text-2xl font-extrabold tracking-tight text-white hover:text-blue-800 transition-colors duration-200"
          >
            FontMatch
          </Link>

          
          <nav className="space-x-6 hidden md:flex">
            <Link
              to="/"
              className={`${
                location.pathname === '/' ? 'text-white' : 'text-white'
              } hover:text-blue-800 font-medium transition-colors duration-200`}
            >
              Home
            </Link>
            <Link
              to="/tool"
              className={`${
                location.pathname === '/tool' ? 'text-white' : 'text-white'
              } hover:text-blue-800 font-medium transition-colors duration-200`}
            >
              Preview
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
