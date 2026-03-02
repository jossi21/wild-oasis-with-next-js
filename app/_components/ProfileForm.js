"use client";
import React from "react";

export default function ProfileForm({ children }) {
  return (
    <div>
      <form className="bg-primary-900 py-8 px-12 text-lg flex flex-col gap-7">
        <div className="space-y-2 flex flex-col">
          <label>Full Name</label>
          <input className="px-3 py-1.5 bg-primary-200 text-primary-800 w-full shadow-sm rounded-lg disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 outline-none focus:outline-1 focus:outline-accent-400 " />
        </div>
        <div className="space-y-2">
          <label>Email</label>
          <input className="px-3 py-1.5 bg-primary-200 text-primary-800 w-full shadow-sm rounded-lg disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 outline-none focus:outline-1 focus:outline-accent-400 " />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
            <img
              src="flag.jpg"
              alt="country flag "
              className="h-5 rounded-lg"
            />
          </div>
          {/* here country list */}
          {children}
        </div>
        <div className="space-y-2">
          <label>National ID number</label>
          <input
            name="nationalID"
            className="px-3 py-1.5 bg-primary-200 text-primary-800 w-full shadow-sm rounded-lg disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400 outline-none focus:outline-1 focus:outline-accent-400 "
          />
        </div>
        <div className="flex justify-end items-center gap-5">
          <button className="bg-accent-400 px-7 py-3 text-primary-700 font-semibold rounded-sm hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300">
            Update profile
          </button>
        </div>
      </form>
    </div>
  );
}
