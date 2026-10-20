import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./sass/main.scss";
import NavigationBar from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import GoogleAnalytics from "./components/googleAnalytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://abeeku-portfolio.vercel.app";

const siteTitle = "Abeeku Djokoto — Software Engineer + Product Designer";
const siteDescription =
  "I design and build digital products with a strong focus on usability, performance, and clean visual systems.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: "%s | Abeeku Djokoto",
  },
  description: siteDescription,
  keywords: [
    "Abeeku Djokoto",
    "software engineer",
    "product designer",
    "portfolio",
    "frontend",
    "React",
  ],
  authors: [{ name: "Abeeku Djokoto", url: siteUrl }],
  creator: "Abeeku Djokoto",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Abeeku Djokoto",
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Abeeku Djokoto — portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    creator: "@lar_riri",
    images: ["/twitter-image.png"],
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="html dark" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-background text-foreground antialiased`}
        suppressHydrationWarning
      >
        {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS ? (
          <GoogleAnalytics ga_id={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} />
        ) : null}
        <div className="flex flex-col gap-20 wrapper py-6">
          <NavigationBar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
