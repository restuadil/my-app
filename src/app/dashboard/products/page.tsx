"use client"
import React, { useState, useEffect } from "react"
import ProductServices from "@/services/products"
import Modal from "@/components/Modal" // Import reusable modal
import { useFormik } from "formik"
import * as Yup from "yup"

const Products = () => {
  const [products, setProducts] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false) // State untuk mengelola tampilan modal

  const fetchData = async () => {
    try {
      const response = await ProductServices.get()
      setProducts(response.data.data)
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  const handleAddProduct = async (product: any, resetForm: any) => {
    try {
      await ProductServices.add(product) // Panggil API untuk menambahkan produk baru
      fetchData() // Refresh data setelah produk ditambahkan
      resetForm() // Reset form setelah berhasil
      setIsModalOpen(false) // Tutup modal
    } catch (error: any) {
      throw new Error(error.message)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      price: "",
      category: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      price: Yup.number().required("Required"),
      category: Yup.string().required("Required"),
    }),
    onSubmit: (values, { resetForm }) => {
      handleAddProduct(values, resetForm)
    },
  })

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-6">Manage Products</h1>
      <div className="mb-4">
        <button
          onClick={() => setIsModalOpen(true)} // Buka modal ketika tombol diklik
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add New Product
        </button>
      </div>
      <table className="min-w-full bg-white rounded-lg shadow overflow-hidden">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border-b text-left w-1/6">Name</th>
            <th className="py-2 px-4 border-b text-left w-1/2">Description</th>
            <th className="py-2 px-4 border-b text-left">Price</th>
            <th className="py-2 px-4 border-b text-left">Category</th>
            <th className="py-2 px-4 border-b text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product: any) => (
              <tr key={product.id} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b text-left font-bold">
                  {product.name}
                </td>
                <td className="py-2 px-4 border-b text-left text-sm text-gray-700">
                  {product.description}
                </td>
                <td className="py-2 px-4 border-b text-left">
                  ${product.price}
                </td>
                <td className="py-2 px-4 border-b text-left">
                  {product.category}
                </td>
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center">
                    <button className="bg-yellow-500 text-white px-3 py-1 rounded mr-2">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white px-3 py-1 rounded">
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title="Add New Product"
      >
        <form onSubmit={formik.handleSubmit}>
          <div>
            <label className="block text-gray-700">Name</label>
            <input
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {formik.touched.name && formik.errors.name ? (
              <div className="text-red-500 text-sm">{formik.errors.name}</div>
            ) : null}
          </div>
          <div>
            <label className="block text-gray-700">Description</label>
            <input
              name="description"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.description}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {formik.touched.description && formik.errors.description ? (
              <div className="text-red-500 text-sm">
                {formik.errors.description}
              </div>
            ) : null}
          </div>
          <div>
            <label className="block text-gray-700">Price</label>
            <input
              name="price"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.price}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {formik.touched.price && formik.errors.price ? (
              <div className="text-red-500 text-sm">{formik.errors.price}</div>
            ) : null}
          </div>
          <div>
            <label className="block text-gray-700">Category</label>
            <input
              name="category"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.category}
              className="w-full p-2 border border-gray-300 rounded mt-1"
            />
            {formik.touched.category && formik.errors.category ? (
              <div className="text-red-500 text-sm">
                {formik.errors.category}
              </div>
            ) : null}
          </div>
          <div className="flex justify-end space-x-2 mt-4">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </Modal>
    </div>
  )
}

export default Products
