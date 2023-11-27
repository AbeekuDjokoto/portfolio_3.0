import React from "react";
import zeroWaste from "@/app/assets/images/zeroWaste.gif";
import zeroWasteHome from "@/app/assets/images/zeroWasteHome.svg";
import zeroWaste404 from "@/app/assets/images/zeroWaste404.svg";
import zeroWasteCalender from "@/app/assets/images/zeroWasteCalendar.svg";
import zeroWasteReferral from "@/app/assets/images/zeroWasteReferral.svg";
import Image from "next/image";
import { ProjectGoals } from "@/app/libs/mocks";

export default function page({ params }: { params: { productId: string } }) {
  const mockData = [
    {
      id: "zero-waste",
      name: "Product 1",
      description: "Description for Product 1",
    },
    { id: "2", name: "Product 2", description: "Description for Product 2" },
    // Add more mock data as needed
  ];

  const findProductById = (productId: string) => {
    return mockData.find((product) => product.id === productId);
  };
  const product = findProductById(params.productId);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <main className="flex flex-col gap-10">
      <div className="flex justify-between py-[90px] items-center">
        <div className="max-w-[570px] w-full flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-xs leading-6 tracking-[2px] capitalize">
            <h4>Client</h4>
            <p className="text-base leading-[18px]">Debenhams</p>
          </div>
          <div className="flex flex-col gap-2">
            <h4 className="text-xs leading-6 tracking-[2px] capitalize">
              My role
            </h4>
            <div className="text-base leading-[18px] flex flex-col gap-1">
              <p>UX Design</p>
              <p>UI Design</p>
            </div>
          </div>
        </div>
        <div className="max-w-[458px] w-full flex flex-col gap-1">
          <h1 className="text-xs leading-6 tracking-[2px] capitalize">
            summary
          </h1>
          <h1 className="text-[32px] leading-[46px]">
            I lead the design on the first Zero Waste App
          </h1>
        </div>
      </div>
      <Image src={zeroWaste} width={1170} height={658} alt="work done" />
      <div className="flex justify-between py-[90px] items-center">
        <div className="max-w-[570px] w-full"></div>
        <div className="max-w-[570px] w-full flex flex-col gap-4">
          <div className="text-[14.25px] leading-[24.89px] flex flex-col gap-3 capitalize">
            <h1>Problem Statement</h1>
          </div>

          <p className="text-[#9E9C9C] text-base leading-6 flex flex-col gap-2">
            Trash pickup and delivery is a time-consuming and inconvenient task
            for many Ghanaians. It can be difficult to find a time that works
            for both the person who needs their trash picked up and the trash
            removal service. Additionally, trash removal services can be
            expensive, especially for large or bulky items.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[120px]">
        <div className="flex gap-[90px]">
          <Image
            src={zeroWasteHome}
            width={432}
            height={865}
            alt="Zero waste home page"
          />
          <Image
            src={zeroWaste404}
            width={432}
            height={865}
            alt="Zero waste 404 page"
          />
        </div>
        <div className="flex justify-end gap-[90px]">
          <Image
            src={zeroWasteReferral}
            width={432}
            height={865}
            alt="Zero waste home page"
          />
          <Image
            src={zeroWasteCalender}
            width={432}
            height={865}
            alt="Zero waste 404 page"
          />
        </div>
      </div>
      <div className="flex justify-between py-[90px]">
        <div className="max-w-[570px] w-full flex flex-col gap-10">
          <h4 className="text-[14.25px] leading-[24.89px] flex flex-col gap-3 capitalize">
            Project Goals
          </h4>
        </div>
        <div className="max-w-[570px] w-full grid grid-cols-2 justify-between gap-7">
          {ProjectGoals.map((goals) => {
            return (
              <div
                key={goals.id}
                className="max-w-[270px] w-full flex flex-col gap-5"
              >
                <div className="rounded-full border-[#fff] border w-[36px] h-[36px] flex items-center justify-center">
                  {goals.id}
                </div>
                <p className="text-base text-[#9E9C9C]">{goals.goal}</p>
              </div>
            );
          })}
        </div>
      </div>
      <h2>{product.name}</h2>
      <p>{product.description}</p>
    </main>
  );
}
