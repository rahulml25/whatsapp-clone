import React from 'react';
import ChatList from '../components/ChatList';
import ChatWindow from '../components/ChatWindow';

export default function Home() {
  return (
    <main className="flex w-full rounded-tl-lg border-l border-t border-neutral-900/75 bg-[#272727]">
      <ChatList />
      <ChatWindow />
    </main>
  );
}
