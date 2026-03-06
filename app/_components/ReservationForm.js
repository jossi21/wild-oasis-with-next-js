import React from "react";
import UpdateReservationForm from "./UpdateReservationForm";
import { useReservationContext } from "./ReservationContext";

export default function ReservationForm({ cabin, user }) {
  return (
    <div className="">
      <div className="flex justify-between items-center bg-primary-800 text-primary-300 px-8 py-2">
        <p>Logged in as</p>
        <div className="flex gap-5 items-center">
          <img
            src={user?.image}
            alt={user?.name}
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
          />
          <p>{user?.name}</p>
        </div>
      </div>

      {/* here is the form */}
      <UpdateReservationForm cabin={cabin} user={user} />
    </div>
  );
}
