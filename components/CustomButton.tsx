"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  btnType,
  rightIcon,
  isDisabled,
  textStyles,
  handleClick,
  containerStyles,
}: CustomButtonProps) => {
  return (
    <button
      onClick={handleClick}
      type={btnType || "button"}
      disabled={isDisabled || false}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && (
        <div className="relative w-6 h-6">
          <Image
            fill
            src={rightIcon}
            alt="right icon"
            className="object-contain"
          />
        </div>
      )}
    </button>
  );
};
export default CustomButton;
