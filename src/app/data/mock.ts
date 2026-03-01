
export interface Movie {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  poster: string;
  genre: string[];
  year: number;
  rating: string;
  duration: string;
  cast: string[];
  tags: string[]; // "Premium", "New", "Free", "New Episode", "New Season", "Top 10"
  episodes?: Episode[];
  season?: number;
  totalEpisodes?: number;
  language?: string;
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  duration: string;
  thumbnail: string;
  description: string;
}

export interface Banner {
  id: string;
  movieId: string;
  image: string;
  title: string;
  subtitle: string;
}

export interface Category {
  id: string;
  title: string;
  items: Movie[];
  variant?: "poster" | "thumbnail" | "top10" | "wide";
}

const images = [
  "https://images.unsplash.com/photo-1765510296004-614b6cc204da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3ZpZSUyMHBvc3RlciUyMGFjdGlvbnxlbnwxfHx8fDE3NzE1OTIzNTB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1764581659095-ad0447049ce0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWElMjBmaWxtJTIwbW92aWUlMjBzY2VuZXxlbnwxfHx8fDE3NzE1OTIzNjB8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1590090457779-b585a4ead239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrb3JlYW4lMjBkcmFtYSUyMGNvdXBsZXxlbnwxfHx8fDE3NzE1OTIzNjN8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&q=80&w=1080",
  "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1080",
  "https://images.unsplash.com/photo-1440404653325-ab127d49abc1?auto=format&fit=crop&q=80&w=1080",
  "https://images.unsplash.com/photo-1512113569124-0a89d11439d7?auto=format&fit=crop&q=80&w=1080",
  "https://images.unsplash.com/photo-1735612919187-d03df88f153f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMGRyYW1hJTIwcm9tYW50aWMlMjBzY2VuZXxlbnwxfHx8fDE3NzIzNDcyMzR8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1749214358403-f6eeba9ae251?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJ0aWFsJTIwYXJ0cyUyMHdhcnJpb3IlMjBkYXJrfGVufDF8fHx8MTc3MjM0NzIzNHww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1688377051459-aebb99b42bff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaXR5JTIwbmlnaHQlMjBuZW9uJTIwY3liZXJwdW5rfGVufDF8fHx8MTc3MjM0NzIzNXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1759209402969-be3ea5027356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raW5nJTIwY2hlZiUyMGtpdGNoZW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcyMzQ3MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1636056471685-1cfdfa9d2e4b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZXRlY3RpdmUlMjBteXN0ZXJ5JTIwZGFyayUyMHRocmlsbGVyfGVufDF8fHx8MTc3MjM0NzIzNXww&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1762537132884-cc6bbde0667a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGFuZHVwJTIwY29tZWR5JTIwcGVyZm9ybWVyJTIwc3RhZ2V8ZW58MXx8fHwxNzcyMzQ3MjM2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1515688272562-004db9d10783?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwZXBpYyUyMGxhbmRzY2FwZSUyMGNhc3RsZXxlbnwxfHx8fDE3NzIzNDcyMzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1769029265788-d7921a103403?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VydHJvb20lMjBkcmFtYSUyMGxlZ2FsJTIwdGhyaWxsZXJ8ZW58MXx8fHwxNzcyMzQ3MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1707141955104-7e14e6710736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmltZSUyMGFuaW1hdGlvbiUyMGNvbG9yZnVsJTIwamFwYW5lc2V8ZW58MXx8fHwxNzcyMzQ3MjM3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  "https://images.unsplash.com/photo-1641381618467-88ef8668a4b5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3Jyb3IlMjBkYXJrJTIwY3JlZXB5JTIwYWJhbmRvbmVkfGVufDF8fHx8MTc3MjM0NzIzN3ww&ixlib=rb-4.1.0&q=80&w=1080",
];

