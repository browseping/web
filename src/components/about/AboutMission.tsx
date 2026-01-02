import React from 'react';
import { FiTarget, FiEye, FiZap } from 'react-icons/fi';

const AboutMission = () => {
  const missions = [
    {
      icon: FiTarget,
      title: 'Our Mission',
      description: 'To transform the solitary act of web browsing into a shared, social experience that fosters connection and discovery.',
      bgColor: 'bg-blue-500/10',
      iconColor: 'text-blue-400'
    },
    {
      icon: FiEye,
      title: 'Our Vision',
      description: 'A web where your digital presence is as meaningful as your physical one, built on transparency and community.',
      bgColor: 'bg-purple-500/10',
      iconColor: 'text-purple-400'
    },
    {
      icon: FiZap,
      title: 'Our Goal',
      description: 'To provide the most intuitive and privacy-respecting social browsing tools for users worldwide.',
      bgColor: 'bg-cyan-500/10',
      iconColor: 'text-cyan-400'
    }
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {missions.map((item, index) => (
            <div key={index} className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-gray-900 p-8 rounded-2xl border border-gray-800 leading-none flex flex-col items-center text-center hover:cursor-pointer">
                <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className={item.iconColor} size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutMission;
