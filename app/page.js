import Image from "next/image";
import Link from "next/link";
import backgroundImage from "@/public/bg.png";

export default function Home() {
  return (
    <main className="mt-24">
      <Image
        fill
        src={backgroundImage}
        alt="bg image the mountains with two cabins"
        className="object-cover"
        placeholder="blur"
      />
      <div className="relative z-10 text-center">
        <h1 className="text-7xl font-normal tracking-tight mb-10 text-primary-50">
          Welcome to Ethiopia
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 hover:bg-accent-600 px-8 py-5 text-lg text-primary-800 font-semibold transition-all"
        >
          Explore the cabin
        </Link>
      </div>
    </main>
  );
}
