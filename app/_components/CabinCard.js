import Image from "next/image";
import { UserIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export default function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="flex border  border-primary-800">
      <div className="flex-1 relative">
        <Image
          src={image}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          quality={75}
          alt={`Cabin ${name}`}
          className="border-r border-primary-800 object-cover "
        />
      </div>
      <div className="flex-grow">
        <div className="pt-5 pb-4 px-7 bg-primary-950">
          <h3 className="text-accent-500 font-semibold text-2xl mb-2">
            Cabin {name}
          </h3>
          <div className="flex gap-3 items-center mb-2">
            <UserIcon className="h-5 w-5 text-primary-500" />
            <p className="text-lg text-primary-200">
              For up to <span className="font-bold">{maxCapacity}</span>guests
            </p>
          </div>
          <p className="flex gap-3 justify-end items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-3xl font-[350]">
                  ${regularPrice - discount}
                </span>
                <span>${regularPrice}</span>
              </>
            ) : (
              <span className="line-through font-semibold text-primary-500">
                {regularPrice}
              </span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>
        <div className="bg-primary-950 border-t border-t-primary-800 text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-2 border-primary-800 py-4 px-6 inline-block hover:bg-accent-600 transition-all hover:text-primary-900-4"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
