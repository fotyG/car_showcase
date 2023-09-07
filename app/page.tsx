"use client"; // client version of the component

import { useEffect, useState } from "react";

import { fetchCars } from "@/utils";
import { HomeProps } from "@/types";
import { fuels, yearsOfProduction } from "@/constants";
import { Hero, CustomFilter, SearchBar, CarCard, ShowMore } from "@/components";
import Image from "next/image";

export default function Home() {
  const [allCars, setAllCars] = useState([]);
  const [loading, setLoading] = useState(false);

  const [model, setModel] = useState("");
  const [manufacturer, setManufacturer] = useState("");

  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  const [limit, setLimit] = useState(10);

  const getCars = async () => {
    setLoading(true);
    try {
      const result = await fetchCars({
        fuel: fuel || "",
        model: model || "",
        limit: limit || 10,
        year: year || 2022,
        manufacturer: manufacturer || "",
      });
      setAllCars(result);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCars();
  }, [fuel, year, model, manufacturer, limit]);
  // const allCars = await fetchCars({
  //   year: searchParams.year || 2022,
  //   fuel: searchParams.fuel || "",
  //   model: searchParams.model || "",
  //   limit: searchParams.limit || 10,
  //   manufacturer: searchParams.manufacturer || "",
  // });
  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div
        className="mt-12 padding-x padding-y max-width"
        id="discover"
      >
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore the cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar
            setModel={setModel}
            setManufacturer={setManufacturer}
          />

          <div className="home__filter-container">
            <CustomFilter
              title="fuel"
              options={fuels}
              setFilter={setFuel}
            />
            <CustomFilter
              title="year"
              setFilter={setYear}
              options={yearsOfProduction}
            />
          </div>
        </div>

        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>

            {loading && (
              <div className="mt-16 w-full flex-center">
                <Image
                  alt="loader"
                  width={50}
                  height={50}
                  src="/loader.svg"
                  className="object-contain"
                />
              </div>
            )}

            <ShowMore
              setLimit={setLimit}
              pageNumber={limit / 10}
              isNext={limit > allCars.length}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allCars?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
