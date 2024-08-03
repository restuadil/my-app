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
      <SideBar sideBarItem={sideBarItem} title="Dashboard" />
      <div className="flex-grow  bg-gray-100 min-h-screen ml-[200px]">
        {children}
      </div>
    </div>
  )
}

export default layout
