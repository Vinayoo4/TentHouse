import React from 'react';
import { Link } from 'react-router-dom';
import { Tent, Music, Utensils, Users, Camera, Palette, ChevronRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Tent className="h-12 w-12 text-orange-500" />,
      title: 'Tent Rentals',
      description: 'High-quality tents for events of all sizes. From intimate gatherings to large celebrations, we have the perfect tent solution.',
      price: 'Starting at $299/day',
      features: [
        'Multiple sizes available',
        'Professional setup and takedown',
        'Weather-resistant materials',
        'Lighting options included',
      ],
    },
    {
      icon: <Music className="h-12 w-12 text-orange-500" />,
      title: 'Sound Systems',
      description: 'Professional audio equipment for crystal-clear sound. Perfect for speeches, live music, or background ambiance.',
      price: 'Starting at $199/day',
      features: [
        'High-end speakers',
        'Wireless microphones',
        'Mixing console',
        'Technical support',
      ],
    },
    {
      icon: <Utensils className="h-12 w-12 text-orange-500" />,
      title: 'Catering Services',
      description: 'Delicious menu options and professional service. Our experienced chefs create memorable dining experiences.',
      price: 'Starting at $25/person',
      features: [
        'Customizable menus',
        'Dietary accommodations',
        'Professional staff',
        'Full service setup',
      ],
    },
    {
      icon: <Users className="h-12 w-12 text-orange-500" />,
      title: 'Event Staffing',
      description: 'Professional and courteous event staff to ensure your event runs smoothly from start to finish.',
      price: 'Starting at $25/hour per staff',
      features: [
        'Trained professionals',
        'Uniformed staff',
        'Event coordination',
        'Setup and cleanup',
      ],
    },
    {
      icon: <Camera className="h-12 w-12 text-orange-500" />,
      title: 'Photography',
      description: 'Capture your special moments with our professional photography services.',
      price: 'Starting at $599/event',
      features: [
        'Professional equipment',
        'Digital delivery',
        'Photo editing',
        'Print packages available',
      ],
    },
    {
      icon: <Palette className="h-12 w-12 text-orange-500" />,
      title: 'Decor & Styling',
      description: 'Transform your venue with our professional decor and styling services.',
      price: 'Starting at $399/event',
      features: [
        'Custom themes',
        'Floral arrangements',
        'Lighting design',
        'Props and accessories',
      ],
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Everything you need to create an extraordinary event experience.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="p-8">
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <p className="text-lg font-semibold text-orange-500 mb-4">
                    {service.price}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <ChevronRight className="h-4 w-4 text-orange-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors"
                  >
                    Book Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  How far in advance should I book your services?
                </h3>
                <p className="text-gray-600">
                  We recommend booking at least 3-6 months in advance for large events, and 1-2 months for smaller gatherings to ensure availability of your preferred services and dates.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you provide setup and teardown services?
                </h3>
                <p className="text-gray-600">
                  Yes, all our rental services include professional setup and teardown. Our team will ensure everything is properly installed and removed after your event.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Can you accommodate special requests?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We pride ourselves on flexibility and can customize our services to meet your specific needs. Contact us to discuss your requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-orange-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your event needs and get a customized quote.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center bg-white text-orange-500 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors text-lg font-semibold"
          >
            Get Started
            <ChevronRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;