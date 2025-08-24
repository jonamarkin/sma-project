export interface SheetMusic {
  id: string;
  title: string;
  composer: string;
  price: number;
  description: string;
  imageUrl: string;
  category: string; // e.g., Sacred, Secular, Gospel
  voicing: "SATB" | "SSAA" | "TTBB" | "SAB" | "Unison" | "SSAATTBB";
  difficulty: "Easy" | "Intermediate" | "Advanced";
  occasion:
    | "General"
    | "Christmas"
    | "Easter"
    | "Wedding"
    | "Cultural"
    | "National";
  country: string;
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
  price: number | "Free";
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
    id: "1",
    title: "Ode to Freedom",
    composer: "Ayo Bankole",
    price: 15.99,
    description:
      "A powerful and moving choral piece celebrating liberation and unity. Written in a traditional Yoruba folk style.",
    imageUrl: "/scores/score3.png",
    category: "Sacred Choral",
    voicing: "SATB",
    difficulty: "Intermediate",
    occasion: "General",
    country: "Nigeria",
    previewUrl: "/scores/score7.svg",
  },
  {
    id: "2",
    title: "Serenade for the Savannah",
    composer: "Naliyah Kebede",
    price: 12.5,
    description:
      "A light and lyrical composition for SATB choir, evoking the vast and beautiful landscapes of the East African savannah.",
    imageUrl: "/scores/score1.png",
    category: "Secular Choral",
    voicing: "SAB",
    difficulty: "Easy",
    occasion: "General",
    country: "Kenya",
    previewUrl: "/scores/score2.png",
  },
  {
    id: "3",
    title: 'Kyrie from "Missa Luba"',
    composer: "Guido Haazen",
    price: 9.99,
    description:
      "A classic piece of African liturgical music, this Kyrie is based on traditional Congolese folk melodies.",
    imageUrl: "/scores/score5.jpeg",
    category: "Liturgical",
    voicing: "SATB",
    difficulty: "Intermediate",
    occasion: "General",
    country: "Congo",
    previewUrl: "/scores/score4.jpg",
  },
  {
    id: "4",
    title: "Desert Echoes",
    composer: "Amir Al-Fassi",
    price: 18.0,
    description:
      "A contemporary choral work that blends North African scales with Western harmonies to create a haunting and atmospheric sound.",
    imageUrl: "/scores/score2.png",
    category: "Contemporary Classical",
    voicing: "SSAA",
    difficulty: "Advanced",
    occasion: "General",
    country: "Morocco",
    previewUrl: "/scores/score5.jpeg",
  },
  {
    id: "5",
    title: "River of Hope",
    composer: "Femi Kuti",
    price: 14.0,
    description:
      "An uplifting and rhythmic gospel piece inspired by the resilience and faith of communities along the Niger River.",
    imageUrl: "/scores/score4.jpg",
    category: "Gospel",
    voicing: "SATB",
    difficulty: "Intermediate",
    occasion: "General",
    country: "Nigeria",
    previewUrl: "/scores/score1.png",
  },
  {
    id: "6",
    title: "Cape Town Celebration",
    composer: "Zola Maseko",
    price: 20.0,
    description:
      "A vibrant and energetic festival piece combining Xhosa and Zulu rhythms, perfect for celebratory occasions.",
    imageUrl: "/scores/score7.svg",
    category: "Festival",
    voicing: "TTBB",
    difficulty: "Advanced",
    occasion: "Wedding",
    country: "South Africa",
    previewUrl: "/scores/score3.png",
  },
  {
    id: "7",
    title: "Easter Alleluia",
    composer: "Adama Traoré",
    price: 11.0,
    description:
      "A joyous and accessible Alleluia setting for Easter services, with call-and-response sections.",
    imageUrl: "/scores/score5.jpeg",
    category: "Sacred Choral",
    voicing: "SAB",
    difficulty: "Easy",
    occasion: "Easter",
    country: "Mali",
    previewUrl: "/scores/score5.jpeg",
  },
  {
    id: "8",
    title: "Christmas Lullaby",
    composer: "Chinwe Ojo",
    price: 8.5,
    description:
      "A gentle and beautiful lullaby for Christmas, suitable for all choirs.",
    imageUrl: "/scores/score1.png",
    category: "Sacred Choral",
    voicing: "Unison",
    difficulty: "Easy",
    occasion: "Christmas",
    country: "Nigeria",
    previewUrl: "/scores/score7.svg",
  },
  // New Ghanaian Choral Music
  {
    id: "9",
    title: "Yen Ara Asase Ni",
    composer: "Ephraim Amu",
    price: 16.5,
    description:
      "A patriotic anthem celebrating the beauty of Ghana, arranged for SATB choir with traditional Akan harmonies.",
    imageUrl: "/scores/score2.png",
    category: "Patriotic",
    voicing: "SATB",
    difficulty: "Intermediate",
    occasion: "National",
    country: "Ghana",
    previewUrl: "/scores/score4.jpg",
  },
  {
    id: "10",
    title: "Adowa Hymn",
    composer: "J. H. Kwabena Nketia",
    price: 13.75,
    description:
      "A sacred hymn based on traditional Adowa rhythms, blending Twi lyrics with Western choral harmonies.",
    imageUrl: "/scores/score3.png",
    category: "Sacred Choral",
    voicing: "SATB",
    difficulty: "Intermediate",
    occasion: "General",
    country: "Ghana",
    previewUrl: "/scores/score1.png",
  },
  {
    id: "11",
    title: "Kpanlogo Celebration",
    composer: "Nana Danso Abiam",
    price: 19.0,
    description:
      "An energetic festival piece featuring traditional Kpanlogo rhythms and call-and-response patterns for celebratory occasions.",
    imageUrl: "/scores/score4.jpg",
    category: "Festival",
    voicing: "SATB",
    difficulty: "Advanced",
    occasion: "Wedding",
    country: "Ghana",
    previewUrl: "/scores/score2.png",
  },
  {
    id: "12",
    title: "Sankofa Spirit",
    composer: "Akosua Adoma",
    price: 14.25,
    description:
      "A contemporary choral work exploring themes of heritage and wisdom, incorporating traditional Akan proverbs and melodies.",
    imageUrl: "/scores/score5.jpeg",
    category: "Contemporary Classical",
    voicing: "SSAATTBB",
    difficulty: "Advanced",
    occasion: "General",
    country: "Ghana",
    previewUrl: "/scores/score3.png",
  },
  {
    id: "13",
    title: "Osagyefo March",
    composer: "Philip Gbeho",
    price: 12.0,
    description:
      "A dignified processional march honoring Ghana's first president, suitable for state occasions and commemorative events.",
    imageUrl: "/scores/score1.png",
    category: "Patriotic",
    voicing: "TTBB",
    difficulty: "Intermediate",
    occasion: "National",
    country: "Ghana",
    previewUrl: "/scores/score5.jpeg",
  },
  {
    id: "14",
    title: "Abibiman Nyame",
    composer: "Newlove Annan",
    price: 10.5,
    description:
      "A gentle praise song celebrating God's blessings on Ghana, written in accessible SAB voicing for smaller choirs.",
    imageUrl: "/scores/score7.svg",
    category: "Sacred Choral",
    voicing: "SAB",
    difficulty: "Easy",
    occasion: "General",
    country: "Ghana",
    previewUrl: "/scores/score4.jpg",
  },
  {
    id: "15",
    title: "Asante Kete Medley",
    composer: "Kofi Amoakohene",
    price: 17.5,
    description:
      "A sophisticated medley of traditional Asante court music arranged for modern choir with optional traditional instruments.",
    imageUrl: "/scores/score5.jpeg",
    category: "Traditional",
    voicing: "SATB",
    difficulty: "Advanced",
    occasion: "Cultural",
    country: "Ghana",
    previewUrl: "/scores/score5.jpeg",
  },
];

