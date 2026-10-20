import { Projects } from "@/app/libs/mocks";
import Image from "next/image";
import Link from "next/link";
import { AnimatedSection } from "..";
import { fixedImageStyle } from "@/app/libs/imageStyles";

export default function ProjectList() {
  return (
    <div className="flex flex-col gap-10 md:gap-12">
      {Projects.map((project) => (
        <AnimatedSection key={project.id}>
          <article className="project-window group w-full min-w-0">
            <div className="chrome">
              <div className="chrome-bar">
                <div className="lights" aria-hidden="true">
                  <span className="window-light is-red" />
                  <span className="window-light is-amber" />
                  <span className="window-light is-green" />
                </div>
                <div className="host">{project.title}</div>
              </div>
            </div>
            <div className="project-window-body">
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
                    <div className="flex justify-between gap-3 text-sm font-normal leading-5">
                      <h3 className="min-w-0 text-lg font-semibold leading-7 md:text-xl">
                        {project.title}
                      </h3>
                      <h3 className="shrink-0 text-[#9E9C9C] self-start text-right">
                        {project.role}
                      </h3>
                    </div>

                    <p className="w-full min-w-0 text-[#9E9C9C] text-base leading-7 [overflow-wrap:anywhere]">
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
                            className="shrink-0 object-contain"
                            style={fixedImageStyle(24)}
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
            </div>
          </article>
        </AnimatedSection>
      ))}
    </div>
  );
}
