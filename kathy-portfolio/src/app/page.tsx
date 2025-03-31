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
      period: 'August 2024 - Present',
      title: 'Technical Lead (Graduate Trainee)',
      organization: 'Vodafone Ltd, Ireland',
      description: [
        'Optimized network infrastructure by streamlining IP documentation, security zone configuration, and firewall rule approvals, ensuring compliance with security policies',
        'Automated network operations workflows, such as WOW Tickets & Firewall Comms Tracker, enhancing project visibility and cutting manual tracking efforts by 50% through scripting and process improvements',
        'Developed a Tech Lead Dashboard, integrating real-time monitoring and reporting to enhance network visibility and decision-making efficiency',
        'Collaborated with cross-functional teams (Amdocs, security, and cloud engineers) to design and deploy scalable enterprise connectivity solutions',
        'Created a Tech Lead Welcome Pack on Confluence, streamlining onboarding and training for new team members, reducing coaching effort by 80%',
      ],
    },
    {
      period: 'October 2022 - August 2023',
      title: 'Full Stack Software Engineer (Intern)',
      organization: 'Theta Service Partner, Malaysia',
      description: [
        'Developed and deployed RESTful APIs, integrating authentication, data validation, and business logic for a Loan Origination System',
        'Worked with cloud infrastructure, assisting in deploying applications on AWS EC2, RDS, and S3, improving system scalability and reliability',
        'Implemented logging and monitoring using Postman, SonarQube, and AWS CloudWatch, improving debugging efficiency by 30%',
        'Configured CI/CD pipelines with GitHub Actions, automating code deployment and reducing manual intervention',
        'Built a Single-Page Application (SPA) using Angular & TypeScript, enhancing frontend performance and user experience',
        'Led API documentation efforts and created a REST API training course on Theta’s Learning Platform, improving onboarding efficiency for junior developers',
      ],
    },
  ];

  const education = [
    {
      period: 'September 2023 - August 2024',
      title: 'Master of Science in Software Design with Cloud Native Computing',
      organization: 'Technology University of the Shannon: Midlands, Ireland',
      description: [
        'Graduated with First Class Honours',
        'Stage GPA: 77.08%',
      ],
    },
    {
      period: 'June 2020 - May 2023',
      title: 'Bachelor of Computer Science (Honours) in Software Engineering',
      organization: 'Tunku Abdul Rahman University of Management and Technology, Malaysia',
      description: [
        'Graduated with First Class Honours',
        'CGPA: 3.9',
        'TAR UMT Merit Full Scholarship Holder',
      ],
    },
        {
      period: 'May 2019 - June 2020',
      title: 'Foundation in Science',
      organization: 'Technology University of the Shannon: Midlands, Ireland',
      description: [
        'Graduated with First Class Honours',
        'CGPA: 3.9',
        'TAR UMT Merit Full Scholarship Holder',
      ],
    },
  ];
  
  const skills = [
    {
      category: 'Programming Languages',
      skills: [
        { name: 'Python', level: 70, icon: '🐍' },
        { name: 'Java', level: 80, icon: '☕' },
        { name: 'TypeScript', level: 90, icon: '📘' },
        { name: 'JavaScript', level: 65, icon: '⚡' },
        { name: 'HTML', level: 90, icon: '🌐' },
        { name: 'CSS', level: 55, icon: '🎨' },
      ],
    },
    {
      category: 'Databases & Frameworks',
      skills: [
        { name: 'MySQL', level: 90, icon: '🗄️' },
        { name: 'PostgreSQL', level: 80, icon: '🐘' },
        { name: 'Angular', level: 90, icon: '🅰️' },
        { name: 'Spring Boot', level: 90, icon: '🍃' },
      ],
    },
    {
      category: 'Cloud & DevOps',
      skills: [
        { name: 'AWS', level: 90, icon: '☁️' },
        { name: 'Docker', level: 70, icon: '🐳' },
        { name: 'Kubernetes', level: 60, icon: '⚓' },
        { name: 'Jenkins', level: 65, icon: '🤖' },
        { name: 'GitHub', level: 85, icon: '🐙' },
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
        { name: 'Scrum', level: 80, icon: '📊' },
        { name: 'Kanban', level: 85, icon: '📋' },
      ],
    },
    {
      category: 'Tools & Collaboration',
      skills: [
        { name: 'JIRA', level: 95, icon: '📌' },
        { name: 'Confluence', level: 95, icon: '📝' },
        { name: 'Swagger', level: 80, icon: '📚' },
        { name: 'Visual Paradigm', level: 70, icon: '📐' },
        { name: 'MS Office', level: 90, icon: '📎' },
      ],
    },
    {
      category: 'Languages',
      skills: [
        { name: 'English', level: 90, icon: '①' },
        { name: 'Chinese', level: 90, icon: '②' },
        { name: 'Malay', level: 80, icon: '③' },
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
                <h2 className="section-title ">Welcome to My Pixel World!</h2>
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
