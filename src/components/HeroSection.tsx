
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-12 md:pt-32 md:pb-24 hero-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-5xl mx-auto text-center">
          <div className="animate-fade-up">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-tight mb-6">
              AI-Powered <span className="gradient-text">Automation</span> for Modern Businesses
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 md:mb-12 max-w-3xl mx-auto">
              Streamline your workflows, reduce operational costs, and boost productivity with our intelligent automation platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8">
                Get Started Free
              </Button>
             <Button size="lg" variant="outline" className="text-lg px-8">
              Testing 1234
              </Button>
            </div>
          </div>
          
          <div className="mt-16 md:mt-20 w-full max-w-4xl mx-auto rounded-lg shadow-xl animate-fade-in opacity-0" style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur-xl"></div>
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&h=630" 
                alt="Zephai Automation Platform" 
                className="relative rounded-lg w-full h-auto z-10"
              />
            </div>
          </div>
          
          <div className="mt-16 md:mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center animate-fade-in opacity-0" style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">99%</h3>
              <p className="text-gray-600">Accuracy Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">85%</h3>
              <p className="text-gray-600">Time Saved</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">300+</h3>
              <p className="text-gray-600">Happy Clients</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">24/7</h3>
              <p className="text-gray-600">Support</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
