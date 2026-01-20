'use client';

import { motion } from 'framer-motion';
import { skills } from '@/data/content';

export default function Skills() {
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
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { duration: 0.5 },
        },
    };

    return (
        <section id="skills" className="section-padding">
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
                            Skills & <span className="gradient-text">Technologies</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
                    </motion.div>

                    {/* Skills Grid */}
                    <div className="space-y-12">
                        {skills.map((category, categoryIndex) => (
                            <motion.div key={category.category} variants={itemVariants}>
                                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span className="w-2 h-8 bg-gradient-to-b from-primary-500 to-accent-500 rounded-full" />
                                    {category.category}
                                </h3>
                                <motion.div
                                    variants={containerVariants}
                                    className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
                                >
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill}
                                            variants={itemVariants}
                                            whileHover={{ scale: 1.05, y: -5 }}
                                            className="glass-strong p-4 rounded-xl text-center glow-on-hover cursor-pointer group"
                                        >
                                            <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                                                {getSkillIcon(skill)}
                                            </div>
                                            <p className="text-sm font-medium group-hover:text-primary-400 transition-colors">
                                                {skill}
                                            </p>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Additional Info */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-16 text-center glass p-8 rounded-2xl"
                    >
                        <p className="text-lg text-white/70">
                            Always learning and exploring new technologies to stay updated with industry trends.
                        </p>
                        <p className="text-primary-400 mt-2">🚀 Continuous learner | 💡 Problem solver | 🎯 Goal-oriented</p>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}

// Helper function to get skill icons (can be enhanced with actual icon library)
function getSkillIcon(skill: string): string {
    const iconMap: Record<string, string> = {
        'React': '⚛️',
        'Next.js': '▲',
        'TypeScript': '📘',
        'JavaScript': '📜',
        'HTML5': '🌐',
        'CSS3': '🎨',
        'Tailwind CSS': '💨',
        'Redux': '🔄',
        'Framer Motion': '🎬',
        'Node.js': '🟢',
        'Express': '🚂',
        'Python': '🐍',
        'RESTful APIs': '🔌',
        'GraphQL': '◈',
        'MongoDB': '🍃',
        'PostgreSQL': '🐘',
        'MySQL': '🐬',
        'Git': '📚',
        'Docker': '🐳',
        'AWS': '☁️',
        'Firebase': '🔥',
        'Vercel': '▲',
        'Linux': '🐧',
        'CI/CD': '♻️',
        'Jest': '🃏',
        'Webpack': '📦',
    };

    return iconMap[skill] || '⚡';
}
