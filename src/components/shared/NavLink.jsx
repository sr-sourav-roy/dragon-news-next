"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = href === pathname;
  return (
    <div>
      <Link href={href} className={`${isActive ? "text-green-500" : ""}`}>
        {children}
      </Link>
    </div>
  ); 
};

export default NavLink;
