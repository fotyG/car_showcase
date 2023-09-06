export async function fetchCars() {
  const headers = {
    "X-RapidAPI-Key": "aec9d60bc5msh0ea39dc2c0afbe3p1ad48ajsn2d5c78d71c7e",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  };

  const response = await fetch(
    "https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=audi",
    {
      headers: headers,
    }
  );

  const result = await response.json();

  return result;
}
