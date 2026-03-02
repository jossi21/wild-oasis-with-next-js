"use client";
import { isWithinInterval } from "date-fns";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import {
  ReservationProvider,
  useReservationContext,
} from "./ReservationContext";

function isAlreadyBooked(range, datesArr) {
  return (
    range.from &&
    range.to &&
    datesArr.some((data) =>
      isWithinInterval(datesArr, { start: range.from, end: range.to }),
    )
  );
}

export default function DateSelector({ cabin, settings, bookedDate }) {
  const { range, setRange, resetRange } = useReservationContext();

  console.log(range);
  // sample
  const regularPrice = 50;
  const discount = 15;
  const numNights = 4;
  const cabinPrice = 150;
  // const range = { from: null, to: null };
  // settings about booking
  const { minBookingLength, maxBookingLength } = bookedDate;

  return (
    <div className="flex flex-col gap-5">
      <DayPicker
        className="pt-12 place-self-center "
        onSelect={(range) => setRange(range)}
        selected={range}
        mode="range"
        startMonth={new Date()}
        endMonth={new Date(new Date().getFullYear() + 3, 11, 31)}
        disabled={[{ before: new Date() }]}
        captionLayout="dropdown"
        numberOfMonths={1}
        min={minBookingLength + 1}
        max={maxBookingLength}
      />

      <div className="flex items-center justify-between px-6 bg-accent-500 text-primary-800 h-[80px]">
        <div className="flex items-baseline gap-8">
          {/* discount */}
          <p className="flex gap-1 items-baseline">
            {discount > 0 ? (
              <>
                <span className="text-2xl">${regularPrice - discount}</span>{" "}
                <span className="line-through font-semibold text-primary-700">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl">${regularPrice}</span>
            )}{" "}
            <span>/night</span>
          </p>
          {/* number of nights */}
          {numNights ? (
            <>
              <p className="bg-accent-600 px-4 py-2 text-2xl">
                <span>&times;</span>
                <span>{numNights}</span>
              </p>
              <p>
                <span className="text-lg font-bold  uppercase">Total</span>
                <span className="text-2xl font-semibold">${cabinPrice}</span>
              </p>
            </>
          ) : null}
        </div>
        {/* range from */}
        {range.from || range.to ? (
          <button
            className="border border-primary-800 py-2 px-5 text-sm font-semibold"
            onClick={resetRange}
          >
            Clear
          </button>
        ) : null}
      </div>
    </div>
  );
}
