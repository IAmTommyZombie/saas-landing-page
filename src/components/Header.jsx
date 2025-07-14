import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-blue-600">SaaSy</div>

        {/* Desktop */}
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#features" className="text-gray-700 hover:text-blue-600">
            Features
          </a>
          <a href="#pricing" className="text-gray-700 hover:text-blue-600">
            Pricing
          </a>
          <Link to="/about" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
          <Link
            to="/login"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </Link>
          <Link to="/signup">
            <button className="bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded hover:bg-blue-50 transition">
              Sign Up
            </button>
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <nav className="md:hidden px-6 pb-6 space-y-4">
          <a
            href="#features"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Features
          </a>
          <a
            href="#pricing"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            Pricing
          </a>
          <Link
            to="/about"
            className="block text-gray-700 hover:text-blue-600"
            onClick={() => setIsOpen(false)}
          >
            About
          </Link>

          <div className="space-y-3 pt-2">
            <Link to="/login" onClick={() => setIsOpen(false)}>
              <button className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition text-base">
                Login
              </button>
            </Link>
            <Link to="/signup" onClick={() => setIsOpen(false)}>
              <button className="w-full text-center bg-white text-blue-600 border border-blue-600 px-4 py-2 rounded-md hover:bg-blue-50 transition text-base">
                Sign Up
              </button>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

export default Header;
