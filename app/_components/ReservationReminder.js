"use client";
import { format } from "date-fns";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useReservationContext } from "./ReservationContext";

export default function ReservationReminder() {
  const { range, resetRange } = useReservationContext();
  //   const range = { from: null, to: null };
  if (!range.from || !range.to) return null;
  return (
    <div className="flex items-center gap-6 fixed bottom-6 left-1/2 -translate-x-1/2 py-2 px-8 bg-accent-500 rounded-full text-primary-800 shadow-xl shadow-slate-800">
      <p>
        <span>👋</span>
        Don't forget to reserve your dates <br /> from{" "}
        {format(new Date(range.from), "MMM dd yyyy")} to{" "}
        {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button
        className="rounded-full hover:bg-amber-600 p-.5 transition-all "
        onClick={resetRange}
      >
        <XMarkIcon className="h-5 w-5" />
      </button>
    </div>
  );
}
