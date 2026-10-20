import Image from "next/image";
import profile from "../app/assets/images/abeekudjokoto.png";
import Card from "./components/card/card";
import ProjectList from "./components/projects/projects";
import whitedownload from "@/app/assets/icons/whiteDownload.svg";
import Link from "next/link";
import { fixedImageStyle } from "@/app/libs/imageStyles";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row gap-10 md:gap-14 justify-between">
      <div className="hidden md:block">
        <Card />
      </div>
      <div className="flex flex-col gap-6 max-w-full md:max-w-[704px] w-full">
        <p className="w-max rounded-full border border-[#2a3138] bg-[#11141a] px-3 py-1 text-[11px] uppercase tracking-[1.6px] text-[#c2c8cf]">
          Software developer · UI/UX · Mobile
        </p>
        <div className="hero-copy">
          <h1>
            <span className="block">The Home of a</span>
            <span className="text-gradient block">Software Developer +</span>
            <span className="text-gradient block">UI/UX Designer</span>
          </h1>
          <p>
            I design and build digital products with a strong focus on
            usability, performance, and clean visual systems.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Image
            src={profile}
            alt="profile image"
            width={64}
            height={64}
            className="rounded-full ring-2 ring-[#213332]"
          />
          <div className="flex flex-col gap-1">
            <p className="text-white text-sm font-medium leading-[19.88px]">
              Abeeku Djokoto
            </p>
            <div className="md:hidden flex gap-2 items-center">
              <Link
                href="/cv.pdf"
                download="cv"
                className="flex justify-between items-center text-white text-sm font-medium leading-[19.88px]"
                target="_blank"
              >
                Download my portfolio
                <Image
                  src={whitedownload}
                  alt="pointer arrow"
                  width={24}
                  height={24}
                  className="shrink-0 object-contain"
                  style={fixedImageStyle(24)}
                />
              </Link>
            </div>
          </div>
        </div>
        <ProjectList />
      </div>
    </main>
  );
}