export const eventsData: ChoralEvent[] = [
  {
    id: "1",
    title: "Accra ChoralFest 2024",
    organizer: "Ghana National Choir",
    date: "August 15-18, 2024",
    location: "Accra, Ghana",
    description:
      "A four-day festival featuring workshops, competitions, and gala concerts with choirs from across West Africa.",
    imageUrl: "/events/image1.jpg",
    price: 50.0,
  },
  {
    id: "2",
    title: "Nairobi Chamber Choir in Concert",
    organizer: "Nairobi Chamber Choir",
    date: "September 5, 2024",
    location: "Nairobi, Kenya",
    description:
      "An evening of classical and contemporary choral music, featuring works by Kenyan and international composers.",
    imageUrl: "/events/image2.jpg",
    price: 25.0,
  },
  {
    id: "3",
    title: "Cape Town International Choral Competition",
    organizer: "Cape Town Music Society",
    date: "October 10-13, 2024",
    location: "Cape Town, South Africa",
    description:
      "One of Africa's most prestigious choral competitions, attracting top choirs from around the globe.",
    imageUrl: "/events/image3.jpg",
    price: "Free",
  },
  {
    id: "4",
    title: "Lagos Gospel Choir Workshop",
    organizer: "The Lagos Community Gospel Choir",
    date: "November 2, 2024",
    location: "Lagos, Nigeria",
    description:
      "A one-day workshop open to all singers, focusing on vocal technique, harmony, and performance in the gospel tradition.",
    imageUrl: "/events/image4.jpg",
    price: 15.0,
  },
];

