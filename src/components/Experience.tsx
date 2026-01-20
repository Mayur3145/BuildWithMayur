'use client';

import { motion } from 'framer-motion';
import { experiences } from '@/data/content';

export default function Experience() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.6 },
        },
    };

    return (
        <section id="experience" className="section-padding">
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
                            Work <span className="gradient-text">Experience</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
                    </motion.div>

                    {/* Timeline */}
                    <div className="relative">
                        {/* Timeline Line */}
                        <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-accent-500 transform md:-translate-x-1/2" />

                        {/* Experience Items */}
                        <div className="space-y-12">
                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                                        }`}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transform md:-translate-x-1/2 animate-pulse" />

                                    {/* Content */}
                                    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                                        <div className="ml-8 md:ml-0">
                                            <motion.div
                                                whileHover={{ scale: 1.02 }}
                                                className="glass-strong p-6 rounded-2xl glow-on-hover"
                                            >
                                                <div className="inline-block px-4 py-1 bg-primary-500/20 rounded-full mb-4">
                                                    <span className="text-sm text-primary-400">{exp.period}</span>
                                                </div>
                                                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                                                <p className="text-lg text-accent-400 mb-1">{exp.company}</p>
                                                <p className="text-sm text-white/60 mb-4">📍 {exp.location}</p>

                                                <ul className="space-y-2 mb-4">
                                                    {exp.description.map((desc, i) => (
                                                        <li key={i} className="text-white/70 text-sm flex items-start gap-2">
                                                            <span className="text-primary-400 mt-1">▹</span>
                                                            <span>{desc}</span>
                                                        </li>
                                                    ))}
                                                </ul>

                                                {/* Technologies */}
                                                <div className="flex flex-wrap gap-2">
                                                    {exp.technologies.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="px-3 py-1 text-xs bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        </div>
                                    </div>

                                    {/* Spacer for desktop */}
                                    <div className="hidden md:block md:w-1/2" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
