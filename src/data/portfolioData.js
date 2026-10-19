export const portfolioData = {
  personal: {
    name: "Ajo Limis AL",
    brand: "LEESHARK",
    title: "Software Developer",
    subtitle: "Computer Science & Engineering Student",
    email: "ajolimis24@gmail.com",
    phone: "+91 8220464633",
    location: "Coimbatore, Tamil Nadu, India",
    institution: "KIT – Kalaignar Karunanidhi Institute of Technology",
    graduationYear: "2029",
    cgpa: "6.9 / 10",
    linkedin: "https://linkedin.com/in/ajo-limis-al/",
    github: "https://github.com/ajolimis24",
    resumeUrl: "/assets/Ajo_Limis_Resume.pdf",
    profileImage: "/assets/profile.jpg",
    profileTransparent: "/assets/profile_transparent.png",
    roles: [
      "Software Developer",
      "Full-Stack Web Developer",
      "Java & React.js Specialist",
      "ADAS Systems Researcher",
      "CSE Undergrad @ KIT"
    ],
    summary: "Computer Science and Engineering student with skills in Java, JavaScript, Python, and React.js, with an interest in full-stack and application development. Knowledge of responsive UI development, REST API integration, database management, debugging, and testing. Developed academic projects involving student records, and an ADAS concept for Indian roads. Brings problem-solving ability, adaptability, and a strong interest in building user-friendly software solutions."
  },
  
  about: {
    bio: [
      "I am an enthusiastic Computer Science and Engineering student at Kalaignar Karunanidhi Institute of Technology (KIT) with a deep passion for building high-performance, user-centric software applications.",
      "My technical foundation centers around Java, JavaScript, Python, and React.js, spanning both full-stack web engineering and conceptual systems architecture. I take pride in creating clean, maintainable code paired with responsive, intuitive user interfaces.",
      "Whether developing a database-driven student record management system or researching computer vision and collision-alert concepts for ADAS on challenging Indian roads, I approach every challenge with analytical rigor, rapid learning, and an unwavering user-first mindset."
    ],
    highlights: [
      {
        title: "Full-Stack Development",
        description: "Hands-on experience developing end-to-end web applications with React.js, Java, and modern REST APIs."
      },
      {
        title: "Intelligent Systems Research",
        description: "Conceptualized an Advanced Driver Assistance System (ADAS) focusing on obstacle detection and collision alerts for Indian road conditions."
      },
      {
        title: "Clean Code & Reliability",
        description: "Certified in Java Programming with proven expertise in object-oriented programming, data structures, and debugging."
      },
      {
        title: "User-Focused UX Design",
        description: "Dedicated to designing accessible, sleek, and responsive user experiences with fluid micro-interactions."
      }
    ]
  },

  skills: {
    categories: [
      {
        name: "Programming Languages",
        id: "languages",
        description: "Core languages for algorithmic logic, backend services, and application development.",
        items: [
          { name: "Java", level: "Core", icon: "Code2", highlight: "Object-Oriented Programming, Certified" },
          { name: "JavaScript", level: "Core", icon: "FileCode", highlight: "ES6+, Modern Web, Async" },
          { name: "Python", level: "Core", icon: "Terminal", highlight: "Scripting, Logic, ADAS Research" }
        ]
      },
      {
        name: "Frontend Technologies",
        id: "frontend",
        description: "Modern frontend technologies used for crafting responsive, interactive web interfaces.",
        items: [
          { name: "React.js", level: "Proficient", icon: "Atom", highlight: "Components, Hooks, SPA Architecture" },
          { name: "HTML5", level: "Advanced", icon: "Layout", highlight: "Semantic Structure, Accessibility" },
          { name: "CSS3", level: "Advanced", icon: "Palette", highlight: "Responsive Design, Glassmorphism, Animations" }
        ]
      },
      {
        name: "Web & App Development",
        id: "web-dev",
        description: "End-to-end web engineering practices and API integrations.",
        items: [
          { name: "Full Stack Web Development", level: "Practicing", icon: "Layers", highlight: "Frontend & Backend Integration" },
          { name: "Responsive UI Development", level: "Proficient", icon: "Smartphone", highlight: "Cross-Device Fluid Layouts" },
          { name: "Web Applications", level: "Proficient", icon: "Globe", highlight: "Scalable Client Applications" },
          { name: "REST API Integration", level: "Proficient", icon: "Network", highlight: "Data Fetching, Endpoints, JSON" }
        ]
      },
      {
        name: "Developer Tools & CI/CD",
        id: "tools",
        description: "Version control workflows, automation pipelines, and code quality tools.",
        items: [
          { name: "GitHub Actions", level: "Familiar", icon: "GitPullRequest", highlight: "CI/CD Automation, Workflows" },
          { name: "Git & GitHub", level: "Proficient", icon: "GitBranch", highlight: "Source Control, Branching, Collaboration" },
          { name: "Debugging & Testing", level: "Proficient", icon: "Bug", highlight: "Troubleshooting, Test Verification" }
        ]
      },
      {
        name: "Data & Core Engineering",
        id: "engineering",
        description: "Data organization, design methodologies, and exploratory research.",
        items: [
          { name: "Database Management", level: "Proficient", icon: "Database", highlight: "Data Modeling, Organization, Queries" },
          { name: "UI/UX Design", level: "Proficient", icon: "Sparkles", highlight: "User Flows, Ergonomics, Visual Design" },
          { name: "Research & Analysis", level: "Proficient", icon: "Search", highlight: "System Evaluation, ADAS Feasibility" }
        ]
      },
      {
        name: "Professional & Soft Skills",
        id: "soft-skills",
        description: "Cognitive, analytical, and execution strengths that drive effective development.",
        items: [
          { name: "Problem Solving", level: "Strength", icon: "Cpu", highlight: "Algorithmic thinking & root-cause analysis" },
          { name: "Adaptability & Quick Learning", level: "Strength", icon: "Zap", highlight: "Rapid onboarding to new frameworks & stacks" },
          { name: "Analytical Thinking", level: "Strength", icon: "Target", highlight: "Data-driven system decisions & metrics" },
          { name: "User-Focused Design", level: "Strength", icon: "Smile", highlight: "Empathy for end-user interaction & ergonomics" }
        ]
      }
    ]
  },

  projects: [
    {
      id: "student-management-system",
      title: "Student Management System",
      role: "Project Contributor",
      category: "Full Stack Web Application",
      featured: true,
      image: "/assets/student_management.jpg",
      shortDescription: "A centralized web-based application for managing student academic records, attendance monitoring, and performance marks tracking.",
      longDescription: "The Student Management System was developed as an academic solution to streamline and modernize educational administration. It consolidates scattered student information into an organized web platform with integrated attendance recording and mark evaluation.",
      technologies: ["Java", "React.js", "JavaScript", "Python", "Database Management", "REST APIs"],
      keyFeatures: [
        "Centralized web portal for administrative and student record workflows",
        "Automated attendance tracking and record keeping",
        "Marks recording, calculation, and grading management system",
        "Applied relational database-management principles for secure, structured data storage",
        "Responsive, user-friendly dashboard built with React.js"
      ],
      impact: "Created a centralized web-based approach to managing student records, attendance, and marks, eliminating paper-based inefficiencies.",
      github: "https://github.com/ajolimis24",
      liveDemo: null,
      status: "Academic Project"
    },
    {
      id: "adas-indian-roads",
      title: "ADAS in Indian Roads",
      role: "Project Contributor",
      category: "AI & Automotive Research Concept",
      featured: true,
      image: "/assets/adas_project.jpg",
      shortDescription: "An Advanced Driver Assistance Systems (ADAS) conceptual framework engineered to address chaotic traffic, obstacle detection, and collision warnings in Indian conditions.",
      longDescription: "Recognizing that existing Western ADAS solutions frequently fail under unpredictable traffic and road conditions prevalent in India, this project designed a tailored conceptual framework incorporating robust obstacle detection and real-time collision alerts.",
      technologies: ["Python", "Computer Vision Concepts", "Obstacle Detection", "Collision Alert Systems", "UI/UX Design", "Research & Analysis"],
      keyFeatures: [
        "Tailored detection parameters for mixed Indian traffic (pedestrians, rickshaws, two-wheelers, stray obstacles)",
        "Multi-stage collision-alert warning protocol with audio-visual telemetry",
        "UI/UX considerations designed for a minimal-distraction heads-up driver display",
        "In-depth research and analysis of Indian highway & urban driving constraints",
        "Algorithmic decision tree for predictive obstacle avoidance alerts"
      ],
      impact: "Outlined an innovative ADAS concept addressing obstacle detection and collision alerts specifically tailored for Indian road safety.",
      github: "https://github.com/ajolimis24",
      liveDemo: null,
      status: "Research Concept"
    }
  ],

  education: [
    {
      degree: "Bachelor of Engineering (B.E.)",
      field: "Computer Science and Engineering",
      institution: "KIT – Kalaignar Karunanidhi Institute of Technology",
      location: "Coimbatore, Tamil Nadu",
      period: "Expected Graduation: 2029",
      status: "In Progress",
      metrics: "CGPA: 6.9 / 10",
      details: [
        "Rigorous coursework in Data Structures, Object-Oriented Programming with Java, and Database Systems.",
        "Active contributor to software development projects, technical symposiums, and engineering concepts.",
        "Focus on modern full-stack web applications, system design, and AI-enabled software."
      ]
    }
  ],

  certifications: [
    {
      title: "Java Programming Certification",
      issuer: "Certified Technical Coursework",
      date: "Credential Completed",
      description: "Completed comprehensive coursework covering object-oriented programming (OOP), data structures, problem-solving, and robust application development in Java.",
      badge: "Java SE / OOP Specialist",
      icon: "Award"
    }
  ]
};
