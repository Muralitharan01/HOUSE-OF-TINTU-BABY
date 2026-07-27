import type { Metadata } from 'next';
import './globals.css';
import { AdminSidebar } from '@/components/layout/AdminSidebar';

export const metadata: Metadata = {
  title: 'House of Tintu — Executive Admin Studio',
  description: 'Management & Control Studio for House of Tintu Ecommerce',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 font-sans min-h-screen flex antialiased">
        <AdminSidebar />
        <div className="flex-1 flex flex-col min-w-0 min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
