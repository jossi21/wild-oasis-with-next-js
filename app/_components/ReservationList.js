"use client";
import React, { useOptimistic } from "react";
import ReservationCard from "./ReservationCard";

import { DeleteBookedCabin } from "@/app/_lib/actions";

export default function ReservationList({ bookings }) {
  const [optimisticBookings, optimisticDelete] = useOptimistic(
    bookings,
    (currentBookings, bookingID) => {
      return currentBookings.filter((booked) => booked.id !== bookingID);
    },
  );

  async function deleteHandler(bookingID) {
    optimisticDelete(bookingID);
    await DeleteBookedCabin(bookingID);
  }
  return (
    <>
      <ul className="space-y-5">
        {optimisticBookings.map((booking) => (
          <ReservationCard
            booking={booking}
            key={booking.id}
            onDelete={deleteHandler}
          />
        ))}
      </ul>
    </>
  );
}
