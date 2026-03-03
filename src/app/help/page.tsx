// app/help/page.tsx
import React from "react";
import {
  MessageCircle,
  HelpCircle,
  FileText,
  AlertTriangle,
  Globe,
  Shield,
  Users,
} from "lucide-react";
import HelpCategoryCard from "../../components/helpcenter/HelpCategoryCard";
import ContactSupport from "../../components/helpcenter/ContactSupport";

export const metadata = {
  title: "Help Center | BrowsePing",
  description:
    "Get help with BrowsePing - the open-source browser extension that transforms solitary browsing into a vibrant social experience.",
};

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-black">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-purple-900 to-blue-900">
        <div className="absolute inset-0 bg-grid-white/5" />
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              How can we help you?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
              Find answers to common questions, troubleshoot issues, and learn
              how to make the most of your BrowsePing experience.
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Categories Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Browse by category
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <HelpCategoryCard
              icon={<MessageCircle className="h-8 w-8" />}
              title="Getting Started"
              description="Learn how to install and set up BrowsePing on your browser."
              color="from-blue-600 to-cyan-600"
            />
            <HelpCategoryCard
              icon={<Globe className="h-8 w-8" />}
              title="Features & Usage"
              description="Discover how to use all BrowsePing features effectively."
              color="from-purple-600 to-pink-600"
            />
            <HelpCategoryCard
              icon={<Users className="h-8 w-8" />}
              title="Social Features"
              description="Learn about sharing, groups, and social browsing."
              color="from-green-600 to-emerald-600"
            />
            <HelpCategoryCard
              icon={<Shield className="h-8 w-8" />}
              title="Privacy & Security"
              description="Understand how BrowsePing protects your data and privacy."
              color="from-orange-600 to-red-600"
            />
            <HelpCategoryCard
              icon={<FileText className="h-8 w-8" />}
              title="Troubleshooting"
              description="Fix common issues and problems with BrowsePing."
              color="from-indigo-600 to-blue-600"
            />
            <HelpCategoryCard
              icon={<AlertTriangle className="h-8 w-8" />}
              title="FAQ"
              description="Quick answers to frequently asked questions."
              color="from-yellow-600 to-amber-600"
            />
          </div>
        </section>

        {/* Popular Articles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8">
            Popular Articles
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:bg-gray-800 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="bg-blue-900/50 p-3 rounded-lg">
                  <HelpCircle className="h-6 w-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">
                    How to create and join browsing groups
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Learn how to create your own browsing groups or join
                    existing ones to browse with friends.
                  </p>
                </div>
              </div>
            </article>
            <article className="bg-gray-800/60 backdrop-blur-sm rounded-xl border border-gray-700 p-6 hover:bg-gray-800 transition-all duration-200">
              <div className="flex items-start gap-4">
                <div className="bg-purple-900/50 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-400" />
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">
                    Privacy controls and data management
                  </h3>
                  <p className="text-gray-400 mb-4">
                    Understand how to control your privacy settings and manage
                    your shared browsing data.
                  </p>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Still Need Help Section */}
        <section className="mt-20">
          <ContactSupport />
        </section>
      </main>
    </div>
  );
}
