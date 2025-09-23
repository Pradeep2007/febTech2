import React from 'react';
import { motion } from 'framer-motion';
import PratikOzaImage from '../assets/images/Pratik.jpg';
import { 
  FaCalendarAlt, 
  FaEye, 
  FaBullseye, 
  FaCertificate,
  FaHeart,
  FaShieldAlt,
  FaUsers,
  FaGraduationCap,
  FaChartLine,
  FaBalanceScale,
  FaClipboardCheck,
  FaHandsHelping,
  FaGlobe,
  FaHospital,
  FaMedkit,
  FaStethoscope,
  FaMicroscope,
  FaCog,
  FaAward,
  FaHandshake,
  FaCheckCircle,
  FaLinkedin
} from 'react-icons/fa';

const About = () => {
  const services = [
    {
      title: 'Advanced Medical Equipment',
      description: 'Cutting-edge diagnostic devices and medical technology',
      icon: <FaStethoscope className="text-3xl text-teal-prime" />
    },
    {
      title: 'Hospital Equipment',
      description: 'Reliable hospital equipment and surgical equipment',
      icon: <FaHospital className="text-3xl text-blue" />
    },
    {
      title: 'Biomedical Equipment',
      description: 'Precision biomedical equipment and medical supplies',
      icon: <FaMicroscope className="text-3xl text-orange" />
    },
    {
      title: 'Complete Support',
      description: 'End-to-end sales, service, and technical support',
      icon: <FaCog className="text-3xl text-green-500" />
    }
  ];

  const coreValues = [
    {
      title: 'Integrity',
      description: 'We act with honesty, transparency, and responsibility in everything we do.',
      icon: <FaShieldAlt className="text-3xl text-teal-prime" />
    },
    {
      title: 'Quality Assurance',
      description: 'Every solution we deliver is built on precision, reliability, and healthcare excellence.',
      icon: <FaAward className="text-3xl text-blue" />
    },
    {
      title: 'Customer Focus',
      description: 'We put patient care and supporting healthcare professionals at the center of all our decisions.',
      icon: <FaUsers className="text-3xl text-orange" />
    },
    {
      title: 'Professionalism',
      description: 'We uphold the highest standards in the medical equipment and healthcare industry.',
      icon: <FaGraduationCap className="text-3xl text-green-500" />
    },
    {
      title: 'Continuous Improvement',
      description: 'We strive for innovation and advancing medical technology every day.',
      icon: <FaChartLine className="text-3xl text-purple-500" />
    },
    {
      title: 'Accountability',
      description: 'We deliver on our commitments with measurable results.',
      icon: <FaBalanceScale className="text-3xl text-red-500" />
    },
    {
      title: 'Compliance',
      description: 'We adhere to strict global standards and medical device regulations.',
      icon: <FaClipboardCheck className="text-3xl text-indigo-500" />
    },
    {
      title: 'Compassion',
      description: 'We serve with empathy, prioritizing patient outcomes and well-being.',
      icon: <FaHeart className="text-3xl text-pink-500" />
    },
    {
      title: 'Diversity and Inclusion',
      description: 'We respect and embrace all voices, cultures, and perspectives in shaping the future of healthcare.',
      icon: <FaGlobe className="text-3xl text-cyan-500" />
    }
  ];

  const milestones = [
    { year: '2011', event: 'Fabtech Inc established in Ahmedabad, Gujarat with 25+ years of industry expertise' },
    { year: '2013', event: 'Achieved President\'s Club and 100% Club recognitions from Abbott Diagnostics' },
    { year: '2015', event: 'Expanded partnerships with premium hospitals and clinical research organizations' },
    { year: '2018', event: 'Became trusted distributor for advanced pathology laboratories across Gujarat' },
    { year: '2020', event: 'Strengthened relationships with global medical device companies' },
    { year: '2024', event: 'Recognized as leading sales, service, and distribution partner in healthcare' }
  ];

  const whyChooseUs = [
    {
      title: 'Trusted by Top Healthcare Providers',
      description: 'Preferred partner for hospitals, CROs, and labs across Gujarat',
      icon: <FaHandshake className="text-3xl text-teal-prime" />
    },
    {
      title: 'Complete Sales & Service Focus',
      description: 'Equal emphasis on sales and service ensuring complete customer satisfaction',
      icon: <FaHandsHelping className="text-3xl text-blue" />
    },
    {
      title: 'Global Expertise, Local Presence',
      description: 'Combining international innovation with local accessibility',
      icon: <FaGlobe className="text-3xl text-orange" />
    },
    {
      title: 'Proven Track Record',
      description: 'Decades of reliability backed by industry awards and achievements',
      icon: <FaAward className="text-3xl text-green-500" />
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding relative overflow-hidden">
        {/* Sunlight effect */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 w-[28rem] h-[28rem] blur-3xl opacity-40"
          style={{
            background:
              'radial-gradient( circle at center, rgba(255,225,150,0.45) 0%, rgba(255,200,100,0.25) 35%, rgba(255,255,255,0) 70% )'
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 w-[24rem] h-[24rem] blur-3xl opacity-30"
          style={{
            background:
              'radial-gradient( circle at center, rgba(99,179,237,0.35) 0%, rgba(20,184,166,0.2) 40%, rgba(255,255,255,0) 70% )'
          }}
        />
        <div className="container-max text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">About Fabtech Inc</h1>
            <p className="text-xl text-light-teal max-w-4xl mx-auto leading-relaxed">
            Fabtech Inc is an innovation-led, trusted partner for sales, service, and distribution across hospitals, laboratories, and medical device organizations. Based in Ahmedabad, Gujarat, our focus spans medical and hospital equipment, surgical and biomedical systems, diagnostic technologies, and essential medical supplies. Featuring solutions from Abbott and other world-class manufacturers, we are the preferred choice for healthcare institutions that prioritize reliability and excellence. And we don’t stop at distribution our dedicated service network and customer first approach ensure every biomedical and surgical device performs to international standards, because in healthcare, precision and trust save lives.
            </p>
            <div className="mt-8">
              <span className="inline-block bg-white bg-opacity-20 px-6 py-2 rounded-full text-lg font-medium">
                Trusted Healthcare Partner Since 2011
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      {/* <section className="section-padding bg-gradient-to-br from-white to-cyan-50 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-16 right-0 w-[26rem] h-[26rem] blur-3xl opacity-40"
          style={{
            background:
              'radial-gradient( circle at center, rgba(255,236,179,0.45) 0%, rgba(255,214,102,0.25) 40%, rgba(255,255,255,0) 70% )'
          }}
        />
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <FaCalendarAlt className="text-3xl text-teal-prime mr-4" />
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Who We Are</h3>
                  <p className="text-gray-600">Healthcare Innovation Leaders</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                Fabtech Inc is an innovation-led, trusted partner for sales, service, and distribution across hospitals, laboratories, and medical device organizations. Based in Ahmedabad, Gujarat, our focus spans medical and hospital equipment, surgical and biomedical systems, diagnostic technologies, and essential medical supplies. Featuring solutions from Abbott and other world-class manufacturers, we are the preferred choice for healthcare institutions that prioritize reliability and excellence. And we don’t stop at distribution—our dedicated service network and customer-first approach ensure every biomedical and surgical device performs to international standards, because in healthcare, precision and trust save lives.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                  Medical Equipment
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Hospital Equipment
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Surgical Equipment
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Biomedical Equipment
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Diagnostic Devices
                </span>
                <span className="bg-pink-100 text-pink-800 px-3 py-1 rounded-full text-sm font-medium">
                  Medical Supplies
                </span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white/80 backdrop-blur rounded-2xl p-8 border border-teal-100 shadow-sm"
            >
              <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">Our Achievements</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-prime mb-2">25+</div>
                  <div className="text-gray-600">Years Expertise</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue mb-2">13+</div>
                  <div className="text-gray-600">Years in Business</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">100%</div>
                  <div className="text-gray-600">Club Recognition</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">Gujarat</div>
                  <div className="text-gray-600">Wide Coverage</div>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-teal-200/60">
                <p className="text-sm text-gray-600 text-center">
                  <strong>Awards:</strong> President's Club, 100% Club, Top Achievers from Abbott Diagnostics
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section> */}

      {/* Mission & Vision */}
      <section className="section-padding bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ 
                scale: 1.01,
                y: -5,
                transition: { 
                  duration: 0.3, 
                  ease: [0.4, 0, 0.2, 1],
                  type: "tween"
                }
              }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8 bg-gradient-to-br from-indigo-100 to-purple-100 border border-indigo-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:from-indigo-200 hover:to-purple-200 transform-gpu"
            >
              <motion.div 
                className="text-center mb-6"
                whileHover={{ 
                  scale: 1.08,
                  transition: { 
                    duration: 0.25,
                    ease: [0.4, 0, 0.2, 1],
                    type: "tween"
                  }
                }}
              >
                <FaEye className="text-6xl text-indigo-600 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Vision Statement</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
              Fabtech Inc aims to shape the future of healthcare by delivering innovative medical technology for better patient care. Our vision is to set new benchmarks in excellence, lead the industry, and create sustainable solutions that empower healthcare providers worldwide.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              whileHover={{ 
                scale: 1.01,
                y: -5,
                transition: { 
                  duration: 0.3, 
                  ease: [0.4, 0, 0.2, 1],
                  type: "tween"
                }
              }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 bg-gradient-to-br from-teal-100 to-emerald-100 border border-teal-200 shadow-lg hover:shadow-2xl transition-all duration-300 hover:from-teal-200 hover:to-emerald-200 transform-gpu"
            >
              <motion.div 
                className="text-center mb-6"
                whileHover={{ 
                  scale: 1.08,
                  transition: { 
                    duration: 0.25,
                    ease: [0.4, 0, 0.2, 1],
                    type: "tween"
                  }
                }}
              >
                <FaBullseye className="text-6xl text-teal-600 mx-auto mb-4" />
              </motion.div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 text-center">Mission Statement</h3>
              <p className="text-gray-700 text-lg leading-relaxed text-center">
              Our mission is to advance healthcare by providing innovative, reliable medical technology that improves diagnostics, treatment, and patient outcomes while supporting healthcare professionals worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Deliver Section */}
      <section className="section-padding bg-gradient-to-br from-teal-50 via-sky-50 to-blue-50">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-700 via-blue-700 to-cyan-600 bg-clip-text text-transparent mb-4">
              What We Deliver
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive healthcare solutions backed by global expertise and local service excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center hover:shadow-xl transition-transform transform hover:-translate-y-1 bg-white/90 backdrop-blur border-t-4 border-teal-300"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  <FaCheckCircle className="inline text-green-500 mr-2" />
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Decorative glow accents */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-6 -left-6 w-40 h-40 blur-2xl opacity-40"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(125,211,252,0.6) 0%, rgba(59,130,246,0.35) 45%, rgba(0,0,0,0) 70%)'
              }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-6 -right-6 w-36 h-36 blur-2xl opacity-30"
              style={{
                background:
                  'radial-gradient(circle at center, rgba(16,185,129,0.45) 0%, rgba(56,189,248,0.3) 40%, rgba(0,0,0,0) 70%)'
              }}
            />

            {/* Gradient border wrapper */}
            {/* <div className="p-[2px] rounded-2xl bg-gradient-to-r from-blue-400 via-teal-400 to-indigo-400">
              <div className="card rounded-2xl p-10 text-center bg-white/90 backdrop-blur">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium mb-3">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  Trusted Partnerships
                </div>
                <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-700 to-indigo-600 bg-clip-text text-transparent mb-3">
                  Partnerships with Leading Medical Device Companies
                </h3>
                <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
                  We maintain strategic partnerships with Abbott and other world-renowned medical device companies,
                  ensuring access to the latest innovations in healthcare technology.
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-8">
                  <div className="flex items-center justify-center gap-3 bg-gray-50 rounded-xl py-3 px-4 border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-semibold">A</div>
                    <span className="text-gray-800 font-medium">Abbott</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 bg-gray-50 rounded-xl py-3 px-4 border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-teal-100 text-teal-700 flex items-center justify-center font-semibold">G</div>
                    <span className="text-gray-800 font-medium">Global Partner</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 bg-gray-50 rounded-xl py-3 px-4 border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-semibold">M</div>
                    <span className="text-gray-800 font-medium">MedTech</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 bg-gray-50 rounded-xl py-3 px-4 border border-gray-100">
                    <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-700 flex items-center justify-center font-semibold">D</div>
                    <span className="text-gray-800 font-medium">Diagnostics</span>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-center gap-3">
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    Compliance-ready
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-sky-50 text-sky-700 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-sky-500"></span>
                    Latest Technology
                  </span>
                  <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    Trusted Support
                  </span>
                </div>
              </div>
            </div> */}
          </motion.div>
        </div>
      </section>

      {/* Removed: Why Fabtech Inc Section */}

      

      {/* Removed: Core Values */}

      {/* Company Timeline */}
      <section className="section-padding bg-gradient-to-br from-sky-50 to-teal-50">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <FaChartLine className="text-4xl text-teal-600" />
              <h2 className="text-4xl font-bold bg-gradient-to-r from-teal-700 to-sky-700 bg-clip-text text-transparent">Our Journey</h2>
            </div>
            <p className="text-xl text-gray-600">
              Building on 25+ years of expertise in diagnostics and biomedical equipment industry
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Journey Content */}
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8 bg-white/90 backdrop-blur border border-teal-100 h-full"
            >
              <div className="prose max-w-none">
                <p className="text-gray-700 text-lg leading-relaxed mb-4">
                  Our Journey Fabtech Inc was established in 2011, built on over 25 years of expertise in the diagnostics and biomedical equipment industry. Our leadership began with renowned names such as Transasia Biomedical Ltd. and Abbott Diagnostics, where our team consistently earned prestigious recognitions including the President's Club, 100% Club, and Top Achievers awards.
                </p>
                <p className="text-gray-700 text-lg leading-relaxed">
                  From day one, we have cultivated strong, long-term relationships with premium hospitals, clinical research organizations, and advanced pathology laboratories across Gujarat. These partnerships reflect our reputation as a reliable distributor trusted by both global medical device companies and leading healthcare providers.
                </p>
              </div>
            </motion.div>

            {/* Founder Card */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8 bg-gradient-to-br from-teal-50 to-sky-50 border border-teal-200 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="flex flex-col items-center justify-center text-center h-full">
                <div className="relative mb-8">
                  <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-teal-200 shadow-lg">
                    <img 
                      src={PratikOzaImage} 
                      alt="Pratik Oza - Founder & Director" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                
                <h3 className="text-3xl font-bold text-gray-900 mb-3">Pratik Oza</h3>
                <p className="text-teal-700 font-semibold text-xl mb-4">Founder & Director</p>
                
                {/* LinkedIn Profile Link */}
                <a 
                  href="https://www.linkedin.com/in/pratik-oza-20b20844/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  <FaLinkedin className="text-xl" />
                  <span className="font-medium">Connect on LinkedIn</span>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;