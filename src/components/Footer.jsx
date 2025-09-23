import { Link } from 'react-router-dom';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import logo1 from '../assets/images/logo1.png';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <img src={logo1} alt="FabTech Logo" className="h-12 w-auto" />
            </div>
            <p className="text-gray-400 mb-4">
              Leading provider of medical equipment and pharmaceutical products with 
              compliance and quality assurance since 2011.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-teal-prime transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/members" className="text-gray-400 hover:text-teal-prime transition-colors">
                  Members
                </Link>
              </li>
              <li>
                <Link to="/products" className="text-gray-400 hover:text-teal-prime transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/clients" className="text-gray-400 hover:text-teal-prime transition-colors">
                  Our Clients
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Medical Equipment</li>
              <li className="text-gray-400">Pharmaceutical Products</li>
              {/* <li className="text-gray-400">Compliance Consulting</li> */}
              {/* <li className="text-gray-400">Supply Chain Management</li> */}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <FaPhone className="text-teal-prime" />
                <span className="text-gray-400">+91 9879500494</span>
              </div>
              <div className="flex items-center space-x-3">
                <FaEnvelope className="text-teal-prime" />
                <span className="text-gray-400">info@fabtechinc.in</span>
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2025 FabTech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-teal-prime text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-prime text-sm transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-teal-prime text-sm transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;