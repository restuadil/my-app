"use client"
import React from "react"
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup"

const AuthForm = ({
  initialValues,
  validationSchema,
  onSubmit,
  buttonText,
}: {
  initialValues: any
  validationSchema: any
  onSubmit: any
  buttonText: string
}) => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="w-full">
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <Field
              type="email"
              name="email"
              className="border border-gray-300 rounded p-2 w-full"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <Field
              type="password"
              name="password"
              className="border border-gray-300 rounded p-2 w-full"
            />
            <ErrorMessage
              name="password"
              component="div"
              className="text-red-500 text-sm mt-1"
            />
          </div>
          {initialValues.confirmPassword !== undefined && (
            <div className="mb-6">
              <label className="block text-gray-700">Confirm Password</label>
              <Field
                type="password"
                name="confirmPassword"
                className="border border-gray-300 rounded p-2 w-full"
              />
              <ErrorMessage
                name="confirmPassword"
                component="div"
                className="text-red-500 text-sm mt-1"
              />
            </div>
          )}
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded w-full flex items-center justify-center"
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
              buttonText
            )}
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default AuthForm
