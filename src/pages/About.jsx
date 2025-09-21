import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCalendarAlt, 
  FaEye, 
  FaBullseye, 
  FaCertificate,
  FaLinkedin,
  FaTwitter
} from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      position: 'Chief Executive Officer',
      bio: '15+ years in pharmaceutical industry with expertise in regulatory compliance.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Michael Chen',
      position: 'Chief Technology Officer',
      bio: 'Former medical device engineer with 12 years of experience in healthcare technology.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'Dr. Emily Rodriguez',
      position: 'Head of Compliance',
      bio: 'Regulatory affairs specialist with extensive FDA and international compliance experience.',
      image: '/api/placeholder/300/300'
    },
    {
      name: 'David Thompson',
      position: 'VP of Sales',
      bio: 'Healthcare sales veteran with a proven track record in medical equipment distribution.',
      image: '/api/placeholder/300/300'
    }
  ];

  const certifications = [
    {
      title: 'ISO 13485:2016',
      description: 'Medical devices quality management systems',
      icon: <FaCertificate className="text-3xl text-teal-prime" />
    },
    {
      title: 'FDA Registration',
      description: 'Registered medical device establishment',
      icon: <FaCertificate className="text-3xl text-blue" />
    },
    {
      title: 'ISO 9001:2015',
      description: 'Quality management systems certification',
      icon: <FaCertificate className="text-3xl text-orange" />
    },
    {
      title: 'GMP Certified',
      description: 'Good Manufacturing Practice compliance',
      icon: <FaCertificate className="text-3xl text-green-500" />
    }
  ];

  const milestones = [
    { year: '2010', event: 'FabTech founded with focus on medical equipment distribution' },
    { year: '2013', event: 'Achieved FDA registration and ISO 13485 certification' },
    { year: '2016', event: 'Expanded into pharmaceutical products and specialty drugs' },
    { year: '2019', event: 'Reached 500+ healthcare provider clients milestone' },
    { year: '2022', event: 'Launched digital platform for streamlined ordering' },
    { year: '2024', event: 'Expanded international partnerships and compliance programs' }
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
            <h1 className="text-5xl font-bold mb-6">About FabTech</h1>
            <p className="text-xl text-light-teal max-w-3xl mx-auto">
              Since 2010, we've been dedicated to providing healthcare providers 
              with the highest quality medical equipment and pharmaceutical products, 
              backed by unwavering compliance and exceptional service.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="section-padding bg-white">
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
                  <h3 className="text-2xl font-bold text-gray-900">Founded in 2010</h3>
                  <p className="text-gray-600">Over a decade of excellence</p>
                </div>
              </div>
              <p className="text-lg text-gray-700 mb-6">
                FabTech was established with a clear mission: to bridge the gap between 
                cutting-edge medical technology and healthcare providers who need reliable, 
                compliant solutions for patient care.
              </p>
              <p className="text-lg text-gray-700">
                What started as a small medical equipment distributor has grown into a 
                comprehensive healthcare solutions provider, serving over 500 clients 
                across multiple countries while maintaining the highest standards of 
                quality and compliance.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-light-gray rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-teal-prime mb-2">500+</div>
                  <div className="text-gray-600">Healthcare Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue mb-2">14</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange mb-2">1000+</div>
                  <div className="text-gray-600">Products Available</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-500 mb-2">99.9%</div>
                  <div className="text-gray-600">Compliance Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-light-gray">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <FaBullseye className="text-4xl text-teal-prime mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-700 text-lg">
                To provide healthcare providers with access to the highest quality 
                medical equipment and pharmaceutical products while ensuring complete 
                regulatory compliance and exceptional customer service. We are committed 
                to improving patient outcomes through reliable, innovative healthcare solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="card p-8"
            >
              <FaEye className="text-4xl text-blue mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-700 text-lg">
                To be the global leader in medical equipment and pharmaceutical 
                distribution, recognized for our unwavering commitment to quality, 
                compliance, and innovation. We envision a world where every healthcare 
                provider has seamless access to the tools they need to save lives.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Certifications */}
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
              Certifications & Compliance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our commitment to quality and compliance is demonstrated through 
              our comprehensive certifications and regulatory adherence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{cert.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="section-padding bg-light-gray">
        <div className="container-max">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600">
              Key milestones in our growth and development
            </p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-teal-prime h-full"></div>
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ x: index % 2 === 0 ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex items-center mb-8 ${
                  index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                }`}
              >
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8'}`}>
                  <div className="card p-6">
                    <div className="text-2xl font-bold text-teal-prime mb-2">
                      {milestone.year}
                    </div>
                    <p className="text-gray-700">{milestone.event}</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-teal-prime rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className="w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
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
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600">
              Experienced professionals dedicated to healthcare excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-gray-500">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {member.name}
                </h3>
                <p className="text-teal-prime font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a href="#" className="text-gray-400 hover:text-teal-prime transition-colors">
                    <FaLinkedin />
                  </a>
                  <a href="#" className="text-gray-400 hover:text-teal-prime transition-colors">
                    <FaTwitter />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default About;
