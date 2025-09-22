import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import client1 from '../assets/images/client1.jpg'
import client2 from '../assets/images/client2.jpg'
import client3 from '../assets/images/client3.jpg'
import client4 from '../assets/images/client4.jpg'
import client5 from '../assets/images/client5.png'
import client6 from '../assets/images/client6.png'
import client7 from '../assets/images/client7.jpg'
import client8 from '../assets/images/client8.png'
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
  // Animated counter hook
  const useAnimatedCounter = (end, duration = 2000, startAnimation = false) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!startAnimation) return;
      
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        
        // Extract number from string (e.g., "10+" -> 10)
        const numericEnd = parseInt(end.toString().replace(/[^0-9]/g, ''));
        const currentCount = Math.floor(progress * numericEnd);
        
        setCount(currentCount);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          // Set final value with original formatting
          setCount(end);
        }
      };
      
      requestAnimationFrame(animate);
    }, [end, duration, startAnimation]);
    
    return count;
  };

  // Animated Stats Component
  const AnimatedStats = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, threshold: 0.3 });
    
    const stats = [
      { number: '10+', label: 'Major Clients', color: 'text-blue-600' },
      { number: '25+', label: 'Years Experience', color: 'text-green-600' },
      { number: '100%', label: 'Client Satisfaction', color: 'text-purple-600' },
      { number: '24/7', label: 'Support Available', color: 'text-orange-600' }
    ];
    
    const count1 = useAnimatedCounter('10+', 2000, isInView);
    const count2 = useAnimatedCounter('25+', 2500, isInView);
    const count3 = useAnimatedCounter('100%', 3000, isInView);
    const count4 = useAnimatedCounter('24/7', 2000, isInView);
    
    const animatedCounts = [count1, count2, count3, count4];
    
    return (
      <motion.div
        ref={ref}
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
      >
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ scale: 0.5, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            <div className={`text-4xl font-bold ${stat.color} transition-all duration-300`}>
              {animatedCounts[index]}
            </div>
            <div className="text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </motion.div>
    );
  };
  const partnerCategories = {
    'Government': {
      title: 'Government Institutions',
      icon: <FaHospital className="text-4xl text-blue-600" />,
      color: 'blue',
      partners: [
        {
          name: 'Civil Hospital Amdabad',
          logo: client1
        },
        {
          name: 'U.N. Mehta Institute of Cardiology and Research Center',
          logo: client6
        },
        {
          name: 'Government Medical College, Bhavnagar',
          logo: client8
        }
      ]
    },
    'Clinical Research': {
      title: 'Clinical Research Organizations',
      icon: <FaFlask className="text-4xl text-teal-600" />,
      color: 'teal',
      partners: [
        {
          name: 'Cliantha Clinical Research',
          logo: client3
        },
        {
          name: 'Lambda Research Accelerated',
          logo: client5
        }
      ]
    },
    'Corporate Hospitals': {
      title: 'Corporate Hospitals & Private Labs',
      icon: <FaHeartbeat className="text-4xl text-red-500" />,
      color: 'red',
      partners: [
        {
          name: 'Shalby Multi-Specialty Care',
          logo: client7
        },
        {
          name: 'Sanjeevani Pathology Laboratory',
          logo: client2
        }
      ]
    },
    'Pharma Companies': {
      title: 'Pharmaceutical Companies',
      icon: <FaPills className="text-4xl text-green-600" />,
      color: 'green',
      partners: [
        {
          name: 'Intas Pharmaceuticals',
          logo: client4
        }
      ]
    }
  };

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
            <h1 className="text-5xl font-bold mb-6">Authorized Channel Partner</h1>
            <p className="text-xl text-light-teal max-w-3xl mx-auto">
              Trusted partnerships with leading healthcare institutions, pharmaceutical companies, 
              and research organizations across Gujarat and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Partner Categories */}
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
              Our Trusted Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Building strong partnerships across four key healthcare sectors in Gujarat and beyond.
            </p>
          </motion.div>

          {/* Categories */}
          <div className="space-y-16">
            {Object.entries(partnerCategories).map(([categoryKey, category], categoryIndex) => (
              <motion.div
                key={categoryKey}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-3xl p-8 shadow-lg"
              >
                {/* Category Header */}
                <div className="flex items-center justify-center mb-8">
                  <div className="flex items-center gap-4">
                    {category.icon}
                    <h3 className="text-3xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                </div>

                {/* Partners Grid */}
                <div className={`grid gap-6 ${
                  category.partners.length === 1 ? 'grid-cols-1 justify-items-center max-w-sm mx-auto' :
                  category.partners.length === 2 ? 'grid-cols-1 md:grid-cols-2 justify-items-center max-w-2xl mx-auto' :
                  'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
                }`}>
                  {category.partners.map((partner, partnerIndex) => (
                    <motion.div
                      key={partner.name}
                      initial={{ y: 30, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: partnerIndex * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      className="group"
                    >
                      <div className={`bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 ${getColorClasses(category.color).split(' ')[2]} h-full flex flex-col items-center text-center`}>
                        {/* Partner Logo/Avatar */}
                        <div className="flex-1 flex items-center justify-center p-4 mb-4">
                          <img 
                            src={partner.logo} 
                            alt={`${partner.name} logo`} 
                            className="max-w-full max-h-24 object-contain group-hover:scale-105 transition-transform duration-300 shadow-md rounded-lg"
                          />
                        </div>
                        
                        {/* Partner Name */}
                        <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                          {partner.name}
                        </h4>
                      </div>
                    </motion.div>
                  ))}
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
          
          <AnimatedStats />
        </div>
      </section>
    </motion.div>
  );
};

export default Clients;