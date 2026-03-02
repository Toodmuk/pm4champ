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
  videoUrl?: string | null;
  trailerUrl?: string | null;
}

export interface Episode {
  id: string;
  number: number;
  title: string;
  duration: string;
  thumbnail: string;
  description: string;
  videoUrl?: string | null;
}

export interface AdVideo {
  id: string;
  title: string;
  brand: string;
  url: string | null;
  duration: number; // seconds
}

export const AD_VIDEOS: AdVideo[] = [
  {
    id: "ad-1",
    title: "Premium Upgrade",
    brand: "VIU Premium",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    duration: 15,
  },
  {
    id: "ad-2",
    title: "New Phone Launch",
    brand: "TechBrand",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    duration: 15,
  },
  {
    id: "ad-3",
    title: "Food Delivery Promo",
    brand: "FoodApp",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    duration: 10,
  },
];

const V = {
  bunny: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
  elephant: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
  sintel: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
  tears: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
  escapes: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
  meltdowns: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
  blazes: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
  fun: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
  joyrides: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
};

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
    title: "นักรบเงา",
    description: "นักรบลึกลับต่อสู้เพื่อเรียกเกียรติคืนในอนาคตที่มืดมิด เมื่อกฎโบราณของนักรบถูกคุกคามโดยจักรวรรดิที่ฉ้อฉล ชายคนเดียวต้องลุกขึ้นจากเถ้าถ่านเพื่อปกป้องทุกสิ่งที่เขารัก",
    thumbnail: images[0],
    poster: images[0],
    genre: ["Action", "Sci-Fi"],
    year: 2024,
    rating: "13+",
    duration: "6 ตอน",
    cast: ["ณเดชน์ คูกิมิยะ", "ใหม่ ดาวิกา", "มาริโอ้ เมาเร่อ"],
    tags: ["Premium", "New"],
    season: 3,
    totalEpisodes: 43,
    language: "ภาษาไทย",
    videoUrl: V.bunny,
    trailerUrl: V.escapes,
    episodes: [
      { id: "e1", number: 1, title: "การตื่น", duration: "45 นาที", thumbnail: images[0], description: "นักรบตื่นจากการหลับลึกและพบว่าโลกของเขาเปลี่ยนไป", videoUrl: V.bunny },
      { id: "e2", number: 2, title: "เลือดแรก", duration: "42 นาที", thumbnail: images[8], description: "การเผชิญหน้าครั้งแรกกับทหารของจักรวรรดิ", videoUrl: V.bunny },
      { id: "e3", number: 3, title: "กฎแห่งนักรบ", duration: "48 นาที", thumbnail: images[3], description: "ความลับโบราณของกฎนักรบถูกเปิดเผย", videoUrl: V.bunny },
      { id: "e4", number: 4, title: "การทรยศ", duration: "44 นาที", thumbnail: images[9], description: "พันธมิตรหันหลังให้นักรบ", videoUrl: V.bunny },
      { id: "e5", number: 5, title: "พายุกำลังมา", duration: "46 นาที", thumbnail: images[13], description: "การต่อสู้ครั้งสุดท้ายใกล้เข้ามา", videoUrl: V.bunny },
      { id: "e6", number: 6, title: "จุดจบ", duration: "50 นาที", thumbnail: images[14], description: "ตอนจบสุดระทึกที่ทุกอย่างจะถูกตัดสิน", videoUrl: V.bunny },
    ],
  },
  {
    id: "2",
    title: "รักที่โซล",
    description: "เรื่องราวโรแมนติกของคนแปลกหน้าสองคนที่พบกันกลางกรุงโซล เส้นทางของพวกเขาตัดกันที่ร้านหนังสือเล็กๆ และสิ่งที่เริ่มต้นจากการพบเจอโดยบังเอิญก็เบ่งบานเป็นเรื่องรักที่ไม่มีวันลืม",
    thumbnail: images[2],
    poster: images[7],
    genre: ["Romance", "Drama"],
    year: 2023,
    rating: "PG",
    duration: "16 ตอน",
    cast: ["พัค จีมิน", "คิม ซูฮยอน", "ลี ดาฮี"],
    tags: ["Free"],
    season: 1,
    totalEpisodes: 16,
    language: "Korean",
    videoUrl: V.elephant,
    trailerUrl: V.meltdowns,
    episodes: [
      { id: "e1", number: 1, title: "การพบกัน", duration: "60 นาที", thumbnail: images[2], description: "คนแปลกหน้าสองคนพบกันที่ร้านหนังสือในกังนัม", videoUrl: V.elephant },
      { id: "e2", number: 2, title: "นัดกาแฟ", duration: "58 นาที", thumbnail: images[7], description: "เดทกาแฟครั้งแรกกลายเป็นสิ่งที่ไม่คาดคิด", videoUrl: V.elephant },
      { id: "e3", number: 3, title: "ความลับ", duration: "55 นาที", thumbnail: images[2], description: "เธอซ่อนความลับที่อาจทำลายทุกอย่าง", videoUrl: V.elephant },
      { id: "e4", number: 4, title: "ฤดูใบไม้ผลิ", duration: "62 นาที", thumbnail: images[7], description: "ความรักเบ่งบานท่ามกลางดอกซากุระ", videoUrl: V.elephant },
    ],
  },
  {
    id: "3",
    title: "ร้านหนังสือเที่ยงคืน",
    description: "เรื่องราวของร้านหนังสือลึกลับที่เปิดเฉพาะตอนเที่ยงคืน ลูกค้าแต่ละคนที่เข้ามาจะได้พบกับหนังสือที่เปลี่ยนชีวิตพวกเขาตลอดกาล เจ้าของร้านผู้ลึกลับรู้ทุกอย่างเกี่ยวกับอดีตและอนาคตของทุกคน",
    thumbnail: images[1],
    poster: images[1],
    genre: ["Drama", "Fantasy"],
    year: 2024,
    rating: "G",
    duration: "8 ตอน",
    cast: ["ซง จุงกิ", "จอน จีฮยอน", "กง ยู"],
    tags: ["Premium"],
    season: 1,
    totalEpisodes: 8,
    language: "Korean",
    videoUrl: V.sintel,
    trailerUrl: V.escapes,
    episodes: [
      { id: "e1", number: 1, title: "ร้านเปิด", duration: "50 นาที", thumbnail: images[1], description: "ร้านหนังสือลึกลับเปิดประตูรับลูกค้าคนแรก", videoUrl: V.sintel },
      { id: "e2", number: 2, title: "หนังสือแห่งโชคชะตา", duration: "48 นาที", thumbnail: images[5], description: "ลูกค้าคนที่สองค้นพบหนังสือที่บอกอนาคต", videoUrl: V.sintel },
      { id: "e3", number: 3, title: "ความทรงจำที่หายไป", duration: "52 นาที", thumbnail: images[1], description: "หญิงสาวมาหาหนังสือที่จะช่วยเธอจำอดีต", videoUrl: V.sintel },
      { id: "e4", number: 4, title: "เจ้าของร้าน", duration: "45 นาที", thumbnail: images[5], description: "ความลับของเจ้าของร้านเริ่มถูกเปิดเผย", videoUrl: V.sintel },
    ],
  },
  {
    id: "4",
    title: "ถนนมืด กรุงเทพ",
    description: "แสงไฟเมืองซ่อนความลับมืดมิด นักสืบหนุ่มเปิดโปงเครือข่ายโกหกและหลอกลวงบนถนนที่เรืองแสงนีออนของกรุงเทพมหานคร เมื่อความจริงค่อยๆ ปรากฏ เขาต้องเลือกระหว่างความยุติธรรมกับความอยู่รอด",
    thumbnail: images[9],
    poster: images[9],
    genre: ["Thriller", "Mystery"],
    year: 2022,
    rating: "18+",
    duration: "10 ตอน",
    cast: ["วิชญ์วิสิฐ หิรัญวงษ์", "ชีรณัฐ ยูสานนท์", "อุษามณี ไวทยานนท์"],
    tags: ["New"],
    season: 1,
    totalEpisodes: 10,
    language: "ภาษาไทย",
    videoUrl: V.tears,
    trailerUrl: V.blazes,
    episodes: [
      { id: "e1", number: 1, title: "เริ่มต้นสืบ", duration: "45 นาที", thumbnail: images[9], description: "นักสืบหนุ่มรับคดีลึกลับคดีแรก", videoUrl: V.tears },
      { id: "e2", number: 2, title: "ร่องรอย", duration: "42 นาที", thumbnail: images[11], description: "หลักฐานเริ่มชี้ไปยังคนในวงการอำนาจ", videoUrl: V.tears },
      { id: "e3", number: 3, title: "ซอยมืด", duration: "48 นาที", thumbnail: images[9], description: "การไล่ล่าในซอยมืดของกรุงเทพ", videoUrl: V.tears },
      { id: "e4", number: 4, title: "ใครคือคนร้าย", duration: "44 นาที", thumbnail: images[11], description: "ผู้ต้องสงสัยทุกคนมีแรงจูงใจ", videoUrl: V.tears },
      { id: "e5", number: 5, title: "ความจริงที่เจ็บปวด", duration: "50 นาที", thumbnail: images[9], description: "ความจริงที่ถูกเปิดเผยทำลายทุกอย่าง", videoUrl: V.tears },
    ],
  },
  {
    id: "5",
    title: "มหาสมุทรแห่งดวงดาว",
    description: "การผจญภัยสุดอลังการข้ามกาแล็กซี่ กลุ่มคนที่ไม่น่าจะมารวมกันต้องร่วมมือกันเพื่อกอบกู้จักรวาลจากภัยคุกคามโบราณ เรื่องราวของมิตรภาพ ความกล้าหาญ และการเสียสละ",
    thumbnail: images[4],
    poster: images[4],
    genre: ["Adventure", "Sci-Fi"],
    year: 2023,
    rating: "13+",
    duration: "12 ตอน",
    cast: ["วิน เมธวิน", "ไบร์ท วชิรวิชญ์", "ตู ต้นสน"],
    tags: ["Premium"],
    season: 1,
    totalEpisodes: 12,
    language: "ภาษาไทย",
    videoUrl: V.bunny,
    trailerUrl: V.fun,
    episodes: [
      { id: "e1", number: 1, title: "จุดเริ่มต้น", duration: "50 นาที", thumbnail: images[4], description: "ภารกิจสุดท้ายเริ่มขึ้น", videoUrl: V.bunny },
      { id: "e2", number: 2, title: "ดาวดวงแรก", duration: "48 นาที", thumbnail: images[6], description: "ลงจอดบนดาวเคราะห์ลึกลับดวงแรก", videoUrl: V.bunny },
      { id: "e3", number: 3, title: "พันธมิตรใหม่", duration: "52 นาที", thumbnail: images[4], description: "พบเพื่อนร่วมทางใหม่ที่ไม่คาดคิด", videoUrl: V.bunny },
      { id: "e4", number: 4, title: "ภัยจากอวกาศ", duration: "45 นาที", thumbnail: images[6], description: "ภัยคุกคามจากห้วงอวกาศลึก", videoUrl: V.bunny },
    ],
  },
  {
    id: "6",
    title: "เสียงเงียบ",
    description: "เรื่องราวที่จับใจเกี่ยวกับการไถ่บาปและมิตรภาพ อนิเมชันระดับมาสเตอร์พีซที่สำรวจธีมเรื่องการกลั่นแกล้ง การให้อภัย และความเชื่อมโยงของมนุษย์ในโรงเรียนมัธยมแห่งหนึ่งในโตเกียว",
    thumbnail: images[15],
    poster: images[15],
    genre: ["Anime", "Drama"],
    year: 2021,
    rating: "PG",
    duration: "12 ตอน",
    cast: ["มิยุ อิริโนะ", "ซาโอริ ฮายามิ", "อาโออิ ยูกิ"],
    tags: ["Free"],
    season: 1,
    totalEpisodes: 12,
    language: "Japanese",
    videoUrl: V.elephant,
    trailerUrl: V.meltdowns,
    episodes: [
      { id: "e1", number: 1, title: "วันแรกที่โรงเรียน", duration: "24 นาที", thumbnail: images[15], description: "เด็กหนุ่มเข้าโรงเรียนมัธยมใหม่และพบเพื่อนเก่า", videoUrl: V.elephant },
      { id: "e2", number: 2, title: "บาดแผล", duration: "24 นาที", thumbnail: images[15], description: "ความทรงจำเจ็บปวดจากอดีตกลับมาหลอกหลอน", videoUrl: V.elephant },
      { id: "e3", number: 3, title: "มิตรภาพ", duration: "24 นาที", thumbnail: images[15], description: "มิตรภาพใหม่เริ่มก่อตัว", videoUrl: V.elephant },
      { id: "e4", number: 4, title: "การให้อภัย", duration: "24 นาที", thumbnail: images[15], description: "เส้นทางสู่การให้อภัยเริ่มต้น", videoUrl: V.elephant },
    ],
  },
  {
    id: "7",
    title: "เอเชียมหัศจรรย์",
    description: "สารคดีที่พาเดินทางสำรวจธรรมชาติที่สวยงามที่สุดในเอเชีย จากยอดเขาหิมาลัยสู่หมู่เกาะในทะเลอันดามัน การเดินทางอันน่าทึ่งผ่านช่วงเวลาที่งดงามที่สุดของธรรมชาติ",
    thumbnail: images[6],
    poster: images[6],
    genre: ["Documentary", "Nature"],
    year: 2024,
    rating: "G",
    duration: "6 ตอน",
    cast: ["พิธา ลิ้มเจริญรัตน์"],
    tags: ["Free"],
    season: 1,
    totalEpisodes: 6,
    language: "ภาษาไทย",
    videoUrl: V.sintel,
    trailerUrl: V.joyrides,
    episodes: [
      { id: "e1", number: 1, title: "หิมาลัย", duration: "45 นาที", thumbnail: images[6], description: "สำรวจยอดเขาที่สูงที่สุดในโลก", videoUrl: V.sintel },
      { id: "e2", number: 2, title: "ทะเลอันดามัน", duration: "42 นาที", thumbnail: images[6], description: "ดำดิ่งสู่โลกใต้ทะเลสีฟ้าใส", videoUrl: V.sintel },
      { id: "e3", number: 3, title: "ป่าฝนบอร์เนียว", duration: "48 นาที", thumbnail: images[6], description: "ป่าดิบชื้นที่เก่าแก่ที่สุดในโลก", videoUrl: V.sintel },
      { id: "e4", number: 4, title: "ภูเขาไฟญี่ปุ่น", duration: "44 นาที", thumbnail: images[6], description: "ความงามอันน่าเกรงขามของภูเขาไฟฟูจิ", videoUrl: V.sintel },
    ],
  },
  {
    id: "8",
    title: "ไซเบอร์ โซล 2077",
    description: "ในเมืองไซเบอร์พังก์ที่เทคโนโลยีควบคุมทุกอย่าง แฮกเกอร์สาวชาวเกาหลีต่อสู้เพื่อเปิดโปงความจริงเบื้องหลังบริษัทยักษ์ใหญ่ เธอต้องเลือกระหว่างความปลอดภัยของตัวเองกับอิสรภาพของทุกคน",
    thumbnail: images[9],
    poster: images[9],
    genre: ["Sci-Fi", "Thriller"],
    year: 2025,
    rating: "18+",
    duration: "10 ตอน",
    cast: ["จอน จีฮยอน", "พัค ซอจุน", "เบ ดูนา"],
    tags: ["Premium", "New"],
    season: 1,
    totalEpisodes: 10,
    language: "Korean",
    videoUrl: V.tears,
    trailerUrl: V.escapes,
    episodes: [
      { id: "e1", number: 1, title: "การเจาะระบบ", duration: "50 นาที", thumbnail: images[9], description: "แฮกเกอร์สาวเจาะระบบบริษัทยักษ์ใหญ่", videoUrl: V.tears },
      { id: "e2", number: 2, title: "ตัวตนลับ", duration: "48 นาที", thumbnail: images[9], description: "ตัวตนลับของเธอถูกค้นพบ", videoUrl: V.tears },
      { id: "e3", number: 3, title: "โลกเสมือน", duration: "52 นาที", thumbnail: images[9], description: "เข้าสู่โลกเสมือนที่ซ่อนความจริง", videoUrl: V.tears },
      { id: "e4", number: 4, title: "การหลบหนี", duration: "45 นาที", thumbnail: images[9], description: "ต้องหนีจากการไล่ล่าของบริษัท", videoUrl: V.tears },
      { id: "e5", number: 5, title: "ความจริงสุดท้าย", duration: "55 นาที", thumbnail: images[9], description: "ความจริงทั้งหมดถูกเปิดเผย", videoUrl: V.tears },
    ],
  },
  {
    id: "9",
    title: "ครัวเด็ดเอเชีย",
    description: "ติดตามเรื่องราวของเชฟผู้โดดเด่นจากทั่วเอเชีย ตั้งแต่สตรีทฟู้ดในกรุงเทพฯ ถึงร้านมิชลินสตาร์ในโตเกียว พวกเขาผลักดันขอบเขตของศิลปะการทำอาหารและประเพณี",
    thumbnail: images[10],
    poster: images[10],
    genre: ["Documentary", "Food"],
    year: 2024,
    rating: "G",
    duration: "8 ตอน",
    cast: ["เชฟเอียน", "เชฟป้อม", "เชฟชุมพล"],
    tags: ["New Episode"],
    season: 1,
    totalEpisodes: 8,
    language: "ภาษาไทย",
    videoUrl: V.bunny,
    trailerUrl: V.fun,
    episodes: [
      { id: "e1", number: 1, title: "สตรีทฟู้ด กรุงเทพฯ", duration: "45 นาที", thumbnail: images[10], description: "สำรวจสตรีทฟู้ดที่ดีที่สุดในเยาวราช", videoUrl: V.bunny },
      { id: "e2", number: 2, title: "ราเมนโตเกียว", duration: "42 นาที", thumbnail: images[10], description: "เชฟราเมนที่ทุ่มเทชีวิตให้ชามเดียว", videoUrl: V.bunny },
      { id: "e3", number: 3, title: "กิมจิ โซล", duration: "48 นาที", thumbnail: images[10], description: "ศิลปะการหมักกิมจิที่สืบทอดมาหลายชั่วอายุ", videoUrl: V.bunny },
      { id: "e4", number: 4, title: "ติ่มซำ ฮ่องกง", duration: "44 นาที", thumbnail: images[10], description: "ร้านติ่มซำเก่าแก่ที่เปิดมากว่า 100 ปี", videoUrl: V.bunny },
    ],
  },
  {
    id: "10",
    title: "นักสืบเชียงใหม่",
    description: "นักสืบอัจฉริยะแต่มีปัญหาส่วนตัว รับสืบคดีซับซ้อนที่ไม่มีใครไขได้ในเมืองเชียงใหม่ แต่ละคดีพาเขาเข้าสู่โลกมืดที่ซ่อนอยู่ใต้เมืองเก่าอันสงบ",
    thumbnail: images[11],
    poster: images[11],
    genre: ["Crime", "Drama"],
    year: 2023,
    rating: "18+",
    duration: "12 ตอน",
    cast: ["เวียร์ ศุกลวัฒน์", "แพทริเซีย กู๊ด", "ฟลุค เกริกพล"],
    tags: ["Premium"],
    season: 1,
    totalEpisodes: 12,
    language: "ภาษาไทย",
    videoUrl: V.sintel,
    trailerUrl: V.blazes,
    episodes: [
      { id: "e1", number: 1, title: "คดีแรก", duration: "45 นาที", thumbnail: images[11], description: "คดีฆาตกรรมลึกลับในคูเมือง", videoUrl: V.sintel },
      { id: "e2", number: 2, title: "ร่องรอยในวัด", duration: "42 นาที", thumbnail: images[11], description: "หลักฐานนำไปสู่วัดเก่าแก่", videoUrl: V.sintel },
      { id: "e3", number: 3, title: "คนใน", duration: "48 นาที", thumbnail: images[11], description: "ผู้ต้องสงสัยอยู่ใกล้กว่าที่คิด", videoUrl: V.sintel },
      { id: "e4", number: 4, title: "เขาวงกต", duration: "44 นาที", thumbnail: images[11], description: "การไล่ล่าในถ้ำใต้ดิน", videoUrl: V.sintel },
      { id: "e5", number: 5, title: "ตอนจบ", duration: "50 นาที", thumbnail: images[11], description: "ความจริงถูกเปิดเผยในที่สุด", videoUrl: V.sintel },
    ],
  },
  {
    id: "11",
    title: "ฮาข้ามคืน",
    description: "รวมตลกสแตนด์อัพที่ดีที่สุดจากทั่วเอเชีย ทั้งไทย เกาหลี ญี่ปุ่น และฟิลิปปินส์ มารวมกันในคืนแห่งเสียงหัวเราะที่จะทำให้คุณลืมทุกปัญหา",
    thumbnail: images[12],
    poster: images[12],
    genre: ["Comedy", "Variety"],
    year: 2025,
    rating: "13+",
    duration: "8 ตอน",
    cast: ["โน้ส อุดม", "เบิ้ล ปทุมราช", "อุ๋ย บุดดาเบลส"],
    tags: ["Free", "New"],
    season: 1,
    totalEpisodes: 8,
    language: "ภาษาไทย",
    videoUrl: V.elephant,
    trailerUrl: V.meltdowns,
    episodes: [
      { id: "e1", number: 1, title: "คืนเปิดตัว", duration: "60 นาที", thumbnail: images[12], description: "คืนแรกกับตลกสดจากเวทีกรุงเทพฯ", videoUrl: V.elephant },
      { id: "e2", number: 2, title: "ตลกเกาหลี", duration: "55 นาที", thumbnail: images[12], description: "คอมมาเดี้ยนชาวเกาหลีบุกเวที", videoUrl: V.elephant },
      { id: "e3", number: 3, title: "มันซ์จนร้อง", duration: "58 นาที", thumbnail: images[12], description: "รอบพิเศษที่มีแขกรับเชิญสุดเซอร์ไพรส์", videoUrl: V.elephant },
      { id: "e4", number: 4, title: "คืนสุดท้าย", duration: "65 นาที", thumbnail: images[12], description: "ไฟนอลโชว์ที่ทุกคนรวมพลังสุดฮา", videoUrl: V.elephant },
    ],
  },
  {
    id: "12",
    title: "อาณาจักรนิรันดร์",
    description: "มหากาพย์แฟนตาซีเกี่ยวกับอาณาจักรที่ทำสงคราม เวทมนตร์โบราณ และคำทำนายที่สามารถเปลี่ยนชะตากรรมของโลก สงครามครั้งใหญ่กำลังจะเริ่มขึ้น และเจ้าชายผู้ถูกเนรเทศคือความหวังสุดท้าย",
    thumbnail: images[13],
    poster: images[13],
    genre: ["Fantasy", "Adventure"],
    year: 2024,
    rating: "13+",
    duration: "24 ตอน",
    cast: ["จูจีฮุน", "คิม นัมกิล", "ซอเยจี"],
    tags: ["Premium", "New Season"],
    season: 2,
    totalEpisodes: 24,
    language: "Korean",
    videoUrl: V.tears,
    trailerUrl: V.joyrides,
    episodes: [
      { id: "e1", number: 1, title: "กลับมา", duration: "60 นาที", thumbnail: images[13], description: "เจ้าชายผู้ถูกเนรเทศกลับมา", videoUrl: V.tears },
      { id: "e2", number: 2, title: "พันธมิตร", duration: "55 นาที", thumbnail: images[13], description: "รวบรวมพันธมิตรเพื่อทวงบัลลังก์", videoUrl: V.tears },
      { id: "e3", number: 3, title: "เวทมนตร์ตื่น", duration: "58 นาที", thumbnail: images[13], description: "พลังเวทมนตร์โบราณถูกปลุกขึ้น", videoUrl: V.tears },
      { id: "e4", number: 4, title: "สงคราม", duration: "62 นาที", thumbnail: images[13], description: "สงครามครั้งใหญ่เริ่มขึ้น", videoUrl: V.tears },
      { id: "e5", number: 5, title: "คำทำนาย", duration: "55 นาที", thumbnail: images[13], description: "คำทำนายเริ่มเป็นจริง", videoUrl: V.tears },
    ],
  },
  {
    id: "13",
    title: "สูท",
    description: "ทนายความหนุ่มอัจฉริยะที่ไม่มีใบอนุญาตถูกจ้างโดยทนายระดับตำนาน ทั้งคู่ต้องร่วมกันสู้คดีที่ยากที่สุด ขณะที่ซ่อนความลับที่อาจทำลายอาชีพทั้งคู่",
    thumbnail: images[14],
    poster: images[14],
    genre: ["Drama", "Legal"],
    year: 2024,
    rating: "16+",
    duration: "43 นาที",
    cast: ["กานต์ทิต มายศ", "แมทธิว ดีน", "ดลกิจ สิทธิวรรณ", "ชาคาร์ท ดำรงศิลป์"],
    tags: ["Premium"],
    season: 3,
    totalEpisodes: 43,
    language: "ภาษาไทย",
    videoUrl: V.bunny,
    trailerUrl: V.escapes,
    episodes: [
      { id: "e1", number: 1, title: "ตอนที่ 1: ทนายลับ", duration: "43 นาที", thumbnail: images[14], description: "ชายหนุ่มอัจฉริยะถูกจ้างเข้าสำนักงานทนายชั้นนำ", videoUrl: V.bunny },
      { id: "e2", number: 2, title: "ตอนที่ 2: คดีแรก", duration: "45 นาที", thumbnail: images[11], description: "คดีแรกที่ต้องสู้ในศาล", videoUrl: V.bunny },
      { id: "e3", number: 3, title: "ตอนที่ 3: ความลับ", duration: "42 นาที", thumbnail: images[3], description: "ความลับเริ่มถูกเปิดเผย", videoUrl: V.bunny },
      { id: "e4", number: 4, title: "ตอนที่ 4: ศัตรู", duration: "44 นาที", thumbnail: images[9], description: "ศัตรูตัวฉกาจปรากฏตัว", videoUrl: V.bunny },
      { id: "e5", number: 5, title: "ตอนที่ 5: พลิกคดี", duration: "46 นาที", thumbnail: images[0], description: "จุดพลิกผันของคดี", videoUrl: V.bunny },
      { id: "e6", number: 6, title: "ตอนที่ 6: ตอนจบ", duration: "50 นาที", thumbnail: images[14], description: "ตอนจบสุดระทึกที่ทุกอย่างถูกเปิดเผย", videoUrl: V.bunny },
    ],
  },
  {
    id: "14",
    title: "ผีสางบางกอก",
    description: "กลุ่มเพื่อนบุกเข้าไปในบ้านร้างกลางกรุงเทพฯ เพียงเพื่อค้นพบว่าสิ่งสยองขวัญข้างในนั้นเป็นจริงเกินกว่าจะจินตนาการ เรื่องเล่าผีที่สร้างจากตำนานเมืองจริงๆ",
    thumbnail: images[16],
    poster: images[16],
    genre: ["Horror", "Thriller"],
    year: 2024,
    rating: "18+",
    duration: "8 ตอน",
    cast: ["เจมส์ จิรายุ", "ต้าเหนิง กัญญาวีร์", "ออกัส วชิรวิชญ์"],
    tags: ["New"],
    season: 1,
    totalEpisodes: 8,
    language: "ภาษาไทย",
    videoUrl: V.sintel,
    trailerUrl: V.blazes,
    episodes: [
      { id: "e1", number: 1, title: "บ้านร้าง", duration: "45 นาที", thumbnail: images[16], description: "กลุ่มเพื่อนบุกเข้าบ้านร้างริมแม่น้ำ", videoUrl: V.sintel },
      { id: "e2", number: 2, title: "เสียงกระซิบ", duration: "42 นาที", thumbnail: images[16], description: "เสียงลึกลับดังมาจากชั้นใต้ดิน", videoUrl: V.sintel },
      { id: "e3", number: 3, title: "ตำนานเก่า", duration: "48 นาที", thumbnail: images[16], description: "ค้นพบตำนานน่าสะพรึงที่ซ่อนอยู่", videoUrl: V.sintel },
      { id: "e4", number: 4, title: "ทางออก", duration: "50 นาที", thumbnail: images[16], description: "ต้องหาทางออกก่อนที่จะสายเกินไป", videoUrl: V.sintel },
    ],
  },
];

