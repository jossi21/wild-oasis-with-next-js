import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session = await auth();
  // console.log(session);
  return (
    <nav className="z-10 text-xl">
      <ul className="flex gap-16 items-center">
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 cursor-pointer transition-colors"
          >
            About
          </Link>
        </li>

        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 cursor-pointer transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          {session?.user?.image ? (
            <Link
              href="/account"
              className="hover:text-accent-400 cursor-pointer transition-colors flex gap-2 items-center"
            >
              {" "}
              <img
                src={session.user.image}
                alt={session.user.name}
                className="h-6 rounded-full"
                referrerPolicy="no-referrer"
              />
              <span className="text-lg">{session.user.name}</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 cursor-pointer transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
    </nav>
  );
}
