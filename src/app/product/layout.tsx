import { Inter } from "next/font/google";
import "../sass/main.scss";

const inter = Inter({ subsets: ["latin"] });

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      <div className="max-w-[1100px] w-full mx-auto">{children}</div>
    </div>
  );
}
