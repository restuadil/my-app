import { addData, retrieveData } from "@/lib/firebase/service"
import { NextRequest, NextResponse } from "next/server"

export const GET = async () => {
  try {
    const response = await retrieveData("products")
    return NextResponse.json(
      {
        message: "Success",
        data: response,
        pagination: "Pagination", //TODO add pagination
      },
      { status: 200, statusText: "OK" }
    )
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message })
    } else {
      return NextResponse.json({ message: "An unexpected error occurred" })
    }
  }
}

export const POST = async (request: NextRequest) => {
  const data = await request.json()
  try {
    const response = await addData("products", data)
    return NextResponse.json(
      {
        message: "Success",
        data: response,
        pagination: "Pagination", //TODO add pagination
      },
      { status: 201, statusText: "OK" }
    )
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json({ message: error.message })
    } else {
      return NextResponse.json({ message: "An unexpected error occurred" })
    }
  }
}
