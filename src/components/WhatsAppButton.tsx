
import React from 'react';
import { MessageSquare } from 'lucide-react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const url = 'https://api.whatsapp.com/send/?phone=5541997772066&text&type=phone_number&app_absent=0';
    window.open(url, '_blank');
  };

  return (
    <button
      onClick={handleWhatsAppClick}
      className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 bg-black hover:bg-gray-800 text-white p-3 sm:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50 border border-gray-600"
      aria-label="Abrir WhatsApp"
    >
      <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />
    </button>
  );
};

export default WhatsAppButton;