export const MOCK_MOVIES: Movie[] = [
  {
    id: "1",
    title: "Shadow Warrior",
    description: "A mysterious warrior fights to reclaim his honor in a dystopian future. When the ancient code of the warriors is threatened by a corrupt empire, one man must rise from the ashes to protect everything he holds dear.",
    thumbnail: images[0],
    poster: images[0],
    genre: ["Action", "Sci-Fi"],
    year: 2024,
    rating: "PG-13",
    duration: "2h 15m",
    cast: ["John Doe", "Jane Smith", "Mike Chen"],
    tags: ["Premium", "New"],
    season: 3,
    totalEpisodes: 43,
    language: "ภาษาไทย",
    episodes: [
      { id: "e1", number: 1, title: "The Awakening", duration: "45 min", thumbnail: images[0], description: "The warrior awakens from a deep slumber to find his world changed." },
      { id: "e2", number: 2, title: "First Blood", duration: "42 min", thumbnail: images[8], description: "First confrontation with the empire's soldiers." },
      { id: "e3", number: 3, title: "The Code", duration: "48 min", thumbnail: images[3], description: "Ancient secrets of the warrior code are revealed." },
      { id: "e4", number: 4, title: "Betrayal", duration: "44 min", thumbnail: images[9], description: "An ally turns against the warrior." },
      { id: "e5", number: 5, title: "Rising Storm", duration: "46 min", thumbnail: images[13], description: "The final battle approaches." },
      { id: "e6", number: 6, title: "ครั้งก่อน", duration: "50 min", thumbnail: images[14], description: "ภาพไฮไลต์แสดงให้เห็นตอนจบที่เริ่มออกจากสำนักงานอิสระการรัฐและการ" },
    ],
  },
  {
    id: "2",
    title: "Love in Seoul",
    description: "A romantic tale of two strangers meeting in the heart of Seoul. Their paths cross at a quaint bookshop, and what starts as a chance encounter blossoms into an unforgettable love story.",
    thumbnail: images[2],
    poster: images[7],
    genre: ["Romance", "Drama"],
    year: 2023,
    rating: "PG",
    duration: "16 Episodes",
    cast: ["Park Ji-min", "Kim Soo-hyun", "Lee Da-hee"],
    tags: ["Free"],
    season: 1,
    totalEpisodes: 16,
    language: "Korean",
    episodes: [
      { id: "e1", number: 1, title: "The Meeting", duration: "60 min", thumbnail: images[2], description: "Two strangers meet at a bookshop in Gangnam." },
      { id: "e2", number: 2, title: "Coffee Date", duration: "58 min", thumbnail: images[7], description: "Their first coffee date turns into something unexpected." },
    ],
  },
  {
    id: "3",
    title: "Cinema Paradiso Remake",
    description: "A nostalgic look at the golden age of cinema. A young boy's friendship with the local movie theater projectionist shapes his life and dreams forever.",
    thumbnail: images[1],
    poster: images[1],
    genre: ["Drama", "Classic"],
    year: 2024,
    rating: "G",
    duration: "1h 50m",
    cast: ["Enzo Rossi", "Maria Bianchi"],
    tags: ["Premium"],
  },
  {
    id: "4",
    title: "Urban Legend",
    description: "City lights hide dark secrets. A detective uncovers a web of lies and deceit in the neon-lit streets of a modern metropolis.",
    thumbnail: images[9],
    poster: images[9],
    genre: ["Thriller", "Mystery"],
    year: 2022,
    rating: "R",
    duration: "1h 45m",
    cast: ["Tom Hardy", "Emily Blunt"],
    tags: ["New"],
  },
  {
    id: "5",
    title: "The Great Escape",
    description: "An epic adventure across the galaxy. A ragtag group of misfits must band together to save the universe from an ancient threat.",
    thumbnail: images[4],
    poster: images[4],
    genre: ["Adventure", "Sci-Fi"],
    year: 2023,
    rating: "PG-13",
    duration: "2h 30m",
    cast: ["Chris Pratt", "Zoe Saldana"],
    tags: ["Premium"],
  },
  {
    id: "6",
    title: "Silent Voice",
    description: "A touching story of redemption and friendship. An animated masterpiece that explores themes of bullying, forgiveness, and human connection.",
    thumbnail: images[15],
    poster: images[15],
    genre: ["Anime", "Drama"],
    year: 2021,
    rating: "PG",
    duration: "2h 00m",
    cast: ["Voice Actor A", "Voice Actor B"],
    tags: ["Free"],
  },
  {
    id: "7",
    title: "Golden Hour",
    description: "Documenting the most beautiful sunsets around the world. A breathtaking visual journey through nature's most stunning moments.",
    thumbnail: images[6],
    poster: images[6],
    genre: ["Documentary", "Nature"],
    year: 2024,
    rating: "G",
    duration: "1h 30m",
    cast: ["David Attenborough"],
    tags: ["Free"],
  },
  {
    id: "8",
    title: "Neon Streets",
    description: "In a cyberpunk city where technology controls everything, a hacker fights to expose the truth behind the mega-corporations.",
    thumbnail: images[9],
    poster: images[9],
    genre: ["Sci-Fi", "Thriller"],
    year: 2025,
    rating: "R",
    duration: "10 Episodes",
    cast: ["Keanu Reeves", "Gemma Chan"],
    tags: ["Premium", "New"],
    season: 1,
    totalEpisodes: 10,
    language: "English",
  },
  {
    id: "9",
    title: "Chef's Table Asia",
    description: "Follow the stories of remarkable chefs from across Asia as they push the boundaries of culinary art and tradition.",
    thumbnail: images[10],
    poster: images[10],
    genre: ["Documentary", "Food"],
    year: 2024,
    rating: "G",
    duration: "8 Episodes",
    cast: ["Various Chefs"],
    tags: ["New Episode"],
  },
  {
    id: "10",
    title: "The Investigator",
    description: "A brilliant but troubled detective takes on the most complex cases that no one else can solve.",
    thumbnail: images[11],
    poster: images[11],
    genre: ["Crime", "Drama"],
    year: 2023,
    rating: "R",
    duration: "12 Episodes",
    cast: ["Benedict Cumberbatch", "Andrew Scott"],
    tags: ["Premium"],
  },
  {
    id: "11",
    title: "Comedy Night Live",
    description: "The best stand-up comedians from around the world come together for an unforgettable night of laughter.",
    thumbnail: images[12],
    poster: images[12],
    genre: ["Comedy", "Stand-Up"],
    year: 2025,
    rating: "PG-13",
    duration: "1h 30m",
    cast: ["Various Comedians"],
    tags: ["Free", "New"],
  },
  {
    id: "12",
    title: "Kingdom of Eternity",
    description: "An epic fantasy saga about warring kingdoms, ancient magic, and a prophecy that could change the fate of the world.",
    thumbnail: images[13],
    poster: images[13],
    genre: ["Fantasy", "Adventure"],
    year: 2024,
    rating: "PG-13",
    duration: "24 Episodes",
    cast: ["Henry Cavill", "Cate Blanchett"],
    tags: ["Premium", "New Season"],
    season: 2,
    totalEpisodes: 24,
  },
  {
    id: "13",
    title: "สูท",
    description: "ภาพไฮไลต์แสดงให้เห็นตอนจบที่เริ่มออกจากสำนักงานอิสระการรัฐและการ ตอนจบในเรื่องราวของราชาวิชาราจารย์",
    thumbnail: images[14],
    poster: images[14],
    genre: ["Drama", "Legal"],
    year: 2024,
    rating: "16+",
    duration: "43 นาที",
    cast: ["กานต์ทิต มายศ", "แมทธิว 13", "ดลกิจ", "ชาคาร์ท ดำ เกยีทที่ เ", "คิดเสียที"],
    tags: ["Premium"],
    season: 3,
    totalEpisodes: 43,
    language: "ภาษาไทย",
    episodes: [
      { id: "e1", number: 1, title: "ตอนที่ 1", duration: "43 นาที", thumbnail: images[14], description: "จุดเริ่มต้นของเรื่องราว" },
      { id: "e2", number: 2, title: "ตอนที่ 2", duration: "45 นาที", thumbnail: images[11], description: "เรื่องราวเข้มข้นมากขึ้น" },
      { id: "e3", number: 3, title: "ตอนที่ 3", duration: "42 นาที", thumbnail: images[3], description: "ความลับเริ่มถูกเปิดเผย" },
      { id: "e4", number: 4, title: "ตอนที่ 4", duration: "44 นาที", thumbnail: images[9], description: "สถานการณ์ทวีความรุนแรง" },
      { id: "e5", number: 5, title: "ตอนที่ 5", duration: "46 นาที", thumbnail: images[0], description: "จุดพลิกผันของเรื่อง" },
      { id: "e6", number: 6, title: "ครั้งก่อน", duration: "50 นาที", thumbnail: images[14], description: "ภาพไฮไลต์แสดงให้เห็นตอนจบที่เริ่มออกจากสำนักงานอิสระการรัฐและการ" },
    ],
  },
  {
    id: "14",
    title: "Dark Hollow",
    description: "A group of friends ventures into an abandoned asylum, only to discover that the horrors inside are far too real.",
    thumbnail: images[16],
    poster: images[16],
    genre: ["Horror", "Thriller"],
    year: 2024,
    rating: "R",
    duration: "1h 45m",
    cast: ["Florence Pugh", "Milly Alcock"],
    tags: ["New"],
  },
];

