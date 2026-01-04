import React from 'react';
import { FiShield, FiCode, FiUsers, FiStar } from 'react-icons/fi';

const AboutValues = () => {
  const values = [
    {
      icon: FiShield,
      title: 'Privacy First',
      description: 'We believe your data belongs to you. Our tools are built with privacy as a core foundation, not an afterthought.'
    },
    {
      icon: FiCode,
      title: 'Open Source',
      description: 'Transparency builds trust. Our codebase is open for anyone to inspect, contribute to, and improve.'
    },
    {
      icon: FiUsers,
      title: 'Community Driven',
      description: 'We listen to our users. BrowsePing evolves based on the needs and feedback of our vibrant community.'
    },
    {
      icon: FiStar,
      title: 'Innovation',
      description: 'We are constantly pushing the boundaries of what is possible in the browser to create unique experiences.'
    }
  ];

  return (
    <section className="py-22 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            The principles that guide everything we do at BrowsePing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => (
            <div key={index} className="flex items-start space-x-6 p-8 bg-gray-800/30 rounded-3xl border border-gray-700/50 hover:bg-gray-800/50 transition-all duration-300 houver:cursor-pointer">
              <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center border border-blue-500/20">
                <value.icon className="text-blue-400" size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutValues;
