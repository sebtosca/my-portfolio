import React, { useState, useRef } from 'react';
import { Mail, Send, Github, Linkedin, Plane as PaperPlane } from 'lucide-react';
import { Toaster, toast } from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import GlowCard from './glowCard';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        formRef.current,
        'YOUR_PUBLIC_KEY'
      );
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/sebtosca',
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/feed/',
    },
    {
      name: 'Email',
      icon: Mail,
      url: 'mailto:sebastientoscano07@gmail.com',
    },
  ];

  return (
    <section className="py-20" id="contact">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Toaster position="top-center" />
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8" data-aos="fade-right">
            <div>
              <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
              <p className="text-gray-400">
                Have a question or want to work together? I'd love to hear from you.
                Drop me a message and I'll get back to you as soon as possible.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Connect with me</h3>
              <div className="flex gap-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors hover:scale-110 transform duration-200"
                    aria-label={link.name}
                  >
                    <link.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div data-aos="fade-left">
            <GlowCard>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 rounded-lg border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors peer placeholder-transparent"
                    placeholder="Name"
                    required
                  />
                  <label
                    htmlFor="name"
                    className="absolute left-4 -top-6 text-sm text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-emerald-500"
                  >
                    Name
                  </label>
                </div>

                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-black/50 rounded-lg border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors peer placeholder-transparent"
                    placeholder="Email"
                    required
                  />
                  <label
                    htmlFor="email"
                    className="absolute left-4 -top-6 text-sm text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-emerald-500"
                  >
                    Email
                  </label>
                </div>

                <div className="relative">
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={5}
                    className="w-full px-4 py-3 bg-black/50 rounded-lg border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors peer placeholder-transparent resize-none"
                    placeholder="Message"
                    required
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 -top-6 text-sm text-gray-400 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 transition-all peer-focus:-top-6 peer-focus:text-sm peer-focus:text-emerald-500"
                  >
                    Message
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-black font-semibold px-6 py-3 rounded-full transition-all duration-300 transform hover:scale-105 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
                >
                  <PaperPlane className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;