import { FAB } from "@/components/FAB";
import { Header } from "@/components/Header";
import { NavigationBar } from "@/components/Navigation";
import { TaskList } from "@/components/TaskList";
import { tasks } from "@/utils/constants";

export default function Home() {
  return (
    <div>
      <TaskList tasks={tasks} />
      <FAB />
      <NavigationBar />
    </div>
  );
}
