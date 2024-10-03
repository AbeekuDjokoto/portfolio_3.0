import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./sass/main.scss";
import NavigationBar from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import GoogleAnalytics from "./components/googleAnalytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Abeeku's Porfolio`,
  description: "Product designer + software engineer portfolio",
  metadataBase: new URL("https://abeeku-portfolio.vercel.app/"),
  openGraph: {
    images: [
      "https://asset.cloudinary.com/dgos0voss/bc76d3cd22650bcf2b9725a408536b9c",
    ],
    type: "website",
    url: "https://abeeku-portfolio.vercel.app/",
    siteName: "Abeeku's Portfolio",
    locale: "en_US",
    title: "Abeeku's Portfolio",
    description: "Product designer + software engineer portfolio",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="html">
      <head>
        <link
          rel="icon"
          href="https://media.licdn.com/dms/image/v2/C4D03AQH6pXbeA9Nhzg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1641681934540?e=1733356800&v=beta&t=wBzCWVdI4ELxY2Pg_zwiL6KyPcPjEUSX4jpwDCYz-Bk"
          type="image/x-icon"
        />
      </head>
      <body className={inter.className}>
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
