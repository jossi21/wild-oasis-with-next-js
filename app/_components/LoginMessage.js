import Link from "next/link";
import React from "react";

export default function LoginMessage() {
  return (
    <div className="grid gap-5 text-center bg-primary-800 self-center font-bold pb-12 pt-6">
      <p className=" text-2xl text-accent-500  ">
        Please login now to reserve <br />
        this cabin <br />
      </p>
      <Link
        href="/login"
        className="py-3 self-center w-[150px] mx-auto text-primary-900 bg-blue-500 font-semibold text-xl rounded-xl"
      >
        login
      </Link>{" "}
    </div>
  );
}
