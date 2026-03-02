import React from "react";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

export default async function ReservationAndDate({ cabin }) {
  // define the auth
  const session = await auth();
  // import the query
  const [settings, bookedDate] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  //   const settings = await getSettings();
  //   const bookedDate = await getBookedDatesByCabinId(cabin.id);

  return (
    <div className="grid grid-cols lg:grid-cols-2 gap-8 border border-primary-800 min-h-[200px]">
      <DateSelector cabin={cabin} settings={settings} bookedDate={bookedDate} />
      {session?.user ? (
        <ReservationForm cabin={cabin} user={session?.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}
