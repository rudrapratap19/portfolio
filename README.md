# Rudra Pratap Singh - Portfolio Website

A modern, responsive portfolio website showcasing projects, skills, and experience. Built with React, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Dark Theme**: Sleek, professional dark design with smooth animations
- **AI Chatbot**: Integrated Gemini-powered AI assistant for visitor engagement
- **Responsive Design**: Fully responsive across all devices and screen sizes
- **Timeline Layout**: Beautiful timeline view for experience journey
- **Smooth Animations**: Framer Motion animations for enhanced UX
- **Social Links**: GitHub, LinkedIn, LeetCode, and GeeksforGeeks integration
- **Centralized Data Management**: Single `siteData.ts` file for all content
- **Fast Performance**: Vite + optimizations

## 🛠️ Tech Stack

- **React 18** - Modern UI framework with hooks
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Vite** - Next-generation build tool
- **Google Generative AI** - Chatbot functionality
- **React Icons** - Icon library
- **EmailJS** - Contact form emails

## 📁 Project Structure

```
portfolio/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Header.tsx         # Navigation header
│   │   ├── Footer.tsx         # Footer section
│   │   ├── ChatBot.tsx        # AI assistant chatbot
│   │   ├── ChatBot.css        # Chatbot styles
│   │   ├── ThemeToggle.tsx    # Theme switcher
│   │   └── sections/
│   │       ├── Hero.tsx       # Hero section with intro
│   │       ├── About.tsx      # About section
│   │       ├── Education.tsx  # Education timeline
│   │       ├── Experience.tsx # Experience timeline
│   │       ├── Projects.tsx   # Portfolio projects
│   │       ├── Skills.tsx     # Technical skills
│   │       ├── Achievements.tsx # Awards & recognition
│   │       └── Contact.tsx    # Contact form
│   ├── data/
│   │   └── siteData.ts        # Central data file
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useProjectFilter.ts
│   ├── utils/
│   │   └── classNames.ts
│   ├── styles/
│   │   └── tailwind.css
│   ├── assets/
│   │   ├── Rudra.pdf          # CV/Resume
│   │   └── image.jpg
│   ├── App.tsx
│   └── main.tsx
├── .env                        # Environment variables (API keys)
├── .gitignore
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Getting Started

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/rudrapratap19/portfolio.git
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file in the root directory:
```env
VITE_GEMINI_API_KEY=your_google_generative_ai_api_key
VITE_EMAILJS_SERVICE_ID=your_emailjs_service_id
VITE_EMAILJS_TEMPLATE_ID=your_emailjs_template_id
VITE_EMAILJS_PUBLIC_KEY=your_emailjs_public_key
```

4. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

## 🏗️ Building

```bash
npm run build
```

This creates an optimized build in the `dist/` folder.

## ✏️ Customization

### Update Your Information
Edit `src/data/siteData.ts` to customize:
- Personal profile information
- Education details
- Work experience
- Projects
- Skills
- Achievements
- Social links

### Add Your Resume
Place your CV/resume as `src/assets/Rudra.pdf`

### Customize Content
All text content is managed through `siteData.ts`. Update:
- **Profile**: Name, title, email, phone, summary
- **Education**: Institutes, degrees, CGPA, period
- **Experience**: Roles, organizations, achievements
- **Projects**: Titles, descriptions, technologies, links
- **Skills**: Languages, frameworks, tools, expertise
- **Achievements**: Awards and recognitions

### Set Up Chatbot
1. Get your Google Generative AI API key from [Google AI Studio](https://aistudio.google.com)
2. Add it to `.env` as `VITE_GEMINI_API_KEY`
3. The chatbot will automatically initialize with your portfolio data

### Connect Contact Form
1. Set up an EmailJS account at [emailjs.com](https://www.emailjs.com)
2. Add your credentials to `.env`
3. Update email addresses in the Contact section

## 🎨 Styling & Colors

The portfolio uses a dark theme with:
- **Primary Color**: Blue (#2563eb)
- **Background**: Dark gray/charcoal
- **Text**: Light gray to white

Modify colors in `tailwind.config.js` to match your brand.

## 📱 Responsive Breakpoints

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: 1024px+

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm run build
# Drag dist/ folder to Netlify
```

### GitHub Pages
Add to `package.json`:
```json
"homepage": "https://username.github.io/portfolio"
```

Then: `npm run build && npm run deploy`

## 🔐 Environment Variables

Never commit `.env` file (already in .gitignore). Store sensitive keys in:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables
- GitHub Pages: GitHub Secrets

## 🐛 Troubleshooting

**Chatbot not working?**
- Check VITE_GEMINI_API_KEY in .env
- Ensure API is enabled in Google Cloud Console

**Contact form not sending?**
- Verify EmailJS credentials in .env
- Test EmailJS connection in their dashboard

**Styles not applying?**
- Clear browser cache
- Rebuild: `npm run build`

**Build errors?**
- Delete node_modules and package-lock.json
- Run: `npm install` again

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion/)
- [Google Generative AI](https://ai.google.dev)
- [Vite](https://vitejs.dev)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Support

Need help? Check the repository issues or create a new one.

---

**Developed by Rudra Pratap Singh** | [GitHub](https://github.com/rudrapratap19) | [LinkedIn](https://www.linkedin.com/in/rudra-pratap-singh-677149314/)