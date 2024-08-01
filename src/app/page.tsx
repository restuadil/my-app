"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Home() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen">
      <h1>Hello</h1>
    </div>
  );
}
