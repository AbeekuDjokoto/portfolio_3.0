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
          href="https://media.licdn.com/dms/image/v2/C4D03AQH6pXbeA9Nhzg/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1641681934540?e=1733356800&v=beta&t=wBzCWVdI4ELxY2Pg_zwiL6KyPcPjEUSX4jpwDCYz-Bk"
          type="image/x-icon"
        />

        <meta
          name="description"
          content="Mypurplepay is a forward thinking digital cooperative savings and credit platform that is poised to revolutionize the financial landscape. We provide accessible and flexible financing solutions to individuals and businesses filling in the gap left by traditional lending institutions. Our service aims to facilitate and promote financial wellness among individuals communities by offering a convenient platform for collective savings and alternative lending."
        />

        {/* <!-- Facebook Meta Tags --> */}
        <meta property="og:url" content="https://purple-vest.enyata.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MyPurplePay" />
        <meta
          property="og:description"
          content="Mypurplepay is a forward thinking digital cooperative savings and credit platform that is poised to revolutionize the financial landscape. We provide accessible and flexible financing solutions to individuals and businesses filling in the gap left by traditional lending institutions. Our service aims to facilitate and promote financial wellness among individuals communities by offering a convenient platform for collective savings and alternative lending."
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dgos0voss/image/upload/v1727957751/metaImage_nmanzt.png"
        />
        <meta
          name="keywords"
          content="Thrift Savings, Target Savings, Micro-credit, Loan, Short-term loans, Salary loans, Savings loans, Finance, Responsible Borrowing, Financial Security"
        />

        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="purple-vest.enyata.com" />
        <meta
          property="twitter:url"
          content="https://purple-vest.enyata.com/"
        />
        <meta name="twitter:title" content="MyPurplePay" />
        <meta
          name="twitter:description"
          content="Mypurplepay is a forward thinking digital cooperative savings and credit platform that is poised to revolutionize the financial landscape. We provide accessible and flexible financing solutions to individuals and businesses filling in the gap left by traditional lending institutions. Our service aims to facilitate and promote financial wellness among individuals communities by offering a convenient platform for collective savings and alternative lending."
        />
        <meta name="twitter:image" content="/metaImage.png" />
        <meta
          name="twitter:keywords"
          content="Thrift Savings, Target Savings, Micro-credit, Loan, Short-term loans, Salary loans, Savings loans, Finance, Responsible Borrowing, Financial Security"
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
