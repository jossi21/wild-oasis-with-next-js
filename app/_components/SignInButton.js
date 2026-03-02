"use client";
import { useState } from "react";
import { SignInWithProvider } from "../_lib/actions";
import { createGuestByEmail } from "../_lib/actions";
import { useRouter } from "next/navigation";

export default function SignInButton() {
  const [isChecked, setIsChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  // submit handler function
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("email", email);

    const result = await createGuestByEmail(formData);

    // conditional response
    if (result.success) {
      setMessage("✅ Guest created successfully!");
      setEmail("");

      // redirect immediately (no setTimeout needed)
      router.push("/account");
    } else {
      setMessage(`❌ ${result.error}`);
    }
  };

  return (
    <div className="flex flex-col gap-4 self-center border border-primary-300 py-3 px-5 rounded-xl bg-slate-800">
      {message ? (
        <div
          className={`p-2 rounded-md text-center ${message.includes("✅") ? "text-green-500" : "text-red-500"}`}
        >
          {message}
        </div>
      ) : (
        <h2 className="text-accent-500 self-center pt-5">
          Login with another email
        </h2>
      )}

      <form
        onSubmit={submitHandler}
        className="flex flex-col gap-5 items-center pb-3"
      >
        <input
          placeholder="Enter your email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full py-2 px-2 bg-primary-400 text-primary-950 text-xl font-semibold rounded-md"
        />
        <label className="flex gap-3 items-center mb-10">
          <input
            type="checkbox"
            checked={isChecked}
            onChange={(e) => setIsChecked(e.target.checked)}
            className="w-4 h-4"
          />

          {isChecked ? (
            <p className="text-green-600 ">✓ You accepted the terms!</p>
          ) : (
            <span className="text-gray-500">Accept terms and conditions</span>
          )}
        </label>

        <button className="bg-blue-500 rounded-lg text-lg  w-[120px] font-semibold py-2">
          submit
        </button>
      </form>
      {/* Divider */}
      <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-primary-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-slate-800 text-primary-300">
            Or continue with
          </span>
        </div>
      </div>
      <button
        type="button"
        onClick={() => SignInWithProvider("google")}
        className="flex items-center gap-5 text-lg border border-primary-300 px-8 py-3 font-medium"
      >
        <img
          src="https://authjs.dev/img/providers/google.svg"
          alt="Google logo"
          className="h-6 w-6"
        />
        <span>Continue with Google</span>
      </button>
      <button
        type="button"
        onClick={() => SignInWithProvider("github")}
        className="flex items-center gap-5 text-lg border border-primary-300 px-8 py-3 font-medium mb-5"
      >
        <img
          src="https://authjs.dev/img/providers/github.svg"
          alt="GitHub logo"
          className="h-6 w-6"
        />
        <span>Continue with GitHub</span>
      </button>
    </div>
  );
}
