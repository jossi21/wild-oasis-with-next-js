"use client";
import { useState } from "react";

export default function Count({ propsData }) {
  const [count, setCount] = useState(0);
  //   console.log(propsData);
  return (
    <div>
      <p>
        There are {propsData.length} user's pass to client component through out
        props from server component
      </p>
      {/* {propsData.map((data) => (
        <div key={data.id}>{data.name}</div>
      ))} */}
      <button onClick={() => setCount((num) => num + 1)}>{count}</button>
    </div>
  );
}
