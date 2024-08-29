"use client";

import { PlusIcon } from "@heroicons/react/solid";
import { useRouter } from "next/navigation";

export const FAB = () => {
  const router = useRouter();

  return (
    <button
      className="fixed bottom-8 right-8 bg-blue-600 text-white p-4 rounded-full shadow-lg z-50"
      onClick={() => router.push("/task/add")}
    >
      <PlusIcon className="h-6 w-6" />
    </button>
  );
};
