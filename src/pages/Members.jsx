import React from 'react';
import { motion } from 'framer-motion';
import pratikPhoto from '../assets/images/Pratik.jpg'
import miloniPhoto from '../assets/images/Miloni.jpg'
import { FaLinkedin, FaEnvelope, FaUserTie, FaProjectDiagram, FaTools, FaBusinessTime } from 'react-icons/fa';

const team = [
  {
    name: 'Pratik Oza',
    title: 'Founder & Director',
    bio: 'Founder and Director of Fabtech Inc. With 25+ years in diagnostics and biomedical equipment, Pratik leads strategy, partnerships, and growth across Gujarat. Recognized for building trusted relationships with hospitals, CROs, and labs.',
    tags: ['Leadership', 'Strategy', 'Partnerships'],
    photo: pratikPhoto, // e.g., require('../assets/images/pratik.jpg')
    icon: <FaUserTie className="text-3xl text-teal-prime" />,
    links: { linkedin: '#', email: 'mailto:info@fabtech.inc' }
  },
  {
    name: 'Miloni Oza',
    title: 'Project Manager',
    bio: 'Oversees project delivery, operations, and service excellence. Miloni ensures smooth implementations, on-time support, and customer-first execution for hospitals and laboratories.',
    tags: ['Operations', 'Service', 'Implementation'],
    photo: miloniPhoto, // e.g., require('../assets/images/miloni.jpg')
    icon: <FaProjectDiagram className="text-3xl text-blue" />,
    links: { linkedin: '#', email: 'mailto:info@fabtech.inc' }
  },
  {
    name: 'Rahul Mehta',
    title: 'Senior Service Engineer',
    bio: 'Leads technical service, calibration, and preventive maintenance programs to ensure biomedical and surgical equipment operates at international standards.',
    tags: ['Technical Service', 'Calibration', 'Field Support'],
    photo: undefined,
    icon: <FaTools className="text-3xl text-orange" />,
    links: { linkedin: '#', email: 'mailto:service@fabtech.inc' }
  },
  {
    name: 'Neha Shah',
    title: 'Business Development Manager',
    bio: 'Builds strategic partnerships with hospitals, CROs, and advanced labs; drives market outreach and customer success across Gujarat.',
    tags: ['Partnerships', 'Customer Success', 'Growth'],
    photo: undefined,
    icon: <FaBusinessTime className="text-3xl text-rose-500" />,
    links: { linkedin: '#', email: 'mailto:bd@fabtech.inc' }
  },
  // You can add more members here as your team grows
];

const Members = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.5 }}>
      {/* Hero */}
      <section className="relative overflow-hidden gradient-bg text-white section-padding">
        {/* Subtle glow accents */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -left-24 w-[26rem] h-[26rem] blur-3xl opacity-30"
          style={{
            background:
              'radial-gradient( circle at center, rgba(255,225,150,0.45) 0%, rgba(255,200,100,0.25) 35%, rgba(255,255,255,0) 70% )'
          }}
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -right-24 w-[22rem] h-[22rem] blur-3xl opacity-25"
          style={{
            background:
              'radial-gradient( circle at center, rgba(99,179,237,0.35) 0%, rgba(20,184,166,0.2) 40%, rgba(255,255,255,0) 70% )'
          }}
        />
        <div className="container-max text-center">
          <motion.div initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }}>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
              <span className="bg-gradient-to-r from-teal-200 via-cyan-200 to-white bg-clip-text text-transparent">Our Leadership & Team</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Meet the people driving Fabtech Inc forward—uniting trust, innovation, and service excellence.
            </p>

            {/* Highlights */}
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-emerald-300"></span>
                25+ Years Expertise
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-sky-300"></span>
                Award-Winning Leadership
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
                <span className="w-2 h-2 rounded-full bg-indigo-300"></span>
                Customer-First Culture
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Cards */}
      <section className="relative section-padding bg-gradient-to-br from-white to-sky-50 overflow-hidden">
        {/* Background glows */}
        <div aria-hidden="true" className="pointer-events-none absolute -top-24 right-0 w-[28rem] h-[28rem] blur-3xl opacity-30"
          style={{ background: 'radial-gradient(circle at center, rgba(125,211,252,0.5) 0%, rgba(59,130,246,0.25) 45%, rgba(0,0,0,0) 70%)' }}
        />
        <div aria-hidden="true" className="pointer-events-none absolute -bottom-24 left-0 w-[24rem] h-[24rem] blur-3xl opacity-25"
          style={{ background: 'radial-gradient(circle at center, rgba(16,185,129,0.35) 0%, rgba(56,189,248,0.2) 40%, rgba(0,0,0,0) 70%)' }}
        />
        <div className="container-max">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-teal-700 to-cyan-700 bg-clip-text text-transparent">Meet the Team</h2>
            <p className="text-gray-600 max-w-3xl mx-auto mt-3">
              Our experienced team blends global expertise with local commitment to support healthcare providers across Gujarat.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative group p-[2px] rounded-2xl bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 transition-colors overflow-hidden"
              >
                <div className="relative bg-white/95 backdrop-blur rounded-2xl p-6 h-full shadow-sm group-hover:shadow-xl transition-shadow overflow-hidden ring-1 ring-transparent group-hover:ring-teal-100">

                  {/* Header: Photo + Name/Title inline */}
                  <div className="flex items-center gap-4 mb-4">
                    {/* Photo / Avatar */}
                    <div className="w-20 h-20 rounded-xl overflow-hidden ring-1 ring-gray-200 bg-gray-50 flex items-center justify-center shrink-0">
                      {member.photo ? (
                        <img src={member.photo} alt={`${member.name} photo`} className="w-full h-full object-cover" />
                      ) : (
                        <span className="text-xl font-bold text-gray-500">
                          {member.name.split(' ').map(p => p[0]).join('')}
                        </span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 leading-tight">{member.name}</h3>
                      <p className="text-teal-prime font-medium">{member.title}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{member.bio}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.tags.map(tag => (
                      <span key={tag} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    <a href={member.links.linkedin} className="text-gray-400 hover:text-teal-prime transition-colors" aria-label="LinkedIn">
                      <FaLinkedin />
                    </a>
                    <a href={member.links.email} className="text-gray-400 hover:text-teal-prime transition-colors" aria-label="Email">
                      <FaEnvelope />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Members;