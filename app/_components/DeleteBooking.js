"use client";
import { TrashIcon } from "@heroicons/react/24/solid";
import React, { useTransition } from "react";
import { DeleteBookedCabin } from "../_lib/actions";
import SmallSpinner from "./smallSpinner";

export default function DeleteBooking({ bookingID, onDelete }) {
  const [isPending, startTransition] = useTransition();
  function deleteHandler() {
    if (confirm("Are you sure you want delete this cabin?"))
      startTransition(() => onDelete(bookingID));
  }

  return (
    <button
      onClick={deleteHandler}
      className="group flex items-center gap-2 uppercase text-xs font-bold text-primary-950 xl:text-primary-300 border-primary-800 flex-grow px-3 py-3 xl:py-0 
        bg-accent-600 xl:bg-transparent hover:bg-accent-700 hover:text-primary-90 border-t border-r  xl:border-r-0 xl:border-t-0"
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-6 w-6 text-primary-600 group-hover:text-primary-800 transition-colors" />
          <span>Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <SmallSpinner />
        </span>
      )}
    </button>
  );
}
