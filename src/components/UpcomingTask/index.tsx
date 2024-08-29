export const UpcomingTasks: React.FC = () => {
  const upcomingTasks = [
    { id: 1, title: "Task 1", dueDate: "2024-08-25" },
    { id: 2, title: "Task 2", dueDate: "2024-08-26" },
    // Add more tasks as needed
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Upcoming Tasks</h2>
      <ul>
        {upcomingTasks.map((task) => (
          <li key={task.id} className="bg-white p-4 mb-2 rounded-md shadow-md">
            <h3 className="text-md font-semibold">{task.title}</h3>
            <p>Due: {task.dueDate}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
