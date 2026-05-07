import type { Metadata } from 'next';
import { generateMetadata as generateMetaTags, siteConfig } from '@/lib/seo';

export const metadata: Metadata = generateMetaTags(
  'About | ' + siteConfig.title,
  'Learn more about ' + siteConfig.title + ' and our mission'
);

export default function About() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">About {siteConfig.title}</h1>

      <section className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            {siteConfig.title} is dedicated to sharing knowledge and insights about modern web development, 
            best practices, and emerging technologies. We believe in making complex topics accessible to developers 
            of all skill levels.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">What We Cover</h2>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Next.js and modern React development patterns</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700">SEO optimization techniques and best practices</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700">Deployment strategies and performance optimization</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span className="text-gray-700">TypeScript, Tailwind CSS, and developer tools</span>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">About the Author</h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            This blog is created and maintained by a passionate developer focused on building 
            high-quality web applications. With experience across various technologies and platforms, 
            we share practical insights and lessons learned from real-world projects.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4">Technology Stack</h2>
          <p className="text-gray-700 mb-4">
            This blog is built with modern, efficient technologies:
          </p>
          <ul className="space-y-2 grid grid-cols-2 gap-4">
            <li className="text-gray-700">• Next.js 16+ with App Router</li>
            <li className="text-gray-700">• React 19</li>
            <li className="text-gray-700">• TypeScript</li>
            <li className="text-gray-700">• Tailwind CSS v4</li>
            <li className="text-gray-700">• Static Site Generation (SSG)</li>
            <li className="text-gray-700">• Deployed on Vercel</li>
          </ul>
        </div>

        <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 mt-8">
          <h3 className="text-xl font-bold mb-2 text-emerald-900">Get In Touch</h3>
          <p className="text-emerald-800">
            We'd love to hear from you! Share your thoughts, suggestions, or just say hello.
            Follow us on social media or check out our latest posts.
          </p>
        </div>
      </section>
    </div>
  );
}
