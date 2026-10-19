import React from 'react';

interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  badge,
  title,
  description,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`mb-12 ${centered ? 'text-center max-w-2xl mx-auto' : 'max-w-2xl'} ${className}`}
    >
      {badge && (
        <span className="text-xs font-semibold uppercase tracking-wider text-[#1EB53A] block mb-2">
          {badge}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl font-bold text-[#001B80] tracking-tight">
        {title}
      </h2>
      {description && (
        <p className="text-slate-600 text-sm sm:text-base mt-2.5 leading-relaxed font-normal">
          {description}
        </p>
      )}
    </div>
  );
}