export const MOCK_BANNERS: Banner[] = [
  {
    id: "b1",
    movieId: "1",
    image: images[0],
    title: "Shadow Warrior",
    subtitle: "New Season Available Now",
  },
  {
    id: "b2",
    movieId: "2",
    image: images[7],
    title: "Love in Seoul",
    subtitle: "Trending Romance",
  },
  {
    id: "b3",
    movieId: "13",
    image: images[14],
    title: "สูท",
    subtitle: "ซีซั่น 3 ตอนใหม่",
  },
  {
    id: "b4",
    movieId: "12",
    image: images[13],
    title: "Kingdom of Eternity",
    subtitle: "New Season Now Streaming",
  },
];

// Netflix-style categories
export const MOCK_CATEGORIES: Category[] = [
  {
    id: "c-continue",
    title: "Continue Watching",
    items: [MOCK_MOVIES[0], MOCK_MOVIES[12], MOCK_MOVIES[1], MOCK_MOVIES[7]],
    variant: "wide",
  },
  {
    id: "c-top10",
    title: "Top 10 in Thailand Today",
    items: [MOCK_MOVIES[12], MOCK_MOVIES[0], MOCK_MOVIES[7], MOCK_MOVIES[1], MOCK_MOVIES[11], MOCK_MOVIES[4], MOCK_MOVIES[9], MOCK_MOVIES[3], MOCK_MOVIES[13], MOCK_MOVIES[5]],
    variant: "top10",
  },
  {
    id: "c-popular",
    title: "Current Popular",
    items: [MOCK_MOVIES[7], MOCK_MOVIES[12], MOCK_MOVIES[11], MOCK_MOVIES[8], MOCK_MOVIES[3], MOCK_MOVIES[13]],
    variant: "poster",
  },
  {
    id: "c-because-shadow",
    title: "Because you watched Shadow Warrior",
    items: [MOCK_MOVIES[7], MOCK_MOVIES[3], MOCK_MOVIES[11], MOCK_MOVIES[4], MOCK_MOVIES[13]],
    variant: "poster",
  },
  {
    id: "c-youlike",
    title: "You May Also Like",
    items: [MOCK_MOVIES[1], MOCK_MOVIES[5], MOCK_MOVIES[8], MOCK_MOVIES[2], MOCK_MOVIES[10]],
    variant: "poster",
  },
  {
    id: "c-similar",
    title: "Similar to Your Watch",
    items: [MOCK_MOVIES[9], MOCK_MOVIES[3], MOCK_MOVIES[13], MOCK_MOVIES[7], MOCK_MOVIES[4]],
    variant: "poster",
  },
  {
    id: "c-style",
    title: "People from Your Style Also Watch",
    items: [MOCK_MOVIES[11], MOCK_MOVIES[12], MOCK_MOVIES[2], MOCK_MOVIES[6], MOCK_MOVIES[10]],
    variant: "poster",
  },
  {
    id: "c-comedy",
    title: "Stand-Up Comedy",
    items: [MOCK_MOVIES[10], MOCK_MOVIES[12], MOCK_MOVIES[5], MOCK_MOVIES[8]],
    variant: "poster",
  },
  {
    id: "c-asian",
    title: "Asian Drama",
    items: [MOCK_MOVIES[1], MOCK_MOVIES[12], MOCK_MOVIES[2], MOCK_MOVIES[5], MOCK_MOVIES[8]],
    variant: "poster",
  },
  {
    id: "c-thriller",
    title: "Thrilling TV Shows",
    items: [MOCK_MOVIES[3], MOCK_MOVIES[7], MOCK_MOVIES[9], MOCK_MOVIES[13], MOCK_MOVIES[4]],
    variant: "thumbnail",
  },
];
