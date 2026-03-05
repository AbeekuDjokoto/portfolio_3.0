import Image from "next/image";
import profile from "../app/assets/images/abeekudjokoto.png";
import Card from "./components/card/card";
import ProjectList from "./components/projects/projects";
import whitedownload from "@/app/assets/icons/whiteDownload.svg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col md:flex-row gap-10 md:gap-14 justify-between">
      <div className="hidden md:block">
        <Card />
      </div>
      <div className="flex flex-col gap-6 max-w-full md:max-w-[704px] w-full">
        <p className="w-max rounded-full border border-[#2a3138] bg-[#11141a] px-3 py-1 text-[11px] uppercase tracking-[1.6px] text-[#c2c8cf]">
          Product designer + software engineer
        </p>
        <h1 className="bg-gradient-to-r from-white via-[#d6fff6] to-[#9dddcf] bg-clip-text text-transparent md:text-5xl text-3xl font-bold leading-[140%] md:leading-[60px] tracking-[0.75px]">
          Software Engineer + Product Designer
        </h1>
        <p className="text-[#a7abb3] text-base leading-7 md:max-w-[640px]">
          I design and build digital products with a strong focus on usability,
          performance, and clean visual systems.
        </p>
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
