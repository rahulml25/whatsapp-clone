import React, { useEffect, useState } from 'react';
import Titlebar from './Titlebar';
import Sidebar from './Sidebar';
import useIPC from '../hooks/useIPC';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const ipc = useIPC();
  const [appTitle, setAppTitle] = useState('WhatsApp clone');

  useEffect(() => {
    // Updaing app title

    const windowTitle = document.head.querySelector('title');
    if (!windowTitle) return;

    const observer = new MutationObserver((mutations) => {
      setAppTitle(mutations[0].target.textContent);
    });

    observer.observe(document.head.querySelector('title'), {
      subtree: true,
      characterData: true,
      childList: true,
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Titlebar title={appTitle} />
      <div className="flex">
        <Sidebar />
        {children}
      </div>
    </>
  );
}
