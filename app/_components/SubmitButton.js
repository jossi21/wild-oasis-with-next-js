"use client";
import { useFormStatus } from "react-dom";
export function SubmitButton({ children, DynamicText }) {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="bg-accent-400 px-7 py-3 text-primary-700 font-semibold rounded-sm hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300"
      disabled={pending}
    >
      {pending ? DynamicText : children}
    </button>
  );
}
