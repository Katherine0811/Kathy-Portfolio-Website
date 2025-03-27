"use client";

import { useState } from 'react';
import Section from '@/components/Section';
import SkillCard from '@/components/SkillCard';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import Navigation from '@/components/Navigation';
import Timeline from '@/components/Timeline';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const experience = [
    {
      period: '24 - Present',
      title: 'Senior Software Engineer',
      organization: 'Tech Company',
      description: [
        'Led development of multiple full-stack applications',
        'Implemented scalable architecture solutions',
        'Mentored junior developers and conducted code reviews',
      ],
    },
    // Add more experience items here
  ];

  const education = [
    {
      period: '2015 - 2019',
      title: 'Bachelor of Computer Science',
      organization: 'University Name',
      description: [
        'Graduated with First Class Honours',
        'Specialized in Software Engineering',
        'Led multiple student projects',
      ],
    },
    // Add more education items here
  ];
  
  const skills = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 90, icon: '🐍' },
        { name: 'Java', level: 85, icon: '☕' },
        { name: 'TypeScript', level: 85, icon: '📘' },
        { name: 'JavaScript', level: 90, icon: '⚡' },
        { name: 'HTML', level: 90, icon: '🌐' },
        { name: 'CSS', level: 85, icon: '🎨' },
      ],
    },
    {
      category: 'Databases & Frameworks',
      skills: [
        { name: 'MySQL', level: 85, icon: '🗄️' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'Angular', level: 85, icon: '🅰️' },
        { name: 'Spring Boot', level: 80, icon: '🍃' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 80, icon: '☁️' },
        { name: 'Docker', level: 75, icon: '🐳' },
        { name: 'Kubernetes', level: 70, icon: '⚓' },
        { name: 'Jenkins', level: 75, icon: '🤖' },
        { name: 'GitHub', level: 90, icon: '🐙' },
      ],
    },
    {
      category: 'Testing & Quality',
      skills: [
        { name: 'JUnit', level: 85, icon: '✅' },
        { name: 'PyTest', level: 85, icon: '🧪' },
        { name: 'Postman', level: 90, icon: '📬' },
        { name: 'SonarQube', level: 80, icon: '🔍' },
      ],
    },
    {
      category: 'Methodologies',
      skills: [
        { name: 'Agile', level: 90, icon: '🔄' },
        { name: 'Scrum', level: 90, icon: '📊' },
        { name: 'Kanban', level: 85, icon: '📋' },
      ],
    },
    {
      category: 'Tools & Collaboration',
      skills: [
        { name: 'JIRA', level: 90, icon: '📌' },
        { name: 'Confluence', level: 85, icon: '📝' },
        { name: 'Swagger', level: 85, icon: '📚' },
        { name: 'Visual Paradigm', level: 80, icon: '📐' },
        { name: 'MS Office', level: 90, icon: '📎' },
      ],
    },
    {
      category: 'Languages',
      skills: [
        { name: 'English', level: 90, icon: '①' },
        { name: 'Chinese', level: 90, icon: '②' },
        { name: 'Malay', level: 85, icon: '③' },
      ],
    },
  ];

  const projects = [
    {
      title: 'Pixel Adventure Game',
      description: 'A retro-style RPG game built with React and Canvas, featuring pixel art graphics and turn-based combat.',
      imageUrl: '/project1.jpg',
      technologies: ['React', 'Canvas', 'TypeScript'],
      link: 'https://github.com/yourusername/pixel-adventure',
    },
    {
      title: 'AI Chat Assistant',
      description: 'An intelligent chatbot powered by OpenAI&apos;s GPT model, featuring a pixel art interface and natural language processing.',
      imageUrl: '/project2.jpg',
      technologies: ['Python', 'OpenAI', 'FastAPI'],
      link: 'https://github.com/yourusername/ai-chat',
    },
    {
      title: 'Pixel Portfolio CMS',
      description: 'A content management system with a pixel art theme, allowing easy updates to portfolio content.',
      imageUrl: '/project3.jpg',
      technologies: ['Next.js', 'MongoDB', 'Tailwind'],
      link: 'https://github.com/yourusername/pixel-cms',
    },
  ];

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <section className="pixel-card relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <h2 className="text-5xl font-bold pixel-font text-[var(--primary)]">Welcome to My Pixel World!</h2>
                <p className="text-xl leading-relaxed">
                  I&apos;m a passionate IT professional who loves creating beautiful and functional applications
                  with a touch of pixel art magic. My journey in tech is like an adventure game - full of
                  challenges, discoveries, and exciting new quests!
                </p>
                <div className="flex space-x-4">
                  <button onClick={() => setActiveSection('contact')} className="pixel-button">Start a Quest</button>
                  <button onClick={() => setActiveSection('projects')} className="pixel-button">View Adventures</button>
                </div>
              </div>
              <div className="relative h-64 md:h-96">
                <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-20" />
                <div className="absolute inset-0 pixel-border flex items-center justify-center">
                  {/* <p className="pixel-font text-center text-2xl">Your Pixel Art Avatar Here</p> */}
                </div>
              </div>
            </div>
          </section>
        );
      case 'about':
        return (
          <Section id="about" title="My Story">
            <div className="prose max-w-none">
              <p className="text-lg leading-relaxed">
                Like a character in a pixel art RPG, I&apos;ve leveled up my skills through various adventures
                in the tech world. From crafting elegant user interfaces to building robust backend systems,
                each project is a new quest that helps me grow stronger.
              </p>
              <p className="text-lg leading-relaxed">
                My special abilities include:
              </p>
              <ul className="list-disc pl-6 text-lg">
                <li>Full-stack development with modern technologies</li>
                <li>Creating responsive and accessible web applications</li>
                <li>Designing and implementing scalable architectures</li>
                <li>Solving complex technical challenges with creative solutions</li>
                <li>Collaborating effectively in team environments</li>
              </ul>
            </div>
          </Section>
        );
      case 'experience':
        return (
          <Section id="experience" title="My Journey">
            <Timeline items={experience} />
          </Section>
        );
      case 'education':
        return (
          <Section id="education" title="My Training">
            <Timeline items={education} />
          </Section>
        );
      case 'skills':
        return (
          <Section id="skills" title="My Abilities">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {skills.map((category) => (
                <SkillCard key={category.category} {...category} />
              ))}
            </div>
          </Section>
        );
      case 'projects':
        return (
          <Section id="projects" title="My Adventures">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <ProjectCard key={project.title} {...project} />
              ))}
            </div>
          </Section>
        );
      case 'contact':
        return (
          <Section id="contact" title="Start a New Quest">
            <div className="max-w-2xl mx-auto">
              <p className="text-lg text-center mb-8">
                Ready to embark on a new adventure? Let&apos;s create something amazing together!
              </p>
              <ContactForm />
            </div>
          </Section>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen pt-16">
      <Navigation onSectionChange={setActiveSection} activeSection={activeSection} />
      <main className="max-w-7xl mx-auto px-4 py-8">
        {renderSection()}
      </main>
    </div>
  );
}
