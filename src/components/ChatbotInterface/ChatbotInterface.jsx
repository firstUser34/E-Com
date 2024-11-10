import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Minimize2, Maximize2 } from 'lucide-react';

const ChatbotInterface = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);
  const chatContainerRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputText.trim()) return;

    try {
      setIsLoading(true);
      setMessages(prev => [...prev, { type: 'user', text: inputText }]);
      setInputText('');

      const response = await fetch('https://3072c9896cf840225e.gradio.live/run/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: [inputText]
        }),
      });

      const data = await response.json();

      if (data.data && data.data[0]) {
        const recommendations = data.data[0];
        let formattedResponse = recommendations.map(item => 
          `Product: ${item['Product Name']}\nDescription: ${item['Product Description']}\nCategory: ${item['Category']}\nCarbon Footprint: ${item['Carbon Footprint (g CO2e)']}g CO2e\nSustainability Score: ${item['Sustainability Score (0-5)']}/5\n\n`
        ).join('');

        setMessages(prev => [...prev, { type: 'bot', text: formattedResponse }]);
      }
    } catch (error) {
      console.error('Error:', error);
      setMessages(prev => [...prev, {
        type: 'bot',
        text: 'Sorry, I encountered an error. Please try again later.'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-green-600 hover:bg-green-700 text-white rounded-full p-4 shadow-lg transition-all duration-200 flex items-center gap-2"
        >
          <MessageCircle size={24} />
          <span className="text-sm font-medium">Eco Product Assistant</span>
        </button>
      )}

      {isOpen && (
        <div className={`bg-white rounded-lg shadow-xl w-[380px] transition-all duration-200 ${isMinimized ? 'h-14' : 'h-[600px]'}`}>
          {/* Header */}
          <div className="bg-green-600 text-white p-4 rounded-t-lg flex justify-between items-center">
            <div className="flex items-center gap-2">
              <MessageCircle size={20} />
              <span className="font-medium">Eco Product Assistant</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="hover:bg-green-700 p-1 rounded"
              >
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="hover:bg-green-700 p-1 rounded"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* Chat Container */}
          {!isMinimized && (
            <>
              <div 
                ref={chatContainerRef}
                className="p-4 h-[460px] overflow-y-auto"
              >
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`mb-4 ${message.type === 'user' ? 'text-right' : 'text-left'}`}
                  >
                    <div
                      className={`inline-block p-3 rounded-lg max-w-[80%] ${
                        message.type === 'user'
                          ? 'bg-green-600 text-white'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      <pre className="whitespace-pre-wrap font-sans">
                        {message.text}
                      </pre>
                    </div>
                  </div>
                ))}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="border-t p-4">
                <div className="flex gap-2">
                  <textarea
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Type your message..."
                    className="flex-1 resize-none border rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-green-600"
                    rows={1}
                  />
                  <button
                    onClick={handleSend}
                    disabled={isLoading}
                    className="bg-green-600 hover:bg-green-700 text-white rounded-lg p-2 transition-colors"
                  >
                    {isLoading ? (
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    ) : (
                      <Send size={20} />
                    )}
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ChatbotInterface;