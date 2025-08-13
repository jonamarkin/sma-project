export interface SheetMusic {
  id: string;
  title: string;
  composer: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string;
  previewUrl: string; // URL to a score image snippet
}

export interface ChoralEvent {
  id: string;
  title: string;
  organizer: string;
  date: string;
  location: string;
  description: string;
  imageUrl: string;
  price: number | 'Free';
}

export interface BlogPost {
  slug: string;
  title: string;
  author: string;
  publishedDate: string;
  excerpt: string;
  content: string;
  imageUrl: string;
  tags: string[];
}

export const sheetMusicData: SheetMusic[] = [
  {
    id: '1',
    title: 'Ode to Freedom',
    composer: 'Ayo Bankole',
    price: 15.99,
    description: 'A powerful and moving choral piece celebrating liberation and unity. Written in a traditional Yoruba folk style.',
    imageUrl: 'https://placehold.co/600x800.png',
    category: 'Sacred Choral',
    previewUrl: 'https://placehold.co/800x400.png',
  },
  {
    id: '2',
    title: 'Serenade for the Savannah',
    composer: 'Naliyah Kebede',
    price: 12.50,
    description: 'A light and lyrical composition for SATB choir, evoking the vast and beautiful landscapes of the East African savannah.',
    imageUrl: 'https://placehold.co/600x800.png',
    category: 'Secular Choral',
    previewUrl: 'https://placehold.co/800x400.png',
  },
  {
    id: '3',
    title: 'Kyrie from "Missa Luba"',
    composer: 'Guido Haazen',
    price: 9.99,
    description: 'A classic piece of African liturgical music, this Kyrie is based on traditional Congolese folk melodies.',
    imageUrl: 'https://placehold.co/600x800.png',
    category: 'Liturgical',
    previewUrl: 'https://placehold.co/800x400.png',
  },
  {
    id: '4',
    title: 'Desert Echoes',
    composer: 'Amir Al-Fassi',
    price: 18.00,
    description: 'A contemporary choral work that blends North African scales with Western harmonies to create a haunting and atmospheric sound.',
    imageUrl: 'https://placehold.co/600x800.png',
    category: 'Contemporary Classical',
    previewUrl: 'https://placehold.co/800x400.png',
  },
  {
    id: '5',
    title: 'River of Hope',
    composer: 'Femi Kuti',
    price: 14.00,
    description: 'An uplifting and rhythmic gospel piece inspired by the resilience and faith of communities along the Niger River.',
    imageUrl: 'https://placehold.co/600x800.png',
    category: 'Gospel',
    previewUrl: 'https://placehold.co/800x400.png',
  },
  {
    id: '6',
    title: 'Cape Town Celebration',
    composer: 'Zola Maseko',
    price: 20.00,
    description: 'A vibrant and energetic festival piece combining Xhosa and Zulu rhythms, perfect for celebratory occasions.',
    imageUrl: 'https://placehold.co/600x800.png',
    category: 'Festival',
    previewUrl: 'https://placehold.co/800x400.png',
  },
];

export const eventsData: ChoralEvent[] = [
  {
    id: '1',
    title: 'Accra ChoralFest 2024',
    organizer: 'Ghana National Choir',
    date: 'August 15-18, 2024',
    location: 'Accra, Ghana',
    description: 'A four-day festival featuring workshops, competitions, and gala concerts with choirs from across West Africa.',
    imageUrl: 'https://placehold.co/600x400.png',
    price: 50.00,
  },
  {
    id: '2',
    title: 'Nairobi Chamber Choir in Concert',
    organizer: 'Nairobi Chamber Choir',
    date: 'September 5, 2024',
    location: 'Nairobi, Kenya',
    description: 'An evening of classical and contemporary choral music, featuring works by Kenyan and international composers.',
    imageUrl: 'https://placehold.co/600x400.png',
    price: 25.00,
  },
  {
    id: '3',
    title: 'Cape Town International Choral Competition',
    organizer: 'Cape Town Music Society',
    date: 'October 10-13, 2024',
    location: 'Cape Town, South Africa',
    description: 'One of Africa\'s most prestigious choral competitions, attracting top choirs from around the globe.',
    imageUrl: 'https://placehold.co/600x400.png',
    price: 'Free',
  },
  {
    id: '4',
    title: 'Lagos Gospel Choir Workshop',
    organizer: 'The Lagos Community Gospel Choir',
    date: 'November 2, 2024',
    location: 'Lagos, Nigeria',
    description: 'A one-day workshop open to all singers, focusing on vocal technique, harmony, and performance in the gospel tradition.',
    imageUrl: 'https://placehold.co/600x400.png',
    price: 15.00,
  },
];

