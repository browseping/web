// components/HelpCategoryCard.tsx
import React, { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface HelpCategoryCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  link: string;
  count: number;
  color: string;
}

export default function HelpCategoryCard({ 
  icon, 
  title, 
  description, 
  link, 
  count, 
  color 
}: HelpCategoryCardProps) {
  return (
    <a
      href={link}
      className="group bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg hover:border-transparent transition-all duration-200"
    >
      <div className="flex items-start justify-between mb-4">
        <div className={`p-3 rounded-lg bg-gradient-to-br ${color}`}>
          <div className="text-white">{icon}</div>
        </div>
        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          {count} articles
        </span>
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex items-center text-blue-600 font-medium">
        <span>View category</span>
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  );
}