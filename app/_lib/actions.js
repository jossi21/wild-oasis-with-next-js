"use server";
import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { getBookings } from "./data-service";
import { supabase } from "./supabase";
import { redirect } from "next/navigation";

//*************************/
// manually add user
// **********************/
export async function createGuestByEmail(formData) {
  // console.log(formData);

  const email = formData.get("email");
  const name = email.split("@")[0];
  const fullName = name.charAt(0).toUpperCase() + name.slice(1);
  // console.log(email, name);
  const newGuest = { email, fullName };

  const { error } = await supabase
    .from("guests")
    .upsert({ email, fullName }, { onConflict: "email" });

  if (error) throw new Error("Guest could not be created");
  redirect("/account");
}

//*************************/
// SignIn function
// **********************/
export async function SignInWithProvider(provider) {
  await signIn(provider, { redirectTo: "/account" });
}

//*************************/
// signout function
// **********************/
export async function signoutButton() {
  await signOut({ redirectTo: "/" });
}

//*************************/
// here is update Guest profile server action
// **********************/
export async function updateProfile(formData) {
  // console.log(formData);

  // write the functionality that handle the update process
  // first thing check the authentication of the user
  const session = await auth();
  if (!session) throw new Error("You must be logged");

  // get the nationalID from yhe form
  const nationalID = formData.get("nationalID");
  const fullName = formData.get("fullName");
  // const email = formData.get("email");
  // get nationality and flag fro the formData
  const [nationality, countryFlag] = formData.get("nationality").split("%");

  // check the validity of nationalID
  if (!/^[a-zA-Z0-9]{5,15}$/.test(nationalID))
    throw new Error("Please enter valid National ID");

  // get those data with in the variable
  const updatedData = { fullName, nationality, countryFlag, nationalID };
  // console.log(updatedData);

  // write here the real function which update the database
  const { error } = await supabase
    .from("guests")
    .update(updatedData)
    .eq("id", session?.user?.guestId);

  if (error) throw new Error("Guest could not be updated");

  // set cash to reduce server load and make faster the refetch
  revalidatePath("/account/profile");
}

//*************************/
// reservation
// **********************/
export async function CabinReservation(passedBookingData, formData) {
  // console.log(passedBookingData, formData);

  // 1) Authentication
  const session = await auth();
  const guestId = session.user.guestId;
  if (!session) throw new Error("You must be logged to reserve this cabin");

  // 2) Build cabin reserving Data
  const cabinReserveData = {
    guestId,
    ...passedBookingData,
    numGuests: Number(formData.get("numGuests")),
    observation: formData.get("observations"),
    extrasPrice: 0,
    status: "Arrived",
    hasBreakfast: false,
    isPaid: true,
  };

  // console.log(cabinReserveData);
  // 3) Inserting data
  const { error } = await supabase
    .from("bookings")
    .insert([cabinReserveData])
    .select();
  // 4) Handling error
  if (error) {
    // console.error(error);
    throw new Error("Booking could not be created");
  }

  // 5) Revalidate the page
  revalidatePath(`/cabins/${passedBookingData.cabinId}`);
  // 6) Redirect to thank you page
  redirect("/cabins/thankyou");
}

//*************************/
// update the reservation
// **********************/
export async function updateReservation(formData) {
  // console.log(formData);

  // 1) Building the data will be update
  const numGuests = Number(formData.get("numGuests"));
  const observation = formData.get("observations");
  const bookingID = Number(formData.get("bookingID"));

  const reservationData = { numGuests, observation };
  // console.log(reservationData);

  // 2) Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged");

  // 3) Authorization
  const guestBookings = await getBookings(session.user.guestId);
  // console.log(guestBookings);
  const guestBookingID = guestBookings.map((b) => b.id);
  // console.log(guestBookingID);
  // console.log(bookingID);
  if (!guestBookingID.includes(bookingID)) {
    throw new Error("You are not allow to update this reservation");
  }

  // 4) Mutation
  const { error } = await supabase
    .from("bookings")
    .update(reservationData)
    .eq("id", bookingID)
    .select()
    .single();

  // 5) Handling error
  if (error) {
    throw new Error("Booking could not be updated");
  }

  // 6) revalidation
  revalidatePath(`/account/reservation`);
  revalidatePath(`/account/reservation/edit/${bookingID}`);

  // Redirection to the reservation page after updated
  redirect("/account/reservation");
}

//*************************/
// delete booking
// **********************/
export async function DeleteBookedCabin(bookingID) {
  // console.log(bookingID);

  // 1) Authentication
  const session = await auth();
  // console.log(session);
  if (!session.user.guestId) throw new Error("Please you must be logged");

  // 2) Authorization
  const guestId = session.user.guestId;
  const guestBookings = await getBookings(guestId);
  // console.log(guestId);
  // console.log(guestBookings);
  const guestBookingID = guestBookings.map((b) => b.id);
  // console.log(guestBookingID);

  if (!guestBookingID.includes(bookingID)) {
    throw new Error("You are not allowed to delete this reservation");
  }

  // 3) Deletion
  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingID);
  // 4) Error Handling
  if (error) {
    throw new Error("Booking could not be deleted");
  }
  // 5) Cashing the page
  revalidatePath("/account/reservation");
}
