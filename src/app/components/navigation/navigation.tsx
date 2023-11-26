import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/icons/logo.svg";
import grid from "../../assets/icons/grid.svg";
import { NavigationList } from "@/app/libs/mocks";
import { AnimatedSection } from "..";

export default function NavigationBar() {
  return (
    <nav className="flex justify-between items-center">
      <Link href="/">
        <Image src={logo} width={24} height={24} alt="logo" />
      </Link>
      <div className="flex gap-10 text-sm leading-5">
        {NavigationList.map((nav) => {
          return (
            <Link
              href={nav.href}
              key={nav.title}
              className="text-white text-sm"
            >
              {nav.title}
            </Link>
          );
        })}
      </div>
      <Link href="/" className="flex items-center text-white text-sm gap-1">
        <Image src={grid} width={16} height={16} alt="grid" />
        <h1>Gallery</h1>
      </Link>
    </nav>
  );
}
