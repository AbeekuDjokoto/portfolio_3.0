import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./sass/main.scss";
import NavigationBar from "./components/navigation/navigation";
import Footer from "./components/footer/footer";
import GoogleAnalytics from "./components/googleAnalytics/GoogleAnalytics";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: `Abeeku's Porfolio`,
  description:
    "A page showing a product designer + software engineer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="html">
      <head>
        <link rel="icon" href="/logo.svg" type="image/x-icon" />
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
