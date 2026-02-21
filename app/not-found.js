import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center mt-40 gap-8">
      <h1 className="text-3xl">This page not found :(</h1>
      <Link
        href="/"
        className="bg-blue-500 py-2 px-5 text-primary-800 font-bold text-lg"
      >
        Back to Home
      </Link>
    </div>
  );
}
