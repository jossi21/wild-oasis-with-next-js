"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

export default function Filter() {
  // get the url which the user click
  const searchParams = useSearchParams();

  // get the previous route
  const pathname = usePathname();

  // define route from the next/navigation to replace the previous route with the new one
  const route = useRouter();

  //   console.log(searchParams);
  //   console.log(pathname);
  //   console.log(route);

  // active filter
  const currentFilter = searchParams.get("capacity") ?? "all";
  function filterHandler(filter) {
    // console.log(filter);

    const params = new URLSearchParams(searchParams);
    // set the params
    params.set("capacity", filter);
    route.replace(`${pathname}?${params.toString()}`);
    // console.log(params);
  }
  return (
    <div className="border border-primary-600 mb-5 flex ">
      <Button
        filter="all"
        filterHandler={filterHandler}
        currentFilter={currentFilter}
      >
        all cabins
      </Button>
      <Button
        filter="small"
        filterHandler={filterHandler}
        currentFilter={currentFilter}
      >
        small size
      </Button>
      <Button
        filter="medium"
        filterHandler={filterHandler}
        currentFilter={currentFilter}
      >
        medium size
      </Button>
      <Button
        filter="large"
        filterHandler={filterHandler}
        currentFilter={currentFilter}
      >
        large size
      </Button>
    </div>
  );
}

// shew current filter to the user
function Button({ filter, filterHandler, currentFilter, children }) {
  return (
    <button
      className={`px-5 py-2 [&:not(:last-child)]:mr-2  hover:bg-primary-700 ${filter === currentFilter ? "bg-primary-700" : ""}`}
      onClick={() => filterHandler(filter)}
    >
      {children}
    </button>
  );
}
