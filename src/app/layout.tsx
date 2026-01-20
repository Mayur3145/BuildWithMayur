import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: '--font-inter',
    display: 'swap',
});

const outfit = Outfit({
    subsets: ["latin"],
    variable: '--font-outfit',
    display: 'swap',
});

export const metadata: Metadata = {
    title: "Mayur Chaudhari | Full Stack Developer",
    description: "Portfolio of Mayur Chaudhari - Full Stack Developer specializing in React, Next.js, Node.js, and modern web technologies",
    keywords: ["Mayur Chaudhari", "Full Stack Developer", "React", "Next.js", "Node.js", "Portfolio"],
    authors: [{ name: "Mayur Chaudhari" }],
    openGraph: {
        title: "Mayur Chaudhari | Full Stack Developer",
        description: "Portfolio of Mayur Chaudhari - Full Stack Developer",
        type: "website",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className={`${inter.variable} ${outfit.variable} antialiased`}>
                {children}
            </body>
        </html>
    );
}
