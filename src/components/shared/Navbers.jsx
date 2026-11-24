"use client";
import Image from "next/image";
import Link from "next/link";
import AvatorUser from "@/assets/user.png";
import NavLink from "./NavLink";
import { Suspense } from "react";
import { authClient } from "@/lib/auth-client";

const Navbers = () => {
  // session call the user id:-----------
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user;

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

      {isPending ? (
        <span className="loading loading-ring loading-sm"></span>
      ) : user ? (
        <div className="flex justify-between items-center gap-3">
          <h2 className="font-medium text-slate-500">
            Hello Im <span className="font-semibold">{session?.user.name}</span>
          </h2>
          <Image
            src={session?.user?.image || AvatorUser}
            alt="user"
            width={60}
            height={60}
            className="rounded-full"
          />
          <button className="btn  bg-purple-500 text-white" onClick={async () => await authClient.signOut()}>Logout</button>
        </div>
      ) : (
        <button className="btn bg-purple-500 text-white">
          <Link href="/login">Login</Link>
        </button>
      )}   
    </div>
  );
};

export default Navbers;
