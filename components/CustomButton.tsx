"use client";

import Image from "next/image";

import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  btnType,
  handleClick,
  containerStyles,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      onClick={handleClick}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1`}>{title}</span>
    </button>
  );
};
export default CustomButton;
