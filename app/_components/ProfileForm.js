"use client";
import React, { useActionState } from "react";
import { updateProfile } from "@/app/_lib/actions";
import { useFormStatus } from "react-dom";
import { SubmitButton } from "./SubmitButton";

export default function ProfileForm({ guest, children }) {
  // console.log(guest);
  const { fullName, email, nationalID, countryFlag } = guest;

  return (
    <div>
      <form
        action={updateProfile}
        className="bg-primary-900 py-8 px-12 text-lg flex flex-col gap-7"
      >
        <div className="space-y-2 flex flex-col">
          <label>Full Name</label>
          <input
            defaultValue={fullName}
            name="fullName"
            className="px-3 py-1.5 bg-primary-200 text-primary-800 w-full shadow-sm rounded-lg disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 outline-none focus:outline-1 focus:outline-accent-400 "
          />
        </div>
        <div className="space-y-2">
          <label>Email</label>
          <input
            disabled
            defaultValue={email}
            name="email"
            className="px-3 py-1.5 bg-primary-200 text-primary-800 w-full shadow-sm rounded-lg disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 outline-none focus:outline-1 focus:outline-accent-400 "
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
            <img
              src={countryFlag}
              alt="country flag "
              className="h-6 w-6 rounded-md"
            />
          </div>
          {/* here country list */}
          {children}
        </div>
        <div className="space-y-2">
          <label>National ID number</label>
          <input
            defaultValue={nationalID}
            name="nationalID"
            className="px-3 py-1.5 bg-primary-200 text-primary-800 w-full shadow-sm rounded-lg disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 outline-none focus:outline-1 focus:outline-accent-400 "
          />
        </div>
        <div className="flex justify-end items-center gap-5">
          <SubmitButton DynamicText={"Updating..."}>
            Update profile
          </SubmitButton>
        </div>
      </form>
    </div>
  );
}
