import React from "react";
import DateSelector from "./DateSelector";
import ReservationForm from "./ReservationForm";
import { getBookedDatesByCabinId, getSettings } from "@/app/_lib/data-service";
import { auth } from "../_lib/auth";
import LoginMessage from "./LoginMessage";

export default async function ReservationAndDate({ cabin }) {
  // define the auth
  const session = await auth();
  const user = session?.user;
  const cabinId = cabin.id;
  // console.log(session);
  // console.log(user);

  // import the query
  const [settings, bookedDate] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabinId),
  ]);
  // console.log(cabinId);
  // console.log(settings);
  // console.log(`Booked dates for cabin :${cabinId}`, bookedDate.length);
  // console.log(`Booked dates for cabin :${cabinId}`, bookedDate);

  //   const settings = await getSettings();
  //   const bookedDate = await getBookedDatesByCabinId(cabin.id);

  return (
    <div className="grid grid-cols lg:grid-cols-2 gap-8 border border-primary-800 min-h-[200px]">
      <DateSelector cabin={cabin} settings={settings} bookedDate={bookedDate} />
      {user ? <ReservationForm cabin={cabin} user={user} /> : <LoginMessage />}
    </div>
  );
}
