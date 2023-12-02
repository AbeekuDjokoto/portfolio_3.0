import profile from "@/app/assets/images/abeekudjokoto.png";
import { cn } from "@/app/libs/classNames";
import arrow from "@/app/assets/icons/arrow.svg";
import download from "@/app/assets/icons/document-download.svg";
import { Links, SkillsAndTools } from "@/app/libs/mocks";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "..";

import BaseButton from "@/app/action/button";

export default function Card() {
  return (
    <AnimatedSection>
      <div className="bg-white py-8 px-6 max-w-[437px] w-full flex flex-col gap-[80px] border border-[#E5E7EB]">
        <div className="flex flex-col gap-6 justify-center">
          <div className="flex flex-col gap-4 items-center">
            <div className="flex flex-col gap-1 items-center">
              <Image
                src={profile}
                alt="profile image"
                width={176}
                height={176}
              />
              <h1 className="text-[var(--black-100)] text-[34px] font-bold leading-10 tracking-tighter">
                Abeeku Djokoto
              </h1>
            </div>
            <Link
              className="max-w-[282px] w-full"
              href="mailto:djokotoabeeku619@gmail.com?subject=Interested%20in%20Working%20Together&body=Hello%20there,%0A%0AI%20am%20interested%20in%20working%20with%20you.%20Let's%20discuss%20the%20details.%0A%0ABest%20regards"
            >
              <BaseButton
                className={cn(
                  "max-w-[282px] w-full flex gap-2 bg-[var(--black)] text-white font-normal"
                )}
              >
                <Image src={arrow} alt="arrow" width={24} height={24} />
                Get In Touch
              </BaseButton>
            </Link>
          </div>
          <div className="p-4 rounded-[10px] border border-[#E5E7EB] flex flex-col gap-4 text-[var(--black)] max-w-[387px] w-full">
            <Link
              href="/cv.pdf"
              download="cv"
              className="flex justify-between items-center"
              target="_blank"
            >
              <h3 className="text-[var(--black-100)] text-base font-medium leading-6">
                Download my portfolio
              </h3>
              <Image
                src={download}
                alt="pointer arrow"
                width={24}
                height={24}
              />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-[#4A5264] text-[10px] font-medium leading-4 tracking-[1.2px] uppercase">
            Skills and Tools
          </p>
          <div className="flex flex-wrap gap-2">
            {SkillsAndTools.map((skills, index) => {
              return (
                <BaseButton
                  variant="outline"
                  key={index}
                  className="bg-white border border-[#E5E7EB] h-[48px] rounded-[20px] py-2 px-3"
                >
                  <p className="text-[var(--black)] text-sm font-normal leading-[18.66px] tracking-[0.15px] capitalize">
                    {skills.title}
                  </p>
                </BaseButton>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-[#4A5264] text-[10px] font-medium leading-4 tracking-[1.2px] uppercase">
            Links
          </p>
          <div className="flex flex-wrap gap-4">
            {Links.map((link, index) => {
              return (
                <Link href={link.href} key={index}>
                  <Image
                    src={link.icon}
                    width={24}
                    height={24}
                    alt="navigateion routes"
                    className="text-[var(--black)] text-sm font-normal leading-[18.66px] tracking-[0.15px] capitalize"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
