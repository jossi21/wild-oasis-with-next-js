import Link from "next/link";
import ReservationCard from "@/app/_components/ReservationCard.js";
import { auth } from "@/app/_lib/auth";
import { getBookings } from "@/app/_lib/data-service";
import ReservationList from "@/app/_components/ReservationList";

export const metadata = {
  title: "Reservation",
};
export default async function Reservation() {
  const session = await auth();
  // console.log(session.user.guestId);

  const bookings = await getBookings(session?.user?.guestId);
  // console.log(bookings);
  // const bookings = [1];
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
        <ReservationList bookings={bookings} />
      )}
    </div>
  );
}
