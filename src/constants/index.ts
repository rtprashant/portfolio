import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TTestimonial,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  expressjs,
  threejs,
  java,
  resume,
  drug,
  
} from "../assets";

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
 
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Express JS",
    icon: expressjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
 
  {
    name: "git",
    icon: git,
  },
 
  
];

const skills: TExperience[] = [
  {
    title: "JavaScript",
    icon: javascript,
    iconBg: "#E6DEDD",
    
  },
  {
    title: "React.js ",
    icon: reactjs,
    iconBg: "#383E56",
    
  },
  {
    title: "Express js",
    icon: expressjs,
    iconBg: "#E6DEDD",
    
  },
  {
    title: "MongoDb ",
    icon: mongodb,
    iconBg: "#383E56",
    
  },
  {
    title: "Node js",
    icon: nodejs,
    iconBg: "#E6DEDD",
    
  },
  {
    title: "Html ",
    icon: html,
    iconBg: "#383E56",
    
  },
  {
    title: "Css",
    icon: css,
    iconBg: "#E6DEDD",
    
  },
  {
    title: "Java ",
    icon: java,
    iconBg: "#383E56",
    
  },
  
];

const testimonials: TTestimonial[] = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects: TProject[] = [
  {
    name: "Protien Bind",
    description:
          "ProteinBind is an AI-powered drug research platform built with the MERN stack to streamline molecular discovery and analysis. It features AI-driven molecule generation, a molecule bank for storage, an AI chat assistant for research queries, and group chat for collaboration, making drug research more efficient and interactive. 🚀",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "blue-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "Node",
        color: "green-text-gradient",
      },
    ],
    image: drug,
    sourceCodeLink: "https://github.com/rtprashant/drug-research-frontend",
  },
  {
    name: "Resume Builder",
    description:
      "A Resume Builder is a user-friendly tool that allows users to customize templates, preview changes in real-time, and download resumes as high-quality PDFs. With an intuitive form interface, users can easily input their personal details, experience, and skills to create a professional resume effortlessly. It ensures a efficient experinece to job-seekers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "contextapi",
        color: "pink-text-gradient",
      },
      {
        name: "css",
        color: "blue-text-gradient",
      },
    ],
    image: resume,
    sourceCodeLink: "https://github.com/rtprashant/ResumeBuilder",
  },
  
];

export { services, technologies, skills, testimonials, projects };
