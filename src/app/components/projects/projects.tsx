import { Projects } from "@/app/libs/mocks";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AnimatedSection } from "..";

export default function ProjectList() {
  return (
    <div className="flex flex-col gap-20">
      {Projects.map((project) => (
        <AnimatedSection key={project.id}>
          <div className="flex flex-col gap-2">
            <Link href={project.href}>
              <Image src={project.image} alt={project.title} />
            </Link>
            <div className="flex justify-between">
              <div className="max-w-[500px] w-full flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-sm font-normal leading-5">
                    {project.title}
                  </h3>
                  <p className="text-sm font-normal leading-5 text-[#737373]">
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
              <h3 className="text-sm font-normal leading-5 text-[#737373]">
                {project.role}
              </h3>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  );
}
