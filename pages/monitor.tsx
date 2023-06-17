import Image from "next/image";
import { TbTrashFilled } from "react-icons/tb";
import { useEffect, useState } from "react";

export default function Monitor() {
  const [organic, setOrganic] = useState<number>(0);
  const [anorganic, setAnorganic] = useState<number>(0);
  const [capacity, setCapacity] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/trash");
        const jsonData = await response.json();
        console.log(jsonData.data);
        setOrganic(jsonData?.data?.organicCapacity);
        setAnorganic(jsonData?.data?.anorganicCapacity);
        setCapacity(organic + anorganic);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, [organic, anorganic]);

  return (
    <div className="relative w-screen md:h-[92vh] h-screen bg-yellow-100 px-10 pt-20 md:px-32 gap-10 flex flex-col md:flex-row items-center justify-center">
      <div className="absolute w-full h-full left-0 top-0 bg-black/50"></div>
      <div className="bg-white w-full md:w-[700px] overflow-hidden relative md:h-[500px] h-80 rounded-md z-10">
        <Image
          src="https://res.cloudinary.com/wikitro/image/upload/v1679369310/trash/maps_vfirsv.png"
          width={500}
          height={500}
          alt="maps"
          className="w-full h-full object-cover"
        />
        <div className="absolute z-20 top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
          <TbTrashFilled
            size={40}
            className={`${
              capacity < 50
                ? "text-green-500"
                : capacity > 50 && capacity < 100
                ? "text-yellow-500"
                : "text-red-500"
            }`}
          />
        </div>
      </div>
      <div className="bg-white p-3 w-full md:w-72 shadow-md overflow-hidden h-fit rounded-md z-10">
        <div className="flex items-center justify-center gap-3">
          <article className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-red-500"></div>
            <span>Full</span>
          </article>
          <article className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
            <span>Half-Full</span>
          </article>
          <article className="flex items-center gap-1">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Clear</span>
          </article>
        </div>
        <div className="mt-2 flex items-center justify-center">
          <div className="border-4 border-black rounded-full w-32 h-32 flex items-center justify-center">
            <h3 className="text-2xl font-semibold">
              {organic || anorganic ? capacity : 0}%
            </h3>
          </div>
        </div>
        <div className="mt-4">
          <span>Trash Category: </span>
          <div className="flex flex-col gap-2 my-4">
            <div className="flex items-center justify-between">
              <h3>Anorganic</h3>
              <span>{organic ?? 0}%</span>
            </div>
            <div className="flex items-center justify-between">
              <h3>Anorganic</h3>
              <span>{anorganic ?? 0}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
