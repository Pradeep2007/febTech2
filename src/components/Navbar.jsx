import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logo from '../assets/images/logo1.png';
import { motion } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { useAuth } from '../context/AuthContext';
import useScrollSpy from '../hooks/useScrollSpy';
import { getCategoriesWithFallback } from '../services/categoryService';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState(null);
  const [productCategories, setProductCategories] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();
  const { isAdmin, logout } = useAuth();

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const categories = await getCategoriesWithFallback();
        console.log('Navbar loaded categories:', categories);
        setProductCategories(categories);
      } catch (error) {
        console.error('Error loading categories in navbar:', error);
      }
    };
    fetchCategories();
  }, []);

  // Add function to refresh categories (can be called from admin)
  const refreshCategories = async () => {
    try {
      const categories = await getCategoriesWithFallback();
      console.log('Navbar refreshed categories:', categories);
      setProductCategories(categories);
    } catch (error) {
      console.error('Error refreshing categories:', error);
    }
  };

  // Listen for category updates (optional - for real-time updates)
  useEffect(() => {
    const handleCategoryUpdate = () => {
      refreshCategories();
    };
    
    // Listen for custom event
    window.addEventListener('categoriesUpdated', handleCategoryUpdate);
    
    return () => {
      window.removeEventListener('categoriesUpdated', handleCategoryUpdate);
    };
  }, []);

  // Define sections for scroll spy (only on home page)
  const sectionIds = ['home', 'about', 'members', 'products', 'clients', 'faq', 'contact'];
  const activeSection = useScrollSpy(sectionIds, 150);

  const navItems = [
    { name: 'Home', path: '/', sectionId: 'home' },
    { name: 'About', path: '/about', sectionId: 'about' },
    { name: 'Members', path: '/members', sectionId: 'members' },
    { name: 'Products', path: '/products', sectionId: 'products', hasDropdown: true },
    { name: 'Clients', path: '/clients', sectionId: 'clients' },
    { name: 'FAQ', path: '/faq', sectionId: 'faq' },
    { name: 'Contact', path: '/contact', sectionId: 'contact' },
  ];


  // Function to handle dropdown enter
  const handleDropdownEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsProductsDropdownOpen(true);
  };

  // Function to handle dropdown close with delay
  const handleDropdownLeave = () => {
    const timeout = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 150); // 150ms delay
    setDropdownTimeout(timeout);
  };

  // Function to toggle mobile products dropdown
  const toggleMobileProducts = () => {
    setIsMobileProductsOpen(!isMobileProductsOpen);
  };

  // Function to handle category navigation
  const handleCategoryNavigation = (filter) => {
    console.log('Navigating to category:', filter);
    setIsProductsDropdownOpen(false);
    setIsOpen(false);
    setIsMobileProductsOpen(false);
    navigate(`/products?filter=${encodeURIComponent(filter)}`);
  };

  // Function to handle navigation
  const handleNavigation = (item, e) => {
    // Close mobile menu first
    setIsOpen(false);
    
    // If we're on the home page and the section exists, scroll to it
    if (location.pathname === '/' && document.getElementById(item.sectionId)) {
      e.preventDefault();
      
      // Add small delay for mobile to ensure smooth scrolling
      setTimeout(() => {
        const element = document.getElementById(item.sectionId);
        if (element) {
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
        }
      }, 100);
    }
    // For navigation to other pages, let Link handle it normally
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
    <nav className="bg-white shadow-lg fixed top-0 left-0 right-0 z-50">
      <div className="container-max">
        <div className="flex justify-between items-center py-3 md:py-4">
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
              fetchPriority="high"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={handleDropdownEnter}
                  onMouseLeave={handleDropdownLeave}
                >
                  <Link
                    to={item.path}
                    onClick={(e) => handleNavigation(item, e)}
                    className={`relative font-medium transition-colors duration-300 flex items-center gap-1 ${
                      isItemActive(item)
                        ? 'text-teal-prime'
                        : 'text-gray-700 hover:text-teal-prime'
                    }`}
                  >
                    {item.name}
                    <FaChevronDown className={`text-xs transition-transform duration-200 ${
                      isProductsDropdownOpen ? 'rotate-180' : ''
                    }`} />
                    {isItemActive(item) && (
                      <motion.div
                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-prime"
                        layoutId="underline"
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ 
                      opacity: isProductsDropdownOpen ? 1 : 0, 
                      y: isProductsDropdownOpen ? 0 : -10 
                    }}
                    transition={{ duration: 0.2 }}
                    className={`absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50 ${
                      isProductsDropdownOpen ? 'pointer-events-auto' : 'pointer-events-none'
                    }`}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <div className="px-3 py-2 text-xs font-semibold text-gray-500 uppercase tracking-wide border-b border-gray-100">
                      Categories
                    </div>
                    {productCategories.filter(category => category.isActive).map((category) => (
                      <div key={category.name}>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Main category clicked:', category.name);
                            handleCategoryNavigation(category.name);
                          }}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-teal-prime transition-colors"
                        >
                          {category.name}
                        </button>
                        {category.subcategories && category.subcategories.length > 0 && (
                          <div className="ml-4 border-l border-gray-200">
                            {category.subcategories.map((subcategory) => (
                              <button
                                key={subcategory}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  console.log('Subcategory clicked:', subcategory);
                                  handleCategoryNavigation(subcategory);
                                }}
                                className="w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-teal-prime transition-colors"
                              >
                                {subcategory}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </motion.div>
                </div>
              ) : (
                <Link
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
              )
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
              item.hasDropdown ? (
                <div key={item.name} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <Link
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
                    <button
                      onClick={toggleMobileProducts}
                      className="p-1 text-gray-600 hover:text-teal-prime transition-colors"
                    >
                      <FaChevronDown className={`text-sm transition-transform duration-200 ${
                        isMobileProductsOpen ? 'rotate-180' : ''
                      }`} />
                    </button>
                  </div>
                  {isMobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="ml-4 space-y-2 border-l border-gray-200 pl-4"
                    >
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">
                        Categories
                      </div>
                      {productCategories.filter(category => category.isActive).map((category) => (
                      <div key={category.name} className="space-y-1">
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            console.log('Mobile category clicked:', category.name);
                            handleCategoryNavigation(category.name);
                          }}
                          className="block text-sm text-gray-700 hover:text-teal-prime transition-colors"
                        >
                          {category.name}
                        </button>
                        {category.subcategories && category.subcategories.length > 0 && (
                          <div className="ml-4 space-y-1">
                            {category.subcategories.map((subcategory) => (
                              <button
                                key={subcategory}
                                onClick={(e) => {
                                  e.preventDefault();
                                  e.stopPropagation();
                                  console.log('Mobile subcategory clicked:', subcategory);
                                  handleCategoryNavigation(subcategory);
                                }}
                                className="block text-sm text-gray-600 hover:text-teal-prime transition-colors"
                              >
                                {subcategory}
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                    </motion.div>
                  )}
                </div>
              ) : (
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
              )
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;