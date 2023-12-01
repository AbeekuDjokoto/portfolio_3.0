import React from "react";
import BaseButton from "../action/button";

export default function page() {
  return (
    <div className="w-full bg-white flex justify-between h-[900px] my-auto items-center">
      <BaseButton variant="outline" type="submit">
        secondary
      </BaseButton>
      <BaseButton variant="primary" type="submit">
        Get Started 67t6gt6gnrntyrftrntcyrtrntctyecgbygbygb
      </BaseButton>
      <BaseButton variant="tertiary" type="submit">
        Get Started
      </BaseButton>
    </div>
  );
}
