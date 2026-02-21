import Image from "next/image";
import { EyeSlashIcon, MapPinIcon, UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { getCabin, getCabins } from "@/app/_lib/data-service";

// dynamic metadata
export async function generateMetadata({ params }) {
  const { cabinId } = await params;
  const { name } = await getCabin(cabinId);
  // console.log(name);
  return { title: `Cabin ${name}` };
}

// pass the dynamic routes as static
export async function generateStaticParams() {
  const cabins = await getCabins();
  // store all dynamic routes i the variable
  const StaticIds = cabins.map((cabin) => ({ cabinId: String(cabin.id) }));

  // console.log(StaticIds);
  return StaticIds;
}

// cabin detail function
export default async function CabinDetail({ params }) {
  const { cabinId } = await params;

  //   fetch cabin data based on the cabinId
  const cabin = await getCabin(cabinId);
  const { name, image, description, maxCapacity } = cabin;

  return (
    <div className="max-w-6xl mx-auto px-4">
      <div className="border border-primary-800 rounded-md mb-20 ">
        <div className="grid grid-cols-1 md:grid-cols-[3fr_4fr] gap-8 md:px-8  overflow-hidden">
          <div className="relative md:scale-[1.15] md:-translate-x-3 h-64 md:h-auto">
            <Image
              src={image}
              alt={`Cabin ${name}`}
              fill
              className="object-cover "
            />
          </div>
          <div className="py-4 px-4 ">
            <h3
              className="text-accent-400 font-black text-4xl md:text-6xl  md:translate-x-[-220px] translate-y-0 max-md:translate-y-[-80px] md:translate-y-0 bg-slate-700
          md:bg-primary-950 p-5 pb-1 w-[300px] md:w-[150%] -mb-12 md:mb-5"
            >
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
        <div className="flex justify-end">
          <Link href="/cabins" className="border m-3  border-primary-800 ">
            <p className="px-6 py-4 font-bold text-1xl bg-accent-600">
              &larr; Back to Cabins
            </p>
          </Link>
        </div>
      </div>
      <div>
        <h2 className="text-4xl md:text-6xl font-semibold text-center text-primary-500">
          Come to us. Enjoy your day{" "}
        </h2>
      </div>
    </div>
  );
}
