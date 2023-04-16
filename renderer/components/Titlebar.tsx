import React from 'react';

export default function Titlebar({ title }) {
  return (
    <header className="window-drager sticky top-0 z-[9999] h-10">
      <div className="flex h-full items-center space-x-2 px-3.5">
        <img className="h-5 w-5" src="/images/logo.png" />
        <h1 className="line-clamp-1 text-xs text-gray-100">{title}</h1>
      </div>
    </header>
  );
}
