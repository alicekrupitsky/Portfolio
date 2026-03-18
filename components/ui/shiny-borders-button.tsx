import React from "react";
import { cn } from "@/lib/utils";

type RealismButtonProps = {
  text: string;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const RealismButton = ({ text, className, ...props }: RealismButtonProps) => {
  return (
    <button
      type="button"
      className={cn("realismBtn group", className)}
      {...props}
    >
      <span className="realismBtnGlow" aria-hidden="true" />
      <span className="realismBtnBlob" aria-hidden="true" />

      <span className="realismBtnInner">
        {text}
        <span className="realismBtnInnerGlow" aria-hidden="true" />
      </span>
    </button>
  );
};

export default RealismButton;
