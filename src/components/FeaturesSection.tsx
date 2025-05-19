
import { Check } from "lucide-react";

const features = [
  {
    title: "AI-Powered Workflows",
    description: "Intelligent automation that learns your business processes and optimizes them without manual intervention.",
    icon: "📊"
  },
  {
    title: "Document Processing",
    description: "Extract, validate, and process information from any document type with unmatched accuracy.",
    icon: "📄"
  },
  {
    title: "Process Mining",
    description: "Analyze your existing workflows to identify bottlenecks and automation opportunities.",
    icon: "🔍"
  },
  {
    title: "Decision Intelligence",
    description: "Make smarter decisions with AI-driven insights based on your business data.",
    icon: "🧠"
  },
  {
    title: "Cross-Platform Integration",
    description: "Seamlessly connect with your existing tools and software without disruption.",
    icon: "🔄"
  },
  {
    title: "Low-Code Interface",
    description: "Build and customize automation without deep technical knowledge.",
    icon: "💻"
  }
];

const FeaturesSection = () => {
  return (
    <section id="features" className="section bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Transform Your Business with Intelligent Automation</h2>
          <p className="text-xl text-gray-600">
            Our platform combines artificial intelligence with powerful automation tools to deliver exceptional results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-md p-8 transition-all duration-300 hover:shadow-lg border border-gray-100"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-white rounded-xl shadow-md p-8 md:p-12 border border-gray-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Zephai Automation?</h3>
              <p className="text-gray-600 mb-6">
                We're not just another automation platform. Our AI-driven approach sets us apart, delivering results that traditional RPA tools simply can't match.
              </p>
              
              <ul className="space-y-3">
                {[
                  "Higher accuracy with continuous AI learning",
                  "Faster implementation with intuitive interface",
                  "Lower total cost of ownership",
                  "Scalable across departments and processes",
                  "Seamless integration with existing systems"
                ].map((point, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-3 mt-1 bg-primary/10 p-1 rounded-full">
                      <Check size={16} className="text-primary" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&h=600" 
                alt="Zephai Platform in use" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
