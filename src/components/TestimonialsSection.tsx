
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const testimonials = [
  {
    quote: "Zephai's automation platform cut our document processing time by 85% and improved accuracy to almost perfect levels. The ROI was immediate and substantial.",
    author: "Sarah Johnson",
    title: "Operations Director",
    company: "Global Financial Services",
    avatar: "https://randomuser.me/api/portraits/women/1.jpg"
  },
  {
    quote: "Implementing Zephai's intelligent automation was the best business decision we made last year. Our team now focuses on strategic work instead of repetitive tasks.",
    author: "Michael Chen",
    title: "CTO",
    company: "TechVision Inc.",
    avatar: "https://randomuser.me/api/portraits/men/2.jpg"
  },
  {
    quote: "The AI capabilities of Zephai's platform are genuinely impressive. It learns from our processes and continuously improves without manual intervention.",
    author: "Emily Rodriguez",
    title: "Digital Transformation Lead",
    company: "Healthcare Innovations",
    avatar: "https://randomuser.me/api/portraits/women/3.jpg"
  },
  {
    quote: "What sets Zephai apart is their customer-centric approach. The team ensured our specific needs were met and supported us throughout implementation.",
    author: "Robert Williams",
    title: "Head of Operations",
    company: "Logistics Plus",
    avatar: "https://randomuser.me/api/portraits/men/4.jpg"
  }
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section gradient-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">
            Hear from businesses that have transformed their operations with Zephai Automation.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <div className="bg-white p-8 md:p-10 rounded-xl shadow-md border border-gray-100 h-full">
                    <div className="flex flex-col h-full">
                      <div className="mb-6">
                        <svg width="45" height="36" viewBox="0 0 45 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary/20">
                          <path d="M13.4 36C9.4 36 6.2 34.6 3.8 31.8C1.4 28.8 0.2 25.2 0.2 21C0.2 16.6 1.6 12.4 4.4 8.4C7.2 4.4 11.2 1.4 16.4 -2.38419e-07L20 6C16.4 7.2 13.6 8.8 11.6 10.8C9.6 12.8 8.6 14.6 8.6 16.2C8.6 17 8.8 17.6 9.2 18C9.6 18.4 10.4 18.8 11.6 19.2C13.4 19.6 14.8 20.6 15.8 22.2C16.8 23.8 17.3 25.6 17.3 27.6C17.3 30 16.6 32 15.2 33.6C13.8 35.2 11.8 36 9.2 36H13.4ZM37.4 36C33.4 36 30.2 34.6 27.8 31.8C25.4 28.8 24.2 25.2 24.2 21C24.2 16.6 25.6 12.4 28.4 8.4C31.2 4.4 35.2 1.4 40.4 -2.38419e-07L44 6C40.4 7.2 37.6 8.8 35.6 10.8C33.6 12.8 32.6 14.6 32.6 16.2C32.6 17 32.8 17.6 33.2 18C33.6 18.4 34.4 18.8 35.6 19.2C37.4 19.6 38.8 20.6 39.8 22.2C40.8 23.8 41.3 25.6 41.3 27.6C41.3 30 40.6 32 39.2 33.6C37.8 35.2 35.8 36 33.2 36H37.4Z" fill="currentColor"/>
                        </svg>
                      </div>
                      
                      <p className="text-lg md:text-xl mb-8 flex-grow">{testimonial.quote}</p>
                      
                      <div className="flex items-center">
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.author} 
                          className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                          <h4 className="font-semibold">{testimonial.author}</h4>
                          <p className="text-gray-600">{testimonial.title}, {testimonial.company}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="relative static mx-2" />
              <CarouselNext className="relative static mx-2" />
            </div>
          </Carousel>
        </div>

        <div className="mt-20 max-w-5xl mx-auto bg-white rounded-xl shadow-md p-8 md:p-12 border border-gray-100">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" },
              { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/1024px-Microsoft_logo.svg.png" },
              { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1024px-Google_2015_logo.svg.png" },
              { name: "IBM", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/1024px-IBM_logo.svg.png" },
              { name: "Deloitte", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Deloitte.svg/1024px-Deloitte.svg.png" },
              { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1024px-Salesforce.com_logo.svg.png" }
            ].map((company, index) => (
              <div key={index} className="flex items-center justify-center h-16">
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="max-h-8 max-w-[120px] grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
