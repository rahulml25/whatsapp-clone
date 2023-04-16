import React from 'react';
import {
  IconMessage,
  IconPhone,
  IconChartDonut,
  IconSettings,
} from '@tabler/icons-react';

type Props = {};

export default function Sidebar({}: Props) {
  return (
    <aside className="flex flex-col justify-between px-1 py-1.5">
      <div className="my-1.5 space-y-1">
        {[
          {
            Icon: IconMessage,
            active: true,
          },
          {
            Icon: IconPhone,
            active: false,
            iconClassName: 'rotate-12',
          },
          {
            Icon: IconChartDonut,
            active: false,
          },
        ].map(({ Icon, active, iconClassName = '' }, idx) => (
          <div
            key={idx}
            className={`rotate-12- relative flex items-center justify-center rounded p-2 ${
              active ? 'bg-[#2d2d2d]' : 'hover:bg-[#2d2d2d]'
            }`}
          >
            {active && (
              <div className="absolute left-0 h-4 w-[3px] rounded-full bg-[#00a884]" />
            )}
            <Icon className={`mx-auto h-5 text-gray-300 ${iconClassName}`} />
          </div>
        ))}
      </div>

      <div className="space-y-1">
        <div className="flex items-center justify-center rounded p-2 hover:bg-[#2d2d2d]">
          <IconSettings className="mx-auto h-5 text-gray-300" />
        </div>
        <div className="flex items-center justify-center rounded p-2 hover:bg-[#2d2d2d]">
          <img
            className="h-[1.4rem] w-[1.4rem] rounded-full"
            src="/images/avatar.jpg"
          />
        </div>
      </div>
    </aside>
  );
}
