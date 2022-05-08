import React from 'react';

interface Props {
  name: string;
  link: string;
  children: React.ReactNode;
}

export function SocialItem({ name, link, children }: Props) {
  return (
    <a
      className="flex mx-auto items-center p-4 sm:w-96 border-t border-slate-800 group"
      href={link}
      target="_blank"
    >
      {React.cloneElement(children as any, {
        className:
          'w-10 h-10 mr-5 group-hover:text-slate-400 transition-colors',
      })}
      <span className="group-hover:text-slate-400 transition-colors">
        {name}
      </span>
    </a>
  );
}
