"use client"
import React, { useState, useEffect } from "react"
import Link from "next/link"

const ManageProducts = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {}, [])

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>
      <div className="mb-4">
        <Link href="/admin/products/new">Add New Product</Link>
      </div>
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4 border-b">Lorem ipsum dolor sit.</td>
            <td className="py-2 px-4 border-b">$10.00</td>
            <td className="py-2 px-4 border-b">
              <Link href={``}>Edit</Link>
              <button className="bg-red-500 text-white px-3 py-1 rounded">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default ManageProducts
