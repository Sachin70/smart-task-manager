"use client";

import { useRouter } from "next/navigation";

export const TaskActions: React.FC<{ taskId: string }> = ({ taskId }) => {
  const router = useRouter();

  const handleEdit = () => {
    // Navigate to the edit page for the current task
    router.push(`/task/edit/${taskId}`);
  };

  const handleDelete = () => {
    // Add your delete logic here, e.g., make an API call to delete the task
    console.log(`Deleting task with id: ${taskId}`);
    router.push("/"); // Redirect to the home page after deletion
  };

  return (
    <div className="flex space-x-4 mt-4">
      <button
        onClick={handleEdit}
        className="bg-yellow-500 text-white py-2 px-4 rounded-md"
      >
        Edit
      </button>
      <button
        onClick={handleDelete}
        className="bg-red-600 text-white py-2 px-4 rounded-md"
      >
        Delete
      </button>
    </div>
  );
};
