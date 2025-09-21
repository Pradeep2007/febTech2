import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaCertificate, 
  FaShieldAlt, 
  FaCheckCircle, 
  FaFileAlt,
  FaGlobe,
  FaUserCheck
} from 'react-icons/fa';

const Compliance = () => {
  const certifications = [
    {
      title: 'FDA Registration',
      number: 'FDA-REG-12345678',
      description: 'Registered medical device establishment with the U.S. Food and Drug Administration',
      validUntil: '2025-12-31',
      icon: <FaCertificate className="text-4xl text-blue" />
    },
    {
      title: 'ISO 13485:2016',
      number: 'ISO-13485-2024-001',
      description: 'Medical devices quality management systems certification',
      validUntil: '2026-06-15',
      icon: <FaCertificate className="text-4xl text-teal-prime" />
    },
    {
      title: 'ISO 9001:2015',
      number: 'ISO-9001-2024-002',
      description: 'Quality management systems certification for consistent quality',
      validUntil: '2026-03-20',
      icon: <FaCertificate className="text-4xl text-orange" />
    },
    {
      title: 'GMP Certification',
      number: 'GMP-CERT-2024-003',
      description: 'Good Manufacturing Practice compliance for pharmaceutical products',
      validUntil: '2025-09-10',
      icon: <FaCertificate className="text-4xl text-green-500" />
    },
    {
      title: 'CE Marking',
      number: 'CE-MARK-2024-004',
      description: 'European Conformity marking for medical devices',
      validUntil: '2026-01-25',
      icon: <FaCertificate className="text-4xl text-purple-500" />
    },
    {
      title: 'Health Canada License',
      number: 'HC-LIC-2024-005',
      description: 'Medical device license for Canadian market distribution',
      validUntil: '2025-11-30',
      icon: <FaCertificate className="text-4xl text-red-500" />
    }
  ];

  const complianceAreas = [
    {
      title: 'Regulatory Compliance',
      description: 'Full adherence to FDA, Health Canada, and international regulatory requirements',
      icon: <FaShieldAlt className="text-3xl text-teal-prime" />,
      features: [
        'FDA 21 CFR Part 820 compliance',
        'ISO 13485 quality management',
        'MDR compliance for EU markets',
        'Regular regulatory updates'
      ]
    },
    {
      title: 'Quality Assurance',
      description: 'Comprehensive quality control processes for all products and services',
      icon: <FaCheckCircle className="text-3xl text-blue" />,
      features: [
        'Incoming inspection protocols',
        'Batch tracking and traceability',
        'Quality control testing',
        'Corrective action procedures'
      ]
    },
    {
      title: 'Supply Chain Transparency',
      description: 'Complete visibility and control over our supply chain operations',
      icon: <FaGlobe className="text-3xl text-orange" />,
      features: [
        'Supplier qualification programs',
        'Chain of custody documentation',
        'Temperature monitoring',
        'Audit trail maintenance'
      ]
    },
    {
      title: 'Staff Training & Certification',
      description: 'Ongoing training programs to ensure compliance expertise',
      icon: <FaUserCheck className="text-3xl text-green-500" />,
      features: [
        'Regular compliance training',
        'Professional certifications',
        'Standard operating procedures',
        'Competency assessments'
      ]
    }
  ];

  const documents = [
    {
      title: 'Quality Manual',
      description: 'Comprehensive quality management system documentation',
      type: 'PDF',
      size: '2.4 MB'
    },
    {
      title: 'FDA Registration Certificate',
      description: 'Official FDA registration documentation',
      type: 'PDF',
      size: '1.2 MB'
    },
    {
      title: 'ISO 13485 Certificate',
      description: 'Current ISO 13485:2016 certification',
      type: 'PDF',
      size: '856 KB'
    },
    {
      title: 'Supplier Qualification Procedures',
      description: 'Standard procedures for supplier evaluation',
      type: 'PDF',
      size: '1.8 MB'
    },
    {
      title: 'Corrective Action Procedures',
      description: 'CAPA procedures and documentation',
      type: 'PDF',
      size: '1.1 MB'
    },
    {
      title: 'Training Records Template',
      description: 'Template for maintaining training documentation',
      type: 'Excel',
      size: '245 KB'
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
            <h1 className="text-5xl font-bold mb-6">Compliance & Licensing</h1>
            <p className="text-xl text-light-teal max-w-3xl mx-auto">
              Our unwavering commitment to regulatory compliance ensures that every product 
              meets the highest standards of safety, quality, and efficacy.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Certifications Grid */}
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
              Our Certifications
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive regulatory compliance across multiple jurisdictions
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="card p-6 text-center"
              >
                <div className="mb-4">{cert.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 mb-4">{cert.description}</p>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-medium">Certificate #:</span>
                    <span className="text-gray-600">{cert.number}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Valid Until:</span>
                    <span className="text-green-600 font-medium">{cert.validUntil}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Areas */}
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
              Compliance Framework
            </h2>
            <p className="text-xl text-gray-600">
              Our comprehensive approach to regulatory compliance and quality assurance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {complianceAreas.map((area, index) => (
              <motion.div
                key={area.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="card p-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">{area.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {area.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{area.description}</p>
                    <ul className="space-y-2">
                      {area.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <FaCheckCircle className="text-teal-prime mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Safe Sourcing Section */}
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
                Safe Sourcing & Supply Chain
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                We maintain complete transparency and control over our supply chain 
                to ensure product authenticity, safety, and regulatory compliance.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-teal-prime mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Authorized Distributors Only</h4>
                    <p className="text-gray-600">Direct relationships with manufacturers and authorized distributors</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-teal-prime mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Chain of Custody</h4>
                    <p className="text-gray-600">Complete documentation from manufacturer to end user</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-teal-prime mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Temperature Control</h4>
                    <p className="text-gray-600">Monitored cold chain for temperature-sensitive products</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <FaCheckCircle className="text-teal-prime mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900">Regular Audits</h4>
                    <p className="text-gray-600">Periodic supplier audits and quality assessments</p>
                  </div>
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
              <h3 className="text-2xl font-bold mb-6">Supply Chain Statistics</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">100%</div>
                  <div className="text-light-teal">Authorized Sources</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">24/7</div>
                  <div className="text-light-teal">Temperature Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">99.9%</div>
                  <div className="text-light-teal">Traceability Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-light-teal">Qualified Suppliers</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Documentation Section */}
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
              Compliance Documentation
            </h2>
            <p className="text-xl text-gray-600">
              Access our comprehensive compliance documentation and certificates
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {documents.map((doc, index) => (
              <motion.div
                key={doc.title}
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start space-x-3">
                  <FaFileAlt className="text-2xl text-teal-prime mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{doc.title}</h3>
                    <p className="text-gray-600 text-sm mb-3">{doc.description}</p>
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{doc.type}</span>
                      <span>{doc.size}</span>
                    </div>
                    <button className="mt-3 text-teal-prime hover:text-teal-600 font-medium text-sm">
                      Download
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
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
              Questions About Our Compliance?
            </h2>
            <p className="text-xl text-light-teal mb-8 max-w-2xl mx-auto">
              Our compliance team is ready to answer any questions about our 
              certifications, procedures, or regulatory adherence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-secondary">
                Contact Compliance Team
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-teal-prime">
                Request Documentation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default Compliance;
