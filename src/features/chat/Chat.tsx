import {MouseEvent, useEffect, useRef} from 'react';

import {useAppDispatch, useAppSelector} from '@store/hooks.ts';

import {selectIsOpen, setOpen} from './store';
import {ChatHeader} from './components/Chat-header.tsx';
import {ChatFooter} from './components/Chat-footer.tsx';
import {useGetMessagesQuery, useSendMessageMutation} from './store/chat-api.ts';
import {ChatMessage} from './components/Chat-message.tsx';

export const Chat = () => {
  const isOpen = useAppSelector(selectIsOpen);
  
  if (!isOpen) return null;

  const dispatch = useAppDispatch();

  const panelRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const {data: messages = []} = useGetMessagesQuery();
  const [sendMessage] = useSendMessageMutation();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({behavior: 'smooth'});
  }, [messages.length]);

  const handleBackdropClick = (e: MouseEvent<HTMLDivElement>) => {
    if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
      dispatch(setOpen(false));
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] bg-black/30 backdrop-blur-sm flex justify-start animate-in fade-in duration-300"
      onClick={handleBackdropClick}
    >
      <div
        ref={panelRef}
        className="h-full w-full max-w-[450px] p-4 animate-in slide-in-from-left-full duration-500 ease-out"
      >
        <div
          className="h-full w-full bg-white rounded-[2.5rem] shadow-2xl flex flex-col overflow-hidden border border-gray-100">
          <ChatHeader closeFn={() => dispatch(setOpen(false))}/>

          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/30 no-scrollbar">
            {messages.map(({sender, timestamp, text}, idx) => (
              <ChatMessage key={idx} sender={sender} text={text} timestamp={timestamp}/>
            ))}

            <div ref={scrollRef}/>
          </div>

          <ChatFooter sendMessageFn={sendMessage}/>
        </div>
      </div>
    </div>
  );
};
