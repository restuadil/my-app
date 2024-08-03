import instance from "@/lib/axios"
type UserRequest = {
  email: string
  password: string
}
const authServices = {
  registerAccount: (data: UserRequest) => instance.post("auth/register", data),
}

export default authServices
