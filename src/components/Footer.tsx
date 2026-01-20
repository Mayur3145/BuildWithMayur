'use client';

import { motion } from 'framer-motion';
import { FiHeart } from 'react-icons/fi';
import { personalInfo } from '@/data/content';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative py-8 border-t border-white/10">
            <div className="container-custom px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-white/60 flex items-center justify-center gap-2 mb-2">
                        Made with <FiHeart className="text-red-500 animate-pulse" /> by {personalInfo.name}
                    </p>
                    <p className="text-white/40 text-sm">
                        © {currentYear} All rights reserved.
                    </p>
                </motion.div>
            </div>
        </footer>
    );
}
