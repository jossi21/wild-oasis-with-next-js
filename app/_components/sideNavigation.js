"use client";

import Link from "next/link";
import { NavLinks } from "./sideNavLinks";
import SignOutButton from "./signOutButton";
import SignInButton from "./SignInButton";
import { usePathname } from "next/navigation";
export default function SideNavigation() {
  // add some highlight on the page which the client one it.

  const currentPath = usePathname();
  // console.log(currentPath);
  return (
    <nav className="border-r border-accent-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {NavLinks.map((navLink) => (
          <li key={navLink.name}>
            <Link
              href={navLink.href}
              className={`flex items-center py-3 px-2 gap-2 font-semibold text-primary-200 hover:text-primary-100 hover:bg-primary-700 transition-colors ${currentPath === navLink.href ? "bg-primary-800" : ""}`}
            >
              {navLink.icon}
              <span>{navLink.name}</span>
            </Link>
          </li>
        ))}
        <li className="mt-auto">
          <SignOutButton />
        </li>
      </ul>
    </nav>
  );
}
