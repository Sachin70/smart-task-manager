"use client";

import React from "react";
import { useRouter, usePathname, useParams } from "next/navigation";
import { ArrowLeftIcon } from "@heroicons/react/solid";
import { useDispatch } from "react-redux";
import { setSearchQuery } from "@/slices/taskSlices";

interface HeaderProps {
  defaultTitle?: string;
}

export const Header: React.FC<HeaderProps> = ({
  defaultTitle = "Task Details",
}) => {
  const pathname = usePathname();
  const router = useRouter();
  const params = useParams();
  const dispatch = useDispatch();

  const [headerTitle, setHeaderTitle] = React.useState(defaultTitle);
  const [localSearchQuery, setLocalSearchQuery] = React.useState("");

  React.useEffect(() => {
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
    setLocalSearchQuery(query);
    dispatch(setSearchQuery(query));
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
          value={localSearchQuery}
          onChange={handleSearchChange}
          placeholder="Search tasks..."
          className="ml-4 p-2 border rounded-md text-black"
        />
      </div>
    </header>
  );
};
