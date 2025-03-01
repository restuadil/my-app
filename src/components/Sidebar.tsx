"use client"
import { signOut } from "next-auth/react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import React from "react"

const SideBar = ({ sideBarItem, title }: any) => {
  const handleSignOut = () => {
    signOut({
      callbackUrl: "/auth/login", // Redirect to login page after sign out
    })
  }
  const pathname = usePathname()
  return (
    <>
      <div className="w-[200px] bg-black h-screen text-white py-5 flex flex-col justify-between fixed">
        <div>
          <h1 className="text-center font-semibold text-3xl mb-2 px-8">
            {title}
          </h1>
          <ul className="mt-10 px-2 flex flex-col gap-2">
            {sideBarItem.map((item: any) => (
              <Link
                href={item.link}
                key={item.name}
                className={`text-xl flex flex-row items-center gap-3 transition-all duration-300 ${
                  pathname === item.link ? "bg-white text-black" : ""
                }  p-2 hover:bg-white hover:text-black`}
              >
                <i className={`bx ${item.icon} text-2xl`}></i>
                <span className="text-xl">{item.name}</span>
              </Link>
            ))}
          </ul>
        </div>
        <button
          type="button"
          onClick={handleSignOut}
          className=" py-2 text-whiteblock mx-10 font-semibold text-xl  hover:bg-white hover:text-black"
        >
          Logout
        </button>
      </div>
    </>
  )
}

export default SideBar
