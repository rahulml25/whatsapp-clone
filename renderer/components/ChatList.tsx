import React from 'react';
import { IconCheck, IconChecks } from '@tabler/icons-react';

// shrink start: 1156px
// shrink end: 818px

type Props = {};

export default function ChatList({}: Props) {
  return (
    <div className="scrollbar-hide h-[calc(100vh-40px)] w-[264px] min-w-[264px] max-w-[264px] overflow-y-auto scroll-smooth border-r border-neutral-900/75 px-2.5 py-2.5 md:w-full md:max-w-[379px]">
      {[
        { state: 'read' },
        { state: 'delivered' },
        { state: 'sent' },
        { state: 'read' },
        { state: 'delivered' },
        { state: 'sent' },
        { state: 'read' },
        { state: 'delivered' },
        { state: 'sent' },
        { state: 'read' },
        { state: 'delivered' },
        { state: 'sent' },
      ].map(({ state }, idx) => (
        <div
          key={idx}
          className="no-select flex space-x-4 rounded-md px-3.5 py-3 hover:bg-[#343434]"
        >
          <img
            className="h-12 w-12 rounded-full"
            src="https://source.unsplash.com/random/300x300/?person"
          />
          <div className="w-full overflow-hidden">
            <div className="flex w-full items-center space-x-3">
              <span className="line-dotted-end flex-1 text-sm font-medium">
                Shubhro Modak
              </span>
              <span className="text-xs text-[#969696]">Yesterday</span>
            </div>
            <div className="flex items-center space-x-1 text-[#a9a9a9]">
              {state === 'read' && (
                <IconChecks className="w-[18px] -rotate-6 text-blue-600" />
              )}
              {state === 'delivered' && (
                <IconChecks className="w-[18px] -rotate-6" />
              )}
              {state === 'sent' && <IconCheck className="w-[18px] -rotate-6" />}
              <p className="line-clamp-1 ">Hmm</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
