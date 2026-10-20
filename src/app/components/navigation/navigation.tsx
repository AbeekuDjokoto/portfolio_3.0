"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import logo from "../../assets/icons/logo.svg";
import { NavigationList } from "@/app/libs/mocks";
import { cn } from "@/app/libs/classNames";
import { AnimatedSection } from "..";
import Crosshair from "../crosshair/Crosshair";

function isNavActive(href: string, pathname: string) {
  if (href === "/") {
    return pathname === "/" || pathname.startsWith("/product");
  }
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function NavigationBar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-4 z-30 w-full">
      <nav className="relative flex min-h-14 items-center justify-between rounded-2xl border border-border-subtle bg-[color-mix(in_srgb,var(--color-base)_80%,transparent)] px-4 py-3 backdrop-blur-md">
        <Crosshair className="-bottom-[5px] -left-[5px]" />
        <Crosshair className="-bottom-[5px] -right-[5px]" />
        <AnimatedSection>
          <Link href="/" className="relative z-20">
            <Image src={logo} width={24} height={24} alt="logo" className="opacity-95" />
          </Link>
        </AnimatedSection>
        <div className="relative z-20 flex items-center gap-3 text-sm leading-5 sm:gap-4">
          {NavigationList.map((nav) => {
            const active = isNavActive(nav.href, pathname);
            return (
              <AnimatedSection key={nav.title}>
                <Link
                  href={nav.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    active
                      ? "btn-primary"
                      : "rounded-sm px-3 py-2.5 text-sm text-foreground/90 transition-colors hover:text-foreground"
                  )}
                >
                  {nav.title}
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
