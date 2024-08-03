"use client"
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation"
import React, { useEffect } from "react"

const DashboardPage = () => {
  const { data: session }: any = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push("/")
    } else if (session.user?.role !== "admin") {
      router.push("/")
    } else {
      router.push("/dashboard")
    }
  }, [session, router])
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-3xl  flex flex-col bg-slate-400 p-5">
        {session && (
          <>
            <h1>DASHBOARD</h1>
            <h1>Welcome {session?.user?.email}</h1>
            <div className="flex items-center justify-center h-screen p-4">
              <div className="w-full max-w-xl">
                <h1 className="text-2xl font-bold mb-4">Dashboard Ecommerce</h1>
                <p className="mb-4">
                  Selamat datang di dashboard ecommerce anda
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-medium mb-2">Barang Terjual</h2>
                    <p className="text-gray-600">
                      Total barang terjual bulan ini
                    </p>
                    <p className="text-2xl font-bold mt-2">100</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-medium mb-2">Pendapatan</h2>
                    <p className="text-gray-600">Total pendapatan bulan ini</p>
                    <p className="text-2xl font-bold mt-2">Rp. 1.000.000</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-medium mb-2">Pesanan Baru</h2>
                    <p className="text-gray-600">
                      Total pesanan baru bulan ini
                    </p>
                    <p className="text-2xl font-bold mt-2">5</p>
                  </div>
                  <div className="bg-white p-4 rounded shadow">
                    <h2 className="text-lg font-medium mb-2">Produk</h2>
                    <p className="text-gray-600">Total produk yang tersedia</p>
                    <p className="text-2xl font-bold mt-2">20</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default DashboardPage
