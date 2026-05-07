import type { Metadata } from 'next';
import { generateMetadata as generateMetaTags } from '@/lib/seo';
import { posts } from '@/data/posts';
import { PostCard } from '@/components/PostCard';

export const metadata: Metadata = generateMetaTags(
  'Blog',
  'Read our latest articles and insights'
);

export default function BlogPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold mb-2">Blog</h1>
        <p className="text-gray-600">All articles and stories</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
