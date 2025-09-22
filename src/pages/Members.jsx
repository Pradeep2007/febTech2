import React from 'react';
import { motion } from 'framer-motion';
import pratikPhoto from '../assets/images/Pratik.jpg'
import miloniPhoto from '../assets/images/Miloni.jpg'
import { FaLinkedin, FaEnvelope, FaUserTie, FaProjectDiagram, FaTools, FaBusinessTime } from 'react-icons/fa';

const team = [
  {
    name: 'Pratik Oza',
    title: 'Founder & Director',
    photo: pratikPhoto
  },
  {
    name: 'Miloni Oza',
    title: 'Project Manager',
    photo: miloniPhoto
  }
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {team.map((member, idx) => (
              <motion.div
                key={member.name}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative group p-[3px] rounded-3xl bg-gradient-to-r from-teal-300 via-cyan-300 to-indigo-300 transition-colors overflow-hidden"
              >
                <div className="relative bg-white/95 backdrop-blur rounded-3xl p-8 h-full shadow-lg group-hover:shadow-2xl transition-shadow overflow-hidden">
                  <div className="flex flex-col items-center text-center">
                    {/* Large Photo */}
                    <div className="w-48 h-64 rounded-2xl overflow-hidden border-4 border-teal-200 shadow-lg mb-6 group-hover:border-teal-400 transition-all duration-300 relative">
                      <img 
                        src={member.photo} 
                        alt={`${member.name} photo`} 
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          member.name === 'Miloni Oza' ? 'object-[center_20%]' : 'object-top'
                        }`}
                      />
                      {/* Black and white overlay - works on both mobile and desktop */}
                      <div className="absolute inset-0 bg-gray-500 mix-blend-saturation opacity-100 group-hover:opacity-0 group-active:opacity-0 transition-opacity duration-500 pointer-events-none"></div>
                    </div>
                    
                    {/* Name and Title */}
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{member.name}</h3>
                    <p className="text-teal-700 font-semibold text-xl">{member.title}</p>
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