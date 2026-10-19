# Ajo Limis AL — Modern Animated Personal Portfolio Website

A modern, animated personal portfolio website designed for **Ajo Limis AL** (Computer Science & Engineering Student and Software Developer), built using **React**, **Vite**, **Tailwind CSS**, and **Framer Motion**.

Inspired by a dark-mode luxury aesthetic with monumental 3D metallic typography, layered profile visuals, interactive glassmorphic cards, smooth sliding scroll effects, and verified content extracted directly from his resume.

---

## 🌟 Live Features & Highlights

- **Hero Screen**:
  - Monumental metallic 3D typography: `PORTFOLIO`
  - High-resolution developer portrait with layered transparent cutout depth
  - Styled developer sub-headings (`Software Developer`) and direct contact pills
  - Dynamic cycling text revolving through specialized technical roles
  - Interactive "Explore My Work" and "Download Resume" CTA buttons with celebratory confetti animations
- **About Me**:
  - Highlights engineering journey at **KIT – Kalaignar Karunanidhi Institute of Technology** (B.E. Computer Science & Engineering, Expected 2029, CGPA 6.9/10)
  - Key focus areas: Full-Stack Web Development, Intelligent Systems / ADAS, and Clean Code Principles
- **Skills & Expertise**:
  - Organized skill categories with custom icons and filter tabs:
    - **Programming Languages**: Java, JavaScript, Python
    - **Frontend Technologies**: React.js, HTML5, CSS3
    - **Web & App Development**: Full Stack Web Development, Responsive UI, REST API Integration
    - **Developer Tools & CI/CD**: GitHub Actions, Git, Debugging & Testing
    - **Data & Core Engineering**: Database Management, UI/UX Design, Research & Analysis
    - **Soft Skills**: Problem Solving, Adaptability & Quick Learning, Analytical Thinking, User-Focused Design
- **Featured Projects**:
  - **Student Management System**: Centralized academic record management platform built with Java, React.js, JavaScript, and Python.
  - **ADAS in Indian Roads**: Advanced Driver Assistance Systems research concept addressing obstacle detection and collision alerts for Indian road conditions.
  - Rich interactive modal ("View Architecture & Details") providing detailed feature breakdowns and impact analysis.
- **Education & Certifications Timeline**:
  - Vertical glowing timeline showcasing B.E. Computer Science and Engineering @ KIT (Expected 2029) and certified Java Programming credentials.
- **Recruiter-Friendly Contact**:
  - Direct links to Email (`ajolimis24@gmail.com`), Phone (`+91 8220464633`), LinkedIn, and GitHub.
  - One-click copy buttons with instant feedback for email and phone number.
  - Interactive contact message form with client-side validation and automated mailto draft generation.
- **Performance & Accessibility**:
  - Dark mode with low-contrast eye strain prevention.
  - Ambient particle canvas background.
  - Mobile-first responsive design for phones, tablets, and desktops.
  - Full support for `prefers-reduced-motion` for accessibility.

---

## 📁 Project Folder Structure

```
ajolimis24/
├── public/
│   ├── assets/
│   │   ├── Ajo_Limis_Resume.pdf        # Verified resume PDF (downloadable)
│   │   ├── profile_transparent.png     # Transparent cutout for layered 3D hero
│   │   ├── profile.jpg                 # High-resolution studio portrait
│   │   ├── student_management.jpg      # Preview graphic for Student Management System
│   │   ├── adas_project.jpg            # Preview graphic for ADAS project
│   │   └── hero_reference.png          # Reference design mockup
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.jsx                   # Educational background, bio, and stats
│   │   ├── Contact.jsx                 # Direct contact info, socials, and contact form
│   │   ├── Education.jsx               # Vertical timeline for B.E. degree and certifications
│   │   ├── Footer.jsx                  # Footer links, social links, and back-to-top
│   │   ├── Hero.jsx                    # Hero screen with 3D metallic PORTFOLIO title
│   │   ├── Icons.jsx                   # SVG icons (GitHub, LinkedIn)
│   │   ├── Navbar.jsx                  # Sticky header with active section indicator
│   │   ├── ParticlesBackground.jsx     # Ambient canvas particle background
│   │   ├── ProjectModal.jsx            # Detailed project architecture modal popup
│   │   ├── Projects.jsx                # Project gallery with preview cards
│   │   └── Skills.jsx                  # Categorized skills grid with filter tabs
│   ├── data/
│   │   └── portfolioData.js            # Single source of truth for resume data
│   ├── App.jsx                         # Root application orchestrator
│   ├── index.css                       # Tailwind directives, metallic gradients, glassmorphism
│   └── main.jsx                        # React root entry point
├── index.html                          # SEO meta tags, Google Fonts (Inter, Outfit, Poppins)
├── tailwind.config.js                  # Custom color tokens, font families, and keyframes
├── postcss.config.js
├── vite.config.js
└── package.json
```

---

## 🚀 Installation & Local Development

### Prerequisites
- Node.js (v18 or higher recommended; v24 supported)
- npm (v9 or higher)

### Setup Steps

1. Navigate to the project directory:
   ```bash
   cd ajolimis24
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Launch the local development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173/
   ```

5. Build for production:
   ```bash
   npm run build
   ```

---

## 🛠️ How to Customize Your Content

### 1. Update Personal Info, Skills, and Projects
All portfolio text, links, and content are centralized in a single file:
👉 [src/data/portfolioData.js](src/data/portfolioData.js)

To add new projects or update existing ones, simply edit the `portfolioData.projects` array:
```javascript
{
  id: "your-project-id",
  title: "Your Project Title",
  role: "Lead Developer",
  category: "Full Stack Web App",
  image: "/assets/your_project_image.jpg",
  shortDescription: "Short summary...",
  technologies: ["React", "Node.js", "MongoDB"],
  keyFeatures: ["Feature 1", "Feature 2"],
  impact: "Project results...",
  github: "https://github.com/ajolimis24/your-repo"
}
```

### 2. Replace Your Resume PDF
Place your updated resume PDF inside:
```
public/assets/Ajo_Limis_Resume.pdf
```
The "Download Resume" buttons on the website will automatically point to this file.

### 3. Replace Profile Images
To update your profile photos:
- Main studio portrait: `public/assets/profile.jpg`
- Hero layered transparent cutout: `public/assets/profile_transparent.png`

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push your repository to GitHub:
   ```bash
   git add .
   git commit -m "feat: complete modern animated portfolio website"
   git push origin main
   ```
2. Log in to [Vercel](https://vercel.com) and click **"Add New Project"**.
3. Import your `ajolimis24` repository.
4. Framework Preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your site will be live with free global CDN and HTTPS!

### Deploy to Netlify
1. Connect your GitHub repository to [Netlify](https://www.netlify.com).
2. Set Build Command: `npm run build`
3. Set Publish Directory: `dist`
4. Click **"Deploy Site"**.

---

## 📜 License & Attribution

Designed and developed for **Ajo Limis AL**. Built with React, Tailwind CSS, and Framer Motion.
