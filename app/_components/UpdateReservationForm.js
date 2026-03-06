"use client";

import { differenceInDays } from "date-fns";
import { useReservationContext } from "./ReservationContext";
import { CabinReservation } from "../_lib/actions";
import { SubmitButton } from "./SubmitButton";

export default function UpdateReservationForm({ cabin }) {
  const { maxCapacity, regularPrice, discount, id } = cabin;
  const { range, resetRange } = useReservationContext();
  // console.log(range);
  const startDate = range.from;
  const endDate = range.to;
  const numNights = differenceInDays(endDate, startDate);
  const totalPrice = numNights * (regularPrice - discount);

  // console.log("Start date:", startDate);
  // console.log("End date:", endDate);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    cabinPrice: regularPrice,
    totalPrice,
    cabinId: id,
  };
  // console.log(bookingData);

  const passedBookingData = CabinReservation.bind(null, bookingData);

  return (
    <>
      <form
        action={async (formData) => {
          await passedBookingData(formData);
          resetRange();
        }}
        className="bg-primary-900 py-10 px-16 flex flex-col gap-5 text-lg"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          >
            <option value="">select number of guests...</option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay
          </label>
          <textarea
            name="observations"
            id="observations"
            placeholder="Write here anything we should know about you"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full  shadow-sm rounded-sm"
          />
        </div>
        <div className="flex justify-end gap-5">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton DynamicText="Reserving...">Reserve now</SubmitButton>
          )}
        </div>
      </form>
    </>
  );
}
