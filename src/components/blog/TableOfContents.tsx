"use client";

import { useEffect, useState } from "react";

export interface HeadingItem {
  id: string;
  text: string;
  level: number;
}

export default function TableOfContents({ headings }: { headings: HeadingItem[] }) {
  const [activeId, setActiveId] = useState<string>("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "0px 0px -80% 0px", threshold: 0.1 } // Triggers when heading is near the top
    );

    headings.forEach((heading) => {
      const el = document.getElementById(heading.id);
      if (el) observer.observe(el);
    });

    return () => {
      headings.forEach((heading) => {
        const el = document.getElementById(heading.id);
        if (el) observer.unobserve(el);
      });
    };
  }, [headings]);

  if (headings.length === 0) return null;

  return (
    <nav className="hidden xl:block w-full">
      <div className="bg-white rounded-3xl p-7 shadow-sm border border-slate-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-indigo-50 to-blue-50 rounded-bl-full pointer-events-none opacity-50"></div>
        <h4 className="text-[13px] font-black text-slate-900 uppercase tracking-widest mb-5 border-b border-slate-100 pb-4 relative z-10 flex items-center">
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2"></span>
          Table of Contents
        </h4>
        <ul className="space-y-3">
          {headings.map((heading, index) => (
            <li
              key={`${heading.id}-${index}`}
              className={`${heading.level === 3 ? "ml-4" : ""} transition-all duration-200`}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(heading.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  setActiveId(heading.id);
                  // Optionally update URL hash without scrolling jump
                  window.history.pushState(null, '', `#${heading.id}`);
                }}
                className={`text-sm block leading-tight ${
                  activeId === heading.id
                    ? "font-bold text-blue-600 border-l-2 border-blue-600 pl-2 -ml-2.5"
                    : "font-medium text-slate-500 hover:text-slate-800"
                }`}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
