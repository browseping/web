// components/helpcenter/HelpCategoryCard.tsx
import React from "react";

interface HelpCategoryCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  count?: number;
  color: string;
}

export default function HelpCategoryCard({
  icon,
  title,
  description,
  count,
  color,
}: HelpCategoryCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 p-6 hover:bg-gray-800 transition-all duration-200 hover:scale-[1.02] cursor-pointer">
      <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-r ${color}`} />
      <div className="relative">
        <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${color} bg-opacity-10 text-white mb-4`}>
          {icon}
        </div>
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          {count && (
            <span className="text-sm text-gray-400 bg-gray-700 px-2 py-1 rounded-full">
              {count} articles
            </span>
          )}
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
      </div>
    </div>
  );
}