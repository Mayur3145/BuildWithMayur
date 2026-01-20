# Personal Portfolio Website

A modern, stunning personal portfolio website built with Next.js, React, TypeScript, and Node.js/Express.

## ✨ Features

- 🎨 **Modern Design**: Glassmorphism effects, gradient accents, and smooth animations
- 🌙 **Dark Mode**: Built-in dark mode with smooth transitions
- 📱 **Fully Responsive**: Perfect experience on all devices
- ⚡ **Performance Optimized**: Built with Next.js for optimal performance
- 🎭 **Smooth Animations**: Framer Motion for engaging interactions
- 📧 **Contact Form**: Functional contact form with email integration
- 🚀 **SEO Optimized**: Meta tags and semantic HTML for better search visibility

## 🛠️ Tech Stack

### Frontend
- Next.js 14 (App Router)
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Icons

### Backend
- Node.js
- Express
- Nodemailer
- CORS

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd profile
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd server
   npm install
   cd ..
   ```

4. **Configure environment variables**
   
   Copy the example env file in the server directory:
   ```bash
   cd server
   cp .env.example .env
   ```
   
   Edit `.env` with your email credentials:
   - `EMAIL_USER`: Your email address
   - `EMAIL_PASS`: Your app-specific password (for Gmail)
   - `RECIPIENT_EMAIL`: Where contact form emails should be sent

### Running the Application

1. **Start the backend server** (in one terminal):
   ```bash
   cd server
   npm run dev
   ```
   Server will run on `http://localhost:5000`

2. **Start the frontend** (in another terminal):
   ```bash
   npm run dev
   ```
   Website will be available at `http://localhost:3000`

## 📝 Customization

### Update Your Information

Edit `src/data/content.ts` to customize:
- Personal information (name, title, bio, location)
- Social media links
- Work experience
- Projects
- Skills
- Stats

### Modify Colors and Styles

- **Colors**: Edit `tailwind.config.ts` to change the color scheme
- **Animations**: Customize in `tailwind.config.ts` and `src/app/globals.css`
- **Fonts**: Change fonts in `src/app/layout.tsx`

## 🎨 Components

- **Navbar**: Responsive navigation with dark mode toggle
- **Hero**: Eye-catching landing section with typing animation
- **About**: Personal introduction with stats
- **Experience**: Timeline of work experience
- **Projects**: Filterable project showcase
- **Skills**: Categorized skill cards
- **Contact**: Functional contact form
- **Footer**: Simple footer with copyright

## 📦 Building for Production

```bash
# Build the frontend
npm run build
npm start

# Build and run the backend
cd server
npm start
```

## 🌐 Deployment

### Frontend (Vercel - Recommended)
1. Push your code to GitHub
2. Import project on [Vercel](https://vercel.com)
3. Deploy with one click

### Backend (Heroku, Railway, or DigitalOcean)
1. Set environment variables on your hosting platform
2. Deploy the `server` directory
3. Update `CLIENT_URL` in backend `.env` to your frontend URL
4. Update the API endpoint in `src/components/Contact.tsx`

## 📄 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

This is a personal portfolio template. Feel free to fork and customize for your own use!

## 📧 Contact

For questions or feedback, reach out via the contact form on the website or connect on LinkedIn.

---

Made with ❤️ using Next.js and React
