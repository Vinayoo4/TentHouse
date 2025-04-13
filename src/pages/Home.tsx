import React from 'react';
import { Link } from 'react-router-dom';
import { Tent, Music, Utensils, ChevronRight, Star } from 'lucide-react';

const Home = () => {
  const services = [
    {
      icon: <Tent className="h-12 w-12 text-orange-500" />,
      title: 'Tent Rentals',
      description: 'High-quality tents for events of all sizes, from intimate gatherings to large celebrations.',
    },
    {
      icon: <Music className="h-12 w-12 text-orange-500" />,
      title: 'Sound Systems',
      description: 'Professional audio equipment and setup for crystal-clear sound at your event.',
    },
    {
      icon: <Utensils className="h-12 w-12 text-orange-500" />,
      title: 'Catering Services',
      description: 'Delicious menu options and professional service for any type of event.',
    },
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Wedding Client',
      content: 'EventPro made our wedding day absolutely perfect. The tent setup was beautiful and the service was exceptional.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Corporate Event Manager',
      content: 'Professional team, top-notch equipment, and fantastic catering. Our company event was a huge success!',
      rating: 5,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative h-[600px] bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Creating Memorable Events
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl">
              Professional event equipment rentals and services to make your special occasion extraordinary.
            </p>
            <div className="space-x-4">
              <Link
                to="/services"
                className="inline-flex items-center bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
              >
                Explore Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We provide everything you need to make your event successful and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link
                  to="/services"
                  className="text-orange-500 hover:text-orange-600 inline-flex items-center"
                >
                  Learn More
                  <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">{testimonial.content}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-orange-500 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Plan Your Event?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss how we can help make your event extraordinary.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-orange-500 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get Started
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;