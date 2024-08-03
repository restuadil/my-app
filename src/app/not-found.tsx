"use client"

import { useRouter } from "next/navigation"
import React from "react"

const NotFoundPage = () => {
  const router = useRouter()

  const goHome = () => {
    router.back()
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-bold mb-4">Page Not Found</h1>
      <p className="text-lg mb-8">
        Sorry, we couldnt find the page youre looking for.
      </p>
      <button
        onClick={goHome}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Go Home
      </button>
    </div>
  )
}

export default NotFoundPage
