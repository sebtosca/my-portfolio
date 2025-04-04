import React, { useState } from 'react';
import { Send, Bot } from 'lucide-react';
import GlowCard from './GlowCard';

interface Message {
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      text: "Hello! I'm an AI assistant. I'll be implemented with a fine-tuned LLM soon. For now, I'm just a placeholder!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user message
    const userMessage: Message = {
      text: input,
      isBot: false,
      timestamp: new Date(),
    };

    // Add placeholder bot response
    const botMessage: Message = {
      text: "I'm a placeholder response. The real LLM implementation is coming soon!",
      isBot: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage, botMessage]);
    setInput('');
  };

  return (
    <section className="py-20" id="chatbot">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4" data-aos="fade-up">
            AI Assistant
          </h2>
          <p className="text-gray-400" data-aos="fade-up" data-aos-delay="100">
            Chat with our AI assistant (Coming Soon)
          </p>
        </div>

        <GlowCard>
          <div className="h-[400px] flex flex-col">
            <div className="flex-1 overflow-y-auto space-y-4 mb-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex items-start gap-2 ${
                    message.isBot ? '' : 'flex-row-reverse'
                  }`}
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      message.isBot ? 'bg-emerald-500/20' : 'bg-white/20'
                    }`}
                  >
                    {message.isBot ? (
                      <Bot className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <div className="w-4 h-4 bg-white/80 rounded-full" />
                    )}
                  </div>
                  <div
                    className={`px-4 py-2 rounded-xl max-w-[80%] ${
                      message.isBot
                        ? 'bg-black/50 border border-white/10'
                        : 'bg-emerald-500/20 border border-emerald-500/20'
                    }`}
                  >
                    <p className="text-sm">{message.text}</p>
                    <span className="text-xs text-white/40 mt-1 block">
                      {message.timestamp.toLocaleTimeString()}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 bg-black/50 rounded-full border border-white/10 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-colors"
              />
              <button
                type="submit"
                className="p-2 bg-emerald-500 hover:bg-emerald-600 rounded-full transition-colors"
              >
                <Send className="w-5 h-5 text-black" />
              </button>
            </form>
          </div>
        </GlowCard>
      </div>
    </section>
  );
};

export default Chatbot;