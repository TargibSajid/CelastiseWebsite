'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutContent() {
  return (
    <section className="py-24 bg-celastise-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h2 className="text-4xl font-luxury font-bold text-celastise-900 mb-6">
            Founded on Excellence
          </h2>
          <p className="text-lg text-celastise-700 leading-relaxed mb-4">
            CELASTISE was born from a shared passion for exceptional timepieces and a commitment to
            authenticity. What began as a collectors' dream has grown into a trusted authority in
            luxury watches.
          </p>
          <p className="text-lg text-celastise-700 leading-relaxed">
            We believe that every watch tells a story—of precision, craftsmanship, and the pursuit
            of perfection. Our mission is to connect discerning collectors with authentic pieces
            that stand the test of time.
          </p>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {[
            {
              icon: '✓',
              title: 'Authenticity',
              description: 'Every piece verified by expert horologists with detailed documentation',
            },
            {
              icon: '✓',
              title: 'Integrity',
              description: 'Transparent pricing, honest assessments, and genuine customer care',
            },
            {
              icon: '✓',
              title: 'Excellence',
              description: 'Curated collections meeting our exacting standards for quality',
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white rounded-xl shadow-lg"
            >
              <div className="text-4xl text-rose-500 mb-4">{value.icon}</div>
              <h3 className="text-xl font-luxury font-bold text-celastise-900 mb-3">
                {value.title}
              </h3>
              <p className="text-celastise-600">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Expertise Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="p-12 bg-gradient-to-r from-celastise-900 to-rose-900 rounded-xl text-white mb-16"
        >
          <h2 className="text-3xl font-luxury font-bold mb-6">Our Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-bold mb-3 text-rose-200">Swiss Watchmaking</h3>
              <p className="text-celastise-100">
                Deep knowledge of Rolex, Patek Philippe, Omega, and other prestigious Swiss manufacturers
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-rose-200">Japanese Precision</h3>
              <p className="text-celastise-100">
                Expert understanding of Seiko, Citizen, and Casio collections and their unique qualities
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-rose-200">Authentication</h3>
              <p className="text-celastise-100">
                Industry-leading verification processes using advanced technology and expert inspection
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-3 text-rose-200">Market Knowledge</h3>
              <p className="text-celastise-100">
                Comprehensive understanding of market trends, valuations, and investment potential
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-luxury font-bold text-celastise-900 mb-8 text-center">
            Our Team
          </h2>
          <p className="text-lg text-celastise-700 text-center mb-12 max-w-2xl mx-auto">
            Our team comprises horologists, collectors, and industry experts dedicated to delivering
            exceptional service and genuine expertise
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
            {[
              { name: 'Master Horologist', role: 'Founder & Chief Expert', avatar: '👨‍🔬' },
              { name: 'Authentication Specialist', role: 'Head of Verification', avatar: '👩‍💼' },
              { name: 'Restoration Expert', role: 'Chief Conservator', avatar: '👨‍🔧' },
              { name: 'Client Relations', role: 'Customer Success', avatar: '👩‍💻' },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="p-6 bg-white rounded-lg shadow-lg"
              >
                <p className="text-4xl mb-3">{member.avatar}</p>
                <p className="font-bold text-celastise-900 mb-1">{member.name}</p>
                <p className="text-sm text-celastise-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
