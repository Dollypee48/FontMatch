import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-white shadow-md py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
        <Link to="/" className="text-xl font-bold text-gray-800">
          FontMatch
        </Link>
        <nav className="space-x-4">
          <Link to="/" className="text-gray-600 hover:text-black">Home</Link>
          <Link to="/tools" className="text-gray-600 hover:text-black">Preview</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;