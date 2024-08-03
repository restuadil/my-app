import { register } from "@/lib/firebase/service"
import { NextRequest, NextResponse } from "next/server"

export const POST = async (request: NextRequest) => {
  const req = await request.json()
  const response = await register(req)
  if (!response) {
    return NextResponse.json({ message: "Register Failed" })
  }
  return NextResponse.json(
    { message: "Register Success", response: response },
    { status: 201 }
  )
}
export const GET = () => {
  return NextResponse.json({ message: "Register API" })
}