export const blogData: BlogPost[] = [
  {
    slug: 'the-rise-of-contemporary-african-choral-music',
    title: 'The Rise of Contemporary African Choral Music',
    author: 'Dr. Imani Nkrumah',
    publishedDate: 'June 20, 2024',
    excerpt: 'From Nigeria to South Africa, a new generation of composers is redefining what it means to write choral music in Africa...',
    content: '<p>From Nigeria to South Africa, a new generation of composers is redefining what it means to write choral music in Africa. Blending traditional rhythms, languages, and instruments with Western classical forms, these artists are creating a sound that is both unique and universally appealing. This article explores the key figures, trends, and works that are shaping this exciting new movement.</p><p>We delve into the works of composers like Ayo Bankole and Joshua Uzoigwe, examining how they laid the groundwork for today\'s vibrant scene. We also look at the role of universities and cultural institutions in nurturing this new talent. The challenges, such as funding and international exposure, are significant, but the passion and creativity of these musicians are undeniable. The future of African choral music is bright, and the world is beginning to listen.</p>',
    imageUrl: 'https://placehold.co/800x500.png',
    tags: ['Contemporary', 'Composers', 'Analysis'],
  },
  {
    slug: 'a-guide-to-south-african-choral-styles',
    title: 'A Listener\'s Guide to South African Choral Styles',
    author: 'Bongani Ndlovu',
    publishedDate: 'July 5, 2024',
    excerpt: 'South Africa boasts one of the richest and most diverse choral traditions in the world. From the powerful harmonies of Isicathamiya to the intricate rhythms of Maskandi...',
    content: '<p>South Africa boasts one of the richest and most diverse choral traditions in the world. From the powerful harmonies of Isicathamiya, famously brought to global attention by Ladysmith Black Mambazo, to the intricate rhythms of Maskandi-influenced choral works, the country is a treasure trove of vocal music. This guide provides an introduction to the major styles, key artists, and historical context you need to appreciate this incredible musical landscape.</p><p>We explore the call-and-response patterns common in Zulu choral music, the gospel influences that have shaped so much of the repertoire, and the role of choral singing in the struggle against apartheid. Whether you are a seasoned choral enthusiast or a newcomer to this music, this guide will deepen your understanding and appreciation of South Africa\'s vocal heritage.</p>',
    imageUrl: 'https://placehold.co/800x500.png',
    tags: ['South Africa', 'Isicathamiya', 'Musicology'],
  },
  {
    slug: 'preserving-our-musical-heritage-the-digital-archive-project',
    title: 'Preserving Our Musical Heritage: The Digital Archive Project',
    author: 'The Harmonia Africa Team',
    publishedDate: 'July 15, 2024',
    excerpt: 'Harmonia Africa is proud to announce the launch of our Digital Archive Project, an initiative to digitize and preserve rare and unpublished African sheet music...',
    content: '<p>Harmonia Africa is proud to announce the launch of our Digital Archive Project, an initiative to digitize and preserve rare and unpublished African sheet music. For centuries, much of our continent\'s musical heritage has been passed down orally or existed in fragile manuscripts, vulnerable to loss and decay. This project aims to safeguard these cultural treasures for future generations.</p><p>Working with libraries, universities, and private collectors across the continent, we are creating high-quality digital scans of these works and making them accessible to musicians, scholars, and the public. This is a monumental task, and we are calling on our community to help. Learn more about how you can contribute to this vital effort to protect and celebrate Africa\'s musical legacy.</p>',
    imageUrl: 'https://placehold.co/800x500.png',
    tags: ['Preservation', 'Community', 'Harmonia Africa'],
  },
];
