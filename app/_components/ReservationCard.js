import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { isPast, format, isToday, formatDistanceToNow } from "date-fns";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import DeleteBooking from "./DeleteBooking";

export default function ReservationCard({ booking, onDelete }) {
  const {
    id,
    guestId,
    startDate,
    endDate,
    numGuests,
    numNights,
    totalPrice,
    created_at,
    status,
    cabins,
  } = booking;

  return (
    <div className=" flex flex-col lg:flex-row gap-5 border border-primary-800 ">
      <div className="relative aspect-square h-32">
        <Image
          src={cabins.image}
          alt={`Cabin ${cabins.name}`}
          fill
          className="object-cover border-r border-b xl:border-b-0"
        />
      </div>
      <div className="flex-grow px-4 py-2 flex flex-col">
        <div className="flex items-center justify-between gap-5">
          <h3 className="text-lg font-semibold">
            {numNights} nights in cabin {cabins.name}
          </h3>
          {/* is past */}
          {isPast(new Date(startDate)) ? (
            <span
              className="bg-yellow-800 px-2 h-5 
              flex items-center uppercase 
            text-xs text-yellow-200 font-bold rounded-sm "
            >
              past
            </span>
          ) : (
            <span className="bg-green-700 flex px-2  h-5 items-center  uppercase text-xs font-bold text-green-200 rounded-sm">
              upcoming
            </span>
          )}
        </div>
        <p className="text-lg text-primary-300">
          {format(new Date(startDate), "EEE, MMM dd yyyy")}(
          {isToday(new Date(startDate))
            ? "Today"
            : formatDistanceToNow(startDate)}
          )&mdash; {format(new Date(endDate), "EEE, MMM dd yyyy")}
        </p>
        <div className="flex gap-2 mt-auto  items-baseline">
          {/* totalPrice */}
          <p className="text-xl font-semibold text-accent-400">${totalPrice}</p>
          <p className="text-primary-300">&bull;</p>
          <p className="text-lg text-primary-300">
            {numGuests} guest{numGuests > 1 && "s"}
          </p>
          <p className="ml-auto text-sm text-primary-400">
            Booked {format(new Date(created_at), "EEE, MMM dd yyyy, p")}
          </p>
        </div>
      </div>

      <div className="flex xl:flex-col  xl:border-l  border-primary-800 w-[100px]">
        {!isPast(startDate) ? (
          <>
            <Link
              href={`/account/reservation/edit/${id}`}
              className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-950  xl:text-primary-300 border-t border-r  xl:border-b xl:border-r-0 xl:border-t-0 border-primary-800 flex-grow px-3 mr-2 xl:mr-0  bg-accent-600 xl:bg-transparent hover:bg-accent-700 hover:text-primary-90"
            >
              <PencilSquareIcon className="h-6 w-6 text-primary-600 group-hover:text-primary-800 transition-colors" />
              <span className="mt-1">Edit</span>
            </Link>
            <DeleteBooking onDelete={onDelete} bookingID={id} />
          </>
        ) : null}
      </div>
    </div>
  );
}
