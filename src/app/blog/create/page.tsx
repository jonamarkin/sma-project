import { BlogModerationForm } from '@/components/blog-moderation-form';

export default function CreateBlogPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <div className="text-center">
        <h1 className="font-headline text-4xl font-bold text-primary">Create a New Blog Post</h1>
        <p className="mt-2 text-lg text-foreground/70">
          Share your insights with the community. Your post will be checked against our content guidelines.
        </p>
      </div>
      <div className="mt-10">
        <BlogModerationForm />
      </div>
    </div>
  );
}
