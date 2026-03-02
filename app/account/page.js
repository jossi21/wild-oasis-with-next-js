import { auth } from "../_lib/auth";

export const metadata = {
  title: "Guest area",
};
export default async function Account() {
  const session = await auth();
  // // check here the session that initiate on auth page
  // console.log(session);
  return (
    <h2 className="text-2xl text-accent-400 font-semibold mb-7">
      Welcome, {session?.user?.name}
    </h2>
  );
}
