import Image from "next/image";
import { AnimatedSection } from "./components";
import profile from "@/app/assets/images/profile.svg";
import Card from "./components/card/card";
import ProjectList from "./components/projects/projects";

export default function Home() {
  return (
    <main className="flex gap-10">
      <AnimatedSection>
        <Card />
      </AnimatedSection>
      <div className="flex flex-col gap-6">
        <h1 className="text-white text-5xl font-bold leading-[60px] tracking-[0.75px]">
          Software Engineer + Product Designer
        </h1>
        <div className="flex items-center gap-4">
          <Image src={profile} alt="profile image" width={64} height={64} />
          <p className="text-white text-sm font-medium leading-[19.88px]">
            Abeeku Djokoto
          </p>
        </div>
        <ProjectList />
      </div>
    </main>
  );
}
