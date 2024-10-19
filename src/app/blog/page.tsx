import dynamic from 'next/dynamic'
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

// 动态导入 BlogList 组件
const BlogList = dynamic(() => import("@/components/Blog/BlogList"), {
  ssr: false,
  loading: () => <p>loading...</p>
});


export const metadata: Metadata = {
  title: "Pandalla.ai | Leading Synthetic Data and AI Solutions",
  description: "Pandalla.ai offers cutting-edge synthetic data generation and AI technologies to help businesses enhance data quality, protect privacy, and accelerate innovation. Explore our solutions and unlock the power of AI.",
  keywords: "synthetic data, artificial intelligence, AI solutions, data privacy, machine learning, Pandalla.ai",
  openGraph: {
    title: "Pandalla.ai - Pioneering Synthetic Data and AI Innovation",
    description: "Elevate your data strategy, safeguard privacy, and accelerate innovation with Pandalla.ai's state-of-the-art synthetic data and AI technologies.",
    images: [
      {
        url: "https://pandalla.ai/images/og-image.png",
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

const BlogPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Pandalla Blog"
        description="Compiled notes from the team"
      />
      <BlogList />
    </>
  );
};

export default BlogPage;