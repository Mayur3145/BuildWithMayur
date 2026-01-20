'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import { personalInfo, socialLinks } from '@/data/content';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            // Replace this with your actual backend API endpoint
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus('idle'), 3000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus('idle'), 3000);
            }
        } catch (error) {
            setStatus('error');
            setTimeout(() => setStatus('idle'), 3000);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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

    return (
        <section id="contact" className="section-padding bg-gradient-to-b from-background to-primary-950/10">
            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={containerVariants}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Get In <span className="gradient-text">Touch</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full mb-6" />
                        <p className="text-lg text-white/70 max-w-2xl mx-auto">
                            Have a question or want to work together? Feel free to reach out!
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Contact Info */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <h3 className="text-2xl font-bold mb-8">Let&apos;s Connect</h3>

                            {/* Contact Cards */}
                            <a
                                href={socialLinks.email}
                                className="flex items-center gap-4 glass-strong p-6 rounded-2xl glow-on-hover group"
                            >
                                <div className="p-3 bg-primary-500/20 rounded-full group-hover:scale-110 transition-transform">
                                    <FiMail className="w-6 h-6 text-primary-400" />
                                </div>
                                <div>
                                    <p className="font-semibold">Email</p>
                                    <p className="text-white/60 text-sm">{personalInfo.email}</p>
                                </div>
                            </a>

                            <a
                                href={socialLinks.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 glass-strong p-6 rounded-2xl glow-on-hover group"
                            >
                                <div className="p-3 bg-primary-500/20 rounded-full group-hover:scale-110 transition-transform">
                                    <FiLinkedin className="w-6 h-6 text-primary-400" />
                                </div>
                                <div>
                                    <p className="font-semibold">LinkedIn</p>
                                    <p className="text-white/60 text-sm">Connect with me</p>
                                </div>
                            </a>

                            <a
                                href={socialLinks.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 glass-strong p-6 rounded-2xl glow-on-hover group"
                            >
                                <div className="p-3 bg-primary-500/20 rounded-full group-hover:scale-110 transition-transform">
                                    <FiGithub className="w-6 h-6 text-primary-400" />
                                </div>
                                <div>
                                    <p className="font-semibold">GitHub</p>
                                    <p className="text-white/60 text-sm">Check out my code</p>
                                </div>
                            </a>

                            {/* Location */}
                            <div className="glass p-6 rounded-2xl">
                                <p className="font-semibold mb-2">📍 Location</p>
                                <p className="text-white/60">{personalInfo.location}</p>
                                <p className="text-white/60 text-sm mt-2">Open to remote opportunities</p>
                            </div>
                        </motion.div>

                        {/* Contact Form */}
                        <motion.div variants={itemVariants}>
                            <form onSubmit={handleSubmit} className="glass-strong p-8 rounded-2xl space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                                        Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="your.email@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="What's this about?"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-primary-500 transition-colors resize-none"
                                        placeholder="Your message..."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {status === 'loading' ? (
                                        'Sending...'
                                    ) : (
                                        <>
                                            <FiSend className="w-5 h-5" />
                                            Send Message
                                        </>
                                    )}
                                </button>

                                {status === 'success' && (
                                    <p className="text-green-400 text-center">Message sent successfully!</p>
                                )}
                                {status === 'error' && (
                                    <p className="text-red-400 text-center">Failed to send message. Please try again.</p>
                                )}
                            </form>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
