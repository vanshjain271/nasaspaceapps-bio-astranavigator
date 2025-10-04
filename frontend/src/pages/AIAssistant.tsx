import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bot, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AIAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hello! I'm your NASA bioscience research assistant. Ask me anything about space biology, research trends, or specific publications in our database."
    }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);

    // Placeholder response
    setTimeout(() => {
      const assistantMessage: Message = {
        role: "assistant",
        content: "This is a placeholder response. In the production version, this will connect to your Flask/FastAPI AI backend to provide intelligent answers based on the 608 NASA publications."
      };
      setMessages((prev) => [...prev, assistantMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-display font-bold mb-4 glow-text">AI Research Assistant</h1>
        <p className="text-muted-foreground">
          Chat with AI to explore NASA bioscience research and get intelligent insights
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="glass-card p-6 h-[600px] flex flex-col"
      >
        <div className="flex-1 overflow-y-auto space-y-4 mb-4">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`flex gap-3 ${message.role === "user" ? "justify-end" : ""}`}
            >
              {message.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-5 h-5 text-primary" />
                </div>
              )}
              <div
                className={`max-w-[80%] p-4 rounded-lg ${
                  message.role === "user"
                    ? "bg-primary/20 border border-primary/30"
                    : "bg-secondary/50"
                }`}
              >
                <p className="text-sm">{message.content}</p>
              </div>
              {message.role === "user" && (
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/30 flex items-center justify-center flex-shrink-0">
                  <User className="w-5 h-5 text-accent" />
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <div className="flex gap-2">
          <Input
            type="text"
            placeholder="Ask about NASA bioscience research..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && handleSend()}
            className="glass-input"
          />
          <Button onClick={handleSend} size="icon" className="bg-primary/20 border border-primary/30 hover:bg-primary/30">
            <Send className="w-5 h-5" />
          </Button>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        <button
          onClick={() => setInput("What are the main research topics in space biology?")}
          className="glass-card p-4 text-left hover:border-primary/40 transition-all"
        >
          <p className="text-sm font-semibold mb-1">Research Topics</p>
          <p className="text-xs text-muted-foreground">Explore main areas of study</p>
        </button>
        <button
          onClick={() => setInput("Tell me about microgravity effects on plants")}
          className="glass-card p-4 text-left hover:border-primary/40 transition-all"
        >
          <p className="text-sm font-semibold mb-1">Microgravity Effects</p>
          <p className="text-xs text-muted-foreground">Impact on organisms</p>
        </button>
        <button
          onClick={() => setInput("What are the latest findings from 2023?")}
          className="glass-card p-4 text-left hover:border-primary/40 transition-all"
        >
          <p className="text-sm font-semibold mb-1">Recent Discoveries</p>
          <p className="text-xs text-muted-foreground">Latest research findings</p>
        </button>
      </motion.div>
    </div>
  );
}
