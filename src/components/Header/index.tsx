"use client";

import { useParams, usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeftIcon } from "@heroicons/react/solid";

interface HeaderProps {
  defaultTitle?: string;
  onSearch: (query: string) => void; // Callback to handle search
}

export const Header: React.FC<HeaderProps> = ({
  defaultTitle = "Task Details",
  onSearch,
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const [headerTitle, setHeaderTitle] = useState(defaultTitle);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const pathToTitle: Record<string, string> = {
      "/": "Task Manager",
      "/dashboard": "Dashboard",
      "/settings": "Settings",
      "/task-details": "Task Details",
      "/task/add": "Add Task",
    };

    if (pathname.startsWith("/task/edit")) {
      const taskId = params.id;
      setHeaderTitle(taskId ? `Edit Task ${taskId}` : "Edit Task");
    } else {
      setHeaderTitle(pathToTitle[pathname] || defaultTitle);
    }
  }, [pathname, params.id, defaultTitle]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value;
    setSearchQuery(query);
    onSearch(query); // Call the search callback
  };

  return (
    <header className="flex items-center justify-between p-4 bg-blue-600 text-white fixed top-0 left-0 right-0 z-10">
      <div className="flex items-center max-w-[1440px] w-full mx-auto">
        {pathname !== "/" && (
          <button
            onClick={() => router.back()}
            className="mr-2 focus:outline-none"
          >
            <ArrowLeftIcon className="h-6 w-6" />
          </button>
        )}
        <h1 className="text-xl font-bold">{headerTitle}</h1>
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearchChange}
          placeholder="Search tasks..."
          className="ml-4 p-2 border rounded-md text-black"
        />
      </div>
    </header>
  );
};
