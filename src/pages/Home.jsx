import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import About from './About';
import Products from './Products';
import Members from './Members';
import client9 from '../assets/images/client9.png'
import awardImage from '../assets/images/award.jpg'
import Clients from './Clients';
import FAQ from './FAQ';
import Blog from './BlogList'
import Contact from './Contact';
import { 
  FaShieldAlt, 
  FaUsers, 
  FaAward,
  FaBox,
  FaShoppingCart,
  FaHandshake
} from 'react-icons/fa';

const Home = () => {

  // Add missing features array
  const features = [
    // {
    //   icon: <FaShieldAlt className="text-3xl text-teal-prime" />,
    //   title: 'FDA Compliant',
    //   description: 'All products meet strict regulatory standards'
    // },
    {
      icon: <FaUsers className="text-3xl text-blue" />,
      title: '65+ Renowned Clients',
      description: 'Trusted by healthcare providers worldwide'
    },
    // {
    //   icon: <FaAward className="text-3xl text-orange" />,
    //   title: 'ISO Certified',
    //   description: 'Quality management system certification'
    // },
    {
      icon: <FaBox className="text-3xl text-green-500" />,
      title: 'Quality Products',
      description: 'Premium medical equipment and supplies'
    }
  ];

  // Add missing partners array
  const partners = [
    'Abbott'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section id="home" className="relative min-h-[86vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-12 mt-10">
        {/* Background */}
        <div className="absolute inset-0 gradient-bg" />
        <div className="absolute inset-0 bg-black/20" />

        {/* Soft glow accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] blur-3xl opacity-30"
          style={{
            background:
              'radial-gradient( circle at center, rgba(255,225,150,0.45) 0%, rgba(255,200,100,0.25) 35%, rgba(255,255,255,0) 70% )'
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 w-[24rem] h-[24rem] blur-3xl opacity-25"
          style={{
            background:
              'radial-gradient( circle at center, rgba(99,179,237,0.35) 0%, rgba(20,184,166,0.2) 40%, rgba(255,255,255,0) 70% )'
          }}
        />

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -top-1/2 -right-1/2 w-full h-full bg-white/5 rounded-full"
          />
          <motion.div
            animate={{
              rotate: -360,
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-white/5 rounded-full"
          />
        </div>

        <div className="relative z-10 container-max px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-5xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white mb-3 md:mb-4 leading-[1.15] tracking-tight">
              Leading Medical Equipment Provider
              <span className="block bg-gradient-to-r from-teal-200 via-cyan-200 to-white bg-clip-text text-transparent leading-[1.25] pb-1">
                Delivering Advanced Medical Technology for Better Patient Care
              </span>
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 mt-4 sm:mt-5 md:mt-8 mb-4 md:mb-5 max-w-4xl mx-auto leading-relaxed px-4 sm:px-0">
              At Fabtech Inc, we empower hospitals, laboratories, and healthcare professionals with innovative
              healthcare solutions, diagnostic devices, surgical equipment, and biomedical equipment. Our mission is
              to improve quality of life by ensuring accessible medical equipment, supporting doctors, and enhancing
              patient outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-0 px-4 sm:px-0">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 transition-colors shadow-lg shadow-black/10 font-semibold w-full sm:w-auto sm:min-w-[250px] md:min-w-[300px]"
              >
                <FaShoppingCart className="opacity-90" size={18} />
                <span className="hidden sm:inline">Explore Our Medical Supplies</span>
                <span className="sm:hidden">Medical Supplies</span>
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl text-sm sm:text-base md:text-lg px-4 sm:px-6 md:px-8 py-3 sm:py-3.5 md:py-4 text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 transition-colors shadow-lg shadow-black/10 font-semibold w-full sm:w-auto sm:min-w-[250px] md:min-w-[300px]"
              >
                <FaHandshake className="opacity-90" size={18} />
                <span className="hidden sm:inline">Partner with Us for Healthcare Excellence</span>
                <span className="sm:hidden">Partner with Us</span>
              </Link>
            </div>
          </motion.div>

          {/* Categories Grid
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-colors duration-300"
                >
                  <Icon className="w-8 h-8 text-light-teal mx-auto mb-2" />
                  <h3 className="font-semibold text-white text-sm mb-1">
                    {category.name}
                  </h3>
                  <p className="text-white/70 text-xs">{category.description}</p>
                </motion.div>
              );
            })}
          </motion.div> */}

          {/* Compliance & Partners removed */}
        </div>

        
      </section>

      {/* Removed Product Categories section */}

      {/* Features Section */}
      <section className="section-padding bg-light-gray relative overflow-hidden">
        {/* Animated gradient + subtle overlays */}
        <div className="absolute inset-0 animated-gradient-bg opacity-60" aria-hidden="true" />
        <div className="absolute inset-0 pattern-overlay opacity-10 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 wave-overlay opacity-20 pointer-events-none" aria-hidden="true" />
        <div className="container-max relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose FabTech?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-4 sm:px-0">
              We&apos;re committed to excellence in every aspect of our business
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto px-4 sm:px-0">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                whileHover={{ scale: 1.02, rotate: 0.5 }}
                transition={{ duration: 0.8, delay: index * 0.1, type: 'spring' }}
                viewport={{ once: true }}
                className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 hover:via-teal-400 transition-all w-full hover-glow-soft transform-gpu"
              >
                <div className="h-full rounded-2xl bg-white p-6 text-center shadow-sm group-hover:shadow-xl transition duration-300 ease-out ring-0 ring-transparent group-hover:ring-1 group-hover:ring-teal-200">
                  <div className="mb-4 flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 via-white to-teal-50 relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-teal-200 to-cyan-200 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-max relative z-10">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              Recognition & Awards
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4 sm:px-0">
              Honored for our commitment to excellence in healthcare innovation
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-6xl mx-auto px-4 sm:px-6">
            {/* Award Image */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-1 w-full lg:w-auto"
            >
              <div className="relative group">
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400 rounded-2xl blur-lg opacity-25 group-hover:opacity-40 transition-opacity duration-300"></div>
                <img
                  src={awardImage}
                  alt="FabTech Award Ceremony"
                  className="relative w-full h-auto max-w-lg mx-auto rounded-2xl shadow-2xl object-cover"
                />
              </div>
            </motion.div>

            {/* Award Text */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex-1 text-center lg:text-left"
            >
              <div className="relative">
                <FaAward className="text-4xl sm:text-5xl text-yellow-500 mb-6 mx-auto lg:mx-0" />
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                  Growth Icon Recognition
                </h3>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-gray-100">
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    <span className="font-semibold text-teal-700">Fabtech Team</span> is honoured to receive an award from{" "}
                    <span className="font-semibold text-gray-900">Honourable Gujarat Chief Minister Shree Bhupendra Patel</span>, 
                    recognised as <span className="font-semibold text-orange-600">growth icon</span> for exemplary performance in{" "}
                    <span className="font-semibold text-teal-700">healthcare sector</span>.
                  </p>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full opacity-60"></div>
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-teal-400 rounded-full opacity-60"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trusted Partner (Abbott) */}
      <section className="relative section-padding bg-gradient-to-br from-white via-teal-50 to-indigo-50 overflow-hidden">
        <div className="container-max relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight px-4 sm:px-0">Authorized Channel Partner</h2>
            <p className="text-base sm:text-lg text-gray-600 px-4 sm:px-0">
              We proudly collaborate with industry leader{" "}
              <motion.span
                animate={{ scale: [1, 1.12, 1], textShadow: ["0px 0px 0px rgba(56,189,248,0)", "0px 0px 14px rgba(56,189,248,0.7)", "0px 0px 0px rgba(56,189,248,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-1 font-extrabold bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-600 bg-clip-text text-transparent text-xl sm:text-2xl"
              >
                Abbott
              </motion.span>
            </p>
          </motion.div>

          {/* Partner Card */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            {partners.map((partner) => (
              <motion.div
                key={partner}
                className={`relative p-[3px] rounded-2xl ${
                  partner === "Abbott"
                    ? "bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400"
                    : "bg-gradient-to-r from-gray-200 to-gray-300"
                } w-full max-w-xs sm:max-w-sm md:max-w-md mx-4 sm:mx-0`}
              >
                <div className="rounded-2xl bg-white p-4 sm:p-6 md:p-8 text-center shadow-md group-hover:shadow-2xl transition-shadow duration-500">
                  {/* Abbott Logo */}
                  <div className="mb-4 sm:mb-6 flex justify-center">
                    <img 
                      src={client9} 
                      alt="Abbott Logo" 
                      className="h-24 sm:h-28 md:h-32 lg:h-36 w-auto object-contain"
                    />
                  </div>
                  <p className="text-sm sm:text-base text-gray-600">Global healthcare and diagnostics leader</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Animated Background Shapes */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-teal-300 to-cyan-400 blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.15, scale: [1, 1.3, 1] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="absolute bottom-10 right-10 w-80 h-80 rounded-full bg-gradient-to-r from-indigo-300 to-teal-400 blur-3xl"
        />
      </section>

      {/* About Section */}
      <section id="about">
        <About/>
      </section>

      {/* Members Section */}
      <section id="members">
        <Members/>
      </section>

      {/* Products Section */}
      <section id="products">
        <Products/>
      </section>

      {/* Clients Section */}
      <section id="clients">
        <Clients/>
      </section>
        
      {/* Clients Section */}
      <section id="blog">
        <Blog/>
      </section>

      {/* FAQ Section */}
      <section id="faq">
        <FAQ/>
      </section>

      {/* Contact Section */}
      <section id="contact">
        <Contact/>
      </section>
    </motion.div>
  );
};

export default Home;