export const blogData: BlogPost[] = [
  {
    slug: "the-rise-of-contemporary-african-choral-music",
    title: "The Rise of Contemporary African Choral Music",
    author: "Dr. Imani Nkrumah",
    publishedDate: "June 20, 2024",
    excerpt:
      "From Nigeria to South Africa, a new generation of composers is redefining what it means to write choral music in Africa...",
    content:
      "<p>From Nigeria to South Africa, a new generation of composers is redefining what it means to write choral music in Africa. Blending traditional rhythms, languages, and instruments with Western classical forms, these artists are creating a sound that is both unique and universally appealing. This article explores the key figures, trends, and works that are shaping this exciting new movement.</p><p>We delve into the works of composers like Ayo Bankole and Joshua Uzoigwe, examining how they laid the groundwork for today's vibrant scene. We also look at the role of universities and cultural institutions in nurturing this new talent. The challenges, such as funding and international exposure, are significant, but the passion and creativity of these musicians are undeniable. The future of African choral music is bright, and the world is beginning to listen.</p>",
    imageUrl: "/blogimg.jpg",
    tags: ["Contemporary", "Composers", "Analysis"],
  },
  {
    slug: "a-guide-to-south-african-choral-styles",
    title: "A Listener's Guide to South African Choral Styles",
    author: "Bongani Ndlovu",
    publishedDate: "July 5, 2024",
    excerpt:
      "South Africa boasts one of the richest and most diverse choral traditions in the world. From the powerful harmonies of Isicathamiya to the intricate rhythms of Maskandi...",
    content:
      "<p>South Africa boasts one of the richest and most diverse choral traditions in the world. From the powerful harmonies of Isicathamiya, famously brought to global attention by Ladysmith Black Mambazo, to the intricate rhythms of Maskandi-influenced choral works, the country is a treasure trove of vocal music. This guide provides an introduction to the major styles, key artists, and historical context you need to appreciate this incredible musical landscape.</p><p>We explore the call-and-response patterns common in Zulu choral music, the gospel influences that have shaped so much of the repertoire, and the role of choral singing in the struggle against apartheid. Whether you are a seasoned choral enthusiast or a newcomer to this music, this guide will deepen your understanding and appreciation of South Africa's vocal heritage.</p>",
    imageUrl: "/blogimg2.jpg",
    tags: ["South Africa", "Isicathamiya", "Musicology"],
  },
  {
    slug: "preserving-our-musical-heritage-the-digital-archive-project",
    title: "Preserving Our Musical Heritage: The Digital Archive Project",
    author: "The Sheet Music Africa Team",
    publishedDate: "July 15, 2024",
    excerpt:
      "Sheet Music Africa is proud to announce the launch of our Digital Archive Project, an initiative to digitize and preserve rare and unpublished African sheet music...",
    content:
      "<p>Sheet Music Africa is proud to announce the launch of our Digital Archive Project, an initiative to digitize and preserve rare and unpublished African sheet music. For centuries, much of our continent's musical heritage has been passed down orally or existed in fragile manuscripts, vulnerable to loss and decay. This project aims to safeguard these cultural treasures for future generations.</p><p>Working with libraries, universities, and private collectors across the continent, we are creating high-quality digital scans of these works and making them accessible to musicians, scholars, and the public. This is a monumental task, and we are calling on our community to help. Learn more about how you can contribute to this vital effort to protect and celebrate Africa's musical legacy.</p>",
    imageUrl: "/image4.jpg",
    tags: ["Preservation", "Community", "Sheet Music Africa"],
  },
];
