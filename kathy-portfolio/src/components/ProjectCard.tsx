"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  link?: string;
}

export default function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  link,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="pixel-card overflow-hidden"
    >
      <div className="relative h-48 w-full mb-4">
        <div className="absolute inset-0 bg-gradient-to-br from-[var(--primary)] to-[var(--secondary)] opacity-20" />
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-bold pixel-font mb-3 text-[var(--primary)]">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="project-tag"
            >
              {tech}
            </span>
          ))}
        </div>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="pixel-button"
          >
            View Project
          </a>
        )}
      </div>
    </motion.div>
  );
} 