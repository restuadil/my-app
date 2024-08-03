"use client"
import Image from "next/image"
import { usePathname } from "next/navigation"
import React, { useEffect } from "react"
import Link from "next/link"
import { signOut, useSession } from "next-auth/react"

const Navbar = () => {
  const { status } = useSession()
  const pathname = usePathname()
  const isAuthPage = pathname === "/login" || pathname === "/register"
  useEffect(() => {}, [status])
  return (
    <>
      {!isAuthPage && (
        <div className="p-3 text-xl z-10 w-full fixed top-0 bg-opacity-70 bg-black backdrop-blur">
          {/* Navbar */}
          <div className="flex justify-between items-center">
            <ul className="flex gap-5">
              <li className="flex gap-2 items-center ">
                <Image src="/logo.png" alt="logo" width={50} height={50} />
                <span className="text-3xl font-semibold font-mono text-white">
                  Coffee Shop
                </span>
              </li>
            </ul>
            {status === "unauthenticated" ? (
              <ul className="flex gap-3 items-center font-semibold">
                <li className="bg-slate-900 text-white px-5 py-1.5 rounded-lg">
                  <Link href="/login">Sign In</Link>
                </li>
                <li className="bg-slate-200 text-slate-900 px-5 py-1.5 rounded-lg">
                  <Link href="/register">Sign Up</Link>
                </li>
              </ul>
            ) : (
              <div>
                <button
                  className="bg-slate-200 text-slate-900 px-5 py-1.5 rounded-lg"
                  onClick={() => signOut()}
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  )
}
export default Navbar
