import type { Metadata } from 'next';
import Link from 'next/link';
import { generateMetadata as generateMetaTags, siteConfig } from '@/lib/seo';
import { posts } from '@/data/posts';
import { PostCard } from '@/components/PostCard';

export const metadata: Metadata = generateMetaTags(
  'Home | ' + siteConfig.title,
  'Welcome to ' + siteConfig.description
);

export default function Home() {
  const recentPosts = posts.slice(0, 3);

  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-lg p-8 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{siteConfig.title}</h1>
        <p className="text-xl mb-6">{siteConfig.description}</p>
        <Link
          href="/blog"
          className="inline-block bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
        >
          Read Latest Posts
        </Link>
      </section>

      {/* Recent Posts */}
      <section>
        <h2 className="text-3xl font-bold mb-8">Latest Posts</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {recentPosts.map(post => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            href="/blog"
            className="inline-block text-emerald-600 hover:text-emerald-800 font-semibold"
          >
            View All Posts →
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-emerald-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Never Miss an Update</h2>
        <p className="text-gray-600 mb-6">Subscribe to get the latest posts delivered to your inbox</p>
        <form className="flex gap-2 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-600"
            required
          />
          <button
            type="submit"
            className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition font-semibold"
          >
            Subscribe
          </button>
        </form>
      </section>
    </div>
  );
}
