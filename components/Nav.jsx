"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];

const Nav = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="flex space-x-4">
      {Links.map((link, index) => {
        const isActive = link.path === pathname;
        return (
          <Link
            key={index}
            href={link.path}
            className={`capitalize font-medium hover:text-accent transition-all ${isActive ? "text-accent border-b-2 border-accent" : ""}`}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;