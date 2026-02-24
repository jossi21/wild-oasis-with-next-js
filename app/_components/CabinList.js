import { getCabins } from "@/app/_lib/data-service";
import CabinCard from "@/app/_components/CabinCard";

export default async function CabinList({ filter }) {
  const cabins = await getCabins();
  // console.log(cabins);
  // console.log(filter);

  let filteredCabin;
  // filter out them based on the max capacity of guest
  if (filter === "small") {
    filteredCabin = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  } else if (filter === "medium") {
    filteredCabin = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7,
    );
  } else if (filter === "large") {
    filteredCabin = cabins.filter((cabin) => cabin.maxCapacity >= 8);
  } else {
    filteredCabin = cabins;
  }
  return (
    <div
      className="grid sm:grid-cols-1
        md:grid-cols-2 gap-8
        lg:gap-12 xl:gap-14
        "
    >
      {filteredCabin.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
