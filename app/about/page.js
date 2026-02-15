import Image from "next/image";
import Link from "next/link";
import aboutImage1 from "@/public/about-1.jpg";
import aboutImage2 from "@/public/about-2.jpg";

export const metadata = {
  title: "About",
};
export default function About() {
  return (
    <div className="grid grid-cols-5 gap-x-24 gap-y-32 text-lg items-center">
      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-8">
          <p>
            At The Wild Oasis, our cabins are hidden within Ethiopia’s majestic
            mountains and ancient forests, offering a sanctuary of quiet luxury.
            Surrounded by misty views and fresh mountain air, each cabin blends
            refined comfort with untouched nature—created for guests who want to
            slow down, reconnect, and experience a truly unforgettable escape.
          </p>
          <p>
            This is where unforgettable moments are created, embraced by the
            beauty of nature. A place to slow down, unwind, and savor the joy of
            being together in a breathtaking setting.
          </p>
        </div>
      </div>

      <div className="col-span-2">
        <Image
          src={aboutImage1}
          placeholder="blur"
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>

      <div className="relative col-span-2 aspect-square">
        <Image
          src={aboutImage2}
          fill
          placeholder="blur"
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-3">
        <h1 className="text-4xl mb-10 text-accent-400 font-medium">
          Managed by our family since 2010
        </h1>

        <div className="space-y-8">
          <p>
            Since 2010, The Wild Oasis has been a cherished family-run retreat.
            Founded by our grandparents, this haven has been nurtured with love
            and care, passed down through our family as a testament to our
            dedication to creating a warm, welcoming environment for every
            guest.
          </p>
          <p>
            At The Wild Oasis, the timeless beauty of the mountains meets the
            personal touch of a family-run retreat. You’re not just a
            guest—you’re part of our extended family, where every visit feels
            like coming home.
          </p>

          <div>
            <Link
              href="/cabins"
              className="inline-block mt-4 bg-accent-500 px-8 py-5 text-primary-800 text-lg font-semibold hover:bg-accent-600 transition-all"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
