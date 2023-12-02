import Image from "next/image";
import profile from "../app/assets/images/abeekudjokoto.png";
import Card from "./components/card/card";
import ProjectList from "./components/projects/projects";
import whitedownload from "@/app/assets/icons/whiteDownload.svg";

export default function Home() {
  return (
    <main className="flex gap-10 justify-between">
      <div className="hidden md:block">
        <Card />
      </div>
      <div className="flex flex-col gap-6 max-w-full md:max-w-[704px] w-full">
        <h1 className="text-white md:text-5xl text-2xl font-bold leading-[140%] md:leading-[60px] tracking-[0.75px]">
          Software Engineer + Product Designer
        </h1>
        <div className="flex items-center gap-2">
          <Image
            src={profile}
            alt="profile image"
            width={64}
            height={64}
            className="rounded-full"
          />
          <div className="flex flex-col gap-1">
            <p className="text-white text-sm font-medium leading-[19.88px]">
              Abeeku Djokoto
            </p>
            <div className="md:hidden flex gap-2 items-center">
              <p className="text-white text-sm font-medium leading-[19.88px]">
                Download Portfolio
              </p>
              <Image
                src={whitedownload}
                alt="pointer arrow"
                width={24}
                height={24}
              />
            </div>
          </div>
        </div>
        <ProjectList />
      </div>
    </main>
  );
}
