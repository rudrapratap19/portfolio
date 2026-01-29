# Rudra Pratap Singh - Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Framer Motion. Features dark/light mode, project filtering, smooth animations, and a centralized data management system.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations
- **Dark/Light Mode**: Toggle between themes with system preference detection
- **Responsive**: Works perfectly on all devices
- **Project Filtering**: Search and filter projects by technology
- **Centralized Data**: Single file to manage all content
- **Fast Performance**: Built with Vite for lightning-fast development and builds
- **Accessibility**: Screen reader friendly with proper ARIA labels
- **SEO Ready**: Semantic HTML structure for better search engine optimization

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **TypeScript** - Type safety and better development experience
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations and transitions
- **Vite** - Fast build tool and development server
- **Clsx** - Utility for conditional CSS classes

## 📁 Project Structure

```
rudra-portfolio/
├── public/
│   ├── favicon.svg
│   └── index.html
├── src/
│   ├── components/           # Reusable UI components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ThemeToggle.tsx
│   │   └── sections/         # Page sections
│   │       ├── Hero.tsx
│   │       ├── About.tsx
│   │       ├── Education.tsx
│   │       ├── Experience.tsx
│   │       ├── Projects.tsx
│   │       ├── Skills.tsx
│   │       ├── Achievements.tsx
│   │       └── Contact.tsx
│   ├── data/
│   │   └── siteData.ts       # 📍 MAIN DATA FILE
│   ├── hooks/
│   │   ├── useTheme.ts
│   │   └── useProjectFilter.ts
│   ├── utils/
│   │   └── classNames.ts
│   ├── assets/
│   │   └── profile.jpg       # 📍 ADD YOUR PHOTO HERE
│   ├── styles/
│   │   └── tailwind.css
│   ├── App.tsx
│   └── main.tsx
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## 🚀 Quick Start

### 1. Create the project
```bash
npm create vite@latest rudra-portfolio -- --template react-ts
cd rudra-portfolio
```

### 2. Install dependencies
```bash
npm install
npm install -D tailwindcss postcss autoprefixer
npm install framer-motion clsx
```

### 3. Initialize Tailwind CSS
```bash
npx tailwindcss init -p
```

### 4. Replace all files with the provided code
- Copy each file from the code provided above
- Make sure to maintain the exact folder structure

### 5. Add your profile photo
- Replace `src/assets/profile.jpg` with your actual photo
- Recommended size: 400x400px or larger, square aspect ratio

### 6. Customize your data
- Edit `src/data/siteData.ts` to update all your personal information
- This single file controls all content on the website

### 7. Run the development server
```bash
npm run dev
```

Visit `http://localhost:5173` to see your portfolio!

## ✏️ Customization Guide

### Updating Content
All content is managed through the `src/data/siteData.ts` file. Update:

- **Personal Info**: Name, title, email, phone, summary
- **Social Links**: GitHub, LinkedIn, LeetCode, etc.
- **Education**: Schools, degrees, CGPA
- **Experience**: Jobs, roles, achievements
- **Projects**: Title, description, tech stack, links
- **Skills**: Programming languages, tools, frameworks
- **Achievements**: Awards, recognitions, milestones

### Adding New Projects
```typescript
// In src/data/siteData.ts, add to the projects array:
{
  title: 'Your New Project',
  period: 'Jan 2024 - Present',
  links: [
    { label: 'GitHub', href: 'https://github.com/...' },
    { label: 'Live Demo', href: 'https://...' }
  ],
  tech: ['React', 'Node.js', 'MongoDB'],
  summary: 'Brief description of your project',
  highlights: [
    'Key feature or achievement',
    'Another important point'
  ]
}
```

### Customizing Colors
Update the brand colors in `tailwind.config.js`:
```javascript
colors: {
  brand: {
    DEFAULT: '#2563eb',  // Your primary color
    soft: '#3b82f6'      // Lighter version
  }
}
```

### Adding New Sections
1. Create a new component in `src/components/sections/`
2. Import and add it to `src/App.tsx`
3. Add corresponding data fields to `src/data/siteData.ts`

## 🎨 Design System

The portfolio uses a consistent design system:

- **Colors**: Brand blue with semantic colors for different states
- **Typography**: System fonts with proper hierarchy
- **Spacing**: Consistent spacing scale using Tailwind
- **Components**: Reusable card, chip, and button styles
- **Animations**: Subtle enter/exit animations with Framer Motion

## 📱 Responsive Design

- **Mobile First**: Designed for mobile and scaled up
- **Breakpoints**: 
  - `sm`: 640px+
  - `md`: 768px+
  - `lg`: 1024px+
  - `xl`: 1280px+

## ⚡ Performance

- **Vite**: Fast HMR and optimized builds
- **Code Splitting**: Automatic code splitting for better loading
- **Image Optimization**: Optimized images with proper sizing
- **Minimal Bundle**: Only includes what you use

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repo to Vercel
3. Deploy automatically

### Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Or connect via Git for automatic deployments

### GitHub Pages
1. Install gh-pages: `npm install -D gh-pages`
2. Add to package.json scripts:
   ```json
   "deploy": "gh-pages -d dist"
   ```
3. Run: `npm run build && npm run deploy`

## 🔧 Advanced Customizations

### Adding EmailJS Contact Form
1. Install EmailJS: `npm install emailjs-com`
2. Set up EmailJS service
3. Replace the mailto functionality in Contact.tsx

### Adding Analytics
1. Install analytics package
2. Add tracking code to main.tsx or index.html

### Adding a Blog Section
1. Create a `Blog.tsx` component
2. Add blog data structure to siteData.ts
3. Implement markdown support if needed

## 🐛 Troubleshooting

**Common Issues:**

1. **Build errors**: Make sure all dependencies are installed
2. **Images not loading**: Check the image path in siteData.ts
3. **Styles not applied**: Verify Tailwind config is correct
4. **TypeScript errors**: Check all imports and types

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

---

**Need help?** Check the code comments or create an issue in the repository.

**Made with ❤️ using React, TypeScript, and Tailwind CSS**