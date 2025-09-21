import { motion } from 'framer-motion';
import { 
  FaHospital, 
  FaFlask, 
  FaPills, 
  FaMapMarkerAlt,
  FaAward,
  FaHandshake,
  FaMicroscope,
  FaHeartbeat
} from 'react-icons/fa';

const Clients = () => {
  const clients = [
    {
      name: 'Government Medical College',
      category: 'Government',
      type: 'Medical Education Institution',
      location: 'Gujarat, India',
      partnership: '8+ years',
      description: 'Leading government medical college providing quality medical education and healthcare services',
      services: ['Medical Equipment', 'Laboratory Instruments', 'Educational Tools'],
      icon: <FaHospital className="text-3xl text-blue-600" />,
      color: 'blue',
      achievements: ['500+ Students', 'Research Excellence', 'Community Healthcare']
    },
    {
      name: 'Shalby Multi-Specialty Care',
      category: 'Corporate Hospitals',
      type: 'Multi-Specialty Hospital Chain',
      location: 'Ahmedabad, Gujarat',
      partnership: '6+ years',
      description: 'Premier healthcare provider known for advanced medical treatments and patient care',
      services: ['Advanced Medical Equipment', 'Surgical Instruments', 'Diagnostic Tools'],
      icon: <FaHeartbeat className="text-3xl text-red-500" />,
      color: 'red',
      achievements: ['Joint Replacement Leader', 'International Standards', 'Patient Satisfaction']
    },
    {
      name: 'Zydus Healthcare',
      category: 'Pharma Companies',
      type: 'Pharmaceutical Giant',
      location: 'Ahmedabad, Gujarat',
      partnership: '10+ years',
      description: 'Global pharmaceutical company focused on innovative healthcare solutions',
      services: ['Pharmaceutical Equipment', 'Quality Control Instruments', 'Research Tools'],
      icon: <FaPills className="text-3xl text-green-600" />,
      color: 'green',
      achievements: ['Global Presence', 'R&D Excellence', 'Quality Manufacturing']
    },
    {
      name: 'Sanjeevani Pathology Laboratory',
      category: 'Corporate Hospitals',
      type: 'Diagnostic Laboratory Chain',
      location: 'Gujarat, India',
      partnership: '7+ years',
      description: 'Leading pathology laboratory providing accurate diagnostic services',
      services: ['Laboratory Equipment', 'Diagnostic Instruments', 'Quality Reagents'],
      icon: <FaMicroscope className="text-3xl text-purple-600" />,
      color: 'purple',
      achievements: ['Accurate Diagnostics', 'Quick Turnaround', 'Advanced Technology']
    },
    {
      name: 'Clianthra Clinical Research',
      category: 'Clinical Research',
      type: 'Clinical Research Organization',
      location: 'Ahmedabad, Gujarat',
      partnership: '5+ years',
      description: 'Specialized clinical research organization conducting innovative medical studies',
      services: ['Research Equipment', 'Clinical Trial Supplies', 'Data Management Tools'],
      icon: <FaFlask className="text-3xl text-teal-600" />,
      color: 'teal',
      achievements: ['Clinical Excellence', 'Research Innovation', 'Regulatory Compliance']
    },
    {
      name: 'Torrent Pharmaceuticals',
      category: 'Pharma Companies',
      type: 'Pharmaceutical Company',
      location: 'Ahmedabad, Gujarat',
      partnership: '12+ years',
      description: 'Leading pharmaceutical company with global operations and innovative products',
      services: ['Manufacturing Equipment', 'Quality Testing Instruments', 'Compliance Solutions'],
      icon: <FaAward className="text-3xl text-orange-600" />,
      color: 'orange',
      achievements: ['Global Operations', 'Quality Excellence', 'Innovation Leader']
    }
  ];

  const testimonials = [
    {
      quote: "FabTech has been an invaluable partner in our mission to provide exceptional patient care. Their commitment to quality and compliance gives us complete confidence in every product we receive.",
      author: "Dr. Sarah Mitchell",
      position: "Chief Medical Officer",
      organization: "Metropolitan General Hospital",
      rating: 5
    },
    {
      quote: "The level of service and expertise FabTech provides is unmatched. They understand our unique needs as an academic medical center and consistently deliver solutions that support both patient care and research.",
      author: "Dr. Michael Chen",
      position: "Director of Procurement",
      organization: "University Health System",
      rating: 5
    },
    {
      quote: "Working with FabTech has streamlined our supply chain operations significantly. Their digital platform and responsive customer service have made ordering and inventory management effortless.",
      author: "Jennifer Rodriguez",
      position: "Supply Chain Manager",
      organization: "Regional Medical Center",
      rating: 5
    },
    {
      quote: "As a community health network, we need partners who understand our budget constraints without compromising on quality. FabTech delivers exactly that - premium products at competitive prices.",
      author: "Dr. Robert Thompson",
      position: "Network Administrator",
      organization: "Community Health Partners",
      rating: 5
    }
  ];

  const partnerBrands = [
    {
      name: 'Johnson & Johnson',
      category: 'Medical Devices & Pharmaceuticals',
      partnership: 'Authorized Distributor',
      logo: 'J&J'
    },
    {
      name: 'Pfizer',
      category: 'Pharmaceutical Products',
      partnership: 'Strategic Partner',
      logo: 'PFE'
    },
    {
      name: 'Medtronic',
      category: 'Medical Technology',
      partnership: 'Certified Distributor',
      logo: 'MDT'
    },
    {
      name: 'Abbott',
      category: 'Diagnostics & Medical Devices',
      partnership: 'Preferred Partner',
      logo: 'ABT'
    },
    {
      name: 'Roche',
      category: 'Diagnostics & Pharmaceuticals',
      partnership: 'Authorized Distributor',
      logo: 'ROG'
    },
    {
      name: 'Siemens Healthineers',
      category: 'Medical Imaging & Diagnostics',
      partnership: 'Strategic Partner',
      logo: 'SHL'
    },
    {
      name: 'BD (Becton Dickinson)',
      category: 'Medical Technology',
      partnership: 'Certified Distributor',
      logo: 'BDX'
    },
    {
      name: 'Stryker',
      category: 'Medical Equipment',
      partnership: 'Preferred Partner',
      logo: 'SYK'
    }
  ];

  const clientStats = [
    { number: '500+', label: 'Healthcare Clients' },
    { number: '50+', label: 'Hospital Systems' },
    { number: '200+', label: 'Clinics & Practices' },
    { number: '98%', label: 'Client Retention Rate' }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      blue: 'from-blue-500 to-blue-600 border-blue-200',
      red: 'from-red-500 to-red-600 border-red-200',
      green: 'from-green-500 to-green-600 border-green-200',
      purple: 'from-purple-500 to-purple-600 border-purple-200',
      teal: 'from-teal-500 to-teal-600 border-teal-200',
      orange: 'from-orange-500 to-orange-600 border-orange-200'
    };
    return colorMap[color] || 'from-gray-500 to-gray-600 border-gray-200';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl font-bold mb-6">Our Valued Clients</h1>
            <p className="text-xl text-light-teal max-w-3xl mx-auto">
              Trusted partnerships with leading healthcare institutions, pharmaceutical companies, 
              and research organizations across Gujarat and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From government institutions to private hospitals, pharmaceutical giants to research organizations - 
              our clients represent the best in healthcare.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                whileInView={{ y: 0, opacity: 1, scale: 1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                viewport={{ once: true }}
                className="group relative h-full flex"
              >
                <div className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${getColorClasses(client.color).split(' ')[2]} overflow-hidden relative w-full flex flex-col`}>
                  {/* Background Gradient */}
                  <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${getColorClasses(client.color).split(' ')[0]} ${getColorClasses(client.color).split(' ')[1]} opacity-10 rounded-full transform translate-x-16 -translate-y-16`} />
                  
                  {/* Category Badge */}
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 bg-gradient-to-r ${getColorClasses(client.color)} text-white`}>
                    {client.category}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 relative z-10">
                    {client.icon}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 flex-1 flex flex-col">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-teal-600 transition-colors">
                      {client.name}
                    </h3>
                    <p className="text-sm text-gray-500 mb-3 font-medium">
                      {client.type}
                    </p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {client.description}
                    </p>

                    {/* Location & Partnership */}
                    <div className="flex items-center justify-between mb-4 text-xs text-gray-500">
                      <div className="flex items-center">
                        <FaMapMarkerAlt className="mr-1" />
                        {client.location}
                      </div>
                      <div className="flex items-center">
                        <FaHandshake className="mr-1" />
                        {client.partnership}
                      </div>
                    </div>

                    {/* Services */}
                    <div className="mb-4 flex-1">
                      <h4 className="text-xs font-semibold text-gray-700 mb-2">Services Provided:</h4>
                      <div className="flex flex-wrap gap-1">
                        {client.services.map((service, idx) => (
                          <span key={idx} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div className="mt-auto">
                      <h4 className="text-xs font-semibold text-gray-700 mb-2">Key Highlights:</h4>
                      <div className="flex flex-wrap gap-1">
                        {client.achievements.map((achievement, idx) => (
                          <span key={idx} className={`text-xs bg-gradient-to-r ${getColorClasses(client.color)} text-white px-2 py-1 rounded-full`}>
                            ⭐ {achievement}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Statistics */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-gray-600">
              Building lasting partnerships across the healthcare ecosystem
            </p>
          </motion.div>
          
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            <div className="space-y-2">
              <div className="text-4xl font-bold text-blue-600">10+</div>
              <div className="text-gray-600">Major Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-green-600">25+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-purple-600">100%</div>
              <div className="text-gray-600">Client Satisfaction</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-orange-600">24/7</div>
              <div className="text-gray-600">Support Available</div>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Clients;