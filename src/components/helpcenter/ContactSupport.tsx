// components/helpcenter/ContactSupport.tsx
import React from "react";
import { MessageCircle, Mail } from "lucide-react";

export default function ContactSupport() {
  return (
    <div className="rounded-2xl bg-gradient-to-r from-gray-800 to-gray-900 border border-gray-700 p-8 md:p-10">
      <div className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-4">Still need help?</h2>
        <p className="text-gray-400 mb-8">
          {`Can't find what you're looking for? Our support team is here to help.`}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors font-medium">
            <MessageCircle className="h-5 w-5" />
            Start a conversation
          </button>
          <button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors font-medium">
            <Mail className="h-5 w-5" />
            Send us an email
          </button>
        </div>
        <p className="text-sm text-gray-500 mt-6">
          Average response time:{" "}
          <span className="text-gray-400">&lt; 24 hours</span>
        </p>
      </div>
    </div>
  );
}
