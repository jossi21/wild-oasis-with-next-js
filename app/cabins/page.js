import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/spinner";

export const metadata = {
  title: "Cabins",
};
export default async function Cabins() {
  return (
    <div>
      <h1 className="text-4xl text-accent-500 mb-5 font-semibold">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-300 text-lg mb-8">
        Hidden within Ethiopia’s majestic mountains and ancient forests, our
        cabins offer a sanctuary of quiet luxury. Surrounded by misty views and
        fresh mountain air, each space blends refined comfort with untouched
        nature—inviting you to slow down, reconnect, and truly escape.
      </p>
      <Suspense fallback={<Spinner />}>
        <CabinList />
      </Suspense>
    </div>
  );
}
