import { Message } from '../models/message.ts';

export type ChatMessageProps = Pick<Message, 'sender' | 'text' | 'timestamp'>;

export const ChatMessage = ({ text, sender, timestamp }: ChatMessageProps) => {
  const isMe = sender === 'user';

  return (
    <div className={`flex flex-col gap-1 ${isMe ? 'items-end' : 'items-start'}`}>
      <div
        className={`
          max-w-[85%] p-4 text-sm leading-relaxed shadow-sm border
          ${
            isMe
              ? 'bg-blue-600 text-white border-blue-500 rounded-2xl rounded-tr-none'
              : 'bg-white text-gray-700 border-gray-100 rounded-2xl rounded-tl-none'
          }
        `}
      >
        {text}
      </div>
      {timestamp && (
        <span className="text-[10px] font-bold text-gray-300 px-2 uppercase tracking-tight">
          {new Date(timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </span>
      )}
    </div>
  );
};
