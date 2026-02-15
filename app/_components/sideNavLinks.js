import {
  CalendarDaysIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/solid";

const NavLinks = [
  {
    name: "Home",
    href: "/account",
    icon: <HomeIcon className="h-5 w-5 text-primary-400" />,
  },
  {
    name: "Reservation",
    href: "/account/reservation",
    icon: <CalendarDaysIcon className="h-5 w-5 text-primary-400" />,
  },
  {
    name: "Guest profile",
    href: "/account/profile",
    icon: <UserIcon className="h-5 w-5 text-primary-400" />,
  },
];

export { NavLinks };
