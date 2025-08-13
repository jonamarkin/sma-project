import Image from 'next/image';
import { notFound } from 'next/navigation';
import { blogData } from '@/lib/dummy-data';
import { Badge } from '@/components/ui/badge';
import { Calendar, User } from 'lucide-react';

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogData.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <div className="relative h-64 w-full sm:h-96">
        <Image
          src={post.imageUrl}
          alt={post.title}
          fill
          className="object-cover"
          priority
          data-ai-hint="blog post image"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
      </div>
      <div className="container mx-auto -mt-16 sm:-mt-24 px-4 pb-16">
        <div className="relative max-w-3xl mx-auto bg-card p-6 sm:p-10 rounded-lg shadow-xl">
          <div className="flex gap-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <h1 className="mt-4 font-headline text-3xl font-bold sm:text-5xl">{post.title}</h1>
          <div className="mt-6 flex items-center space-x-6 text-sm text-foreground/70">
            <div className="flex items-center">
              <User className="mr-2 h-4 w-4" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <Calendar className="mr-2 h-4 w-4" />
              <span>{post.publishedDate}</span>
            </div>
          </div>
        </div>

        <div
          className="prose prose-lg dark:prose-invert max-w-3xl mx-auto mt-10 text-foreground/90 prose-headings:font-headline prose-headings:text-foreground prose-a:text-primary hover:prose-a:text-accent"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </article>
  );
}
