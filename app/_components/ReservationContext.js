"use client";
import { createContext, useContext, useState } from "react";

// create context
const ReservationContext = createContext();

// create the function which holed context value and provide the context

function ReservationProvider({ children }) {
  const [range, setRange] = useState({ from: undefined, to: undefined });
  const resetRange = () => setRange({ from: undefined, to: undefined });

  return (
    <ReservationContext.Provider value={{ range, setRange, resetRange }}>
      {children}
    </ReservationContext.Provider>
  );
}

// create custom hook to use the Reservation context
function useReservationContext() {
  const createdContext = useContext(ReservationContext);

  if (createdContext === undefined)
    throw new Error("Context was used outside provider");
  return createdContext;
}

export { ReservationProvider, useReservationContext };
