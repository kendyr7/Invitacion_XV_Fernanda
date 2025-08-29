
import type { Metadata } from 'next';
import { Crimson_Text, Fleur_De_Leah } from 'next/font/google';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { AppProviders } from '@/components/AppProviders';
import { cn } from '@/lib/utils';

const crimsonText = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-crimson-text',
});

const fleurDeLeah = Fleur_De_Leah({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-fleur-de-leah',
});

export const metadata: Metadata = {
  title: 'Invitación XV Años Fernanda',
  description: 'Acompañanos a celebrar los XV Años de Fernanda Lara',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'),
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  openGraph: {
    title: 'Invitación XV Años Fernanda',
    description: 'Acompañanos a celebrar los XV Años de Fernanda Lara',
    type: 'website',
    siteName: 'Invitación XV Años Fernanda',
    images: [
      {
        url: '/xv.png',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Invitación XV Años Fernanda',
    description: 'Acompañanos a celebrar los XV Años de Fernanda Lara',
    images: ['/xv.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body 
        className={cn(
          "font-body antialiased",
          crimsonText.variable,
          fleurDeLeah.variable
        )} 
        suppressHydrationWarning
      >
        <AppProviders>
          {children}
          <Toaster />
        </AppProviders>
        <SpeedInsights />
      </body>
    </html>
  );
}
