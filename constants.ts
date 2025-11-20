import { Project, RatingData } from './types';

export const STUDENT_NAME = "Aashu Singh";

export const STUDENT_BIO = "I am a final year UG student at IIT(BHU),  passionate about algorithms, distributed systems, and building scalable web applications. With a strong foundation in Data Structures & Algorithms (DSA).";

export const SKILLS = [
  "C/C++ (STL)", "TypeScript", "React.js", "Node.js", "Python", "PostgreSQL", "Docker", "AWS", "Tailwind CSS", "SQL", "Git", "Linux"
];

export const CODEFORCES_DATA: RatingData[] = [
  { date: 'Sept 2023', rating: 800 },
  { date: 'Oct 2024', rating: 1000 },
  { date: 'Jan 2025', rating: 1100 },
  { date: 'Feb 2025', rating: 1111 },
  { date: 'Jun 2025', rating: 1240 },
  { date: 'Jul 2025', rating: 1289 },
  { date: 'Aug 2025', rating: 1343 },
  { date: 'Aug 2025', rating: 1440 },
  { date: 'Sept 2025', rating: 1570 },
  { date: 'Sept 2025', rating: 1610 },
];

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "AlgoVisualizer",
    description: "An interactive web platform visualizing complex graph algorithms (Dijkstra, A*, BFS/DFS) in real-time to aid student learning.",
    techStack: ["React", "TypeScript", "D3.js", "Tailwind"],
    githubLink: "#",
    demoLink: "#",
    image: "https://picsum.photos/600/400?random=1"
  },
  {
    id: 2,
    title: "DistriQueue",
    description: "A high-performance distributed task queue system capable of handling 10k+ concurrent jobs with fault tolerance.",
    techStack: ["Go", "Redis", "gRPC", "Docker"],
    githubLink: "#",
    demoLink: "#",
    image: "https://picsum.photos/600/400?random=2"
  },
  {
    id: 3,
    title: "CodeCollaborate",
    description: "Real-time collaborative code editor with syntax highlighting, integrated chat, and code execution sandbox.",
    techStack: ["Node.js", "Socket.io", "React", "Monaco Editor"],
    githubLink: "#",
    demoLink: "#",
    image: "https://picsum.photos/600/400?random=3"
  }
];