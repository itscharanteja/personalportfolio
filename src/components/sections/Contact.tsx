import React, { useState } from 'react';
import { Mail, Github, Linkedin, Twitter } from 'lucide-react';
import { supabase } from '../../lib/supabase';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const { error: supabaseError } = await supabase
        .from('contact_messages')
        .insert([
          {
            name: formData.name,
            email: formData.email,
            message: formData.message,
            created_at: new Date().toISOString(),
          },
        ]);

      if (supabaseError) throw supabaseError;

      setSuccess(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      console.error('Error sending message:', err);
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-slate-50 via-teal-50 to-indigo-50 dark:from-slate-900 dark:via-teal-950 dark:to-indigo-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-teal-500 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
          Get In Touch
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-slate-800 dark:text-slate-100">Contact Information</h3>
            <p className="text-slate-600 dark:text-slate-300 mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
            </p>
            <div className="space-y-4">
              <a
                href="mailto:itscharanteja@gmail.com"
                className="flex items-center text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300"
              >
                <Mail className="w-6 h-6 mr-3" />
                itscharanteja@gmail.com
              </a>
              <div className="flex space-x-6 mt-8">
                <a
                  href="https://github.com/itscharanteja"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/charan-sri-teja-burra-a386a5225/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="https://x.com/itscharanteja1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-700 dark:text-slate-200 hover:text-teal-600 dark:hover:text-teal-300 transition-colors duration-300"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="space-y-6" autoComplete="off">
              {error && (
                <div className="rounded-md bg-red-50 dark:bg-red-900/50 p-4">
                  <p className="text-sm text-red-700 dark:text-red-200">{error}</p>
                </div>
              )}
              {success && (
                <div className="rounded-md bg-green-50 dark:bg-green-900/50 p-4">
                  <p className="text-sm text-green-700 dark:text-green-200">Message sent successfully!</p>
                </div>
              )}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-teal-400 focus:border-teal-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  required
                  disabled={loading}
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-teal-400 focus:border-teal-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  required
                  disabled={loading}
                  autoComplete="off"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-md focus:ring-teal-400 focus:border-teal-400 bg-white dark:bg-slate-800 text-slate-900 dark:text-white"
                  required
                  disabled={loading}
                  autoComplete="off"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-teal-400 via-indigo-400 to-purple-400 text-white py-2 px-6 rounded-md hover:opacity-90 transition-opacity duration-300 disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
