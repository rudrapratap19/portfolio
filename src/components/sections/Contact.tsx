import { motion } from "framer-motion";
import { siteData } from '../../data/siteData';
import { SiGeeksforgeeks } from 'react-icons/si'; 
import { SiLeetcode } from "react-icons/si";
import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { 
  FaLinkedin, 
  FaGithub, 


} from 'react-icons/fa'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const { profile }  = siteData; // Add this import at the top


const iconFor = (label: string) => {
  if (label.toLowerCase().includes("github")) return FaGithub;
  if (label.toLowerCase().includes("linkedin")) return FaLinkedin;
  if (label.toLowerCase().includes("leetcode")) return SiLeetcode;
  if (label.includes("GeeksForGeeks") ) return SiGeeksforgeeks;
  return FaGithub;
};




const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function Contact() {
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

    // EmailJS configuration
  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const MAIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID; // Your main template
  const AUTO_REPLY_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_AUTO_REPLY_TEMPLATE_ID; // Auto-reply template
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  emailjs.init(PUBLIC_KEY);
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Fix the sendEmail function type and implementation
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    await sendEmail(e);
  };
const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    // Send main email
    const templateParams = {
      to_email: "rpsinghiiitr@gmail.com", // Recipient's email
      to_name: "Rudra Pratap Singh",      // Recipient's name
      from_name: formData.name,           // Sender's name
      from_email: formData.email,         // Sender's email
      subject: formData.subject,          // Email subject
      message: formData.message,          // Email message
      reply_to: formData.email           // Reply-to email
    };

    // Send the main email
    await emailjs.send(
      SERVICE_ID,
      MAIN_TEMPLATE_ID,
      templateParams,
      PUBLIC_KEY
    );

    // Send auto-reply
    const autoReplyParams = {
      to_email: formData.email,           // Sender becomes recipient for auto-reply
      to_name: formData.name,            // Sender's name
      from_name: "Rudra Pratap Singh",   // Your name
      from_email: "rpsinghiiitr@gmail.com", // Your email
      subject: `Re: ${formData.subject}`,
      message: `Thank you for reaching out, ${formData.name}! 

I've received your message and will get back to you as soon as possible.

Best regards,
Rudra Pratap Singh`
    };

    // Send the auto-reply
    await emailjs.send(
      SERVICE_ID,
      AUTO_REPLY_TEMPLATE_ID,
      autoReplyParams,
      PUBLIC_KEY
    );

    toast.success('Message sent successfully! Please check your email for confirmation.');
    setFormData({ name: '', email: '', subject: '', message: '' });

  } catch (error: any) {
    console.error('EmailJS error:', error);
    toast.error(error?.text || 'Failed to send message. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};

// Remove the separate handleSubmit function since we're handling the submit in sendEmail

  return (
    <section id="contact" className="py-20  bg-gray-950">
      <div className="mx-auto max-w-7xl px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <div className="text-center">
            <motion.div variants={itemVariants}>
              <span className="inline-block rounded-lg  px-3 py-1 text-sm font-semibold text-brand bg-brand/20">
                Contact
              </span>
            </motion.div>

            <motion.h2
              className="mt-4 text-3xl font-bold  text-white sm:text-4xl"
              variants={itemVariants}
            >
              Let's Connect
            </motion.h2>

            <motion.p
              className="mx-auto mt-4 max-w-2xl text-lg  text-gray-300"
              variants={itemVariants}
            >
              I'm always open to discussing new opportunities, collaborations,
              or just having a chat about technology
            </motion.p>
          </div>

          <div className="mt-16 grid gap-12 lg:grid-cols-2">
            {/* Contact Info */}
            <motion.div variants={itemVariants}>
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold  text-white mb-6">
                    Get in Touch
                  </h3>

                  <div className="space-y-4">
                    <motion.a
                      href={`mailto:${profile.email}`}
                      className="flex items-center space-x-3 p-4 rounded-lg  bg-gray-800 hover:bg-gray-700 transition-colors group"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand group-hover:bg-brand group-hover:text-white transition-colors">
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium  text-white">
                          Email
                        </div>
                        <div className="text-sm  text-gray-300">
                          {profile.email}
                        </div>
                      </div>
                    </motion.a>

                    <motion.a
                      href={`tel:${profile.phone}`}
                      className="flex items-center space-x-3 p-4 rounded-lg  bg-gray-800 hover:bg-gray-700 transition-colors group"
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-600 group-hover:bg-green-500 group-hover:text-white transition-colors">
                        <svg
                          className="h-5 w-5"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                      </div>
                      <div>
                        <div className="font-medium  text-white">
                          Phone
                        </div>
                        <div className="text-sm  text-gray-300">
                          {profile.phone}
                        </div>
                      </div>
                    </motion.a>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  {" "}
                  <h4 className="text-lg font-medium  text-white mb-4">
                    {" "}
                    Connect on Social{" "}
                  </h4>{" "}
                  <div className="flex space-x-4">
                    {" "}
                    {profile.links.map((link) => {
                      const Icon = iconFor(link.label);
                      return (
                        <motion.a
                          key={link.label}
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex h-10 w-10 items-center justify-center rounded-lg  hover:text-white transition-colors bg-gray-800 text-gray-300 hover:bg-brand"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          aria-label={link.label}
                          title={link.label}
                        >
                          {" "}
                          <Icon className="h-5 w-5" />{" "}
                        </motion.a>
                      );
                    })}{" "}
                  </div>{" "}
                </div>

                {/* Availability Status */}
                <div className="rounded-lg bg-green-50 p-4 bg-green-900/20">
                  <div className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-green-500"></div>
                    <span className="text-sm font-medium  text-green-300">
                      Available for opportunities
                    </span>
                  </div>
                  <p className="mt-1 text-sm  text-green-400">
                    Currently open to internships, projects, and collaborations
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="card">
                <h3 className="text-xl font-semibold  text-white mb-6">
                  Send a Message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium  text-gray-300 mb-2"
                      >
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="block w-full rounded-lg border  px-3 py-2  focus:outline-none focus:ring-1 focus:ring-brand border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-brand-soft"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium  text-gray-300 mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="block w-full rounded-lg border  px-3 py-2  focus:outline-none focus:ring-1 focus:ring-brand border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-brand-soft"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="block w-full rounded-lg border  px-3 py-2 focus:outline-none focus:ring-1 focus:ring-brand border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-brand-soft"
                      placeholder="What's this about?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="block w-full rounded-lg border  px-3 py-2  focus:outline-none focus:ring-1 focus:ring-brand border-gray-600 bg-gray-800 text-white placeholder-gray-400 focus:border-brand-soft"
                      placeholder="Tell me about your project, opportunity, or just say hello..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-lg bg-brand px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-brand-soft focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
      
    <ToastContainer
      position="bottom-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    </section>
  );
}
