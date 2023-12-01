import React from "react";
import zeroWaste from "@/app/assets/images/zeroWaste.gif";

import Image from "next/image";
import { AboutPageDetails } from "@/app/libs/mocks";
import { AnimatedSection } from "@/app/components";

export default function page({ params }: { params: { productId: string } }) {
  const findProductById = (productId: string) => {
    return AboutPageDetails.find((product) => product.id === productId);
  };
  const product = findProductById(params.productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="flex flex-col gap-[80px]">
      <AnimatedSection>
        <header className="flex justify-between h-[312px] items-center">
          <div className="max-w-[505px] w-full flex flex-col gap-10">
            <div className="flex flex-col gap-2 text-xs leading-6 tracking-[2px]">
              <h4 className="uppercase">{product.client?.title}</h4>
              <p className="text-base leading-[18px]">
                {product.client?.description}
              </p>
            </div>
            <div className="flex flex-col gap-2">
              <h4 className="text-xs leading-6 tracking-[2px] uppercase">
                My role
              </h4>
              <div className="text-base leading-[18px] flex flex-col gap-1">
                {product.role?.map((role) => (
                  <p key={role.id}>{role.title}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="max-w-[755px] w-full flex flex-col gap-1">
            <h1 className="text-xs leading-6 tracking-[2px] uppercase">
              summary
            </h1>
            <h1 className="text-[32px] leading-[46px]">{product.summary}</h1>
          </div>
        </header>
      </AnimatedSection>

      <Image src={product.topImage} width={1170} height={658} alt="work done" />

      <div className="flex justify-between items-center py-[52px]">
        <div className="max-w-[505px] w-full"></div>
        <div className="max-w-[755px] w-full flex flex-col gap-2">
          <AnimatedSection>
            <div className="text-[14.25px] leading-[24.89px] flex flex-col gap-3 uppercase">
              <h1>{product.problemStatement?.title}</h1>
            </div>
          </AnimatedSection>

          <p className="text-[#9E9C9C] text-base leading-6 flex flex-col gap-2">
            <AnimatedSection>
              {product.problemStatement?.subtitle}
            </AnimatedSection>
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[120px]">
        <div className="flex gap-[90px]">
          {product.topScreens?.map((item) => {
            return (
              <AnimatedSection key={item.id}>
                <Image src={item.img} width={432} height={865} alt={item.alt} />
              </AnimatedSection>
            );
          })}
        </div>
        <div className="flex justify-end gap-[90px]">
          {product.bottomScreens?.map((item) => {
            return (
              <AnimatedSection key={item.id}>
                <Image src={item.img} width={432} height={865} alt={item.alt} />
              </AnimatedSection>
            );
          })}
        </div>
      </div>
      <div className="flex justify-between">
        <div className="max-w-[505px] w-full flex flex-col gap-10">
          <AnimatedSection>
            <h4 className="text-[14.25px] leading-[24.89px] flex flex-col gap-3 uppercase">
              {product.projectGoals?.title}
            </h4>
          </AnimatedSection>
        </div>

        {/* Project goals */}
        <section className="max-w-[755px] w-full grid grid-cols-2 justify-between gap-7 items-center">
          {product.projectGoals?.goals.map((goals) => {
            return (
              <AnimatedSection key={goals.id}>
                <div className="max-w-[270px] h-[190px] w-full flex flex-col gap-5">
                  <div className="rounded-full border-[#fff] border w-[36px] h-[36px] flex items-center justify-center">
                    {goals.id}
                  </div>
                  <p className="text-base text-[#9E9C9C]">{goals.paragraph}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </section>
      </div>

      {/* UI Elements */}
      <section className="flex justify-between gap-7">
        {product?.uielements?.map((element) => {
          return (
            <AnimatedSection key={element.id}>
              <div className="max-w-[270px] w-full flex flex-col gap-5">
                <Image
                  src={element.element}
                  width={1170}
                  height={658}
                  alt={element.alt}
                />
              </div>
            </AnimatedSection>
          );
        })}
      </section>

      {/* Research Methods */}
      <section className="flex justify-between">
        <div className="max-w-[505px] w-full flex flex-col gap-10">
          <AnimatedSection>
            <h4 className="text-[14.25px] leading-[24.89px] flex flex-col gap-3 uppercase">
              {product.researchMethods?.title}
            </h4>
          </AnimatedSection>
        </div>
        <div className="max-w-[755px] w-full grid grid-cols-2 justify-between gap-7 items-center">
          {product.researchMethods?.methods.map((method) => {
            return (
              <AnimatedSection key={method.id}>
                <div className="max-w-[270px]  w-full flex flex-col gap-5">
                  <Image
                    src={method.image}
                    width={42}
                    height={21}
                    alt="image"
                  />
                  <p className="text-base text-[#9E9C9C]">{method.paragraph}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>

      {/* Right with no left */}
      <div className="flex justify-between items-center py-[52px]">
        <div className="max-w-[505px] w-full"></div>
        <div className="max-w-[755px] w-full flex flex-col gap-4">
          <AnimatedSection>
            <p className="text-[#9E9C9C] text-base leading-6 flex flex-col gap-2">
              {product.researchFinding}
            </p>
          </AnimatedSection>
        </div>
      </div>

      {/* Key focus areas */}
      <section className="flex justify-between items-center py-[50px]">
        <div className="max-w-[505px] w-full flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <AnimatedSection>
              <h4 className="text-[14.25px] leading-[24.89px] flex flex-col gap-3 uppercase">
                {product?.keyFocusAreas?.title}
              </h4>
            </AnimatedSection>
            <div className="text-[#9E9C9C] text-base leading-6 flex flex-col gap-2">
              {product.keyFocusAreas?.areas.map((area) => (
                <p key={area.id}>{area.paragraph}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="max-w-[755px] w-full"></div>
      </section>

      {/* Customer needs */}
      <section className="flex justify-between">
        <div className="max-w-[505px] w-full flex flex-col gap-10">
          <AnimatedSection>
            <h4 className="text-[14.25px] leading-[24.89px] flex flex-col gap-3 uppercase">
              {product.customerNeeds?.title}
            </h4>
          </AnimatedSection>
        </div>
        <div className="max-w-[755px] w-full grid grid-cols-2 justify-between gap-2 items-center">
          {product.customerNeeds?.needs.map((text) => {
            return (
              <AnimatedSection key={text.id}>
                <div className="max-w-[270px] w-full flex flex-col gap-2 h-[192px]">
                  <h1 className="text-[14.25px] leading-[24.89px] flex flex-col gap-3 uppercase">
                    {text.title}
                  </h1>
                  <p className="text-base text-[#9E9C9C]">{text.subtitle}</p>
                </div>
              </AnimatedSection>
            );
          })}
        </div>
      </section>
    </main>
  );
}
