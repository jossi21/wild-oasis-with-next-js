import {
  ArrowLeftEndOnRectangleIcon,
  ArrowRightEndOnRectangleIcon,
} from "@heroicons/react/24/solid";

export default function SignOutButton() {
  return (
    <button className="w-full flex items-center gap-2 py-3 px-2 font-semibold text-primary-200 hover:text-primary-100 hover:bg-primary-700 transition-colors ">
      <ArrowRightEndOnRectangleIcon className="h-5 w-5 text-primary-400" />
      <span> Sign out</span>
    </button>
  );
}
