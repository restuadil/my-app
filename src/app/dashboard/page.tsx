"use client";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const DashboardPage = () => {
  const { data: session }: any = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/");
    } else if (session.user?.role !== "admin") {
      router.push("/");
    } else {
      router.push("/dashboard");
    }
  }, [session, router]);
  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="text-3xl  flex flex-col bg-slate-400 p-5">
        {session && (
          <>
            <h1>DASHBOARD</h1>
            <h1>Welcome {session?.user?.email}</h1>
          </>
        )}
      </div>
    </div>
  );
};

export default DashboardPage;
