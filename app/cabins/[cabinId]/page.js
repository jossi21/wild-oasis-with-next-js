import Image from "next/image";
import { EyeSlashIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { getCabin } from "@/app/_lib/data-service";

export default async function CabinDetail({ params }) {
  const { cabinId } = await params;

  //   fetch cabin data based on the cabinId
  const cabin = await getCabin(cabinId);
  const { name, image, description, maxCapacity } = cabin;

  return (
    <div className="max-w-6xl mx-auto mt-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-8 md:gap-20 border rounded-md border-primary-800 md:px-8 mb-20 overflow-hidden">
        <div className="relative md:scale-[1.15] md:-translate-x-3 h-64 md:h-auto">
          <Image
            src={image}
            alt={`Cabin ${name}`}
            fill
            className="object-cover "
          />
        </div>
        <div className="py-4 px-4 ">
          <h3 className="text-accent-400 font-black text-4xl md:text-6xl mb-5 md:translate-x-[-220px] md:bg-primary-950 p-5 pb-1 w-full md:w-[150%] -mt-4 md:mt-0">
            Cabin {name}
          </h3>
          <p className="text-lg text-primary-500 mb-10">{description}</p>
          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UserIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of{" "}
                <span className="font-bold">Bahir Dar</span> (Ethiopia)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="text-6xl font-semibold text-center text-primary-500">
          Come to us. Enjoy your day{" "}
        </h2>
      </div>
    </div>
  );
}
