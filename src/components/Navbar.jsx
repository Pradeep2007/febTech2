import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/images/logo1.png';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaUserShield } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import useScrollSpy from '../hooks/useScrollSpy';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { isAdmin, logout } = useAuth();

  // Define sections for scroll spy (only on home page)
  const sectionIds = ['home', 'about', 'members', 'products', 'clients', 'faq', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 150);

  const navItems = [
    { name: 'Home', path: '/', sectionId: 'home' },
    { name: 'About', path: '/about', sectionId: 'about' },
    { name: 'Members', path: '/members', sectionId: 'members' },
    { name: 'Products', path: '/products', sectionId: 'products' },
    { name: 'Clients', path: '/clients', sectionId: 'clients' },
    { name: 'FAQ', path: '/faq', sectionId: 'faq' },
    { name: 'Contact', path: '/contact', sectionId: 'contact' },
  ];

  // Function to handle navigation
  const handleNavigation = (item, e) => {
    // If we're on the home page and the section exists, scroll to it
    if (location.pathname === '/' && document.getElementById(item.sectionId)) {
      e.preventDefault();
      const element = document.getElementById(item.sectionId);
      
      // Get the navbar height to offset the scroll position
      const navbar = document.querySelector('nav');
      const navbarHeight = navbar ? navbar.offsetHeight : 80;
      
      // Calculate the exact position to scroll to
      const elementPosition = element.offsetTop;
      const offsetPosition = elementPosition - navbarHeight;
      
      // Scroll to the exact position
      window.scrollTo({
        top: Math.max(0, offsetPosition),
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
    // Otherwise, navigate normally (handled by Link)
  };

  // Determine if item should be active
  const isItemActive = (item) => {
    if (location.pathname === '/') {
      // On home page, use scroll spy
      return activeSection === item.sectionId;
    } else {
      // On other pages, use pathname
      return location.pathname === item.path;
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-40">
      <div className="container-max">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link 
            to="/" 
            className="flex items-center hover:opacity-80 transition-opacity duration-200"
            onClick={(e) => {
              // If we're already on home page, scroll to top
              if (location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth'
                });
              }
              // Otherwise, navigate to home page (handled by Link)
            }}
          >
            <img
              src={logo}
              alt="Fabtech Inc logo"
              className="h-10 w-auto md:h-12 object-contain"
              loading="eager"
              fetchpriority="high"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavigation(item, e)}
                className={`relative font-medium transition-colors duration-300 ${
                  isItemActive(item)
                    ? 'text-teal-prime'
                    : 'text-gray-700 hover:text-teal-prime'
                }`}
              >
                {item.name}
                {isItemActive(item) && (
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-prime"
                    layoutId="underline"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-teal-prime transition-colors"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? 'auto' : 0 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={(e) => handleNavigation(item, e)}
                className={`block font-medium transition-colors duration-300 ${
                  isItemActive(item)
                    ? 'text-teal-prime'
                    : 'text-gray-700 hover:text-teal-prime'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;