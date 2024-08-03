import SideBar from "@/components/Sidebar"
import React from "react"

const layout = ({ children }: { children: React.ReactNode }) => {
  const sideBarItem = [
    {
      name: "Products",
      link: "/dashboard/products",
    },
    {
      name: "Orders",
      link: "/dashboard/orders",
    },
    {
      name: "Users",
      link: "/dashboard/users",
    },
  ]
  return (
    <div className="">
      <div className="flex-grow  bg-gray-100 min-h-screen">
        <SideBar sideBarItem={sideBarItem} title="Dashboard" />
        {children}
      </div>
    </div>
  )
}

export default layout
