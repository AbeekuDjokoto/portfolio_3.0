import Image from "next/image";
import React from "react";
import clapping from "@/app/assets/icons/clapping.svg";
import Link from "next/link";
import { FooterNavigation } from "@/app/libs/mocks";
import { AnimatedSection } from "..";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-20">
      <AnimatedSection>
        <div className="flex gap-2 items-center">
          <h1 className="text-white text-[44px] font-normal leading-[53.76px]">
            Let’s work together
          </h1>
          <Image src={clapping} width={44} height={45} alt="clapping icon" />
        </div>
        <h1 className="text-[#737373] text-[44px] font-normal leading-[53.76px]">
          Get in touch.
        </h1>
      </AnimatedSection>
      <div className="border-t-[1.2px] border-[#2E2E2E] pt-4 flex justify-between items-center">
        <h1 className="text-white text-[10.875px] font-normal leading-[16.8px]">
          Currently based in Ghana
        </h1>
        <div className="flex gap-20">
          {FooterNavigation.map((link) => {
            return (
              <AnimatedSection key={link.id}>
                <h1 className="text-[#737373] text-[11.063px] font-normal leading-[16.8px]">
                  {link.title}
                </h1>
                <Link
                  href={link.href}
                  className="text-white text-[10.875px] font-normal leading-[16.8px] flex gap-[2px]"
                >
                  <p>{link.hrefTitle}</p>
                  <Image
                    src={link.icon}
                    width={10}
                    height={15}
                    alt={link.hrefTitle}
                  />
                </Link>
              </AnimatedSection>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
