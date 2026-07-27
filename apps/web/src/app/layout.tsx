import type { Metadata } from 'next';
import './globals.css';
import { ThemeEngine } from '@/components/theme/ThemeEngine';
import { AnnouncementBar } from '@/components/layout/AnnouncementBar';
import { FloatingNavbar } from '@/components/layout/FloatingNavbar';
import { Footer } from '@/components/layout/Footer';
import { CartDrawer } from '@/components/cart/CartDrawer';

export const metadata: Metadata = {
  title: 'House of Tintu | Luxury Baby & Kids Boutique',
  description: 'Thoughtfully curated luxury baby & kids boutique. Organic clothes, handcrafted wooden toys, and heirloom nursery decor for little ones.',
  keywords: ['baby clothes', 'kids boutique', 'organic baby wear', 'wooden toys', 'luxury nursery', 'house of tintu'],
  openGraph: {
    title: 'House of Tintu | Luxury Baby & Kids Boutique',
    description: 'Thoughtfully curated luxury baby & kids boutique.',
    siteName: 'House of Tintu',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased selection:bg-[var(--color-brand-accent)] selection:text-white">
        <ThemeEngine>
          <AnnouncementBar />
          <FloatingNavbar />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <CartDrawer />
        </ThemeEngine>
      </body>
    </html>
  );
}
