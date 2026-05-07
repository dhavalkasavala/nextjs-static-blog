import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { generateMetadata as generateMetaTags } from '@/lib/seo';
import { getPostBySlug, posts } from '@/data/posts';
import { Tags } from '@/components/Tags';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {};
  }

  return generateMetaTags(post.title, post.excerpt, post.image, 'article');
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = posts
    .filter(p => p.slug !== slug && p.category === post.category)
    .slice(0, 3);

  return (
    <article className="max-w-3xl">
      <Link href="/blog" className="text-emerald-600 hover:underline mb-6 inline-block">
        ← Back to Blog
      </Link>

      <header className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
          <span>{post.author}</span>
          <span>•</span>
          <span>{new Date(post.date).toLocaleDateString('en-US', { 
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}</span>
          <span>•</span>
          <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm">
            {post.category}
          </span>
        </div>
      </header>

      {post.image && (
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-96 object-cover rounded-lg mb-8"
        />
      )}

      <div className="prose prose-lg max-w-none mb-8">
        {post.content.split('\n\n').map((paragraph, idx) => {
          if (paragraph.startsWith('##')) {
            return (
              <h2 key={idx} className="text-2xl font-bold mt-8 mb-4">
                {paragraph.replace('## ', '')}
              </h2>
            );
          }
          if (paragraph.startsWith('```')) {
            const code = paragraph
              .replace(/```bash\n?/g, '')
              .replace(/```html\n?/g, '')
              .replace(/```\n?/g, '');
            return (
              <pre key={idx} className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-4">
                <code>{code}</code>
              </pre>
            );
          }
          if (paragraph.startsWith('-')) {
            return (
              <ul key={idx} className="list-disc list-inside space-y-2 my-4">
                {paragraph.split('\n').map((item, itemIdx) => (
                  <li key={itemIdx} className="text-gray-700">
                    {item.replace('- ', '')}
                  </li>
                ))}
              </ul>
            );
          }
          return (
            <p key={idx} className="text-gray-700 leading-relaxed my-4">
              {paragraph}
            </p>
          );
        })}
      </div>

      <div className="border-t-2 border-b-2 border-gray-200 py-6 my-8">
        <div className="mb-4">
          <h3 className="font-semibold mb-3">Tags:</h3>
          <Tags
            tags={post.tags.map(tag => ({
              name: tag,
              href: `/tag/${tag}`,
            }))}
          />
        </div>
      </div>

      {relatedPosts.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Related Posts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedPosts.map(related => (
              <Link
                key={related.id}
                href={`/blog/${related.slug}`}
                className="group"
              >
                <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition"
                  />
                  <div className="p-4">
                    <h3 className="font-semibold mb-2 group-hover:text-blue-600">
                      {related.title}
                    </h3>
                    <p className="text-sm text-gray-600 line-clamp-2">
                      {related.excerpt}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
