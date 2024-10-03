import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./sass/main.scss";
import NavigationBar from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import GoogleAnalytics from "./components/googleAnalytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: `Abeeku's Porfolio`,
//   description: "Product designer + software engineer portfolio",
//   metadataBase: new URL("https://abeeku-portfolio.vercel.app/"),
//   keywords: ["product designer, software engineer, portfolio"],
//   openGraph: {
//     images:
//       "https://asset.cloudinary.com/dgos0voss/bc76d3cd22650bcf2b9725a408536b9c",
//     type: "website",
//     url: "https://abeeku-portfolio.vercel.app/",
//     siteName: "Abeeku's Portfolio",
//     locale: "en_US",
//     title: "Abeeku's Portfolio",
//     description: "Product designer + software engineer portfolio",
//   },
// };

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
          href="https://abeeku-portfolio.vercel.app/"
          type="image/x-icon"
        />

        <meta
          name="description"
          content="Product designer + software engineer portfolio"
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta
          property="og:url"
          content="https://abeeku-portfolio.vercel.app/"
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="View Abeeku's Portfolio" />
        <meta
          property="og:description"
          content="Product designer + software engineer portfolio"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dgos0voss/image/upload/v1727957751/metaImage_nmanzt.png"
        />
        <meta
          name="keywords"
          content="product designer, software engineer, portfolio"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@lar_riri" />
        <meta property="twitter:domain" content="abeeku-portfolio.vercel.app" />
        <meta
          property="twitter:url"
          content="https://abeeku-portfolio.vercel.app/"
        />
        <meta name="twitter:title" content="View Abeeku's Portfolio" />
        <meta
          name="twitter:description"
          content="Product designer + software engineer portfolio"
        />
        <meta
          name="twitter:image"
          content="https://res.cloudinary.com/dgos0voss/image/upload/v1727957751/metaImage_nmanzt.png"
        />
        <meta
          name="twitter:keywords"
          content="product designer, software engineer, portfolio"
        />

        {/* <!-- Meta Tags Generated via https://www.opengraph.xyz --> */}
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
