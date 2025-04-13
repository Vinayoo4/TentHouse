import React from 'react';
import { useForm } from 'react-hook-form';
import { Mail, Phone, MapPin, Send, AlertCircle } from 'lucide-react';
import toast, { Toaster } from 'react-hot-toast';
import { supabase } from '../lib/supabase';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  eventDate?: string;
  guestCount?: number;
};

type NewsletterFormData = {
  name: string;
  email: string;
  interests: string[];
};

const Contact = () => {
  const { 
    register: registerContact, 
    handleSubmit: handleContactSubmit, 
    reset: resetContact,
    formState: { errors: contactErrors, isSubmitting: isContactSubmitting }
  } = useForm<ContactFormData>();

  const { 
    register: registerNewsletter, 
    handleSubmit: handleNewsletterSubmit, 
    reset: resetNewsletter,
    formState: { errors: newsletterErrors, isSubmitting: isNewsletterSubmitting }
  } = useForm<NewsletterFormData>();

  const onContactSubmit = async (data: ContactFormData) => {
    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{
          name: data.name,
          email: data.email,
          phone: data.phone,
          service_interest: data.service,
          message: data.message,
          event_date: data.eventDate,
          guest_count: data.guestCount
        }]);

      if (error) throw error;

      toast.success('Message sent successfully! We\'ll get back to you soon.');
      resetContact();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error:', error);
    }
  };

  const onNewsletterSubmit = async (data: NewsletterFormData) => {
    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{
          name: data.name,
          email: data.email,
          interests: data.interests
        }]);

      if (error) throw error;

      toast.success('Welcome to our newsletter! Check your email for confirmation.');
      resetNewsletter();
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
      console.error('Error:', error);
    }
  };

  const FormError = ({ message }: { message: string }) => (
    <p className="mt-1 text-sm text-red-600 flex items-center">
      <AlertCircle className="h-4 w-4 mr-1" />
      {message}
    </p>
  );

  return (
    <div>
      <Toaster 
        position="top-right"
        toastOptions={{
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        }}
      />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gray-900">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80")',
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Let's Create Something Amazing
          </h1>
          <p className="text-xl text-white max-w-3xl mx-auto">
            Get in touch with our team to start planning your perfect event. We're here to make your vision a reality.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-orange-500 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(123) 456-7890</p>
                    <p className="text-sm text-gray-500">Available Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-orange-500 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">info@eventpro.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">123 Event Street<br />City, ST 12345</p>
                    <p className="text-sm text-gray-500">Visit our showroom by appointment</p>
                  </div>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-12 bg-gray-50 p-8 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  Subscribe to Our Newsletter
                </h3>
                <p className="text-gray-600 mb-6">
                  Stay updated with our latest events, special offers, and event planning tips.
                </p>
                <form onSubmit={handleNewsletterSubmit(onNewsletterSubmit)} className="space-y-4">
                  <div>
                    <label htmlFor="newsletter-name" className="block text-sm font-medium text-gray-700">
                      Name
                    </label>
                    <input
                      type="text"
                      id="newsletter-name"
                      className={`mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        newsletterErrors.name ? 'border-red-300' : 'border-gray-300'
                      }`}
                      {...registerNewsletter('name', { 
                        required: 'Name is required',
                        minLength: { value: 2, message: 'Name must be at least 2 characters' }
                      })}
                    />
                    {newsletterErrors.name && <FormError message={newsletterErrors.name.message || 'Invalid name'} />}
                  </div>
                  <div>
                    <label htmlFor="newsletter-email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      id="newsletter-email"
                      className={`mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                        newsletterErrors.email ? 'border-red-300' : 'border-gray-300'
                      }`}
                      {...registerNewsletter('email', { 
                        required: 'Email is required',
                        pattern: { 
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {newsletterErrors.email && <FormError message={newsletterErrors.email.message || 'Invalid email'} />}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Interests
                    </label>
                    <div className="space-y-2">
                      {['Events', 'Catering', 'Equipment Rentals', 'Special Offers'].map((interest) => (
                        <label key={interest} className="flex items-center">
                          <input
                            type="checkbox"
                            value={interest}
                            className="rounded border-gray-300 text-orange-500 focus:ring-orange-500"
                            {...registerNewsletter('interests')}
                          />
                          <span className="ml-2 text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  <button
                    type="submit"
                    disabled={isNewsletterSubmitting}
                    className="w-full bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isNewsletterSubmitting ? 'Subscribing...' : 'Subscribe'}
                  </button>
                </form>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              <form onSubmit={handleContactSubmit(onContactSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      contactErrors.name ? 'border-red-300' : 'border-gray-300'
                    }`}
                    {...registerContact('name', { 
                      required: 'Name is required',
                      minLength: { value: 2, message: 'Name must be at least 2 characters' }
                    })}
                  />
                  {contactErrors.name && <FormError message={contactErrors.name.message || 'Invalid name'} />}
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      contactErrors.email ? 'border-red-300' : 'border-gray-300'
                    }`}
                    {...registerContact('email', { 
                      required: 'Email is required',
                      pattern: { 
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address'
                      }
                    })}
                  />
                  {contactErrors.email && <FormError message={contactErrors.email.message || 'Invalid email'} />}
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className={`mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      contactErrors.phone ? 'border-red-300' : 'border-gray-300'
                    }`}
                    {...registerContact('phone', {
                      pattern: {
                        value: /^[\d\s-+()]*$/,
                        message: 'Invalid phone number'
                      }
                    })}
                  />
                  {contactErrors.phone && <FormError message={contactErrors.phone.message || 'Invalid phone'} />}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="eventDate" className="block text-sm font-medium text-gray-700">
                      Event Date
                    </label>
                    <input
                      type="date"
                      id="eventDate"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      {...registerContact('eventDate')}
                      min={new Date().toISOString().split('T')[0]}
                    />
                  </div>
                  <div>
                    <label htmlFor="guestCount" className="block text-sm font-medium text-gray-700">
                      Expected Guests
                    </label>
                    <input
                      type="number"
                      id="guestCount"
                      className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      {...registerContact('guestCount')}
                      min="1"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    className={`mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      contactErrors.service ? 'border-red-300' : 'border-gray-300'
                    }`}
                    {...registerContact('service', { required: 'Please select a service' })}
                  >
                    <option value="">Select a service</option>
                    <option value="Tent Rentals">Tent Rentals</option>
                    <option value="Sound Systems">Sound Systems</option>
                    <option value="Catering Services">Catering Services</option>
                    <option value="Event Staffing">Event Staffing</option>
                    <option value="Photography">Photography</option>
                    <option value="Decor & Styling">Decor & Styling</option>
                    <option value="Full Event Package">Full Event Package</option>
                  </select>
                  {contactErrors.service && <FormError message={contactErrors.service.message || 'Please select a service'} />}
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`mt-1 block w-full rounded-md shadow-sm focus:ring-2 focus:ring-orange-500 focus:border-transparent ${
                      contactErrors.message ? 'border-red-300' : 'border-gray-300'
                    }`}
                    {...registerContact('message', { 
                      required: 'Message is required',
                      minLength: { value: 10, message: 'Message must be at least 10 characters' }
                    })}
                  ></textarea>
                  {contactErrors.message && <FormError message={contactErrors.message.message || 'Invalid message'} />}
                </div>
                <button
                  type="submit"
                  disabled={isContactSubmitting}
                  className="w-full bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="h-5 w-5 mr-2" />
                  {isContactSubmitting ? 'Sending...' : 'Send Message'}
                </button>
                <p className="text-sm text-gray-500 text-center mt-4">
                  * Required fields
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;