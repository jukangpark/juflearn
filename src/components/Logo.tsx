import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="font-bold text-xl flex mr-10">
      <Image
        src="/images/logo.png"
        alt="logo"
        width={40}
        height={40}
        className="mr-5"
      />
      <div className="leading-10">Code King</div>
    </Link>
  );
};

export default Logo;
