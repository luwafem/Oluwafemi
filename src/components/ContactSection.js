import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck} from 'react-icons/fi';
import { FaLinkedin } from 'react-icons/fa';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Your Formspree endpoint - replace with your actual Formspree endpoint
  const FORMSPREE_ENDPOINT = "https://formspree.io/f/mblnapya";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Contact from Portfolio: ${formData.subject}`,
          _replyto: formData.email,
          _format: 'json'
        })
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to send message');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitError(error.message || 'Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple to-transparent"></div>
            <h2 className="text-4xl font-bold text-center">
              <span className="text-gradient">Get In</span> Touch
            </h2>
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-purple to-transparent"></div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple/20 to-purple-dark/20">
                    <FiMail className="text-purple text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <a 
                      href="mailto:oluwafemiemmanuelayedogbon@gmail.com"
                      className="text-white/60 hover:text-purple transition-colors"
                    >
                      oluwafemiemmanuelayedogbon@gmail.com
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple/20 to-purple-dark/20">
                    <FiPhone className="text-purple text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <a 
                      href="tel:+2347081793436"
                      className="text-white/60 hover:text-purple transition-colors"
                    >
                      +234 708 179 3436
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple/20 to-purple-dark/20">
                    <FiMapPin className="text-purple text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold">Location</h3>
                    <p className="text-white/60">Lagos, Nigeria</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card rounded-xl p-6"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-r from-purple/20 to-purple-dark/20">
                    <FaLinkedin className="text-purple text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold">LinkedIn</h3>
                    <a 
                      href="https://linkedin.com/in/Oluwafem"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-purple transition-colors"
                    >
                      linkedin.com/in/Oluwafem
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Availability Status */}
              <div className="glass-card rounded-xl p-6">
                <h3 className="font-bold mb-4">Current Availability</h3>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-green-400 font-medium">Available for projects</span>
                </div>
                <p className="text-sm text-white/60">
                  Open to new opportunities and collaborations
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-2xl p-8"
              >
                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-purple to-purple-dark flex items-center justify-center mx-auto mb-6">
                      <FiCheck className="text-2xl" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                    <p className="text-white/60 mb-4">
                      Thank you for reaching out. I'll get back to you within 24 hours.
                    </p>
                    <p className="text-sm text-white/40">
                      You'll be redirected to my message in a few seconds...
                    </p>
                  </motion.div>
                ) : (
                  <>
                    <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">Name *</label>
                          <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple focus:outline-none transition-colors"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple focus:outline-none transition-colors"
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject *</label>
                        <input
                          type="text"
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple focus:outline-none transition-colors"
                          placeholder="Project inquiry or collaboration"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium mb-2">Message *</label>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows="6"
                          className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 focus:border-purple focus:outline-none transition-colors resize-none"
                          placeholder="Tell me about your project or opportunity..."
                        />
                      </div>

                      {/* Error Message */}
                      {submitError && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-4 rounded-lg bg-red-500/10 border border-red-500/20"
                        >
                          <p className="text-red-400 text-sm">{submitError}</p>
                        </motion.div>
                      )}

                      {/* Hidden honeypot field for spam protection */}
                      <input
                        type="text"
                        name="_gotcha"
                        style={{ display: 'none' }}
                        tabIndex="-1"
                        autoComplete="off"
                      />
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full py-4 rounded-lg bg-gradient-to-r from-purple to-purple-dark font-medium flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin"></div>
                            Sending...
                          </>
                        ) : (
                          <>
                            <FiSend /> Send Message
                          </>
                        )}
                      </motion.button>
                    </form>
                    
                    <p className="text-sm text-white/40 mt-6 text-center">
                      I typically respond within 24 hours. For urgent matters, please call.
                    </p>
                  </>
                )}
              </motion.div>

              {/* Social Links */}
              <div className="mt-8 flex justify-center gap-6">
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="https://linkedin.com/in/Oluwafem"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-purple transition-colors"
                >
                  <FaLinkedin className="text-xl" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="mailto:oluwafemiemmanuelayedogbon@gmail.com"
                  className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-purple transition-colors"
                >
                  <FiMail className="text-xl" />
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.1, y: -5 }}
                  href="tel:+2347081793436"
                  className="p-4 rounded-full bg-white/5 border border-white/10 hover:border-purple transition-colors"
                >
                  <FiPhone className="text-xl" />
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;