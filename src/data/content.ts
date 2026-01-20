export interface ExperienceItem {
    title: string;
    company: string;
    location: string;
    period: string;
    description: string[];
    technologies: string[];
}

export interface ProjectItem {
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    image: string;
    github?: string;
    live?: string;
    featured: boolean;
}

export interface SkillCategory {
    category: string;
    skills: string[];
}

export const personalInfo = {
    name: "Mayur Chaudhari",
    title: "Building scalable web applications with modern technologies",
    tagline: "Founding Software Engineer | Full Stack Developer",
    email: "mdchaudhari3145@gmail.com",
    phone: "+91-7972795472",
    location: "Mumbai, MH",
    bio: "Founding Software Engineer at Coffeetable AI with a strong background in full-stack development. Experienced in architecting scalable applications using React, Next.js, and Node.js. I specialize in building AI-powered solutions, efficient data pipelines, and responsive user interfaces. Passionate about solving complex problems and delivering high-quality software.",
};

export const socialLinks = {
    linkedin: "https://www.linkedin.com/in/mayur-chaudhari3145/",
    github: "https://github.com/mayur-chaudhari3145", // Assumed or need to ask, using placeholder based on name
    twitter: "https://twitter.com/",
    email: "mailto:mdchaudhari3145@gmail.com",
};

export const experiences: ExperienceItem[] = [
    {
        title: "Founding Software Engineer",
        company: "Coffeetable AI",
        location: "Remote",
        period: "Jan 2025 – Present",
        description: [
            "Architected component library with 65+ reusable UI components across 24+ pages using React/TypeScript, reducing development time by 40%",
            "Built AI-powered intelligence dashboards with Recharts visualizations and Node.js/Express backends",
            "Engineered multi-model AI chat system (GPT-4, Perplexity) with real-time streaming handling 10,000+ interactions",
            "Architected extensible data ingestion pipelines with strong validation and fault tolerance"
        ],
        technologies: ["React", "TypeScript", "Node.js", "Express", "AI/ML", "Recharts"]
    },
    {
        title: "Software Developer",
        company: "TrickyFood",
        location: "Mumbai",
        period: "Dec 2023 – Dec 2024",
        description: [
            "Developed and deployed responsive food-tech web app using React, Tailwind CSS, and Firebase Hosting",
            "Designed admin dashboard for CRUD operations, order lifecycle handling, and real-time updates"
        ],
        technologies: ["React", "Tailwind CSS", "Firebase"]
    },
    {
        title: "Software Developer Intern",
        company: "HRHelpdesk",
        location: "Gurugram",
        period: "Sep 2021 – Feb 2022",
        description: [
            "Developed a React.js-based social awareness platform managing 1,000+ helpline entries across India",
            "Multi-tasked across multiple functions and roles to generate project results"
        ],
        technologies: ["React.js", "Web Development"]
    }
];

export const projects: ProjectItem[] = [
    {
        title: "ScoutAI – Startup Analytics",
        description: "AI-Powered Startup Discovery and Analytics Platform",
        longDescription: "Built a comprehensive startup discovery platform using React, Firebase, and AI/NLP scoring. Features include responsive search, watchlist functionalities, and AI-driven insights for data-driven evaluation.",
        technologies: ["React", "Firebase", "Tailwind CSS", "AI/NLP"],
        image: "/projects/scoutai.jpg", // Placeholder
        github: "", // To be filled
        live: "https://scoutai-lake.vercel.app/", // To be filled
        featured: true
    },
    {
        title: "VE-Platform",
        description: "Video Editor Marketplace with Real-time Messaging",
        longDescription: "Full-stack marketplace built with Next.js 14 and Supabase. Features real-time messaging, role-based authentication, and a premium UI with glassmorphism and Framer Motion animations.",
        technologies: ["Next.js 14", "Supabase", "React Query", "Framer Motion"],
        image: "/projects/ve-platform.jpg", // Placeholder
        github: "", // To be filled
        live: "", // To be filled
        featured: true
    },
    {
        title: "Traffic Sign Recognition",
        description: "CNN-based Traffic Sign Classification System",
        longDescription: "Developed a deep learning model using CNNs to categorize 46 different classes of road signs with high accuracy.",
        technologies: ["Python", "Deep Learning", "CNN"],
        image: "/projects/traffic-sign.jpg", // Placeholder
        github: "", // To be filled
        featured: false
    }
];

export const skills: SkillCategory[] = [
    {
        category: "Languages",
        skills: ["JavaScript", "TypeScript", "Python", "C++", "SQL", "HTML5", "CSS3"]
    },
    {
        category: "Frameworks & Libraries",
        skills: ["React", "Next.js", "Vue.js", "Node.js", "Express.js", "Tailwind CSS", "Redux"]
    },
    {
        category: "Databases & Tools",
        skills: ["MongoDB", "Firestore", "MySQL", "Firebase", "AWS", "Git", "Docker", "Figma"]
    },
    {
        category: "Other",
        skills: ["REST APIs", "CI/CD", "DSA", "Web Scraping", "AI/ML"]
    }
];

export const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Projects Completed", value: "10+" },
    { label: "Technologies", value: "25+" },
    { label: "CGPA", value: "8.49" },
];
