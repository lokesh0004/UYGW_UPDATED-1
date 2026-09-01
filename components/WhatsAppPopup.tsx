"use client";

import { useEffect, useState } from "react";
import { X, Send, MessageCircle } from "lucide-react";

export default function WhatsAppPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState("");

  const phoneNumber = "+61401533346"; // Replace with your WhatsApp number

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const sendMessage = () => {
    if (!message.trim()) return;

    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full text-white shadow-xl transition hover:scale-110"
        style={{ background: "var(--forest-light)" }}
      >
        <MessageCircle size={30} />
      </button>
    );
  }

  return (
    <div
      className="fixed bottom-6 right-6 z-50 w-[350px] overflow-hidden rounded-3xl shadow-2xl"
      style={{ background: "var(--void)" }}
    >
      {/* Header */}
      <div
        className="flex items-center justify-between px-5 py-4 text-white"
        style={{ background: "linear-gradient(135deg, var(--forest-light), var(--forest))" }}
      >
        <div>
          <h3 className="font-semibold text-lg">Chat with us 👋</h3>
          <p className="text-sm opacity-90">We usually reply within minutes</p>
        </div>

        <button onClick={() => setIsOpen(false)}>
          <X size={22} />
        </button>
      </div>

      {/* Chat Body */}
      <div
        className="space-y-4 p-5"
        style={{
          background: "var(--surface-2)",
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/diamond-upholstery.png')",
        }}
      >
        <div
          className="max-w-[85%] rounded-2xl rounded-tl-sm p-3 shadow"
          style={{ background: "#FFFFFF" }}
        >
          <p className="text-sm" style={{ color: "var(--text)" }}>
            👋 Hi! Welcome.
            <br />
            How can we help you today?
          </p>
        </div>

        <textarea
          rows={4}
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-xl border p-3 outline-none focus:ring-2"
          style={{
            background: "#FFFFFF",
            color: "var(--text)",
            borderColor: "rgba(46,139,87,0.25)",
          }}
        />

        <button
          onClick={sendMessage}
          className="flex w-full items-center justify-center gap-2 rounded-xl py-3 font-semibold text-white transition"
          style={{ background: "var(--forest-light)" }}
          onMouseEnter={(e) => (e.currentTarget.style.background = "var(--forest)")}
          onMouseLeave={(e) => (e.currentTarget.style.background = "var(--forest-light)")}
        >
          <Send size={18} />
          Send on WhatsApp
        </button>
      </div>
    </div>
  );
}