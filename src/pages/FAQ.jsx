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
      
      // Group FAQs by category
      const groupedFaqs = activeFaqs.reduce((acc, faq) => {
        if (!acc[faq.category]) {
          acc[faq.category] = [];
        }
        acc[faq.category].push({
          question: faq.question,
          answer: faq.answer
        });
        return acc;
      }, {});

      // Convert to the format expected by the component
      const faqCategories = Object.keys(groupedFaqs).map(category => ({
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

  const faqCategories = [
    {
      title: 'Order Process & Purchasing',
      faqs: [
        {
          question: 'How do I place an order with FabTech?',
          answer: 'You can place orders through our online platform, by contacting your dedicated account manager, or by calling our customer service team at (555) 123-4567. For new customers, we recommend scheduling a consultation to set up your account and discuss your specific needs.'
        },
        {
          question: 'What is the minimum order quantity?',
          answer: 'Minimum order quantities vary by product. Most medical supplies have no minimum order, while specialized equipment may have specific requirements. Your account manager will provide detailed information about MOQs for your specific product needs.'
        },
        {
          question: 'Do you offer volume discounts?',
          answer: 'Yes, we offer competitive volume discounts based on order quantity and frequency. Our pricing tiers are designed to provide better value for larger purchases. Contact your account manager to discuss volume pricing options.'
        },
        {
          question: 'What payment terms do you offer?',
          answer: 'We offer flexible payment terms including Net 30, Net 60, and Net 90 for qualified customers. We also accept credit cards, wire transfers, and can arrange special payment terms for large orders or long-term contracts.'
        },
        {
          question: 'Can I get a quote before placing an order?',
          answer: 'Absolutely! We provide detailed quotes for all products and services. You can request quotes through our website, contact your account manager, or call our customer service team. Quotes are typically provided within 24 hours.'
        }
      ]
    },
    {
      title: 'Compliance & Quality',
      faqs: [
        {
          question: 'Are all your products FDA approved?',
          answer: 'All medical devices and pharmaceutical products we distribute are FDA approved or cleared, as applicable. We maintain current FDA registration and only work with manufacturers who meet all regulatory requirements. Documentation is available upon request.'
        },
        {
          question: 'Do you provide certificates of compliance?',
          answer: 'Yes, we provide certificates of compliance, certificates of analysis, and other required documentation with every shipment. This includes FDA registration certificates, ISO certifications, and product-specific compliance documentation.'
        },
        {
          question: 'How do you ensure product authenticity?',
          answer: 'We maintain a secure supply chain by working exclusively with authorized manufacturers and distributors. Every product includes proper documentation, lot tracking, and chain of custody records to ensure authenticity and traceability.'
        },
        {
          question: 'What quality control measures do you have in place?',
          answer: 'Our quality control program includes incoming inspection, proper storage conditions, temperature monitoring for sensitive products, batch tracking, and regular supplier audits. We maintain ISO 13485 certification for our quality management system.'
        },
        {
          question: 'Do you handle product recalls?',
          answer: 'Yes, we have comprehensive recall procedures in place. In the event of a manufacturer recall, we immediately notify affected customers, provide detailed lot information, and coordinate the return or replacement of affected products.'
        }
      ]
    },
    {
      title: 'Shipping & Delivery',
      faqs: [
        {
          question: 'What are your shipping options?',
          answer: 'We offer standard ground shipping, expedited delivery, next-day delivery, and same-day delivery in select markets. For temperature-sensitive products, we provide validated cold chain shipping with continuous temperature monitoring.'
        },
        {
          question: 'Do you ship internationally?',
          answer: 'Yes, we ship to select international markets where we maintain proper import/export licenses and regulatory compliance. International shipping includes all necessary documentation and customs clearance support.'
        },
        {
          question: 'How do you handle temperature-sensitive products?',
          answer: 'Temperature-sensitive products are shipped in validated packaging with continuous temperature monitoring. We use qualified cold chain logistics partners and provide temperature logs with every shipment to ensure product integrity.'
        },
        {
          question: 'What is your typical delivery timeframe?',
          answer: 'Standard delivery is 2-5 business days depending on location. Expedited options include next-day and same-day delivery in major metropolitan areas. Emergency orders can often be accommodated with special arrangements.'
        },
        {
          question: 'Do you provide tracking information?',
          answer: 'Yes, tracking information is provided for all shipments via email notification. You can also track orders through our online portal or by contacting customer service. Real-time updates are available for all deliveries.'
        }
      ]
    },
    {
      title: 'Account Management & Support',
      faqs: [
        {
          question: 'Do I get a dedicated account manager?',
          answer: 'Yes, all customers are assigned a dedicated account manager who understands your specific needs and can provide personalized support. Your account manager is your primary point of contact for orders, questions, and account management.'
        },
        {
          question: 'What customer support hours do you offer?',
          answer: 'Our customer support team is available Monday through Friday, 8 AM to 6 PM EST. Emergency support is available 24/7 for urgent medical supply needs. You can reach us by phone, email, or through our online chat system.'
        },
        {
          question: 'Can you help with inventory management?',
          answer: 'Yes, we offer comprehensive inventory management services including automated reordering, usage analytics, expiration date tracking, and custom inventory reports. Our digital platform can integrate with your existing systems.'
        },
        {
          question: 'Do you offer training on new products?',
          answer: 'Yes, we provide product training and education through our manufacturer partners. This includes hands-on training, webinars, educational materials, and ongoing support to ensure proper product use and safety.'
        },
        {
          question: 'How do I update my account information?',
          answer: 'Account information can be updated through our online portal, by contacting your account manager, or by calling customer service. Changes to billing or shipping addresses require written authorization for security purposes.'
        }
      ]
    },
    {
      title: 'Returns & Exchanges',
      faqs: [
        {
          question: 'What is your return policy?',
          answer: 'We accept returns of unopened, unexpired products within 30 days of delivery. Products must be in original packaging and condition. Some items like controlled substances or custom products may have restrictions. Contact customer service to initiate a return.'
        },
        {
          question: 'How do I return a defective product?',
          answer: 'Defective products can be returned immediately regardless of the 30-day policy. Contact customer service to report the issue and receive a return authorization. We will arrange pickup and provide immediate replacement or credit.'
        },
        {
          question: 'Do you charge restocking fees?',
          answer: 'Standard returns may be subject to a 15% restocking fee. However, defective products, shipping errors, and returns due to our error are not subject to restocking fees. Special order items may have different return policies.'
        },
        {
          question: 'Can I exchange products for different items?',
          answer: 'Yes, exchanges are possible within our return policy timeframe. The price difference will be charged or credited to your account. Contact your account manager to arrange exchanges and ensure product availability.'
        },
        {
          question: 'How long do refunds take to process?',
          answer: 'Refunds are typically processed within 5-7 business days after we receive the returned products. Credit card refunds may take an additional 3-5 business days to appear on your statement. Account credits are applied immediately upon processing.'
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
            {faqs.map((category, categoryIndex) => (
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
