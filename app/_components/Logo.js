import Link from "next/link";
import Image from "next/image";
import LOGO from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="flex items-center gap-4 z-10">
      <Image
        src={LOGO}
        quality={75}
        height="60"
        width="60"
        alt="The Wild Oasis logo"
        loading="eager"
        priority={true}
      />
      <span className="text-xl font-semibold text-primary-100 hidden min-[509px]:block">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
