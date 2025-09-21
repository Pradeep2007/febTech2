import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHospital, 
  FaUserMd, 
  FaQuoteLeft, 
  FaStar,
  FaMapMarkerAlt,
  FaUsers
} from 'react-icons/fa';

const Clients = () => {
  const majorClients = [
    {
      name: 'Metropolitan General Hospital',
      type: 'Large Hospital System',
      location: 'New York, NY',
      partnership: '8 years',
      description: '500-bed tertiary care facility serving the greater metropolitan area',
      services: ['Medical Equipment', 'Pharmaceutical Products', 'Compliance Consulting']
    },
    {
      name: 'Regional Medical Center',
      type: 'Regional Healthcare Network',
      location: 'Chicago, IL',
      partnership: '6 years',
      description: 'Multi-facility healthcare network with 12 locations',
      services: ['Laboratory Equipment', 'Diagnostic Tools', 'Medical Supplies']
    },
    {
      name: 'University Health System',
      type: 'Academic Medical Center',
      location: 'Boston, MA',
      partnership: '10 years',
      description: 'Leading academic medical center with research facilities',
      services: ['Research Equipment', 'Specialty Pharmaceuticals', 'Training Programs']
    },
    {
      name: 'Community Health Partners',
      type: 'Community Health Network',
      location: 'Denver, CO',
      partnership: '5 years',
      description: 'Network of community clinics serving rural and urban populations',
      services: ['Primary Care Equipment', 'Generic Medications', 'Supply Chain Management']
    },
    {
      name: 'Specialty Surgery Center',
      type: 'Ambulatory Surgery Center',
      location: 'Los Angeles, CA',
      partnership: '4 years',
      description: 'State-of-the-art outpatient surgical facility',
      services: ['Surgical Equipment', 'Anesthesia Products', 'Sterile Supplies']
    },
    {
      name: 'Children\'s Medical Center',
      type: 'Pediatric Hospital',
      location: 'Atlanta, GA',
      partnership: '7 years',
      description: 'Specialized pediatric care facility with NICU and PICU',
      services: ['Pediatric Equipment', 'Specialty Medications', 'Safety Products']
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
            <h1 className="text-5xl font-bold mb-6">Our Clients & Partners</h1>
            <p className="text-xl text-light-teal max-w-3xl mx-auto">
              Trusted by leading healthcare providers and backed by world-class 
              pharmaceutical and medical device manufacturers.
            </p>
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
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center"
          >
            {clientStats.map((stat, index) => (
              <div key={stat.label} className="space-y-2">
                <div className="text-4xl font-bold text-teal-prime">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Major Clients */}
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
              Major Healthcare Clients
            </h2>
            <p className="text-xl text-gray-600">
              We're proud to serve some of the most respected healthcare institutions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {majorClients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6"
              >
                <div className="flex items-start space-x-3 mb-4">
                  <FaHospital className="text-2xl text-teal-prime mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {client.name}
                    </h3>
                    <p className="text-blue font-medium">{client.type}</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4">{client.description}</p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <FaMapMarkerAlt className="mr-2" />
                    {client.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <FaUsers className="mr-2" />
                    Partnership: {client.partnership}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Services Provided:</h4>
                  <div className="flex flex-wrap gap-2">
                    {client.services.map((service, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full"
                      >
                        {service}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
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
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Hear from healthcare professionals who trust FabTech
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.author}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex items-start space-x-4">
                  <FaQuoteLeft className="text-3xl text-teal-prime flex-shrink-0" />
                  <div>
                    <p className="text-gray-700 text-lg mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    
                    <div className="flex items-center mb-3">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FaStar key={i} className="text-yellow-400" />
                      ))}
                    </div>
                    
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonial.author}
                      </div>
                      <div className="text-blue font-medium">
                        {testimonial.position}
                      </div>
                      <div className="text-gray-600">
                        {testimonial.organization}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partner Brands */}
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
              Pharmaceutical Brand Partnerships
            </h2>
            <p className="text-xl text-gray-600">
              Authorized partnerships with leading pharmaceutical and medical device companies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partnerBrands.map((brand, index) => (
              <motion.div
                key={brand.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-bold text-gray-600">{brand.logo}</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{brand.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{brand.category}</p>
                <span className="inline-block bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded-full">
                  {brand.partnership}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Success Stories
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-teal-prime pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Emergency Response Partnership
                  </h3>
                  <p className="text-gray-700">
                    During the COVID-19 pandemic, we rapidly scaled our supply chain to 
                    provide critical PPE and medical equipment to over 100 healthcare 
                    facilities within 48 hours of their urgent requests.
                  </p>
                </div>
                
                <div className="border-l-4 border-blue pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Cost Optimization Program
                  </h3>
                  <p className="text-gray-700">
                    Helped Regional Medical Center reduce their medical supply costs by 
                    23% while improving product quality through our strategic sourcing 
                    and compliance programs.
                  </p>
                </div>
                
                <div className="border-l-4 border-orange pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Digital Transformation
                  </h3>
                  <p className="text-gray-700">
                    Implemented our digital ordering platform across University Health 
                    System's 12 facilities, reducing order processing time by 60% and 
                    improving inventory accuracy to 99.8%.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-teal-prime to-blue rounded-2xl p-8 text-white"
            >
              <h3 className="text-2xl font-bold mb-6">Partnership Benefits</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Dedicated Account Management</h4>
                    <p className="text-light-teal text-sm">Personal support from healthcare industry experts</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Competitive Pricing</h4>
                    <p className="text-light-teal text-sm">Volume discounts and flexible payment terms</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Rapid Delivery</h4>
                    <p className="text-light-teal text-sm">Same-day and next-day delivery options</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Compliance Support</h4>
                    <p className="text-light-teal text-sm">Full regulatory and quality assurance backing</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gradient-bg text-white section-padding">
        <div className="container-max text-center">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Join Our Growing Network
            </h2>
            <p className="text-xl text-light-teal mb-8 max-w-2xl mx-auto">
              Become part of our trusted network of healthcare providers and 
              experience the FabTech difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">
                Become a Client
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-teal-prime">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Clients;
