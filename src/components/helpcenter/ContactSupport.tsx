// components/ContactSupport.tsx
import React from "react";
import { Mail, MessageSquare, Github, BookOpen } from "lucide-react";

export default function ContactSupport() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-4">Still need help?</h2>
          <p className="text-blue-100 text-lg">
            Our team and community are here to assist you
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <a
            href="mailto:support@browsePing.com"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center transition-all group"
          >
            <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Mail className="h-7 w-7" />
            </div>
            <h3 className="font-semibold mb-2">Email Support</h3>
            <p className="text-blue-100 text-sm">
              Get personalized help from our team
            </p>
          </a>
          <a
            href="https://github.com/browsePing/browsePing/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center transition-all group"
          >
            <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <MessageSquare className="h-7 w-7" />
            </div>
            <h3 className="font-semibold mb-2">Community Forum</h3>
            <p className="text-blue-100 text-sm">
              Ask questions and share with users
            </p>
          </a>
          <a
            href="https://github.com/browsePing/browsePing/issues"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center transition-all group"
          >
            <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <Github className="h-7 w-7" />
            </div>
            <h3 className="font-semibold mb-2">GitHub Issues</h3>
            <p className="text-blue-100 text-sm">
              Report bugs and request features
            </p>
          </a>
          <a
            href="/docs"
            className="bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-xl p-6 text-center transition-all group"
          >
            <div className="bg-white/20 w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
              <BookOpen className="h-7 w-7" />
            </div>
            <h3 className="font-semibold mb-2">Documentation</h3>
            <p className="text-blue-100 text-sm">
              Technical guides and API references
            </p>
          </a>
        </div>
        <div className="mt-10 pt-8 border-t border-white/20 text-center">
          <p className="text-blue-100">
            Average response time:{" "}
            <span className="font-semibold text-white">Under 24 hours</span>
          </p>
        </div>
      </div>
    </div>
  );
}
