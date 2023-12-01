import Image from "next/image";
import Link from "next/link";
import logo from "../../assets/icons/logo.svg";
import { NavigationList } from "@/app/libs/mocks";
import { AnimatedSection } from "..";

export default function NavigationBar() {
  return (
    <nav className="flex justify-between items-center">
      <AnimatedSection>
        <Link href="/">
          <Image src={logo} width={24} height={24} alt="logo" />
        </Link>
      </AnimatedSection>
      <div className="flex gap-10 text-sm leading-5">
        {NavigationList.map((nav) => {
          return (
            <AnimatedSection key={nav.title}>
              <Link href={nav.href} className="text-white text-sm">
                {nav.title}
              </Link>
            </AnimatedSection>
          );
        })}
      </div>
    </nav>
  );
}
