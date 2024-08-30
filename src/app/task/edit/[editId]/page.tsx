"use client";

import TaskForm from "@/components/TaskForm";
import { useParams, useRouter } from "next/navigation";

export default function EditPage() {
  const router = useRouter();
  const pathname = useParams();

  const task = {
    id: pathname.taskId,
    title: "Existing Task Title",
    description: "This is an existing detailed description of the task.",
    dueDate: "2024-08-24",
    priority: "High",
    location: "New York, NY", // Example location
  };

  return (
    <div>
      <TaskForm />
    </div>
  );
}
