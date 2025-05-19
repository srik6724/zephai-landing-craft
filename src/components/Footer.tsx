
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-bold mb-6 gradient-text">Zephai</h3>
            <p className="text-gray-400 mb-6">
              Revolutionizing business automation with intelligent AI solutions that save time, reduce costs, and boost productivity.
            </p>
            <div className="flex space-x-4">
              {['twitter', 'facebook', 'linkedin', 'instagram'].map((social) => (
                <a 
                  key={social}
                  href={`#${social}`} 
                  className="bg-gray-800 w-10 h-10 rounded-full flex items-center justify-center transition-colors hover:bg-primary"
                >
                  <span className="sr-only">{social}</span>
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 5.523 4.477 10 10 10s10-4.477 10-10c0-5.523-4.477-10-10-10zm0 18c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8-3.589 8-8 8z" clipRule="evenodd" />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Solutions</h4>
            <ul className="space-y-4">
              {[
                'AI-Powered Workflows',
                'Document Processing',
                'Process Mining',
                'Decision Intelligence',
                'Cross-Platform Integration',
                'Low-Code Interface'
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Company</h4>
            <ul className="space-y-4">
              {[
                'About Us',
                'Careers',
                'Partners',
                'Blog',
                'Case Studies',
                'Contact'
              ].map((item, i) => (
                <li key={i}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Your email" 
                className="bg-gray-800 border-gray-700 focus:border-primary text-white"
              />
              <Button>
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Zephai Automation. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
