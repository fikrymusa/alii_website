import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { BASE_URL } from '../../utils/api';


const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: "Halo! Selamat datang di ALII. Saya adalah Trained NLP ALII v.1.0.12, ada yang bisa saya bantu?", sender: 'bot' }
  ]);


  const APIKEY = import.meta.env.VITE_APIKEY;

  
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  // Auto-scroll ke pesan terbaru
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  // Fokus ke input saat chat dibuka
  useEffect(() => {
    if (isOpen && !isMinimized && inputRef.current) {
      setTimeout(() => {
        inputRef.current.focus();
      }, 300); // Delay sedikit untuk memastikan animasi selesai
    }
  }, [isOpen, isMinimized]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fungsi untuk mengirim pesan
  const handleSendMessage = async () => {
    const question = inputValue.trim();
    if (!question) return;

    // Tambahkan pesan pengguna ke state
    const userMessage = {
      id: Date.now(),
      text: question,
      sender: 'user'
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // console.log("question", question)
    try {
      // Kirim pertanyaan ke API
      // const dd = {
      //   question:question
      // }
// const res = await postData("/website/chatbot", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     question: question,
//   }),
// });
const res = await fetch(`${BASE_URL}/website/chatbot`, {
  method: "POST",
  headers: {
    "api-key": APIKEY,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ question }),
});
      if (!res.ok) {
        console.log("Res", res)
        throw new Error('Server response was not ok');
      }
      
      const data = await res.json();
      
      // Tambahkan respons bot ke state
      const botMessage = {
        id: Date.now() + 1,
        text: data.answer,
        sender: 'bot'
      };
      setMessages(prev => [...prev, botMessage]);
    } catch (err) {
      console.error("Error:", err);
      // Tampilkan pesan error jika gagal menghubungi server
      const errorMessage = {
        id: Date.now() + 1,
        text: "❌ Gagal menghubungi server. Silakan coba lagi nanti.",
        sender: 'bot'
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  // Handle tombol Enter
  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`mb-4 bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200 ${
              isMinimized ? 'w-80 h-14' : 'w-80 h-96 sm:w-96 sm:h-[500px]'
            } flex flex-col`}
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-4 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Asisten ALII</h3>
                  <p className="text-xs opacity-90">Online</p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 hover:bg-white/20 rounded transition-colors"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Messages Area */}
            {!isMinimized && (
              <>
                <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50">
                  {messages.map((message) => (
                    <motion.div
                      key={message.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex items-start space-x-2 max-w-[80%] ${
                        message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                      }`}>
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                          message.sender === 'user' ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-600'
                        }`}>
                          {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                        </div>
                        <div className={`p-3 rounded-2xl ${
                          message.sender === 'user' 
                            ? 'bg-blue-600 text-white rounded-br-none' 
                            : 'bg-white text-gray-800 rounded-bl-none shadow-sm'
                        }`}>
                          <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing Indicator */}
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="flex items-start space-x-2 max-w-[80%]">
                        <div className="w-8 h-8 rounded-full bg-gray-300 text-gray-600 flex items-center justify-center flex-shrink-0">
                          <Bot size={16} />
                        </div>
                        <div className="p-3 rounded-2xl bg-white text-gray-800 rounded-bl-none shadow-sm">
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                            <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-gray-200 bg-white">
                  <form onSubmit={(e) => { e.preventDefault(); handleSendMessage(); }} className="flex items-center space-x-2">
                    <input
                      ref={inputRef}
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ketik pesan Anda..."
                      // PERBAIKAN: Menambahkan style eksplisit untuk memastikan teks terlihat
                      style={{ color: '#1f2937' }} // Teks abu-abu gelap
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                      disabled={isTyping || inputValue.trim() === ''}
                    >
                      <Send size={18} />
                    </button>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full shadow-lg hover:shadow-xl transition-shadow flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </motion.button>
    </div>
  );
};

export default Chatbot;