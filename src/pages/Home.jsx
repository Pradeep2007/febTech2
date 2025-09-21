import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
    {
      icon: <FaShieldAlt className="text-3xl text-teal-prime" />,
      title: 'FDA Compliant',
      description: 'All products meet strict regulatory standards'
    },
    {
      icon: <FaUsers className="text-3xl text-blue" />,
      title: '500+ Clients',
      description: 'Trusted by healthcare providers worldwide'
    },
    {
      icon: <FaAward className="text-3xl text-orange" />,
      title: 'ISO Certified',
      description: 'Quality management system certification'
    },
    {
      icon: <FaBox className="text-3xl text-green-500" />,
      title: 'Quality Products',
      description: 'Premium medical equipment and supplies'
    }
  ];

  // Add missing partners array
  const partners = [
    'Johnson & Johnson',
    'Pfizer',
    'Medtronic',
    'Abbott',
    'Roche',
    'Siemens Healthineers'
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[86vh] md:min-h-screen flex items-center justify-center overflow-hidden pt-36 md:pt-40 pb-16">
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
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 md:mb-8 leading-[1.15] tracking-tight">
              Leading Medical Equipment Provider
              <span className="block bg-gradient-to-r from-teal-200 via-cyan-200 to-white bg-clip-text text-transparent">
                Delivering Advanced Medical Technology for Better Patient Care
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-white/90 mb-8 md:mb-10 max-w-4xl mx-auto leading-relaxed">
              At Fabtech Inc, we empower hospitals, laboratories, and healthcare professionals with innovative
              healthcare solutions, diagnostic devices, surgical equipment, and biomedical equipment. Our mission is
              to improve quality of life by ensuring accessible medical equipment, supporting doctors, and enhancing
              patient outcomes.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-10 md:mb-12">
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

          {/* Categories Grid */}
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
          </motion.div>

          {/* Compliance & Partners */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {/* Compliance */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <FaShieldAlt className="mr-2" size={20} />
                Compliance & Certifications
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {complianceItems.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                    className="bg-white/20 rounded-lg p-2 text-center"
                  >
                    <span className="text-white text-sm font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Partner Brands */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                <FaUsers className="mr-2" size={20} />
                Partner Brands
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {partnerBrands.map((brand, index) => (
                  <motion.div
                    key={brand}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                    className="bg-white/20 rounded-lg p-2 text-center"
                  >
                    <span className="text-white text-sm font-medium">
                      {brand}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white/50 rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Product Categories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We specialize in two main categories of medical products, 
              each backed by industry-leading partners and compliance standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {categories.slice(0, 2).map((category, index) => {
              const Icon = category.icon;
              const products = category.name === "Sysmax-Biotsystems" 
                ? ['Blood Analyzers', 'Microscopes', 'Centrifuges']
                : ['Generic Medicines', 'Specialty Drugs', 'Medical Supplies'];
              
              return (
                <motion.div
                  key={category.name}
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="card p-8 text-center"
                >
                  <div className="mb-6">
                    <Icon className="text-4xl text-teal-prime mx-auto" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {category.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{category.description}</p>
                  <div className="space-y-2">
                    {products.map((product) => (
                      <div key={product} className="text-sm text-teal-prime font-medium">
                        • {product}
                      </div>
                    ))}
                  </div>
                  <Link
                    to="/products"
                    className="inline-flex items-center mt-6 text-teal-prime hover:text-teal-600 font-semibold"
                  >
                    View All Products
                    <FaChevronRight className="ml-2" />
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-light-gray">
        <div className="container-max">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted Partner Brands
            </h2>
            <p className="text-xl text-gray-600">
              We work with the world's leading pharmaceutical and medical device companies
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8"
          >
            {partners.map((partner, index) => (
              <div
                key={partner}
                className="bg-gray-50 rounded-lg p-6 flex items-center justify-center text-center hover:shadow-lg transition-shadow"
              >
                <span className="font-semibold text-gray-700">{partner}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Home;