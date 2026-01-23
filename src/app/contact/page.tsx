'use client';

import { useState } from 'react';
import Container from '@/components/Container';
import Section from '@/components/Section';
import { siteDetails } from '@/data/siteDetails';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    // TODO: Implement form submission to API
    // For now, just simulate submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        interest: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary via-primary-accent to-secondary text-white py-20">
        <Container>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-display">
            Get In Touch
          </h1>
          <p className="text-xl text-white/90 max-w-3xl">
            Ready to start your Las Vegas real estate journey? Let's talk about
            your goals and how I can help.
          </p>
        </Container>
      </section>

      {/* Contact Methods */}
      <Section
        id="contact-methods"
        title="Contact Dr. Jan Duffy"
        description="Choose the way that works best for you"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">📞</div>
            <h3 className="font-bold mb-2 font-display">Call or Text</h3>
            <p className="text-sm text-foreground-accent mb-4">
              Ready to get started?
            </p>
            <a
              href={`tel:${siteDetails.contact.primaryPhone}`}
              className="text-primary font-semibold hover:underline"
            >
              {siteDetails.contact.primaryPhone}
            </a>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">📧</div>
            <h3 className="font-bold mb-2 font-display">Email</h3>
            <p className="text-sm text-foreground-accent mb-4">
              Send me a message
            </p>
            <a
              href={`mailto:${siteDetails.contact.email}`}
              className="text-primary font-semibold hover:underline"
            >
              {siteDetails.contact.email}
            </a>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md text-center">
            <div className="text-4xl mb-3">🏢</div>
            <h3 className="font-bold mb-2 font-display">Office</h3>
            <p className="text-sm text-foreground-accent mb-4">
              Professional inquiries
            </p>
            <a
              href={`tel:${siteDetails.contact.professionalPhone}`}
              className="text-primary font-semibold hover:underline"
            >
              {siteDetails.contact.professionalPhone}
            </a>
          </div>
        </div>
      </Section>

      {/* Contact Form */}
      <Section
        id="contact-form"
        title="Send a Message"
        description="Fill out the form below and I'll get back to you soon"
        className="bg-warm-gray"
      >
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 shadow-md space-y-6">
            {submitStatus === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 px-4 py-3 rounded-lg">
                Thank you! I'll get back to you soon.
              </div>
            )}
            {submitStatus === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-800 px-4 py-3 rounded-lg">
                There was an error. Please try calling or emailing directly.
              </div>
            )}

            <div>
              <label htmlFor="name" className="block text-sm font-semibold mb-2">
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold mb-2">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="interest" className="block text-sm font-semibold mb-2">
                I'm interested in
              </label>
              <select
                id="interest"
                name="interest"
                value={formData.interest}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
              >
                <option value="">Select an option</option>
                <option value="buying">Buying a Home</option>
                <option value="selling">Selling a Home</option>
                <option value="luxury">Luxury Homes</option>
                <option value="55plus">55+ Communities</option>
                <option value="new-construction">New Construction</option>
                <option value="investment">Investment Properties</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                placeholder="Tell me about your real estate goals..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary text-white hover:bg-primary-accent px-8 py-4 rounded-full font-semibold text-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>

            <p className="text-xs text-center text-foreground-accent">
              By submitting this form, you agree to be contacted about your
              real estate inquiry. We respect your privacy and will never share
              your information.
            </p>
          </form>
        </div>
      </Section>

      {/* Map Section */}
      <Section id="map" title="Office Location" description="">
        <div className="max-w-4xl mx-auto">
          <div className="bg-warm-gray rounded-xl p-8 text-center">
            <p className="text-foreground-accent mb-4">
              {siteDetails.agent.brokerage}
            </p>
            <p className="text-foreground-accent mb-6">
              {siteDetails.contact.officeAddress.city},{' '}
              {siteDetails.contact.officeAddress.state}
            </p>
            <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
              <p className="text-foreground-accent">
                Google Map Embed - Add map embed code here
              </p>
            </div>
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${siteDetails.contact.primaryPhone}`}
                className="inline-block bg-primary text-white hover:bg-primary-accent px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Call {siteDetails.contact.primaryPhone}
              </a>
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-semibold transition-colors"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
