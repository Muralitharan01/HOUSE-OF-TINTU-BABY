export type ThemeMode = 'morning' | 'evening' | 'night' | 'auto';

export interface ThemeConfig {
  mode: ThemeMode;
  currentActiveTheme: 'morning' | 'evening' | 'night';
  allowAdminOverride: boolean;
}

export interface AnimationConfig {
  enabled: boolean;
  speed: 'low' | 'medium' | 'high';
  reducedMotion: boolean;
}

export interface AgeGroup {
  id: string;
  name: string;
  ageRange: string;
  description: string;
  imageUrl: string;
  slug: string;
}

export interface ProductCollection {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  themeName: string;
  imageUrl: string;
  badge?: string;
  slug: string;
}

export interface ProductVariant {
  id: string;
  sku: string;
  name: string;
  colorName?: string;
  colorHex?: string;
  size?: string;
  material?: string;
  price: number;
  originalPrice?: number;
  stock: number;
  imageUrls: string[];
}

export interface Product {
  id: string;
  name: string;
  slug: string;
  subtitle: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  badges: ('new' | 'bestseller' | 'handmade' | 'organic' | 'featured' | 'loved')[];
  category: string;
  ageGroup: string;
  collection: string;
  images: string[];
  description: string;
  features: string[];
  material: string;
  isOrganic: boolean;
  variants: ProductVariant[];
  inStock: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  selectedVariant?: ProductVariant;
  quantity: number;
  giftWrap: boolean;
}

export interface Review {
  id: string;
  authorName: string;
  rating: number;
  date: string;
  comment: string;
  verifiedPurchase: boolean;
  productName?: string;
  avatarUrl?: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  category: string;
  readTimeMinutes: number;
  publishedAt: string;
  author: {
    name: string;
    role: string;
    avatarUrl: string;
  };
  imageUrl: string;
}

export interface MemoryBoxItem {
  id: string;
  title: string;
  date: string;
  category: 'First Smile' | 'First Step' | 'First Birthday' | 'Christmas Gift' | 'New Adventure' | string;
  imageUrl: string;
  description: string;
}
