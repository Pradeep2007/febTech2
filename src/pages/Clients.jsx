import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { getActiveClients } from '../services/clientService';
import { 
  FaUsers
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
      { number: '65+', label: 'Major Clients', color: 'text-blue-600' },
      { number: '25+', label: 'Years Experience', color: 'text-green-600' },
      { number: '100%', label: 'Client Satisfaction', color: 'text-purple-600' },
      { number: '24/7', label: 'Support Available', color: 'text-orange-600' }
    ];
    
    const count1 = useAnimatedCounter('65+', 2000, isInView);
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

  // State for clients data
  const [allClients, setAllClients] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load clients from Firebase
  useEffect(() => {
    const loadClients = async () => {
      try {
        setLoading(true);
        const clientsData = await getActiveClients();
        setAllClients(clientsData);
      } catch (error) {
        console.error('Error loading clients:', error);
        // Fallback to empty array if Firebase fails
        setAllClients([]);
      } finally {
        setLoading(false);
      }
    };

    loadClients();
  }, []);




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
            <h1 className="text-5xl font-bold mb-6">Authorized Channel Clients</h1>
            <p className="text-xl text-light-teal max-w-3xl mx-auto">
              Trusted partnerships with leading healthcare institutions, pharmaceutical companies, 
              and research organizations across Gujarat and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* All Clients Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            
          </motion.div>

          {/* Unified Clients Grid */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 shadow-lg"
          >
            {loading ? (
              <div className="flex items-center justify-center py-12">
                <div className="loading-spinner w-8 h-8 border-4 mr-4"></div>
                <span className="text-gray-600">Loading clients...</span>
              </div>
            ) : allClients.length === 0 ? (
              <div className="text-center py-12">
                <FaUsers className="text-6xl text-gray-300 mx-auto mb-4" />
                <p className="text-gray-500 text-lg">No clients available at the moment.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {allClients.map((client, index) => (
                  <motion.div
                    key={client.id || client.name}
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    transition={{ 
                      duration: 0.5, 
                      delay: index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border-2 border-teal-200 h-full flex flex-col items-center text-center">
                      {/* Client Logo */}
                      <div className="flex-1 flex items-center justify-center p-4 mb-4">
                        {client.logoUrl ? (
                          <img 
                            src={client.logoUrl} 
                            alt={`${client.name} logo`} 
                            className="max-w-full max-h-24 object-contain group-hover:scale-105 transition-transform duration-300 shadow-md rounded-lg"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                        ) : null}
                        <div 
                          className={`w-24 h-24 bg-gray-100 rounded-lg flex items-center justify-center ${client.logoUrl ? 'hidden' : 'flex'}`}
                        >
                          <FaUsers className="text-gray-400 text-2xl" />
                        </div>
                      </div>
                      
                      {/* Client Name */}
                      <h4 className="text-lg font-bold text-gray-900 group-hover:text-teal-600 transition-colors mb-2">
                        {client.name}
                      </h4>
                      
                      {/* Client Description */}
                      {client.description && (
                        <p className="text-sm text-gray-600 text-center line-clamp-2">
                          {client.description}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
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