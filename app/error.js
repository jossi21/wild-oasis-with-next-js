"use client";
export default function Error({ error, reset }) {
  return (
    <main className="flex flex-col items-center justify-center gap-2">
      <h1 className="text-3xl font-semibold">Something went wrong</h1>
      <p className="text-lg ">
        Error: <span className="text-red-400">{error.message}</span>
      </p>
      <button
        className="bg-blue-500 text-primary-800 text-lg py-2 px-4 mt-5 font-bold "
        onClick={reset}
      >
        Try Again
      </button>
    </main>
  );
}
