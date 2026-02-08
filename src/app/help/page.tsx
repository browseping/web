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
import FAQSection from "../../components/helpcenter/FAQSection";
import ContactSupport from "../../components/helpcenter/ContactSupport";

export const metadata = {
  title: "Help Center | BrowsePing",
  description:
    "Get help with BrowsePing - the open-source browser extension that transforms solitary browsing into a vibrant social experience.",
};

export default function HelpCenterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="absolute inset-0 bg-grid-white/10" />
        <div className="container relative mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              How can we help you?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-blue-100">
              Find answers to common questions, troubleshoot issues, and learn
              how to make the most of your BrowsePing experience.
            </p>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
        {/* Categories Grid */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Browse by category
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <HelpCategoryCard
              icon={<MessageCircle className="h-8 w-8" />}
              title="Getting Started"
              description="Learn how to install and set up BrowsePing on your browser."
              link="/help/getting-started"
              count={5}
              color="from-blue-500 to-cyan-500"
            />
            <HelpCategoryCard
              icon={<Globe className="h-8 w-8" />}
              title="Features & Usage"
              description="Discover how to use all BrowsePing features effectively."
              link="/help/features"
              count={12}
              color="from-purple-500 to-pink-500"
            />
            <HelpCategoryCard
              icon={<Users className="h-8 w-8" />}
              title="Social Features"
              description="Learn about sharing, groups, and social browsing."
              link="/help/social"
              count={8}
              color="from-green-500 to-emerald-500"
            />
            <HelpCategoryCard
              icon={<Shield className="h-8 w-8" />}
              title="Privacy & Security"
              description="Understand how BrowsePing protects your data and privacy."
              link="/help/privacy"
              count={6}
              color="from-orange-500 to-red-500"
            />
            <HelpCategoryCard
              icon={<FileText className="h-8 w-8" />}
              title="Troubleshooting"
              description="Fix common issues and problems with BrowsePing."
              link="/help/troubleshooting"
              count={15}
              color="from-indigo-500 to-blue-500"
            />
            <HelpCategoryCard
              icon={<AlertTriangle className="h-8 w-8" />}
              title="FAQ"
              description="Quick answers to frequently asked questions."
              link="/help/faq"
              count={25}
              color="from-yellow-500 to-amber-500"
            />
          </div>
        </section>

        {/* Popular Articles */}
        <section className="mb-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900">
              Popular Articles
            </h2>
            <a
              href="/help/articles"
              className="text-blue-600 hover:text-blue-800 font-medium"
            >
              View all articles →
            </a>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <article className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    How to create and join browsing groups
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Learn how to create your own browsing groups or join
                    existing ones to browse with friends.
                  </p>
                  <a
                    href="/help/article/create-join-groups"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Read article →
                  </a>
                </div>
              </div>
            </article>
            <article className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex items-start gap-4">
                <div className="bg-purple-50 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Privacy controls and data management
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Understand how to control your privacy settings and manage
                    your shared browsing data.
                  </p>
                  <a
                    href="/help/article/privacy-controls"
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Read article →
                  </a>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />

        {/* Still Need Help Section */}
        <section className="mt-20">
          <ContactSupport />
        </section>
      </main>
    </div>
  );
}
