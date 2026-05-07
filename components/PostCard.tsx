import Link from 'next/link';
import { Post } from '@/data/posts';

interface PostCardProps {
  post: Post;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 flex flex-col flex-1">
        <div className="mb-2">
          <span className="inline-block bg-emerald-100 text-emerald-800 text-xs px-3 py-1 rounded-full">
            {post.category}
          </span>
        </div>
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold mb-2 hover:text-emerald-600 transition">
            {post.title}
          </h2>
        </Link>
        <p className="text-gray-600 mb-4 flex-1">{post.excerpt}</p>
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{post.author}</span>
          <span>{new Date(post.date).toLocaleDateString()}</span>
        </div>
      </div>
    </article>
  );
}
