"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import Lottie from "lottie-react";
import { assets } from "@/assets/assets";
import { getBotResponse } from "./utils/chatbotResponses"; // ✅ Import separated responses

const ChatbotPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! 👋 I'm Ishan's Portfolio Assistant. Ask me about skills, projects, or contact!", sender: "bot" },
  ]);
  const [input, setInput] = useState("");

  // Handle message
  const sendMessage = async () => {
    if (!input.trim()) return;

    const newMessage = { text: input, sender: "user" };
    setMessages((prev) => [...prev, newMessage]);
    setInput("");

    let botReply = getBotResponse(input);

    if (botReply) {
      setTimeout(() => {
        setMessages((prev) => [...prev, { text: botReply, sender: "bot" }]);
      }, 500);
    } else {
      // AI fallback
      try {
        const response = await fetch(
          "https://api-inference.huggingface.co/models/facebook/blenderbot-400M-distill",
          {
            method: "POST",
            headers: {
              Authorization: "Bearer hf_xxx_your_api_key", // replace with your Hugging Face key
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputs: input }),
          }
        );

        const data = await response.json();
        const aiReply = data.generated_text || "🤔 I couldn’t think of a response.";

        setMessages((prev) => [...prev, { text: aiReply, sender: "bot" }]);
      } catch (error) {
        setMessages((prev) => [...prev, { text: "⚠️ AI server not reachable", sender: "bot" }]);
      }
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Floating Robot Button */}
      {!isOpen && (
        <motion.div
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(true)}
          className="relative cursor-pointer"
        >
          {/* Robot Animation */}
          <div className="w-25 h-16 flex items-center justify-center">
            <Lottie animationData={assets.robot} loop={true} style={{ width: "60px", height: "60px" }} />
          </div>
        </motion.div>
      )}

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="w-96 h-[500px] backdrop-blur-xl bg-white/30 dark:bg-gray-900/40 border border-white/20 shadow-2xl rounded-3xl flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="flex justify-between items-center px-5 py-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white">
            <h3 className="font-bold text-lg flex items-center gap-2">🤖 Chatbot Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-red-300 text-xl"
            >
              ✖
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-white/40 dark:bg-gray-800/40">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`px-4 py-2 rounded-2xl max-w-[75%] text-sm shadow-md ${
                  msg.sender === "user"
                    ? "ml-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                    : "bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="p-3 flex items-center bg-white/60 dark:bg-gray-900/60 border-t border-gray-200 dark:border-gray-700">
            <input
              className="flex-1 px-4 py-2 rounded-full text-sm bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              onClick={sendMessage}
              className="ml-2 p-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow hover:scale-105 transition"
            >
              <Send size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default ChatbotPage;
