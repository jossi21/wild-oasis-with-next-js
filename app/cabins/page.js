import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/spinner";
import Filter from "../_components/Filter";

export const metadata = {
  title: "Cabins",
};
export default async function Cabins({ searchParams }) {
  // the searchParams are promise
  const params = await searchParams;
  // console.log(params);

  // grab the searchParams and pass to the page as props
  const filteredSearchParams = params?.capacity ?? "all";
  // console.log(filteredSearchParams);

  return (
    <div>
      <div>
        <h1 className="text-4xl text-accent-500 mb-5 font-semibold">
          Our Luxury Cabins
        </h1>
        <p className="text-primary-300 text-lg mb-8">
          Hidden within Ethiopia’s majestic mountains and ancient forests, our
          cabins offer a sanctuary of quiet luxury. Surrounded by misty views
          and fresh mountain air, each space blends refined comfort with
          untouched nature—inviting you to slow down, reconnect, and truly
          escape.
        </p>
      </div>
      <div className=" flex justify-end">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filteredSearchParams}>
        <CabinList filter={filteredSearchParams} />
      </Suspense>
    </div>
  );
}
