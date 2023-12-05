import Image from "next/image";
import { Clients, Experience, ResumeHeader, Skills } from "../libs/mocks";
import { AnimatedSection } from "../components";

export default function About() {
  return (
    <main className="flex flex-col gap-10 md:gap-20">
      <header>
        <AnimatedSection>
          <div className="max-h-[360px] h-full"></div>
          <div className="flex flex-col gap-10 border-t-[1px] border-[#444] pt-5">
            <h1 className="text-[20px] leading-[140%] md:text-[40px] font-normal md:leading-[52px]">
              {ResumeHeader.title}
            </h1>
            <div className=" text-[#9E9C9C] text-base leading-6 flex flex-col gap-4 md:flex-row justify-between">
              <p className="md:max-w-[570px] w-full">
                {ResumeHeader.specialization1}
              </p>
              <p className="md:max-w-[570px] w-full">
                {ResumeHeader.specialization2}
              </p>
            </div>
          </div>
        </AnimatedSection>
      </header>
      <AnimatedSection>
        <div className="flex flex-col gap-3 md:flex-row justify-between pb-10 md:pb-20 border-b-[1px] border-[#C9C9C9]">
          <p className="md:max-w-[570px] w-full text-[14.5px] leading-[23.36px]">
            {Experience.category}
          </p>
          <div className="md:max-w-[570px] w-full flex flex-col gap-10">
            {Experience.experience.map((experience) => {
              return (
                <div
                  key={experience.id}
                  className="text-[14.25px] leading-[24.89px] flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[18.125px] leading-6">
                      {experience.jobTitle}
                    </h3>
                    <p className="text-[#292A2C]">{experience.industry}</p>
                  </div>

                  <div className="text-[#9E9C9C] text-base leading-6 flex flex-col gap-2">
                    {experience.tasks.map((task) => {
                      return <p key={task.id}>{task.task}</p>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-3 md:flex-row justify-between pb-10 md:pb-20 border-b-[1px] border-[#C9C9C9]">
          <p className="md:max-w-[570px] w-full text-[14.5px] leading-[23.36px]">
            {Skills.category}
          </p>
          <div className="md:max-w-[570px] w-full flex flex-col gap-10">
            {Skills.skills.map((skill) => {
              return (
                <div
                  key={skill.id}
                  className="text-[14.25px] leading-[24.89px] flex flex-col gap-4"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-[18.125px] leading-[26px]">
                      {skill.under}
                    </h3>
                    <p className="text-[#9E9C9C] text-base leading-6">
                      {skill.description}
                    </p>
                  </div>
                </div>
              );
            })}
            <div className="text-white text-[18.281px] leading-[26px] grid grid-rows-3 grid-flow-col gap-4 justify-between">
              {Skills.group.map((keyword) => {
                return <p key={keyword.id}>{keyword.keyword}</p>;
              })}
            </div>
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection>
        <div className="flex flex-col gap-3 md:flex-row justify-between pb-10 md:pb-20">
          <p className="md:max-w-[570px] w-full text-[14.5px] leading-[23.36px]">
            {Clients.category}
          </p>
          <div className="md:max-w-[570px] w-full flex gap-5 justify-between">
            {Clients.clientList.map((client) => {
              return (
                <div key={client.id} className="flex gap-4">
                  <Image
                    src={client.clientName}
                    width={89}
                    height={32}
                    alt="clients"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>
    </main>
  );
}
