import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json(
    {
      name: "John Doe",
      age: 30,
      emai: "Johndoe@gmail.coom",
    },
    {
      status: 200,
    }
  );
};
