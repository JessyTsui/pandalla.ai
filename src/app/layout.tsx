import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { SpeedInsights } from '@vercel/speed-insights/next';
import "node_modules/react-modal-video/css/modal-video.css";
import "../styles/index.css";
import "../styles/ursine-theme.css";

import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Pandalla.ai | Leading Synthetic Data and AI Solutions",
  description: "Pandalla.ai offers cutting-edge synthetic data generation and AI technologies to help businesses enhance data quality, protect privacy, and accelerate innovation. Explore our solutions and unlock the power of AI.",
  keywords: "synthetic data, artificial intelligence, AI solutions, data privacy, machine learning, Pandalla.ai",
  openGraph: {
    title: "Pandalla.ai - Pioneering Synthetic Data and AI Innovation",
    description: "Elevate your data strategy, safeguard privacy, and accelerate innovation with Pandalla.ai's state-of-the-art synthetic data and AI technologies.",
    images: [
      {
        url: "https://pandalla.ai/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pandalla.ai - Synthetic Data and AI Solutions",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@PandallaAI',
    creator: '@PandallaAI',
    title: 'Pandalla.AI - Cutting-edge AI Research and Applications',
    description: 'Discover how Pandalla.AI is shaping the future of artificial intelligence with innovative solutions and expert insights.',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head>
        <link rel="icon" href="/images/logo/pandalla-image.png_16x16.ico" sizes="any" />
      </head>
      <body className="bg-[#FCFCFC] dark:bg-black">
        <Providers>
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
        <SpeedInsights />
      </body>
    </html>
  );
}

import { Providers } from "./providers";