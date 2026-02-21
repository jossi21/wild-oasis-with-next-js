import SmallSpinner from "@/app/_components/smallSpinner";

export default function Loading() {
  return (
    <div className="flex flex-col items-center justify-center mx-auto gap-3">
      <SmallSpinner />
      <p className=" text-xl">Cabin Detail Loading...</p>
    </div>
  );
}
