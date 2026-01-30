import { useEffect, useRef, useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { AiOutlineClose, AiOutlineSend } from 'react-icons/ai';
import { RiRobotLine } from 'react-icons/ri';
import { siteData } from '../data/siteData';
import './ChatBot.css';

type ChatMessage = {
  id: number;
  text: string;
  sender: 'bot' | 'user';
  timestamp: Date;
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      text: "Hi there! 👋 I'm Rudra's AI Assistant. Would you like to know more about his projects, skills, or experience? Feel free to ask me anything!",
      sender: 'bot',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const genAI = useRef<GoogleGenerativeAI | null>(null);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY as string | undefined;
    if (apiKey) {
      genAI.current = new GoogleGenerativeAI(apiKey);
    } else {
      console.warn('Gemini API key not found. Please add VITE_GEMINI_API_KEY to your .env file');
    }

    // Auto-prompt user after a short delay on first visit
    const hasSeenPrompt = sessionStorage.getItem('chatbot-prompt-shown');
    if (!hasSeenPrompt) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem('chatbot-prompt-shown', 'true');
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage: ChatMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      if (!genAI.current) {
        setMessages((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: 'API key not configured. Please add VITE_GEMINI_API_KEY to your .env file.',
            sender: 'bot',
            timestamp: new Date()
          }
        ]);
        setIsLoading(false);
        return;
      }

      const model = genAI.current.getGenerativeModel({ model: 'gemini-2.5-flash' });

      const resumeData = JSON.stringify(siteData, null, 2);
      const systemPrompt = `You are an AI assistant for Rudra Pratap Singh's portfolio. You represent Rudra and help answer questions about his projects, skills, and experience.

    Use the following resume data as the source of truth:
    ${resumeData}

    Keep responses friendly, concise, and professional. Respond in plain text only. Do not use bullet points, lists, markdown, or special characters like *, -, or •. If asked something not related to Rudra's portfolio, politely redirect to portfolio-related topics.`;

      const prompt = `${systemPrompt}\n\nUser question: ${inputValue}`;

      const result = await model.generateContent(prompt);
      const response = await result.response;
      const botMessage: ChatMessage = {
        id: messages.length + 2,
        text: response.text(),
        sender: 'bot',
        timestamp: new Date()
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error('Error calling Gemini API:', error);
      setMessages((prev) => [
        ...prev,
        {
          id: prev.length + 1,
          text: 'Sorry, I encountered an error. Please try again later.',
          sender: 'bot',
          timestamp: new Date()
        }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        className="chat-floating-btn"
        onClick={() => setIsOpen((prev) => !prev)}
        title="Chat with AI Assistant"
        aria-label="Chat with AI Assistant"
      >
        {isOpen ? <AiOutlineClose size={24} /> : <RiRobotLine size={26} />}
      </button>

      {isOpen && (
        <div className="chat-window" role="dialog" aria-label="AI Assistant">
          <div className="chat-header">
            <h3>Rudra&apos;s AI Assistant</h3>
            <button className="chat-close-btn" onClick={() => setIsOpen(false)} aria-label="Close">
              <AiOutlineClose size={20} />
            </button>
          </div>

          <div className="chat-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <div className="message-content">{msg.text}</div>
              </div>
            ))}
            {isLoading && (
              <div className="message bot">
                <div className="message-content typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <form onSubmit={handleSendMessage} className="chat-input-form">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask me anything..."
              disabled={isLoading}
              className="chat-input"
            />
            <button
              type="submit"
              disabled={isLoading || !inputValue.trim()}
              className="chat-send-btn"
              aria-label="Send"
            >
              <AiOutlineSend size={20} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
