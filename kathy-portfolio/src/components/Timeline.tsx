"use client";

import { motion } from 'framer-motion';

interface TimelineItem {
  period: string;
  title: string;
  organization: string;
  description: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items}: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-[var(--text)]" />
      <div className="space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="pixel-card relative pl-12"
          >
            <div className="absolute left-0 w-8 h-8 bg-[var(--primary)] rounded-full border-4 border-[var(--text)]" />
              <div className="text-sm font-bold text-[var(--primary)] mb-2">{item.period}</div>
              <h3 className="text-xl font-bold pixel-font mb-1">{item.title}</h3>
              <div className="text-lg font-bold mb-2">{item.organization}</div>
              <ul className="list-disc pl-6 space-y-1">
                {item.description.map((point, i) => (
                  <li key={i} className="text-gray-600">{point}</li>
                ))}
              </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
} 