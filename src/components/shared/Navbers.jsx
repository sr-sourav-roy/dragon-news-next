import Image from "next/image";
import Link from "next/link";
import AvatorUser from "@/assets/user.png";
import NavLink from "./NavLink";
import { Suspense } from "react";

const Navbers = () => {
  return (
    <div className="container mx-auto flex justify-between items-center mt-7">
      <div></div>

      <ul className="flex justify-between items-center gap-4 text-gray-800">
        <Suspense fallback={<div>Loading...</div>}>
          <li>
            <NavLink href="/">Home</NavLink>
          </li>
          <li>
            <NavLink href="/about-us">About</NavLink>
          </li>
          <li>
            <NavLink href="/career">Career</NavLink>
          </li>
        </Suspense>
      </ul>

      <div className="flex justify-between items-center gap-3">
        <Image src={AvatorUser} alt="user" width={60} height={60} />
        <button className="btn bg-purple-500 text-white">
          <Link href="/login">Login</Link>
        </button>
      </div>
    </div>
  );
};

export default Navbers;
