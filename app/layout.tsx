import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { generateMetadata as generateMetaTags, siteConfig } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = generateMetaTags(
  siteConfig.title,
  siteConfig.description
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang={siteConfig.language}
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content={siteConfig.theme.primary} />
      </head>
      <body className="min-h-full flex flex-col bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm sticky top-0 z-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold text-emerald-600">
                {siteConfig.title}
              </Link>
              <div className="flex gap-6">
                <Link href="/" className="text-gray-600 hover:text-gray-900 transition">
                  Home
                </Link>
                <Link href="/blog" className="text-gray-600 hover:text-gray-900 transition">
                  Blog
                </Link>
                <Link href="/about" className="text-gray-600 hover:text-gray-900 transition">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-1">
          {children}
        </main>

        {/* Footer */}
        <footer className="bg-gray-900 text-white mt-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4">About</h3>
                <p className="text-gray-400 text-sm">{siteConfig.description}</p>
              </div>
              <div>
                <h3 className="font-bold mb-4">Quick Links</h3>
                <ul className="text-gray-400 text-sm space-y-2">
                  <li><Link href="/" className="hover:text-white transition">Home</Link></li>
                  <li><Link href="/blog" className="hover:text-white transition">Blog</Link></li>
                  <li><Link href="/about" className="hover:text-white transition">About</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-bold mb-4">Follow</h3>
                <div className="flex gap-4 text-sm">
                  <a href={siteConfig.social.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">Twitter</a>
                  <a href={siteConfig.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">GitHub</a>
                  <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
              <p>&copy; 2024 {siteConfig.title}. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
