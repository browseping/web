// components/FAQSection.tsx
'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: 'Is BrowsePing really free and open-source?',
    answer: 'Yes! BrowsePing is completely free to use and open-source under the MIT License. You can view, modify, and contribute to our code on GitHub. We believe in transparent, community-driven development.',
  },
  {
    question: 'Which browsers does BrowsePing support?',
    answer: 'BrowsePing currently supports Chrome, Firefox, Edge, and Brave browsers. We\'re working on Safari support. All extensions are available on their respective browser stores.',
  },
  {
    question: 'How does BrowsePing protect my privacy?',
    answer: 'Privacy is our top priority. All social interactions are opt-in, and you control exactly what you share. We use end-to-end encryption for private messages and never sell your data. Learn more in our Privacy Policy.',
  },
  {
    question: 'Can I use BrowsePing without creating an account?',
    answer: 'Yes! You can use basic features anonymously. For social features like creating groups and persistent profiles, you\'ll need to create a free account with just an email address.',
  },
  {
    question: 'How do I report inappropriate content or users?',
    answer: 'You can report directly from any shared link or user profile. Our moderation team reviews reports promptly. We also provide community moderation tools for group admins.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Quick answers to the most common questions about BrowsePing
        </p>
      </div>
      <div className="space-y-4 max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:border-blue-300 transition-colors"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset rounded-xl"
            >
              <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
              <ChevronDown
                className={`h-5 w-5 text-gray-500 transition-transform duration-200 ${
                  openIndex === index ? 'transform rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`px-6 overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'pb-4 max-h-96' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="/help/faq"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
        >
          View all frequently asked questions
          <ChevronDown className="ml-2 h-4 w-4 rotate-270" />
        </a>
      </div>
    </section>
  );
}