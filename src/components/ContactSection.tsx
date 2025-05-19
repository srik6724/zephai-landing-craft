
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, MessageSquare, Phone } from "lucide-react";

const ContactSection = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Form submitted!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="section">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600">
            Contact our team to learn how Zephai can transform your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Us</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email Us</h4>
                  <p className="text-gray-600">info@zephai-automation.com</p>
                  <p className="text-gray-600">support@zephai-automation.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Call Us</h4>
                  <p className="text-gray-600">+1 (555) 123-4567</p>
                  <p className="text-gray-600">Mon-Fri, 9am-5pm EST</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mr-4 bg-primary/10 p-3 rounded-full">
                  <MessageSquare className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Live Chat</h4>
                  <p className="text-gray-600">Available on our website</p>
                  <p className="text-gray-600">24/7 for urgent inquiries</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-medium">Name</label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-medium">Email</label>
                  <Input id="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              
              <div>
                <label htmlFor="company" className="block mb-2 font-medium">Company</label>
                <Input id="company" placeholder="Your company" />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 font-medium">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="How can we help you?" 
                  className="min-h-[120px]" 
                  required 
                />
              </div>
              
              <Button type="submit" className="w-full">
                Send Message
              </Button>
              
              <p className="text-sm text-gray-500 text-center">
                We'll get back to you within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
