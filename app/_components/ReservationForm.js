import React from "react";

export default function ReservationForm({ cabin, user }) {
  const { maxCapacity } = cabin;
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
      <form className="bg-primary-900 py-10 px-16 flex flex-col gap-5 text-lg">
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
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
            name="observations"
            id="observations"
            placeholder="Write here anything we should know about you"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full  shadow-sm rounded-sm"
          />
        </div>
        <div className="flex justify-between items-center gap-5">
          <p className="text-primary-300 text-base">Start by selecting dates</p>
          <button className="bg-accent-500 px-8 py-4 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Reserve now
          </button>
        </div>
      </form>
    </div>
  );
}
