import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/icons/logo.svg";
import { NavigationList } from "@/app/libs/mocks";
import { AnimatedSection } from "..";

export default function NavigationBar() {
  return (
    <nav className="sticky top-4 z-30 flex justify-between items-center rounded-2xl border border-[#23272f] bg-[#0d0f14]/70 px-4 py-3 backdrop-blur-md">
      <AnimatedSection>
        <Link href="/">
          <Image src={logo} width={24} height={24} alt="logo" className="opacity-95" />
        </Link>
      </AnimatedSection>
      <div className="flex gap-10 text-sm leading-5">
        {NavigationList.map((nav) => {
          return (
            <AnimatedSection key={nav.title}>
              <Link
                href={nav.href}
                className="text-white/90 text-sm hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0B6B5A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0d0f14] rounded-sm"
              >
                {nav.title}
              </Link>
            </AnimatedSection>
          );
        })}
      </div>
    </nav>
  );
}
