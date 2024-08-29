"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { tasks } from "@/utils/constants";
import { TaskActions } from "@/components/TaskActions";
import { TaskCompletion } from "@/components/TaskCompletion";
import { TaskInfo } from "@/components/TaskInfo";

const fetchTaskById = (id: string) => {
  return tasks.find((task) => task.id === parseInt(id));
};

export default function TaskDetailPage() {
  const { taskId } = useParams();
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getTask = () => {
      try {
        const taskData = fetchTaskById(taskId as string);
        if (taskData) {
          setTask(taskData as any);
        } else {
          setError("Task not found");
        }
      } catch (err) {
        setError("Error fetching task data");
      } finally {
        setLoading(false);
      }
    };

    getTask();
  }, [taskId]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!task) return <div>No task data available</div>;

  return (
    <div>
      <TaskInfo task={task} />
      <TaskCompletion taskId={taskId} />
      <TaskActions taskId={taskId as any} />
    </div>
  );
}
