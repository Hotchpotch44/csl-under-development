import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  Globe,
  MessageCircle
} from 'lucide-react';
import DynamicHeroSection from '../../components/Common/DynamicHeroSection';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: [
        '123 Industrial Boulevard',
        'Chemical City, CC 12345',
        'United States'
      ]
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main: +1 (555) 123-4567',
        'Sales: +1 (555) 123-4568',
        'Support: +1 (555) 123-4569'
      ]
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'info@chemcorp.com',
        'sales@chemcorp.com',
        'support@chemcorp.com'
      ]
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: [
        'Monday - Friday: 8:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 2:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  const offices = [
    {
      region: 'North America',
      address: '123 Industrial Boulevard, Chemical City, CC 12345',
      phone: '+1 (555) 123-4567',
      email: 'na@chemcorp.com'
    },
    {
      region: 'Europe',
      address: '456 Chemistry Street, London, UK EC1A 1BB',
      phone: '+44 20 1234 5678',
      email: 'eu@chemcorp.com'
    },
    {
      region: 'Asia Pacific',
      address: '789 Innovation Road, Singapore 123456',
      phone: '+65 6123 4567',
      email: 'apac@chemcorp.com'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <DynamicHeroSection
        title="Contact"
        subtitle="High-quality chemical solutions for every industry"
      />

      {/* Contact Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
             
                className="text-center p-6 rounded-lg bg-[var(--muted)]"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] rounded-full flex items-center justify-center">
                  <info.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[var(--text)] mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-gray-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h2 className="text-3xl font-bold text-[var(--text)] mb-6">Send Us a Message</h2>

              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-[var(--text)] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-[var(--text)] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-[var(--text)] mb-2">
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-[var(--text)] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="inquiryType" className="block text-sm font-medium text-[var(--text)] mb-2">
                      Inquiry Type
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="products">Product Information</option>
                      <option value="quote">Request Quote</option>
                      <option value="technical">Technical Support</option>
                      <option value="partnership">Partnership</option>
                      <option value="careers">Careers</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-[var(--text)] mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      placeholder="Enter the subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-[var(--text)] mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                      placeholder="Tell us more about your requirements..."
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[var(--primary)] text-white py-3 px-6 rounded-lg hover:bg-[var(--secondary)] transition-colors duration-300 font-semibold flex items-center justify-center"
                  >
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-[var(--text)] mb-2">Message Sent!</h3>
                  <p className="text-gray-600">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Map Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-full min-h-96 bg-gradient-to-br from-[var(--primary)]/20 to-[var(--secondary)]/20 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-[var(--primary)] mx-auto mb-4" />
                  <h3 className="text-2xl font-semibold text-[var(--text)] mb-4">Find Us Here</h3>
                  <p className="text-gray-600 mb-4">
                    Our headquarters is located in the heart of the industrial district,
                    easily accessible by major transportation routes.
                  </p>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p><strong>Address:</strong> 123 Industrial Boulevard</p>
                    <p>Chemical City, CC 12345</p>
                    <p><strong>GPS:</strong> 40.7128° N, 74.0060° W</p>
                  </div>
                  <button className="mt-4 px-6 py-2 bg-[var(--primary)] text-white rounded-lg hover:bg-[var(--secondary)] transition-colors duration-300">
                    Get Directions
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Offices */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--text)] mb-6">Global Offices</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We have offices around the world to serve you better with local expertise and support.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="bg-[var(--muted)] rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <Globe className="w-8 h-8 text-[var(--primary)] mr-3" />
                  <h3 className="text-xl font-semibold text-[var(--text)]">{office.region}</h3>
                </div>

                <div className="space-y-3">
                  <div className="flex items-start">
                    <MapPin className="w-4 h-4 text-gray-500 mr-2 mt-1" />
                    <p className="text-gray-600 text-sm">{office.address}</p>
                  </div>

                  <div className="flex items-center">
                    <Phone className="w-4 h-4 text-gray-500 mr-2" />
                    <p className="text-gray-600 text-sm">{office.phone}</p>
                  </div>

                  <div className="flex items-center">
                    <Mail className="w-4 h-4 text-gray-500 mr-2" />
                    <p className="text-gray-600 text-sm">{office.email}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-[var(--muted)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[var(--text)] mb-6">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Find quick answers to common questions about our products and services.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: 'What are your minimum order quantities?',
                answer: 'Minimum order quantities vary by product. Please contact our sales team for specific MOQ requirements.'
              },
              {
                question: 'Do you provide technical support?',
                answer: 'Yes, we offer comprehensive technical support including application guidance and troubleshooting assistance.'
              },
              {
                question: 'How long is your typical delivery time?',
                answer: 'Delivery times depend on product availability and destination. Standard orders typically ship within 2-5 business days.'
              },
              {
                question: 'Do you offer custom formulations?',
                answer: 'Yes, our R&D team can work with you to develop custom chemical solutions tailored to your specific requirements.'
              },
              {
                question: 'What certifications do your products have?',
                answer: 'Our products meet various industry standards including ISO, FDA, and other regulatory certifications as applicable.'
              },
              {
                question: 'How can I track my order?',
                answer: 'Once your order ships, you will receive tracking information via email to monitor your shipment status.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 shadow-lg"
              >
                <div className="flex items-start">
                  <MessageCircle className="w-6 h-6 text-[var(--primary)] mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-[var(--text)] mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-16 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h2 className="text-4xl font-bold mb-6">Emergency Contact</h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              For chemical spill emergencies or safety incidents involving our products,
              please contact our 24/7 emergency hotline immediately.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center">
                <Phone className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="text-sm text-gray-200">Emergency Hotline</div>
                  <div className="text-lg font-semibold">+1 (555) EMERGENCY</div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-4 flex items-center justify-center">
                <Mail className="w-6 h-6 mr-3" />
                <div className="text-left">
                  <div className="text-sm text-gray-200">Emergency Email</div>
                  <div className="text-lg font-semibold">emergency@chemcorp.com</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Contact;