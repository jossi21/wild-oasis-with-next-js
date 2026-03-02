"use server";
import { signIn, signOut } from "./auth";
import { createGuest } from "./data-service";

// manually add user
export async function createGuestByEmail(formData) {
  const email = formData.get("email");

  if (!email) {
    return { error: "Email is required" };
  }

  try {
    const newGuest = await createGuest({
      email: email,
      fullName: email.split("@")[0], // Use part of email as name
    });

    return { success: true, guest: newGuest };
  } catch (error) {
    return { error: error.message };
  }
}

// SignIn function
export async function SignInWithProvider(provider) {
  await signIn(provider, { redirectTo: "/account" });
}

// signout function
export async function signoutButton() {
  await signOut({ redirectTo: "/" });
}
