import { Bot, MessageSquare, Send, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { sendMessageToAI } from '../services/geminiService';

const AIAvatar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: "Hi! I'm Jinghua's AI avatar. Ask me anything about my background, projects, or my time at Duke!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const botResponse = await sendMessageToAI(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botResponse || "I couldn't process that right now." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50">
      {isOpen ? (
        <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl w-[calc(100vw-32px)] sm:w-80 md:w-96 flex flex-col h-[500px] max-h-[80vh] border border-slate-200 dark:border-slate-800 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-duke-blue dark:bg-blue-600 p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-400 dark:bg-blue-500 flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Jinghua AI</h3>
                <p className="text-[10px] opacity-80">Online | Fuqua Bot</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
              <X size={20} />
            </button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50/50 dark:bg-slate-950/50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-3 rounded-2xl text-[13px] leading-relaxed ${
                  m.role === 'user' 
                    ? 'bg-duke-blue dark:bg-blue-600 text-white rounded-tr-none shadow-md shadow-blue-900/10' 
                    : 'bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-tl-none shadow-sm border border-slate-100 dark:border-slate-700'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 p-3 rounded-2xl rounded-tl-none animate-pulse text-slate-400 dark:text-slate-500 text-[13px] shadow-sm">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-white dark:bg-slate-900 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me something..."
              className="flex-1 bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-duke-blue/20 dark:focus:ring-blue-500/20 transition-all dark:text-slate-100"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="bg-duke-blue dark:bg-blue-600 text-white p-2.5 rounded-xl hover:opacity-90 transition-opacity disabled:opacity-30"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-duke-blue dark:bg-blue-600 text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
        >
          <MessageSquare size={24} />
          <span className="hidden sm:inline font-medium pr-1">Chat with AI</span>
        </button>
      )}
    </div>
  );
};

export default AIAvatar;