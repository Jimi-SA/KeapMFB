import React, { useEffect, useState } from "react";
import { FaRegComments, FaPaperPlane, FaTimes } from "react-icons/fa";
import { faqs, standardQnA } from "../data/Faq"; 

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const customerCareNumber = "123-456-7890"; 

  // Load messages from local storage when the component mounts
  useEffect(() => {
    const storedMessages = JSON.parse(localStorage.getItem("chatMessages")) || [];
    console.log("Loaded messages from local storage:", storedMessages);
    setMessages(storedMessages);
  }, []);

  // Save messages to local storage whenever messages change
  useEffect(() => {
    localStorage.setItem("chatMessages", JSON.stringify(messages));
    console.log("Saved messages to local storage:", messages);
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      // Clear chat when opened (optional)
      // setMessages([]);
      // localStorage.removeItem("chatMessages");
    }
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      const userMessage = { sender: "user", text: input };
      setMessages((prevMessages) => [...prevMessages, userMessage]);
      setInput(""); // Clear input field

      // Simulate bot typing
      setIsTyping(true);
      setTimeout(() => {
        respondToUser(input);
      }, 1000); // Simulate delay for typing
    }
  };

  const respondToUser = (input) => {
    setIsTyping(false);
    let botResponse;

    if (isMeaningless(input)) {
      botResponse = "That question doesn't seem meaningful. Can you please ask something else?";
    } else {
      const faqResponse = faqs.find((faq) =>
        faq.question.toLowerCase().includes(input.toLowerCase())
      );

      if (faqResponse) {
        botResponse = faqResponse.answer;
      } else {
        const standardResponse = standardQnA.find((qna) =>
          qna.question.toLowerCase().includes(input.toLowerCase())
        );

        if (standardResponse) {
          botResponse = standardResponse.answer;
        } else {
          botResponse = `That question is a bit complex. Please contact our customer care at ${customerCareNumber}.`;
        }
      }
    }

    setMessages((prevMessages) => [
      ...prevMessages,
      { sender: "bot", text: botResponse },
    ]);
  };

  const isMeaningless = (input) => {
    const meaninglessKeywords = ["asdf", "qwerty", "12345", "hello", "hi", "test"];
    return meaninglessKeywords.some(keyword => input.toLowerCase().includes(keyword));
  };

  const endChat = () => {
    setMessages([]); // Clear messages
    localStorage.removeItem("chatMessages"); // Clear storage
    setIsOpen(false); // Close chat
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        className="bg-teal-500 rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow duration-300"
        onClick={toggleChat}
      >
        <FaRegComments className="text-white md:text-4xl text-2xl" />
      </button>

      {isOpen && (
        <div className="bg-white shadow-lg rounded-lg w-80 p-4 mt-2 transition-transform duration-300 ease-in-out">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-bold text-lg text-teal-600">Customer Care</h2>
            <button onClick={endChat} className="text-red-500 hover:text-red-700">
              <FaTimes />
            </button>
          </div>
          <div className="overflow-y-auto max-h-60 mb-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`my-1 p-2 rounded-lg ${
                  msg.sender === "user" ? "bg-teal-100 text-right" : "bg-gray-200 text-left"
                }`}
              >
                {msg.sender === "bot" ? (
                  <div className="text-left">{msg.text}</div>
                ) : (
                  <div className="text-right">{msg.text}</div>
                )}
              </div>
            ))}
            {isTyping && (
              <div className="text-gray-500 italic text-left">Typing...</div>
            )}
          </div>
          <div className="flex">
            <input
              type="text"
              placeholder="Type a message..."
              value={input}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              className="border border-gray-300 rounded-l-md w-full p-2 focus:outline-none focus:ring-2 focus:ring-teal-400 transition duration-150 ease-in-out"
            />
            <button
              onClick={handleSendMessage}
              className="bg-teal-500 text-white rounded-r-md p-2 hover:bg-teal-600 transition-colors duration-200"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
