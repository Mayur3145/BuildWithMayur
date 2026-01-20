'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';
import { personalInfo, socialLinks } from '@/data/content';

export default function Hero() {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(150);

    const roles = [
        'Full Stack Developer',
        'React Specialist',
        'Node.js Developer',
        'UI/UX Enthusiast',
    ];

    useEffect(() => {
        const handleTyping = () => {
            const i = loopNum % roles.length;
            const fullText = roles[i];

            setText(
                isDeleting
                    ? fullText.substring(0, text.length - 1)
                    : fullText.substring(0, text.length + 1)
            );

            setTypingSpeed(isDeleting ? 50 : 150);

            if (!isDeleting && text === fullText) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === '') {
                setIsDeleting(false);
                setLoopNum(loopNum + 1);
            }
        };

        const timer = setTimeout(handleTyping, typingSpeed);
        return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum, typingSpeed, roles]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-background to-accent-900/20" />
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
            </div>

            <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="container-custom px-6 text-center z-10"
            >
                {/* Greeting */}
                <motion.p variants={itemVariants} className="text-primary-400 text-lg md:text-xl mb-4">
                    Hi, I&apos;m
                </motion.p>

                {/* Name */}
                <motion.h1
                    variants={itemVariants}
                    className="text-5xl md:text-7xl lg:text-8xl font-display font-bold mb-6"
                >
                    <span className="gradient-text">{personalInfo.name}</span>
                </motion.h1>

                {/* Typing Animation */}
                <motion.div variants={itemVariants} className="h-16 mb-6">
                    <h2 className="text-2xl md:text-4xl lg:text-5xl font-semibold text-white/90">
                        {text}
                        <span className="animate-pulse">|</span>
                    </h2>
                </motion.div>

                {/* Tagline */}
                <motion.p
                    variants={itemVariants}
                    className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-12"
                >
                    {personalInfo.tagline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
                >
                    <a
                        href="#projects"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn-primary"
                    >
                        View My Work
                    </a>
                    <a
                        href="#contact"
                        onClick={(e) => {
                            e.preventDefault();
                            document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="btn-secondary"
                    >
                        Get In Touch
                    </a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    variants={itemVariants}
                    className="flex justify-center space-x-6 mb-16"
                >
                    <a
                        href={socialLinks.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass rounded-full hover:scale-110 hover:bg-white/10 transition-all duration-300"
                        aria-label="GitHub"
                    >
                        <FiGithub className="w-6 h-6" />
                    </a>
                    <a
                        href={socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-3 glass rounded-full hover:scale-110 hover:bg-white/10 transition-all duration-300"
                        aria-label="LinkedIn"
                    >
                        <FiLinkedin className="w-6 h-6" />
                    </a>
                    <a
                        href={socialLinks.email}
                        className="p-3 glass rounded-full hover:scale-110 hover:bg-white/10 transition-all duration-300"
                        aria-label="Email"
                    >
                        <FiMail className="w-6 h-6" />
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    variants={itemVariants}
                    className="flex flex-col items-center"
                >
                    <p className="text-sm text-white/50 mb-2">Scroll to explore</p>
                    <motion.div
                        animate={{ y: [0, 10, 0] }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                        <FiArrowDown className="w-6 h-6 text-primary-400" />
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
    );
}
