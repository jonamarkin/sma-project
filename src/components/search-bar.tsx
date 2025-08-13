import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { handleSearch } from '@/lib/actions';

export function SearchBar() {
  return (
    <form action={handleSearch}>
      <div className="relative">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
        <Input
          type="search"
          name="keywords"
          placeholder="Search by style, era, tonality..."
          className="w-full rounded-lg bg-secondary pl-8"
          aria-label="Search sheet music"
        />
      </div>
    </form>
  );
}
