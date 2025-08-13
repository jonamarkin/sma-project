import { BlogPostCard } from '@/components/blog-post-card';
import { blogData } from '@/lib/dummy-data';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BlogPage() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="flex flex-col items-center text-center">
        <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl">Harmonia Africa Blog</h1>
        <p className="mt-2 max-w-2xl text-lg text-foreground/70">
          Stories, insights, and news from the heart of Africa's choral and classical music scene.
        </p>
        <Button asChild className="mt-6" size="lg">
          <Link href="/blog/create">Write a Post</Link>
        </Button>
      </div>
      
      <div className="mt-12 grid grid-cols-1 gap-12 lg:grid-cols-2">
        {blogData.map((post) => (
          <BlogPostCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
