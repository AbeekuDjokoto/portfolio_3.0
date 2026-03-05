import { Projects } from "@/app/libs/mocks";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "..";

export default function ProjectList() {
  return (
    <div className="flex flex-col gap-10 md:gap-12">
      {Projects.map((project) => (
        <AnimatedSection key={project.id}>
          <article className="group flex flex-col gap-4 rounded-2xl border border-[#212833] bg-[#0f131a]/70 p-4 md:p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#2f3b4a] hover:bg-[#121821]">
            <Link href={project.href} target={project.target || undefined}>
              <Image
                src={project.image}
                alt={project.title}
                className="rounded-xl border border-[#212833] object-cover transition-transform duration-300 group-hover:scale-[1.01]"
              />
            </Link>
            <div className="flex justify-between">
              <div className="w-full flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between text-sm font-normal leading-5 gap-3">
                    <h3 className="text-lg md:text-xl font-semibold leading-7">
                      {project.title}
                    </h3>
                    <h3 className="text-[#9E9C9C] self-start">{project.role}</h3>
                  </div>

                  <p className="text-[#9E9C9C] text-base leading-7 flex flex-col gap-2 md:max-w-[500px]">
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.keywords.map((keyword, index) => (
                    <div
                      key={index}
                      className="bg-white border border-[#E5E7EB] rounded-full py-[10px] px-3 flex gap-1 items-center"
                    >
                      {keyword.icon ? (
                        <Image
                          src={keyword.icon}
                          alt={keyword.title}
                          width={24}
                          height={24}
                        />
                      ) : null}

                      <p className="text-[var(--black)] text-sm font-normal leading-[19.88px] tracking-[0.15px] capitalize">
                        {keyword.title}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </article>
        </AnimatedSection>
      ))}
    </div>
  );
}
