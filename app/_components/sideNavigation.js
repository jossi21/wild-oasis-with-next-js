import Link from "next/link";
import { NavLinks } from "./sideNavLinks";
import SignOutButton from "./signOutButton";
import SignInButton from "./SignInButton";
export default function SideNavigation() {
  return (
    <nav className="border-r border-accent-900">
      <ul className="flex flex-col gap-2 h-full text-lg">
        {NavLinks.map((navLink) => (
          <li key={navLink.name}>
            <Link
              href={navLink.href}
              className="flex items-center py-3 px-2 gap-2 font-semibold text-primary-200 hover:text-primary-100 hover:bg-primary-700 transition-colors "
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
