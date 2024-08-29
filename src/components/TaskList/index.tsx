"use client";

import React from "react";
import { useRouter } from "next/navigation";

interface Task {
  id: number;
  title: string;
  dueDate: string;
  priority: string;
}

interface TaskListProps {
  tasks: Task[];
}

export const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "High":
      return "bg-red-100 text-red-600";
    case "Medium":
      return "bg-yellow-100 text-yellow-600";
    case "Low":
      return "bg-green-100 text-green-600";
    default:
      return "bg-gray-100 text-gray-600";
  }
};

export const TaskList: React.FC<TaskListProps> = ({ tasks = [] }) => {
  const router = useRouter();

  const handleCardClick = (taskId: number) => {
    router.push(`/task/${taskId}`);
  };

  const handleCheckboxClick = (
    event: React.MouseEvent<HTMLInputElement>,
    taskId: number
  ) => {
    event.stopPropagation();
    console.log(`Checkbox for task ${taskId} clicked`);
  };

  return (
    <div className="py-6 grid grid-cols-4 gap-x-5">
      {tasks.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks found.</p>
      ) : (
        tasks.map((task) => (
          <div
            key={task.id}
            className="bg-white p-5 mb-4 shadow-lg rounded-lg cursor-pointer hover:shadow-xl transition-shadow duration-300 ease-in-out"
            onClick={() => handleCardClick(task.id)}
          >
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-xl font-semibold text-gray-600">
                {task.title}
              </h2>
              <input
                type="checkbox"
                className="form-checkbox h-5 w-5 text-blue-600"
                onClick={(e) => handleCheckboxClick(e, task.id)}
              />
            </div>
            <p className="text-gray-600 mb-2">Due: {task.dueDate}</p>
            <p
              className={`text-sm font-medium py-1 px-2 rounded-md ${getPriorityColor(
                task.priority
              )}`}
            >
              {task.priority}
            </p>
          </div>
        ))
      )}
    </div>
  );
};
