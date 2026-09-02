export const profile = {
  name: "Partha Sarathi K",
  location: "Coimbatore, Tamil Nadu",
  relocate: "Open to relocating to Chennai",
  email: "parthasarathi3265@gmail.com",
  phone: "+91 90439 26541",
  github: "https://github.com/partha-21",
  linkedin: "https://www.linkedin.com/in/partha-sarathi-k-173711292",
  resume: "/resume.pdf",
  roles: ["Java Backend Developer", "Spring Boot Developer", "Backend Developer", "Full-Stack Developer"],
  greeting: "Hi, I'm Partha Sarathi",
  headline:
    "Java Backend Developer building reliable REST APIs and full-stack applications with Java, Spring Boot, SQL and modern web technologies.",
  subhead:
    "Final-year B.Tech Information Technology student. Most of what I build is backend-first — layered Spring Boot services, relational schemas, and APIs with validation and error handling that actually hold up — with React and Node on the front when a project needs one.",
  about: [
    "I'm a final-year IT student focused on backend development — Java, Spring Boot, and the database work underneath it. Most of my projects are services with rules to enforce: an inventory API that rejects invalid stock movements before they corrupt the count, an authentication service that centralizes login and credential handling, a job scheduler that has to survive retries and restarts without double-processing anything.",
    "I'm comfortable working full stack when a project calls for it — React on the frontend, Node.js and Express on the backend — but backend architecture is where I spend most of my time and where I want to keep building. I'm currently looking for a Java Backend, Spring Boot, or Full-Stack Developer role.",
  ],
};

export const skillGroups = [
  {
    label: "Backend",
    items: [
      "Java",
      "Spring Boot",
      "Spring MVC",
      "Spring Security",
      "REST APIs",
      "JPA",
      "Hibernate",
      "Node.js",
      "Express.js",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "JavaScript", "HTML", "CSS", "Vite"],
  },
  {
    label: "Database",
    items: ["MySQL", "PostgreSQL", "SQL", "Relational data modeling"],
  },
  {
    label: "Tools & infrastructure",
    items: ["Git", "GitHub", "Maven", "Postman", "Docker", "Redis", "BullMQ", "Prisma"],
  },
];

// The three projects featured on the site — chosen to lead with backend/Spring Boot strength.
export const projects = [
  {
    id: "inventory-api",
    title: "Inventory Management System",
    type: "Java Backend · Spring Boot",
    stack: ["Java 17", "Spring Boot", "Spring Data JPA", "Hibernate", "MySQL", "Maven"],
    problem:
      "Manual stock tracking drifts out of sync fast — this is a REST API built to keep product, supplier and stock data consistent instead.",
    bullets: [
      "Layered the backend as controller → service → repository, with DTO-driven requests/responses and a global exception handler instead of leaking stack traces to the client.",
      "Modeled products, categories, suppliers and inventory transactions in a normalized MySQL schema through Hibernate/JPA.",
      "Added stock-in and stock-out transaction endpoints with reporting routes for stock movement history, so changes are traceable, not just current-state snapshots.",
    ],
    github: "https://github.com/partha-21/Inventory_Management-System-REST-API",
  },
  {
    id: "central-auth",
    title: "Centralized Authentication System",
    type: "Java Backend · Security",
    stack: ["Java", "MySQL", "Postman"],
    problem:
      "A single, centralized service for user registration, login and credential handling — with a basic file/malware check layered on top — instead of scattering auth logic across an app.",
    bullets: [
      "Implemented registration and login with hashed password storage (SHA-256) and session management for authenticated requests.",
      "Added basic malware-detection logic alongside the authentication layer, so a file check runs through the same authenticated session rather than a separate open endpoint.",
      "Modeled users in a normalized MySQL schema and tested the API surface end to end with Postman before wiring up any frontend.",
    ],
    github: "https://github.com/partha-21/Centralized-Authentication-Malware-System-Java",
  },
  {
    id: "reachinbox",
    title: "ReachInbox — Email Job Scheduler",
    type: "Backend · Async processing",
    stack: ["Node.js", "TypeScript", "Express", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Docker"],
    problem:
      "Sending scheduled emails at scale means handling retries, rate limits and crashes without dropping or duplicating a single message — this is that pipeline.",
    bullets: [
      "Built a Redis sliding-window rate limiter per sender that automatically delays and reschedules jobs exceeding the hourly cap, rather than dropping them.",
      "Used BullMQ-backed idempotency keys so a retried job can't dispatch the same email twice, with delayed jobs persisted in Redis and surviving a server restart.",
      "Modeled users, campaigns and scheduled jobs with Prisma/PostgreSQL, and containerized Postgres, Redis and Elasticsearch with Docker Compose for local setup.",
    ],
    github: "https://github.com/partha-21/Full-Stack-Email-Job-Scheduler",
  },
];

// Real, working projects that aren't part of the three featured above.
// Kept here (not deleted) and surfaced as a lightweight link list rather than full cards,
// so the featured section stays focused on the backend/Spring Boot positioning.
export const otherProjects = [
  {
    title: "SecureScan Hub",
    note: "Spring Boot + Spring Security + JWT security scanning app",
    github: "https://github.com/partha-21/SecureScan-Hub",
  },
  {
    title: "Task Scheduler",
    note: "Multithreaded Java job scheduler with retry/backoff and dead-letter handling",
    github: "https://github.com/partha-21/Distributed-Task-Scheduler-Job-Queue-Engine",
  },
  {
    title: "Inventory Management System (frontend)",
    note: "Modular HTML/CSS/JavaScript frontend for the same inventory workflow",
    github: "https://github.com/partha-21/Inventary-Management-System",
  },
];

export const education = [
  {
    school: "Sri Shakthi Institute of Engineering and Technology, Coimbatore",
    degree: "B.Tech, Information Technology",
    period: "09/2023 – 06/2027 (expected)",
    detail: "CGPA 7.44 up to 6th semester",
  },
  {
    school: "ARC Matric Higher Secondary School, Coimbatore",
    degree: "HSC — 12th",
    period: "2022 – 03/2023",
    detail: "78.33%",
  },
];

export const certifications = [
  "Infosys Wingspan — Java Spring Boot",
  "Udemy — Full Stack Web Development Bootcamp",
  "LinkedIn — React Essential Training",
  "Udemy — The Complete Java Programmer",
  "Udemy — MySQL Database Basics",
];

export const achievements = [
  "Solved 230+ problems on LeetCode, mostly to get faster at picking the right data structure before writing the API.",
  "Filed a patent application with the Government of India (Application No. 202541114079) for an inventory management system concept.",
];
