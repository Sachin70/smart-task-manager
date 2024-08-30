import dynamic from "next/dynamic";

// Dynamically import the TaskForm component with SSR disabled
const TaskForm = dynamic(() => import("@/components/TaskForm"), {
  ssr: false, // Disable server-side rendering
});

export default function NewTask() {
  return <TaskForm />;
}
