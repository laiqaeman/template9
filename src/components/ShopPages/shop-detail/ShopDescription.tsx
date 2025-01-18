"use client"
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const DescriptionComponent = () => {
  const [activeTab, setActiveTab] = useState('description');

  const keyBenefits = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
    'Suspendisse potenti. Morbi in ipsum sit amet pede facilisis laoreet.',
    'Maecenas fermentum consequat mi. Donec fermentum. Pellentesque ligula.',
    'Nullam nulla eros, ultricies sit amet, nonummy id, imperdiet feugiat, pede.'
  ];

  return (
    <div className="w-full bg-gray-50 py-12 mt-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-8">
          <Button
            onClick={() => setActiveTab('description')}
            className={`${
              activeTab === 'description' 
                ? 'bg-[#FF9F0D] hover:bg-[#FF9F0D]/90' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            } transition-colors duration-200 min-w-[165px] h-12 font-semibold rounded-lg`}
          >
            Description
          </Button>
          <Button
            onClick={() => setActiveTab('reviews')}
            className={`${
              activeTab === 'reviews' 
                ? 'bg-[#FF9F0D] hover:bg-[#FF9F0D]/90' 
                : 'bg-gray-200 hover:bg-gray-300 text-gray-700'
            } transition-colors duration-200 min-w-[165px] h-12 font-semibold rounded-lg`}
          >
            Reviews (24)
          </Button>
        </div>

        <div className="bg-white rounded-lg p-6 shadow-sm">
          {activeTab === 'description' ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-6"
            >
              <p className="text-gray-600 leading-relaxed">
                Nam tristique porta ligula, vel viverra sem eleifend nec. Nulla sed purus augue, 
                eu euismod tellus. Nam mattis eros nec mi sagittis sagittis. Vestibulum suscipit 
                cursus bibendum. Integer at justo eget sem auctor auctor eget vitae arcu. Nam tempor 
                malesuada porttitor.
              </p>
              
              <p className="text-gray-600 leading-relaxed">
                Suspendisse cursus sodales placerat. Morbi eu lacinia ex. Curabitur blandit justo 
                urna, id porttitor est dignissim nec. Pellentesque scelerisque hendrerit posuere. 
                Sed at dolor quis nisi rutrum accumsan et sagittis massa.
              </p>

              <div className="pt-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {keyBenefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-[#FF9F0D]" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="h-64 flex items-center justify-center"
            >
              <p className="text-gray-500">Review content would go here</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DescriptionComponent;