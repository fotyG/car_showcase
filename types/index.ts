import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  rightIcon?: string;
  textStyles?: string;
  isDisabled?: boolean;
  btnType?: "button" | "submit";
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps {
  manufacturer: string;
  setManufacturer: React.Dispatch<React.SetStateAction<string>>;
}

export interface CarCardProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
