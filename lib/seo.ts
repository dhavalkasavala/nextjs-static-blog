export const siteConfig = {
  title: 'My Static Blog',
  description: 'A fast, SEO-optimized static blog built with Next.js',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com',
  url: 'https://yourdomain.com',
  author: 'Your Name',
  email: 'your-email@example.com',
  keywords: 'blog, next.js, static site, seo',
  language: 'en',
  theme: {
    primary: '#059669',
    secondary: '#0d9488',
  },
  social: {
    twitter: 'https://twitter.com',
    github: 'https://github.com',
    linkedin: 'https://linkedin.com',
  },
};

export function generateMetadata(
  title: string,
  description: string,
  image?: string,
  type: 'website' | 'article' = 'website'
) {
  return {
    title: `${title} | ${siteConfig.title}`,
    description,
    keywords: siteConfig.keywords,
    authors: [{ name: siteConfig.author }],
    openGraph: {
      type,
      title,
      description,
      url: siteConfig.url,
      siteName: siteConfig.title,
      images: image ? [{ url: image }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: image ? [image] : [],
    },
  };
}
