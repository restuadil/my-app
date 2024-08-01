"use client"
import React from "react"
import AuthForm from "@/Layout/AuthLayout"
import * as Yup from "yup"

const RegisterPage = () => {
  const initialValues = {
    email: "",
    password: "",
  }

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  })

  const handleSubmit = (
    values: any,
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    console.log(values)
    setTimeout(() => {
      setSubmitting(false)
    }, 2000) // Simulasi delay untuk loading
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6">Register</h1>
          <AuthForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            buttonText="Register"
          />
        </div>
      </div>
    </div>
  )
}

export default RegisterPage
