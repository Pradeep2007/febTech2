import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown, FaChevronUp, FaQuestionCircle } from 'react-icons/fa';
import { getFaqs } from '../services/faqService';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  useEffect(() => {
    loadFaqs();
  }, []);

  const loadFaqs = async () => {
    try {
      setLoading(true);
      const faqData = await getFaqs();
      // Filter only active FAQs and group by category
      const activeFaqs = faqData.filter(faq => faq.isActive);
      
      // Filter FAQs to only include the three allowed categories
      const allowedCategories = ['Order Process', 'Support', 'Product Category'];
      const filteredFaqs = activeFaqs.filter(faq => allowedCategories.includes(faq.category));
      
      // Group FAQs by category
      const groupedFaqs = filteredFaqs.reduce((acc, faq) => {
        if (!acc[faq.category]) {
          acc[faq.category] = [];
        }
        acc[faq.category].push({
          question: faq.question,
          answer: faq.answer
        });
        return acc;
      }, {});

      // Convert to the format expected by the component, ensuring order
      const orderedCategories = ['Order Process', 'Support', 'Product Category'];
      const faqCategories = orderedCategories
        .filter(category => groupedFaqs[category] && groupedFaqs[category].length > 0)
        .map(category => ({
          title: category,
          faqs: groupedFaqs[category]
        }));

      setFaqs(faqCategories);
    } catch (error) {
      console.error('Error loading FAQs:', error);
      // Fallback to empty array if Firebase fails
      setFaqs([]);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-light-gray flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner w-12 h-12 border-4 border-teal-prime border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Loading FAQs...</p>
        </div>
      </div>
    );
  }

  // Fallback FAQ categories (only used if Firebase fails to load)
  const fallbackFaqCategories = [
    {
      title: 'Order Process',
      faqs: [
        {
          question: 'How do I place an order with FabTech?',
          answer: 'You can place orders by contacting our sales team directly or through our authorized distributors. We provide personalized consultation to understand your specific medical equipment needs.'
        },
        {
          question: 'What is the minimum order quantity?',
          answer: 'Minimum order quantities vary by product. Contact our sales team for specific MOQ information for your required medical equipment and supplies.'
        },
        {
          question: 'Do you offer volume discounts?',
          answer: 'Yes, we offer competitive pricing for bulk orders. Contact our sales team to discuss volume pricing options for your healthcare facility.'
        }
      ]
    },
    {
      title: 'Support',
      faqs: [
        {
          question: 'What technical support do you provide?',
          answer: 'We provide comprehensive technical support including installation, training, maintenance, and troubleshooting for all medical equipment we supply.'
        },
        {
          question: 'Do you offer equipment maintenance services?',
          answer: 'Yes, we provide preventive maintenance, calibration, and repair services for biomedical and diagnostic equipment through our qualified service team.'
        },
        {
          question: 'What are your support hours?',
          answer: 'Our technical support team is available during business hours. Emergency support is available for critical medical equipment issues.'
        }
      ]
    },
    {
      title: 'Product Category',
      faqs: [
        {
          question: 'What types of medical equipment do you supply?',
          answer: 'We specialize in diagnostic equipment, biomedical instruments, laboratory analyzers, and medical supplies from leading manufacturers like Abbott.'
        },
        {
          question: 'Do you supply both equipment and consumables?',
          answer: 'Yes, we provide complete solutions including medical equipment, diagnostic instruments, reagents, and consumables for healthcare facilities.'
        },
        {
          question: 'Are your products FDA approved?',
          answer: 'All medical devices and equipment we distribute meet regulatory requirements and are sourced from certified manufacturers with proper documentation.'
        }
      ]
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
      <section className="gradient-bg text-white section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <FaQuestionCircle className="text-6xl mx-auto mb-6 text-light-teal" />
            <h1 className="text-5xl font-bold mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-light-teal max-w-3xl mx-auto">
              Find answers to common questions about our products, services, 
              ordering process, and compliance requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="section-padding bg-light-gray">
        <div className="container-max">
          <div className="max-w-4xl mx-auto">
            {(faqs.length > 0 ? faqs : fallbackFaqCategories).map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  {category.title}
                </h2>
                
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemKey = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openItems[itemKey];
                    
                    return (
                      <div
                        key={faqIndex}
                        className="bg-white rounded-lg shadow-md overflow-hidden"
                      >
                        <button
                          onClick={() => toggleItem(itemKey)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-semibold text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <FaChevronUp className="text-teal-prime flex-shrink-0" />
                          ) : (
                            <FaChevronDown className="text-teal-prime flex-shrink-0" />
                          )}
                        </button>
                        
                        <AnimatePresence>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 pb-4 text-gray-700 leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Support Section */}
      {/* <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Still Have Questions?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Our customer support team is here to help with any questions 
              not covered in our FAQ section.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-prime rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">📞</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Phone Support</h3>
                <p className="text-gray-600">Mon-Fri, 8 AM - 6 PM EST</p>
                <p className="text-teal-prime font-medium">(555) 123-4567</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">✉️</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600">Response within 24 hours</p>
                <p className="text-blue font-medium">support@fabtech.com</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-2xl">💬</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600">Available during business hours</p>
                <p className="text-orange font-medium">Start Chat</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Contact Support
              </button>
              <button className="btn-outline">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section> */}

      {/* Quick Links
      <section className="section-padding bg-light-gray">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Quick Links
            </h2>
            <p className="text-gray-600">
              Find additional information and resources
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Product Catalog</h3>
              <p className="text-gray-600 text-sm mb-4">Browse our complete product range</p>
              <button className="text-teal-prime hover:text-teal-600 font-medium">
                View Products →
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Compliance Info</h3>
              <p className="text-gray-600 text-sm mb-4">Learn about our certifications</p>
              <button className="text-teal-prime hover:text-teal-600 font-medium">
                View Compliance →
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Account Portal</h3>
              <p className="text-gray-600 text-sm mb-4">Manage your account online</p>
              <button className="text-teal-prime hover:text-teal-600 font-medium">
                Login →
              </button>
            </div>
            
            <div className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow">
              <h3 className="font-semibold text-gray-900 mb-2">Request Quote</h3>
              <p className="text-gray-600 text-sm mb-4">Get pricing for your needs</p>
              <button className="text-teal-prime hover:text-teal-600 font-medium">
                Get Quote →
              </button>
            </div>
          </div>
        </div>
      </section> */}
    </motion.div>
  );
};

export default FAQ;