export interface Banner {
  id: string;
  movieId: string;
  image: string;
  title: string;
  subtitle: string;
}

export const MOCK_BANNERS: Banner[] = [
  {
    id: "b1",
    movieId: "1",
    image: images[0],
    title: "นักรบเงา",
    subtitle: "ซีซั่นใหม่ พร้อมรับชมแล้ว",
  },
  {
    id: "b2",
    movieId: "2",
    image: images[7],
    title: "รักที่โซล",
    subtitle: "ซีรีส์โรแมนติกสุดฮิต",
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
    title: "อาณาจักรนิรันดร์",
    subtitle: "ซีซั่นใหม่ สตรีมมิ่งแล้ววันนี้",
  },
];

export interface Category {
  id: string;
  title: string;
  items: Movie[];
  variant: "poster" | "wide" | "top10" | "thumbnail";
}

// Netflix-style categories
export const MOCK_CATEGORIES: Category[] = [
  {
    id: "c-continue",
    title: "ดูต่อ",
    items: [MOCK_MOVIES[0], MOCK_MOVIES[12], MOCK_MOVIES[1], MOCK_MOVIES[7]],
    variant: "wide",
  },
  {
    id: "c-top10",
    title: "10 อันดับยอดนิยมในไทยวันนี้",
    items: [MOCK_MOVIES[12], MOCK_MOVIES[0], MOCK_MOVIES[7], MOCK_MOVIES[1], MOCK_MOVIES[11], MOCK_MOVIES[4], MOCK_MOVIES[9], MOCK_MOVIES[3], MOCK_MOVIES[13], MOCK_MOVIES[5]],
    variant: "top10",
  },
  {
    id: "c-popular",
    title: "กำลังมาแรง",
    items: [MOCK_MOVIES[7], MOCK_MOVIES[12], MOCK_MOVIES[11], MOCK_MOVIES[8], MOCK_MOVIES[3], MOCK_MOVIES[13]],
    variant: "poster",
  },
  {
    id: "c-because-shadow",
    title: "เพราะคุณดู นักรบเงา",
    items: [MOCK_MOVIES[7], MOCK_MOVIES[3], MOCK_MOVIES[11], MOCK_MOVIES[4], MOCK_MOVIES[13]],
    variant: "poster",
  },
  {
    id: "c-youlike",
    title: "คุณอาจชอบสิ่งนี้",
    items: [MOCK_MOVIES[1], MOCK_MOVIES[5], MOCK_MOVIES[8], MOCK_MOVIES[2], MOCK_MOVIES[10]],
    variant: "poster",
  },
  {
    id: "c-similar",
    title: "คล้ายกับที่คุณดู",
    items: [MOCK_MOVIES[9], MOCK_MOVIES[3], MOCK_MOVIES[13], MOCK_MOVIES[7], MOCK_MOVIES[4]],
    variant: "poster",
  },
  {
    id: "c-style",
    title: "คนสไตล์เดียวกันก็ดู",
    items: [MOCK_MOVIES[11], MOCK_MOVIES[12], MOCK_MOVIES[2], MOCK_MOVIES[6], MOCK_MOVIES[10]],
    variant: "poster",
  },
  {
    id: "c-comedy",
    title: "ตลก & วาไรตี้",
    items: [MOCK_MOVIES[10], MOCK_MOVIES[12], MOCK_MOVIES[5], MOCK_MOVIES[8]],
    variant: "poster",
  },
  {
    id: "c-asian",
    title: "ซีรีส์เอเชีย",
    items: [MOCK_MOVIES[1], MOCK_MOVIES[12], MOCK_MOVIES[2], MOCK_MOVIES[5], MOCK_MOVIES[8]],
    variant: "poster",
  },
  {
    id: "c-thriller",
    title: "ระทึกขวัญ",
    items: [MOCK_MOVIES[3], MOCK_MOVIES[7], MOCK_MOVIES[9], MOCK_MOVIES[13], MOCK_MOVIES[4]],
    variant: "thumbnail",
  },
];
