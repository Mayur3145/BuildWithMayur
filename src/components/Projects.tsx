'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { projects } from '@/data/content';

export default function Projects() {
    const [filter, setFilter] = useState<string>('all');

    const allTechs = Array.from(
        new Set(projects.flatMap((p) => p.technologies))
    );

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter((p) => p.technologies.includes(filter));

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
        <section id="projects" className="section-padding bg-gradient-to-b from-background to-accent-950/10">
            <div className="container-custom">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                    variants={containerVariants}
                >
                    {/* Section Header */}
                    <motion.div variants={itemVariants} className="text-center mb-12">
                        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
                            Featured <span className="gradient-text">Projects</span>
                        </h2>
                        <div className="w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500 mx-auto rounded-full" />
                    </motion.div>

                    {/* Filter Buttons */}
                    <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 mb-12">
                        <button
                            onClick={() => setFilter('all')}
                            className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === 'all'
                                    ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                                    : 'glass hover:bg-white/10'
                                }`}
                        >
                            All
                        </button>
                        {allTechs.slice(0, 5).map((tech) => (
                            <button
                                key={tech}
                                onClick={() => setFilter(tech)}
                                className={`px-6 py-2 rounded-full transition-all duration-300 ${filter === tech
                                        ? 'bg-gradient-to-r from-primary-500 to-accent-500 text-white'
                                        : 'glass hover:bg-white/10'
                                    }`}
                            >
                                {tech}
                            </button>
                        ))}
                    </motion.div>

                    {/* Projects Grid */}
                    <motion.div
                        variants={containerVariants}
                        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={itemVariants}
                                whileHover={{ y: -10 }}
                                className="glass-strong rounded-2xl overflow-hidden group"
                            >
                                {/* Project Image Placeholder */}
                                <div className="relative h-48 bg-gradient-to-br from-primary-500/20 to-accent-500/20 overflow-hidden">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-6xl opacity-50">
                                            {project.featured ? '⭐' : '🚀'}
                                        </div>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-80" />

                                    {/* Overlay Links */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {project.github && (
                                            <a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 glass-strong rounded-full hover:scale-110 transition-transform"
                                                aria-label="View GitHub repository"
                                            >
                                                <FiGithub className="w-6 h-6" />
                                            </a>
                                        )}
                                        {project.live && (
                                            <a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-3 glass-strong rounded-full hover:scale-110 transition-transform"
                                                aria-label="View live demo"
                                            >
                                                <FiExternalLink className="w-6 h-6" />
                                            </a>
                                        )}
                                    </div>
                                </div>

                                {/* Project Content */}
                                <div className="p-6">
                                    {project.featured && (
                                        <span className="inline-block px-3 py-1 text-xs bg-accent-500/20 text-accent-400 rounded-full mb-3">
                                            Featured
                                        </span>
                                    )}
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-white/70 text-sm mb-4">
                                        {project.description}
                                    </p>

                                    {/* Technologies */}
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-2 py-1 text-xs bg-white/5 border border-white/10 rounded hover:bg-white/10 transition-colors"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>

                    {filteredProjects.length === 0 && (
                        <motion.p
                            variants={itemVariants}
                            className="text-center text-white/50 mt-8"
                        >
                            No projects found with this technology.
                        </motion.p>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
