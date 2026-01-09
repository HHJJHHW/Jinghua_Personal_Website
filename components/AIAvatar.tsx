
import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, Send, X, User, Bot } from 'lucide-react';
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
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen ? (
        <div className="bg-white rounded-2xl shadow-2xl w-80 md:w-96 flex flex-col h-[500px] border border-slate-200 overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-duke-blue p-4 text-white flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-blue-400 flex items-center justify-center">
                <Bot size={18} />
              </div>
              <div>
                <h3 className="font-semibold text-sm">Jinghua AI</h3>
                <p className="text-[10px] opacity-80">Online | Fuqua Bot</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)}><X size={20} /></button>
          </div>
          
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                  m.role === 'user' ? 'bg-duke-blue text-white rounded-tr-none' : 'bg-slate-100 text-slate-800 rounded-tl-none'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 p-3 rounded-2xl rounded-tl-none animate-pulse text-slate-400">
                  Thinking...
                </div>
              </div>
            )}
          </div>

          <div className="p-4 border-t border-slate-100 bg-slate-50 flex gap-2">
            <input 
              type="text" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask me something..."
              className="flex-1 bg-white border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-duke-blue"
            />
            <button 
              onClick={handleSend}
              className="bg-duke-blue text-white p-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      ) : (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-duke-blue text-white p-4 rounded-full shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
        >
          <MessageSquare size={24} />
          <span className="hidden md:inline font-medium pr-2">Chat with my AI</span>
        </button>
      )}
    </div>
  );
};

export default AIAvatar;
