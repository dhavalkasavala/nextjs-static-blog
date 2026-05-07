import Link from 'next/link';

interface Tag {
  name: string;
  href: string;
}

interface TagsProps {
  tags: Tag[];
}

export function Tags({ tags }: TagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map(tag => (
        <Link
          key={tag.name}
          href={tag.href}
          className="inline-block bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm transition"
        >
          #{tag.name}
        </Link>
      ))}
    </div>
  );
}
