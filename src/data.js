import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaPython,
  FaGitAlt,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman } from "react-icons/si";

export const userData = {
  name: "Jayagopal G",
  title: "MERN Stack Developer",
  bio: "I am a passionate and tech-enthusiast self-taught developer with expertise in the MERN stack. I build premium, high-performance web applications that solve real-world problems.",
  social: {
    linkedin: "https://www.linkedin.com/in/jayagopal-g-9721b5372/",
    github: "https://github.com/jayagopal123",
    email: "mailto:contact@example.com", // Placeholder
  },
};

export const skills = [
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Express", icon: SiExpress, color: "#000000" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
];

export const projects = [
  {
    title: "MessOS",
    desc: "End-to-end mess management platform with admin controls, menus, and student workflows.",
    tech: ["MERN Stack", "TypeScript"],
    link: "https://github.com/jayagopal123/MessOS",
    repo: "https://github.com/jayagopal123/MessOS",
  },
  {
    title: "AI Motion Tracking",
    desc: "Real-time motion tracking system utilizing Computer Vision.",
    tech: ["Python", "OpenCV"],
    link: "https://github.com/jayagopal123/ai-motion-tracking-system",
    repo: "https://github.com/jayagopal123/ai-motion-tracking-system",
  },
  {
    title: "Reels System",
    desc: "Short-form food discovery reels with creator uploads and personalized feed flow.",
    tech: ["MERN Stack", "Media"],
    link: "https://github.com/jayagopal123/food-reel-system",
    repo: "https://github.com/jayagopal123/food-reel-system",
  },
  {
    title: "LeetCode Helper",
    desc: "A Chrome extension designed to enhance the LeetCode problem-solving experience.",
    tech: ["Chrome Ext", "JavaScript"],
    link: "https://github.com/jayagopal123/leetcode-helper-extension",
    repo: "https://github.com/jayagopal123/leetcode-helper-extension",
  },
  {
    title: "Smart Route Tracker",
    desc: "Route tracking system with location intelligence and live status updates.",
    tech: ["Node.js", "Express"],
    link: "https://github.com/jayagopal123/smart-route-tracker",
    repo: "https://github.com/jayagopal123/smart-route-tracker",
  },
  {
    title: "MindCare SIH",
    desc: "A mental health support platform built for the Smart India Hackathon.",
    tech: ["MERN Stack", "HealthTech"],
    link: "https://github.com/jayagopal123/mindcare-sih",
    repo: "https://github.com/jayagopal123/mindcare-sih",
  },
];

export const services = [
  {
    title: "Full Stack Development",
    desc: "Building complete web applications from scratch using the MERN stack.",
  },
  {
    title: "API Design & Integration",
    desc: "Creating robust RESTful APIs and integrating third-party services.",
  },
  {
    title: "UI/UX Implementation",
    desc: "Translating designs into responsive, interactive, and pixel-perfect code.",
  },
];
