import React from 'react';

interface ActionButton {
  label: string;
  onClick?: () => void;
  href?: string;
  icon?: React.ReactNode;
}

interface PageHeroProps {
  badge: string;
  title: string;
  description: string;
  primaryAction?: ActionButton;
  secondaryAction?: ActionButton;
}

export function PageHero({
  badge,
  title,
  description,
  primaryAction,
  secondaryAction,
}: PageHeroProps) {
  return (
    <section className="bg-[#001B80] text-white py-16 sm:py-20 border-b border-[#001566]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#1EB53A] block mb-3">
            {badge}
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight tracking-tight">
            {title}
          </h1>
          <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-8">
            {description}
          </p>

          {(primaryAction || secondaryAction) && (
            <div className="flex flex-col sm:flex-row gap-3">
              {primaryAction && (
                primaryAction.href ? (
                  <a
                    href={primaryAction.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1EB53A] hover:bg-[#189c30] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    {primaryAction.icon}
                    {primaryAction.label}
                  </a>
                ) : (
                  <button
                    onClick={primaryAction.onClick}
                    className="bg-[#1EB53A] hover:bg-[#189c30] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-sm"
                  >
                    {primaryAction.icon}
                    {primaryAction.label}
                  </button>
                )
              )}

              {secondaryAction && (
                secondaryAction.href ? (
                  <a
                    href={secondaryAction.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-white/40 hover:bg-white/10 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all inline-flex items-center justify-center gap-2"
                  >
                    {secondaryAction.icon}
                    {secondaryAction.label}
                  </a>
                ) : (
                  <button
                    onClick={secondaryAction.onClick}
                    className="border border-white/40 hover:bg-white/10 text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all inline-flex items-center justify-center gap-2"
                  >
                    {secondaryAction.icon}
                    {secondaryAction.label}
                  </button>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
