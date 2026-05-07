export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: string;
  tags: string[];
  image: string;
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with Next.js',
    slug: 'getting-started-with-nextjs',
    excerpt: 'Learn how to build modern web applications with Next.js, the React framework for production.',
    content: `Next.js is a powerful React framework that makes building web applications easier. In this guide, we'll explore the basics of Next.js and how to get started.

## Why Next.js?

Next.js provides several key features out of the box:
- Server-side rendering (SSR)
- Static site generation (SSG)
- API routes
- Built-in CSS support
- Image optimization
- SEO-friendly

## Getting Started

To create a new Next.js project, run:

\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

Your development server will start at http://localhost:3000.

## Key Concepts

### Pages and Routing

Next.js uses file-based routing. Any file in the \`app\` directory automatically becomes a route.

### Server Components

By default, components in Next.js 13+ are server components, which means they run on the server.

### Data Fetching

You can fetch data using async/await in server components directly.

Start building amazing applications with Next.js today!`,
    author: 'John Doe',
    date: '2024-01-15',
    category: 'Tutorial',
    tags: ['nextjs', 'react', 'web-development'],
    image: 'https://placehold.co/800x400?text=Getting+Started+with+Next.js'
  },
  {
    id: '2',
    title: 'SEO Best Practices for Static Sites',
    slug: 'seo-best-practices-static-sites',
    excerpt: 'Discover essential SEO strategies to improve your static site\'s visibility and ranking on search engines.',
    content: `Search Engine Optimization (SEO) is crucial for any website. For static sites, there are specific best practices to follow.

## Meta Tags

Include relevant meta tags in your site's head:

\`\`\`html
<meta name="description" content="Your page description" />
<meta name="keywords" content="keyword1, keyword2" />
\`\`\`

## Structured Data

Use JSON-LD for structured data markup to help search engines understand your content better.

## Performance

Google's Core Web Vitals are now ranking factors:
- Largest Contentful Paint (LCP)
- First Input Delay (FID)
- Cumulative Layout Shift (CLS)

## URL Structure

Use clean, descriptive URLs:
- Good: /blog/seo-best-practices
- Bad: /blog?id=123

## Mobile Optimization

Ensure your site is mobile-friendly and responsive.

## Backlinks

Quality backlinks from reputable sources improve your SEO significantly.

## Sitemap and Robots.txt

Submit a sitemap to search engines and configure robots.txt appropriately.

Implementing these practices will significantly improve your site's SEO performance!`,
    author: 'Jane Smith',
    date: '2024-01-10',
    category: 'SEO',
    tags: ['seo', 'optimization', 'marketing'],
    image: 'https://placehold.co/800x400?text=SEO+Best+Practices'
  },
  {
    id: '3',
    title: 'Building with Tailwind CSS - CSS Framework Guide',
    slug: 'building-with-tailwind-css',
    excerpt: 'Master Tailwind CSS and learn how to build beautiful, responsive interfaces quickly with utility-first styling.',
    content: `Tailwind CSS is a utility-first CSS framework that helps you build modern designs without leaving your HTML. Unlike traditional CSS frameworks, Tailwind gives you low-level utility classes to build custom designs.

## Why Tailwind CSS?

Tailwind offers several advantages:
- **Utility-First**: Build designs by composing utility classes instead of writing CSS
- **Responsive Design**: Built-in responsive prefixes for mobile-first development
- **Dark Mode**: Easy dark mode support with minimal configuration
- **Performance**: Only includes CSS you actually use in your project
- **Customizable**: Extend and customize the default configuration
- **Developer Experience**: Faster development and fewer context switches

## Installation

To add Tailwind CSS to a Next.js project:

\`\`\`bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
\`\`\`

Update your \`tailwind.config.ts\`:

\`\`\`bash
content: [
  "./app/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
\`\`\`

## Core Concepts

### Utility Classes

Instead of writing CSS classes, use utility classes directly:

- Margin: \`m-4\`, \`mx-2\`, \`mt-8\`
- Padding: \`p-6\`, \`px-4\`, \`py-2\`
- Colors: \`text-blue-600\`, \`bg-emerald-50\`
- Sizing: \`w-full\`, \`h-screen\`, \`max-w-lg\`

### Responsive Design

Use responsive prefixes to target different screen sizes:

- \`sm:\` - Small screens (640px)
- \`md:\` - Medium screens (768px)
- \`lg:\` - Large screens (1024px)
- \`xl:\` - Extra large screens (1280px)

Example:

\`\`\`bash
<div className="text-sm md:text-base lg:text-lg">
  Responsive text sizing
</div>
\`\`\`

### Hover and State Variants

Apply styles based on user interactions:

\`\`\`bash
<button className="bg-emerald-600 hover:bg-emerald-700 focus:ring-2">
  Click me
</button>
\`\`\`

## Best Practices

- Use \`@apply\` directive for reusable component styles
- Organize utility classes logically in your HTML
- Leverage the responsive prefixes for mobile-first design
- Create component abstractions to reduce repetition
- Use Tailwind's color palette for consistency

## Advanced Tips

- Extract common patterns into custom components
- Use arbitrary values for non-standard values: \`w-[500px]\`
- Combine with CSS modules for complex styling needs
- Use Tailwind's JIT compiler for instant class generation

Tailwind CSS makes styling faster and more maintainable. Start using it today!`,
    author: 'Sarah Lee',
    date: '2024-01-08',
    category: 'CSS',
    tags: ['tailwind', 'css', 'design'],
    image: 'https://placehold.co/800x400?text=Building+with+Tailwind+CSS'
  },
];

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find(post => post.slug === slug);
}

export function getPostsByCategory(category: string): Post[] {
  return posts.filter(post => post.category === category);
}

export function getPostsByTag(tag: string): Post[] {
  return posts.filter(post => post.tags.includes(tag));
}

export function getAllCategories(): string[] {
  return Array.from(new Set(posts.map(post => post.category)));
}

export function getAllTags(): string[] {
  return Array.from(new Set(posts.flatMap(post => post.tags)));
}
