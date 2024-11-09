import React from 'react';

const features = [
  {
    title: 'Brain Games',
    description: 'Enhance your cognitive skills with interactive, science-backed brain games.',
    icon: '🧠',
  },
  {
    title: 'Mindful Meditations',
    description: 'Practice guided mindfulness meditation to calm your mind and relieve stress.',
    icon: '🌱',
  },
  {
    title: 'Daily Affirmations',
    description: 'Receive daily positive affirmations to boost your self-esteem and outlook.',
    icon: '✨',
  },
  {
    title: 'Sleep Stories',
    description: 'Wind down with peaceful sleep stories designed to help you relax and sleep better.',
    icon: '🌙',
  },
];

const About = () => {
  return (
    <section className="bg-white py-16 px-4 md:px-8 lg:px-16 text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-lg text-gray-600 mb-8">
          Welcome to our mental wellness platform, dedicated to helping you achieve a balanced mind and body. Our tools and resources are designed with care to support your mental well-being, one step at a time.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow-sm flex flex-col items-center text-center hover:bg-gray-100 hover:scale-105 transition-all"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-medium mb-2">{feature.title}</h3>
              <p className="text-gray-500">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
