import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { UploadCloud } from "lucide-react";

export default function UploadPage() {
  return (
    <div className="container mx-auto max-w-3xl px-4 py-12 sm:py-16">
      <Card>
        <CardHeader>
          <CardTitle className="font-headline text-3xl">Upload Your Composition</CardTitle>
          <CardDescription>Share your music with the world. Fill out the details below to list your sheet music on Harmonia Africa.</CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-8">
            <div className="space-y-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="e.g., Serenade for the Savannah" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="composer">Composer (Your Name)</Label>
              <Input id="composer" placeholder="e.g., Naliyah Kebede" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="Tell us about your piece. What inspired it? What is the style?" rows={5} />
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="price">Price (USD)</Label>
                <Input id="price" type="number" step="0.01" placeholder="e.g., 12.50" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input id="category" placeholder="e.g., Secular Choral" />
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <Label htmlFor="sheet-music-file">Sheet Music (PDF)</Label>
                <div className="mt-2 flex items-center justify-center w-full">
                  <label htmlFor="sheet-music-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-secondary">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud className="w-8 h-8 mb-4 text-muted-foreground" />
                      <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-muted-foreground">PDF (MAX. 10MB)</p>
                    </div>
                    <Input id="sheet-music-file" type="file" className="hidden" accept=".pdf" />
                  </label>
                </div> 
              </div>
               <div>
                <Label htmlFor="midi-file">MIDI Preview (Optional)</Label>
                 <div className="mt-2 flex items-center justify-center w-full">
                  <label htmlFor="midi-file" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card hover:bg-secondary">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      <UploadCloud className="w-8 h-8 mb-4 text-muted-foreground" />
                      <p className="mb-2 text-sm text-muted-foreground"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                      <p className="text-xs text-muted-foreground">MIDI (MAX. 2MB)</p>
                    </div>
                    <Input id="midi-file" type="file" className="hidden" accept=".midi,.mid" />
                  </label>
                </div> 
              </div>
            </div>
            <div className="flex justify-end">
              <Button type="submit" size="lg">Submit for Review</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
