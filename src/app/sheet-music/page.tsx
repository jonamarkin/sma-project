'use client';

import { useState, useMemo } from 'react';
import { SheetMusicCard } from '@/components/sheet-music-card';
import { sheetMusicData, type SheetMusic } from '@/lib/dummy-data';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Filter } from 'lucide-react';

type Filters = {
  category: string;
  voicing: string;
  difficulty: string;
  occasion: string;
  country: string;
};

export default function SheetMusicPage() {
  const [filters, setFilters] = useState<Filters>({
    category: 'all',
    voicing: 'all',
    difficulty: 'all',
    occasion: 'all',
    country: 'all',
  });

  const handleFilterChange = (filterName: keyof Filters) => (value: string) => {
    setFilters((prev) => ({ ...prev, [filterName]: value }));
  };

  const filteredMusic = useMemo(() => {
    return sheetMusicData.filter((music) => {
      return (
        (filters.category === 'all' || music.category === filters.category) &&
        (filters.voicing === 'all' || music.voicing === filters.voicing) &&
        (filters.difficulty === 'all' || music.difficulty === filters.difficulty) &&
        (filters.occasion === 'all' || music.occasion === filters.occasion) &&
        (filters.country === 'all' || music.country === filters.country)
      );
    });
  }, [filters]);

  const getUniqueValues = (key: keyof SheetMusic) => {
    const values = sheetMusicData.map((item) => item[key]);
    return ['all', ...Array.from(new Set(values))];
  };

  const filterOptions = {
    category: getUniqueValues('category'),
    voicing: getUniqueValues('voicing'),
    difficulty: getUniqueValues('difficulty'),
    occasion: getUniqueValues('occasion'),
    country: getUniqueValues('country'),
  };

  return (
    <div className="container mx-auto px-4 py-12 sm:py-16">
      <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="font-headline text-4xl font-bold text-primary sm:text-5xl">Sheet Music</h1>
          <p className="mt-2 max-w-2xl text-lg text-foreground/70">
            Browse our collection of choral and classical music from African composers.
          </p>
        </div>
      </div>
      
      <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-4">
        <aside className="lg:col-span-1">
            <Accordion type="multiple" defaultValue={['item-1', 'item-2']} className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger>
                        <h3 className="font-headline text-2xl flex items-center gap-2"><Filter className="w-5 h-5"/> Filters</h3>
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="space-y-6 p-1">
                            <div>
                                <label htmlFor="category" className="block text-sm font-medium text-foreground/80 mb-2">Category</label>
                                <Select value={filters.category} onValueChange={handleFilterChange('category')}>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                    {filterOptions.category.map((opt) => <SelectItem key={opt} value={opt}>{opt === 'all' ? 'All Categories' : opt}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label htmlFor="voicing" className="block text-sm font-medium text-foreground/80 mb-2">Voicing</label>
                                <Select value={filters.voicing} onValueChange={handleFilterChange('voicing')}>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                    {filterOptions.voicing.map((opt) => <SelectItem key={opt} value={opt}>{opt === 'all' ? 'All Voicings' : opt}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label htmlFor="difficulty" className="block text-sm font-medium text-foreground/80 mb-2">Difficulty</label>
                                <Select value={filters.difficulty} onValueChange={handleFilterChange('difficulty')}>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                    {filterOptions.difficulty.map((opt) => <SelectItem key={opt} value={opt}>{opt === 'all' ? 'All Difficulties' : opt}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label htmlFor="occasion" className="block text-sm font-medium text-foreground/80 mb-2">Occasion</label>
                                <Select value={filters.occasion} onValueChange={handleFilterChange('occasion')}>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                    {filterOptions.occasion.map((opt) => <SelectItem key={opt} value={opt}>{opt === 'all' ? 'All Occasions' : opt}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <label htmlFor="country" className="block text-sm font-medium text-foreground/80 mb-2">Country</label>
                                <Select value={filters.country} onValueChange={handleFilterChange('country')}>
                                    <SelectTrigger><SelectValue /></SelectTrigger>
                                    <SelectContent>
                                    {filterOptions.country.map((opt) => <SelectItem key={opt} value={opt}>{opt === 'all' ? 'All Countries' : opt}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </aside>

        <main className="lg:col-span-3">
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMusic.length > 0 ? (
                filteredMusic.map((music) => (
                    <SheetMusicCard key={music.id} music={music} />
                ))
            ) : (
                <p className="col-span-full text-center text-lg text-foreground/70">No sheet music found matching your criteria.</p>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
