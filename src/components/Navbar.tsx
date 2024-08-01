"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { status } = useSession();
  return (
    <div className="p-3 text-2xl mx-10">
      {/* Navbar */}
      <div className="flex justify-between items-center">
        <ul className="flex items-center ">
          <li>
            <Image src="/accept.png" alt="logo" width={50} height={50} />
          </li>
        </ul>
        <ul className="flex gap-5">
          <Link href={"/"}>Home</Link>
          <Link href={"/dashboard"}>Dashboard</Link>
          <Link href={"/products"}>Products</Link>
        </ul>
        <ul>
          <li>
            {status === "unauthenticated" ? (
              <button
                className="px-5 py-1.5 bg-blue-500 text-white rounded-md"
                onClick={() => signIn()}
              >
                Sign In
              </button>
            ) : (
              <button
                className="px-5 py-1.5 bg-blue-500 text-white rounded-md"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
