'use client';

import { motion } from 'framer-motion';
import { personalInfo, stats } from '@/data/content';

export default function About() {
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
        <section id="about" className="section-padding bg-gradient-to-b from-background to-primary-950/10">
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
                            About <span className="gradient-text">Me</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Profile Image */}
                        <motion.div variants={itemVariants} className="relative">
                            <div className="relative glass-strong p-4 rounded-3xl float-slow">
                                <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 p-1">
                                    <div className="w-full h-full bg-background rounded-2xl flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="text-8xl mb-4 gradient-text">👨‍💻</div>
                                            <p className="text-xl font-semibold">{personalInfo.name}</p>
                                            <p className="text-primary-400">{personalInfo.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary-500/20 rounded-full blur-2xl" />
                            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-500/20 rounded-full blur-2xl" />
                        </motion.div>

                        {/* About Content */}
                        <motion.div variants={itemVariants} className="space-y-6">
                            <p className="text-lg text-white/80 leading-relaxed">
                                {personalInfo.bio}
                            </p>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 gap-4 pt-6">
                                {stats.map((stat, index) => (
                                    <motion.div
                                        key={stat.label}
                                        variants={itemVariants}
                                        className="glass p-6 rounded-2xl text-center glow-on-hover"
                                    >
                                        <div className="text-3xl font-bold gradient-text mb-2">
                                            {stat.value}
                                        </div>
                                        <div className="text-sm text-white/60">{stat.label}</div>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Quick Info */}
                            <div className="glass p-6 rounded-2xl space-y-3">
                                <div className="flex items-center gap-3">
                                    <span className="text-primary-400">📍</span>
                                    <span className="text-white/70">{personalInfo.location}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-primary-400">💼</span>
                                    <span className="text-white/70">Available for opportunities</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-primary-400">🚀</span>
                                    <span className="text-white/70">Always learning, always building</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
