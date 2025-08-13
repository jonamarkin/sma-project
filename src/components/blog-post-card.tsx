import Image from 'next/image';
import Link from 'next/link';
import { type BlogPost } from '@/lib/dummy-data';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Calendar, User } from 'lucide-react';

interface BlogPostCardProps {
  post: BlogPost;
}

export function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link href={`/blog/${post.slug}`} className="group">
      <Card className="flex h-full flex-col overflow-hidden transition-all duration-300 hover:shadow-lg">
        <CardHeader className="p-0">
          <div className="relative aspect-video w-full overflow-hidden">
            <Image
              src={post.imageUrl}
              alt={post.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint="blog post image"
            />
          </div>
        </CardHeader>
        <CardContent className="flex-grow p-6">
          <div className="flex gap-2">
            {post.tags.map(tag => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
          <CardTitle className="font-headline text-2xl mt-4">
            {post.title}
          </CardTitle>
          <div className="mt-3 flex items-center space-x-4 text-sm text-foreground/70">
             <div className="flex items-center">
                <User className="mr-1.5 h-4 w-4" />
                <span>{post.author}</span>
            </div>
            <div className="flex items-center">
                <Calendar className="mr-1.5 h-4 w-4" />
                <span>{post.publishedDate}</span>
            </div>
          </div>
          <p className="mt-4 text-base text-foreground/80 line-clamp-3">
            {post.excerpt}
          </p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
            <div className="font-semibold text-primary group-hover:text-accent flex items-center">
                Read More <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
