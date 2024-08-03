"use client"
import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"

const LoginPage = () => {
  const router = useRouter()
  const initialValues = {
    email: "",
    password: "",
  }
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string().required("Required"),
  })
  const handleSubmit = async (
    values: any,
    {
      setSubmitting,
      resetForm,
    }: { setSubmitting: (isSubmitting: boolean) => void; resetForm: () => void }
  ) => {
    const result = await signIn("credentials", {
      redirect: false,
      email: values.email,
      password: values.password,
    })
    if (result?.status === 200) {
      alert("Login success")
      resetForm()
      router.push("/dashboard")
    } else {
      alert("Login failed")
    }
    setTimeout(() => {
      setSubmitting(false)
    }, 2000)
  }

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <div className="flex flex-col items-center">
          <h1 className="text-3xl font-bold mb-6">Login</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="w-full flex flex-col justify-start">
                <div className="mb-4">
                  <label className="block text-gray-700">Email</label>
                  <Field
                    type="email"
                    name="email"
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="text-red-500 text-sm mt-1 italic"
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700">Password</label>
                  <Field
                    type="password"
                    name="password"
                    className="border border-gray-300 rounded p-2 w-full"
                  />
                  <ErrorMessage
                    name="password"
                    component="span"
                    className="text-red-500 text-sm mt-1 italic"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-slate-500 text-white py-2 px-4 rounded w-full flex items-center justify-center"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : (
                    "Login"
                  )}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
