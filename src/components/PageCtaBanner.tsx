import React from 'react';
import { ArrowRight, MessageSquare } from 'lucide-react';

interface PageCtaBannerProps {
  badge?: string;
  title: string;
  description: string;
  primaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
  secondaryAction?: {
    label: string;
    href?: string;
    onClick?: () => void;
  };
}

export function PageCtaBanner({
  badge = 'Atendimento Especializado',
  title,
  description,
  primaryAction = {
    label: 'Falar no WhatsApp',
    href: 'https://wa.me/5564999558696?text=Ol%C3%A1!%20Gostaria%20de%20um%20atendimento%20da%20TECGEO.',
  },
  secondaryAction,
}: PageCtaBannerProps) {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-xs border-l-4 border-l-[#1EB53A]">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1EB53A] block mb-2">
                {badge}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#001B80] mb-3 tracking-tight">
                {title}
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {description}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto flex-shrink-0">
              {primaryAction.href ? (
                <a
                  href={primaryAction.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#1EB53A] hover:bg-[#189c30] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-xs whitespace-nowrap"
                >
                  <MessageSquare size={16} />
                  {primaryAction.label}
                  <ArrowRight size={15} />
                </a>
              ) : (
                <button
                  onClick={primaryAction.onClick}
                  className="bg-[#1EB53A] hover:bg-[#189c30] text-white px-6 py-3 rounded-lg text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 shadow-xs whitespace-nowrap"
                >
                  <MessageSquare size={16} />
                  {primaryAction.label}
                  <ArrowRight size={15} />
                </button>
              )}

              {secondaryAction && (
                secondaryAction.href ? (
                  <a
                    href={secondaryAction.href}
                    className="border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 px-6 py-3 rounded-lg text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    {secondaryAction.label}
                  </a>
                ) : (
                  <button
                    onClick={secondaryAction.onClick}
                    className="border border-slate-300 hover:border-slate-400 bg-white hover:bg-slate-50 text-slate-800 px-6 py-3 rounded-lg text-sm font-semibold transition-all inline-flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    {secondaryAction.label}
                  </button>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
