import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Outfit as Font } from "next/font/google";
import "./globals.css";

const fontSans = Font({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Rafael Fagundes",
  description: "Full-Stack Developer based in Canada",
  authors: {
    name: "Rafael Fagundes",
    url: "https://www.github.com/rafaelfagundes",
  },
  keywords: [
    "Full-Stack",
    "Developer",
    "Canada",
    "Ontario",
    "Toronto",
    "Kitchener",
    "Waterloo",
    "Rafael Fagundes",
    "Portfolio",
    "Next.js",
    "TailwindCSS",
    "TypeScript",
    "Vercel",
    "GraphQL",
    "React",
    "Node.js",
    "PostgreSQL",
    "Prisma",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "Azure",
    "Firebase",
    "MongoDB",
    "Redis",
  ],
  robots: "index, follow",
  category: "Software Development",
  creator: "Rafael Fagundes",
  publisher: "Rafael Fagundes",
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.rafaelfagundes.com",
    images: [
      {
        url: "https://www.rafaelfagundes.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Rafael Fagundes",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        {children}
      </body>
    </html>
  );
}
