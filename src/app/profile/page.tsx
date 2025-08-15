import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { User, Music, LogOut } from 'lucide-react';

export default function ProfilePage() {
  // Dummy user data
  const user = {
    name: 'Ayo Bankole',
    email: 'ayo.bankole@example.com',
    avatarUrl: 'https://placehold.co/100x100.png',
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-12 sm:py-16">
      <div className="flex items-start gap-8">
        <aside className="w-1/4 sticky top-24">
            <nav className="flex flex-col gap-2">
                <Button variant="ghost" className="justify-start gap-2 text-lg">
                    <User /> Profile
                </Button>
                 <Button variant="ghost" className="justify-start gap-2 text-lg text-muted-foreground">
                    <Music /> My Library
                </Button>
                <Separator className="my-2"/>
                 <Button variant="ghost" className="justify-start gap-2 text-lg text-destructive">
                    <LogOut /> Logout
                </Button>
            </nav>
        </aside>
        <main className="w-3/4">
            <Card>
                <CardHeader>
                    <div className="flex items-center gap-6">
                        <Avatar className="h-24 w-24">
                            <AvatarImage src={user.avatarUrl} alt={user.name} data-ai-hint="user avatar" />
                            <AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="font-headline text-4xl">{user.name}</CardTitle>
                            <CardDescription className="text-lg">{user.email}</CardDescription>
                        </div>
                    </div>
                </CardHeader>
                <CardContent>
                    <form className="space-y-6 mt-6">
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" defaultValue={user.name} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input id="email" type="email" defaultValue={user.email} />
                        </div>
                        <div className="flex justify-end">
                            <Button>Save Changes</Button>
                        </div>
                    </form>
                </CardContent>
            </Card>
        </main>
      </div>
    </div>
  );
}
