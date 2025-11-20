import React from 'react';

export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  githubLink: string;
  demoLink: string;
  image: string;
}

export interface StatMetric {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

export interface RatingData {
  date: string;
  rating: number;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum NavLinks {
  HOME = 'home',
  ABOUT = 'about',
  STATS = 'stats',
  PROJECTS = 'projects',
  CONTACT = 'contact'
}