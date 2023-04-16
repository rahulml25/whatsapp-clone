import React from 'react';
import {
  IconMoodSmile,
  IconLink,
  IconSend,
  // IconMicrophone,
} from '@tabler/icons-react';

type Props = {};

export default function ChatWindow({}: Props) {
  return (
    <div className="flex-grow">
      <div className="border-b border-neutral-900/75 px-4 py-3">
        <div className="flex items-center space-x-3.5">
          <img
            className="h-[38px] w-[38px] rounded-full"
            src="/images/avatar.jpg"
          />
          <span className="line-dotted-end flex-1 text-sm font-medium">
            Rathindra N. Chakraborty K. H. H. S
          </span>
        </div>
      </div>

      <div className="chats-containder h-[calc(100vh-(40px+63px+49px))]"></div>

      <div className="sticky bottom-0 flex items-center border-t border-neutral-900/75 px-2 py-1">
        <div className="flex items-center justify-center rounded px-3.5 py-2.5 hover:bg-[#353535]">
          <IconMoodSmile className="mx-auto h-5 text-gray-300" />
        </div>
        <div className="flex items-center justify-center rounded px-3.5 py-2.5 hover:bg-[#353535]">
          <IconLink className="mx-auto h-5 text-gray-300" />
        </div>
        <textarea
          name=""
          rows={1}
          placeholder="Type a message"
          className="mx-3 w-full flex-1 bg-transparent px-3 pb-2.5 pt-2 text-sm outline-none placeholder:text-[#c1c1c1] hover:bg-[#393939] focus:hover:bg-transparent"
        />
        <div className="flex items-center justify-center rounded px-3.5 py-2.5 hover:bg-[#353535]">
          <IconSend className="mx-auto h-5 -translate-x-px rotate-45 text-gray-300" />
          {/* <IconMicrophone className="mx-auto h-5 -translate-x-px text-gray-300" /> */}
        </div>
      </div>
    </div>
  );
}
