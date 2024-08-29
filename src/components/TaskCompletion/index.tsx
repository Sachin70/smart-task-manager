"use client";

import React, { useState } from "react";

export const TaskCompletion = ({ taskId }: any) => {
  const [completed, setCompleted] = useState(false);

  return (
    <div className="p-4 flex justify-between items-center">
      <span>{completed ? "Task Completed" : "Mark as Completed"}</span>
      <input
        type="checkbox"
        checked={completed}
        onChange={() => setCompleted(!completed)}
        className="toggle-checkbox"
      />
    </div>
  );
};
