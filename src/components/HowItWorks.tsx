
import React from 'react';

const steps = [
  {
    number: "01",
    title: "Analyze",
    description: "We analyze your current processes to identify automation opportunities and potential bottlenecks.",
    color: "from-blue-500 to-blue-700"
  },
  {
    number: "02",
    title: "Design",
    description: "Our experts design an intelligent automation solution tailored to your specific business needs.",
    color: "from-purple-500 to-purple-700"
  },
  {
    number: "03",
    title: "Implement",
    description: "We implement the solution with minimal disruption to your existing workflows and operations.",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    number: "04",
    title: "Optimize",
    description: "Our AI continuously learns and optimizes your processes for better results over time.",
    color: "from-primary to-secondary"
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How Zephai Automation Works</h2>
          <p className="text-xl text-gray-600">
            We take a systematic approach to implementing intelligent automation in your business.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" style={{ transform: 'translateX(-50%)' }}></div>
          
          <div className="space-y-12 md:space-y-0 relative">
            {steps.map((step, index) => (
              <div key={index} className={`md:grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                <div className={`relative z-10 ${index % 2 === 1 ? 'md:text-right' : ''}`}>
                  <div className={`inline-block bg-gradient-to-r ${step.color} text-white font-bold py-1 px-4 rounded-full mb-4`}>
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
                
                <div className="hidden md:block relative">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${step.color} absolute left-1/2 top-1/2 z-10 flex items-center justify-center text-white font-bold`} style={{ transform: 'translate(-50%, -50%)' }}>
                    {parseInt(step.number)}
                  </div>
                  <div className={`rounded-lg shadow-lg p-6 md:p-10 ${index % 2 === 0 ? 'ml-10' : 'mr-10'} bg-white border border-gray-100`}>
                    <img 
                      src={`https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=600&h=400&q=80`} 
                      alt={`Step ${step.number}`} 
                      className="w-full h-auto rounded-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
