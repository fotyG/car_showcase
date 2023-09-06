"use client";

import Image from "next/image";
import { useState } from "react";

import { CustomButton } from ".";
import { CarCardProps } from "@/types";

const CarCard = ({ car }: { car: CarCardProps }) => {
  const { city_mpg, year, make, model, transmission, drive } = car;
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
    </div>
  );
};
export default CarCard;
