import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import About from './About';
import Products from './Products';
import Members from './Members';
import Clients from './Clients';
import FAQ from './FAQ';
import Contact from './Contact';
import { 
  FaShieldAlt, 
  FaUsers, 
  FaAward,
  FaBox,
  FaShoppingCart,
  FaHandshake,
  FaChevronRight
} from 'react-icons/fa';

const Home = () => {
  const categories = [
    {
      name: "Sysmax-Biotsystems",
      icon: FaBox,
      description: "Advanced diagnostic equipment",
    },
    { 
      name: "Rest Inc.", 
      icon: FaShieldAlt, 
      description: "Patient care solutions" 
    },
    {
      name: "Pharmaceuticals",
      icon: FaAward,
      description: "Quality medicines & drugs",
    },
    {
      name: "Medical Equipment",
      icon: FaBox,
      description: "Professional medical devices",
    },
  ];

  const complianceItems = [
    "FDA Approved",
    "ISO 13485 Certified",
    "GMP Compliant",
    "CE Marked",
  ];

  const partnerBrands = [
    "Johnson & Johnson",
    "Pfizer",
    "Medtronic",
    "Siemens Healthineers",
    "GE Healthcare",
    "Baxter",
  ];

  // Add missing features array
  const features = [
    // {
    //   icon: <FaShieldAlt className="text-3xl text-teal-prime" />,
    //   title: 'FDA Compliant',
    //   description: 'All products meet strict regulatory standards'
    // },
    {
      icon: <FaUsers className="text-3xl text-blue" />,
      title: '500+ Clients',
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
      <section id="home" className="relative min-h-[86vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-20 md:pt-24 pb-12">
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
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-extrabold text-white mb-3 md:mb-4 leading-[1.15] tracking-tight">
              Leading Medical Equipment Provider
              <span className="block bg-gradient-to-r from-teal-200 via-cyan-200 to-white bg-clip-text text-transparent leading-[1.25] pb-1">
                Delivering Advanced Medical Technology for Better Patient Care
              </span>
            </h1>

            <p className="text-base md:text-lg lg:text-xl text-white/90 mt-5 md:mt-8 mb-4 md:mb-5 max-w-4xl mx-auto leading-relaxed">
              At Fabtech Inc, we empower hospitals, laboratories, and healthcare professionals with innovative
              healthcare solutions, diagnostic devices, surgical equipment, and biomedical equipment. Our mission is
              to improve quality of life by ensuring accessible medical equipment, supporting doctors, and enhancing
              patient outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-0">
              <Link
                to="/products"
                className="inline-flex items-center justify-center gap-2 rounded-xl text-base md:text-lg px-7 md:px-8 py-3.5 md:py-4 text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 transition-colors shadow-lg shadow-black/10 font-semibold whitespace-nowrap min-w-[270px] md:min-w-[320px]"
              >
                <FaShoppingCart className="opacity-90" size={20} />
                Explore Our Medical Supplies
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-xl text-base md:text-lg px-7 md:px-8 py-3.5 md:py-4 text-white bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 transition-colors shadow-lg shadow-black/10 font-semibold whitespace-nowrap min-w-[270px] md:min-w-[320px]"
              >
                <FaHandshake className="opacity-90" size={20} />
                Partner with Us for Healthcare Excellence
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose FabTech?
            </h2>
            <p className="text-xl text-gray-600">
              We're committed to excellence in every aspect of our business
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                whileInView={{ scale: 1, y: 0, opacity: 1 }}
                whileHover={{ scale: 1.05, rotate: 0.5 }}
                transition={{ duration: 0.8, delay: index * 0.1, type: 'spring' }}
                viewport={{ once: true }}
                className="group relative p-[2px] rounded-2xl bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 hover:via-teal-400 transition-all w-full max-w-sm hover-glow-soft transform-gpu"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">Trusted Partner</h2>
            <p className="text-lg text-gray-600">
              We proudly collaborate with industry leader{" "}
              <motion.span
                animate={{ scale: [1, 1.12, 1], textShadow: ["0px 0px 0px rgba(56,189,248,0)", "0px 0px 14px rgba(56,189,248,0.7)", "0px 0px 0px rgba(56,189,248,0)"] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="ml-1 font-extrabold bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-600 bg-clip-text text-transparent text-2xl"
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
                    ? "bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 animate-pulse"
                    : "bg-gradient-to-r from-gray-200 to-gray-300"
                } w-full max-w-md`}
              >
                <div className="rounded-2xl bg-white p-8 text-center shadow-md group-hover:shadow-2xl transition-shadow duration-500">
                  <motion.div
                    animate={partner === "Abbott" ? { scale: [1, 1.05, 1] } : {}}
                    transition={partner === "Abbott" ? { duration: 2, repeat: Infinity } : {}}
                    className="text-4xl font-extrabold text-gray-900 mb-2"
                  >
                    {partner}
                  </motion.div>
                  <p className="text-gray-600">Global healthcare and diagnostics leader</p>
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