import { SubmitButton } from "@/app/_components/SubmitButton";
import { updateReservation } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";
// import { useTransition } from "react";

export default async function EditReservation({ params }) {
  const { bookingID } = await params;
  // console.log(id);
  const bookings = await getBooking(bookingID);

  const { numGuests, observation, cabinId, numNights } = bookings;
  const { maxCapacity } = await getCabin(cabinId);
  // console.log(maxCapacity);

  return (
    <div>
      <h2 className="py-4 text-accent-500 text-2xl">
        Edit Reservation #00{bookingID}
      </h2>
      <form
        action={updateReservation}
        className="bg-primary-900 py-10 px-16 flex flex-col gap-5 text-lg"
      >
        <input type="hidden" name="bookingID" value={bookingID} />
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            defaultValue={numGuests}
            name="numGuests"
            id="numGuests"
            required
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          >
            <option>select number of guests...</option>
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
            defaultValue={observation}
            name="observations"
            id="observations"
            placeholder="Write here anything we should know about you"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full  shadow-sm rounded-sm"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <p className="text-primary-300 text-base">Start by selecting dates</p>
          <SubmitButton DynamicText={"Updating..."}>Update</SubmitButton>
        </div>
      </form>
    </div>
  );
}
