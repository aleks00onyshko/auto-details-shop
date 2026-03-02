import { KeyboardEvent, useState } from 'react';

export interface ChatFooterProps {
  sendMessageFn: (text: string) => void;
}

export const ChatFooter = ({ sendMessageFn }: ChatFooterProps) => {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim().length === 0) return;

    sendMessageFn(text);
    setText('');
  };

  return (
    <div className="p-6 bg-white border-t border-gray-50 shrink-0">
      <div className="relative flex items-center">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSend()}
          placeholder="Message support..."
          className="w-full py-4 pl-6 pr-16 bg-gray-50 rounded-2xl border-none focus:ring-2 focus:ring-blue-500/20 transition-all placeholder:text-gray-300 text-sm"
        />
        <button
          onClick={handleSend}
          className="absolute right-2 w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200"
        >
          →
        </button>
      </div>
    </div>
  );
};
