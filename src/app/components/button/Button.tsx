import React from "react";
import { cn } from "@/app/libs/classNames";
// comment

type Props = {
  readonly children: any;
  readonly className?: string;
};
const Button = ({ children, className }: Props) => {
  return (
    <button data-testid="button" className={cn("font-sans", className)}>
      {children}
    </button>
  );
};

export { Button };
