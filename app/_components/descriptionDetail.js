"use client";
import { useEffect, useState } from "react";

export default function DescriptionDetail({ children }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="">
      <span>
        {isExpanded
          ? children
          : children.split(" ").slice(0, 40).join(" ") + "..."}
      </span>
      <button
        className="text-blue-500 pl-2 hover:underline"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "show less" : "show more"}
      </button>
    </div>
  );
}
