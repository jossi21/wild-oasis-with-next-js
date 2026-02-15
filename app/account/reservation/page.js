import Link from "next/link";
import ReservationCard from "@/app/_components/ReservationCard.js";

export const metadata = {
  title: "Reservation",
};
export default function Reservation() {
  const bookings = [];
  return (
    <div>
      <h2 className="text-2xl text-accent-400 font-semibold mb-7">
        Your Reservation
      </h2>
      {bookings.length === 0 ? (
        <p className="text-lg">
          You have no reservation yet. Check out our{" "}
          <Link href="/cabins" className="text-accent-500 underline">
            Luxury cabins &rarr;
          </Link>
        </p>
      ) : (
        <ul className="space-y-5">
          {bookings.map((booking) => (
            <ReservationCard booking={booking} key={booking.id} />
          ))}
        </ul>
      )}
    </div>
  );
}
