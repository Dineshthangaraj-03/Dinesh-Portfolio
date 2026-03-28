export const NAV_LINKS = ["About", "Skills", "Experience", "Projects", "Contact"];

export const GITHUB = "https://github.com/Dineshthangaraj-03";

export const SKILLS = {
  Languages: ["Java", "JavaScript", "SQL"],
  Frontend: ["React.js", "HTML5", "CSS3"],
  Backend: ["Spring Boot", "Hibernate", "Node.js", "REST APIs"],
  Databases: ["PostgreSQL", "MongoDB"],
  Tools: ["Eclipse", "VS Code", "Git"],
};

export const PROJECTS = [
  {
    title: "Order & Inventory Management System",
    year: "2025",
    tech: ["Spring Boot", "PostgreSQL", "REST APIs"],
    color: "#00e5ff",
    icon: "📦",
    github: GITHUB,
    points: [
      "Web-based system using Spring Boot for managing product orders and inventory",
      "Implemented RESTful APIs for product management, order processing, and stock tracking",
      "Designed database schema with PostgreSQL for product, order, and inventory data",
      "Automated inventory updates on order creation, updates, and cancellations",
    ],
  },
  {
    title: "Flight Ticket Booking System",
    year: "2025",
    tech: ["Spring Boot", "Java", "PostgreSQL"],
    color: "#ff6b6b",
    icon: "✈️",
    github: GITHUB,
    points: [
      "Flight booking web app using Spring Boot and Java for online ticket reservations",
      "Features for flight search, booking management, and passenger details handling",
      "REST APIs for booking operations with PostgreSQL for flight and booking data",
      "Modules for seat availability, booking confirmation, and reservation management",
    ],
  },
  {
    title: "Online Chatbot Ticket Booking System",
    year: "2025",
    tech: ["React.js", "Node.js", "MongoDB", "NLP"],
    color: "#a78bfa",
    icon: "🤖",
    github: GITHUB,
    points: [
      "Conversational chatbot interface for booking tickets via natural language interactions",
      "Built with React.js frontend and Node.js backend with NLP-powered intent recognition",
      "MongoDB for storing user sessions, booking history, and ticket data",
      "Real-time chat with automated booking confirmation and cancellation flows",
    ],
  },
  {
    title: "Job Board Application",
    year: "2025",
    tech: ["Spring Boot", "React.js", "PostgreSQL", "REST APIs"],
    color: "#34d399",
    icon: "💼",
    github: GITHUB,
    points: [
      "Full-stack job board platform connecting job seekers with employers",
      "Role-based access for employers to post jobs and candidates to apply",
      "Advanced search and filter by location, skills, salary, and job type",
      "Application tracking system with status updates and email notifications",
    ],
  },
];

export const EXPERIENCE = [
  {
    role: "Web Development Intern",
    org: "Black Stone Infomatics, Coimbatore",
    period: "Aug 2024 – Sep 2024",
    type: "work",
    points: [
      "Built responsive front-end components using React.js, HTML, CSS, and JavaScript",
      "Integrated backend APIs with Node.js and MongoDB for dynamic data handling",
      "Gained experience in full-stack development and agile teamwork",
    ],
  },
  {
    role: "Full Stack Development Course",
    org: "JSpider Training Institute, Bangalore",
    period: "Feb 2025 – Jan 2026",
    type: "training",
    points: [
      "Java Full Stack Development training covering front-end and back-end technologies",
      "Proficient in Core Java, JDBC, Servlets, and Hibernate backend development",
      "Hands-on experience with HTML, CSS, JavaScript, and React",
      "Deployed full-stack projects with MySQL integration",
    ],
  },
];

export const EDUCATION = [
  {
    degree: "Master of Computer Applications",
    school: "Erode Arts and Science College",
    period: "AUG 2023 – APR 2025",
    score: "71%",
  },
  {
    degree: "Bachelor of Science",
    school: "K.S.R. College of Arts and Science",
    period: "JUL 2020 – APR 2023",
    score: "77%",
  },
];

export const CONTACT_LINKS = [
  { icon: "📧", label: "Email", value: "dineshmathan03@gmail.com", href: "mailto:dineshmathan03@gmail.com" },
  { icon: "📱", label: "Phone", value: "+91-9790343564", href: "tel:+919790343564" },
  { icon: "💼", label: "LinkedIn", value: "dinesh03d", href: "https://www.linkedin.com/in/dinesh03d/" },
  { icon: "🐙", label: "GitHub", value: "Dineshthangaraj-03", href: GITHUB },
  { icon: "📍", label: "Location", value: "Bangalore, Karnataka", href: null },
];
