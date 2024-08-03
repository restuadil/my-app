import instance from "@/lib/axios"

const ProductServices = {
  get: () => instance.get("products"),
  add: (data: any) => instance.post("products", data),
  update: (id: string, data: any) => instance.put(`products/${id}`, data),
  delete: (id: string) => instance.delete(`products/${id}`),
}

export default ProductServices
