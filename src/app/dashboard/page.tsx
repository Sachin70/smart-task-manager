"use client";

import { PerformanceInsights } from "@/components/PerformanceInsights";
import { TaskStatistics } from "@/components/Statistics.tsx";
import { UpcomingTasks } from "@/components/UpcomingTask";

export default function Dashboard() {
  return (
    <div>
      <TaskStatistics />
      <UpcomingTasks />
      <PerformanceInsights />
    </div>
  );
}
