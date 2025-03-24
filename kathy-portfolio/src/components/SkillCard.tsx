"use client";

import { motion } from 'framer-motion';

interface Skill {
  name: string;
  level: number;
  icon?: string;
}

interface SkillCardProps {
  category: string;
  skills: Skill[];
}

export default function SkillCard({ category, skills }: SkillCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="pixel-card p-4"
    >
      <h3 className="font-bold pixel-font text-lg mb-3 text-[var(--primary)]">{category}</h3>
      <div className="grid grid-cols-2 gap-2">
        {skills.map((skill) => (
          <div key={skill.name} className="text-sm">
            <div className="flex items-center mb-1">
              {skill.icon && <span className="mr-1">{skill.icon}</span>}
              <span className="font-medium">{skill.name}</span>
            </div>
            <div className="skill-bar h-1">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="skill-bar-fill"
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
} 