import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement,
} from "chart.js";
import { Pie, Bar, Line } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  LineElement,
  PointElement
);

export const TaskStatistics: React.FC = () => {
  const pieData = {
    labels: ["Completed", "Pending", "Overdue"],
    datasets: [
      {
        data: [10, 20, 5],
        backgroundColor: ["#4CAF50", "#FF9800", "#F44336"],
      },
    ],
  };

  const barData = {
    labels: ["High", "Medium", "Low"],
    datasets: [
      {
        label: "Task Priority",
        data: [5, 10, 15],
        backgroundColor: ["#FF5722", "#FFC107", "#8BC34A"],
      },
    ],
  };

  const lineData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Tasks Completed",
        data: [2, 4, 3, 6, 5, 2, 4],
        backgroundColor: "#3F51B5",
        borderColor: "#3F51B5",
        fill: false,
      },
    ],
  };

  return (
    <div className="p-6 md:p-8 lg:p-10 xl:p-12">
      <h2 className="text-2xl md:text-3xl font-extrabold mb-6 text-gray-600">
        Task Statistics
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-600">
            Task Status
          </h3>
          <div className="relative w-full h-60 md:h-80 lg:h-96">
            <Pie
              data={pieData}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  tooltip: {
                    callbacks: {
                      label: (tooltipItem) =>
                        `${tooltipItem.label}: ${tooltipItem.raw}`,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-600">
            Priority Distribution
          </h3>
          <div className="relative w-full h-60 md:h-80 lg:h-96">
            <Bar
              data={barData}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  tooltip: {
                    callbacks: {
                      label: (tooltipItem) =>
                        `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out">
          <h3 className="text-lg md:text-xl font-semibold mb-4 text-gray-600">
            Weekly Completion Trend
          </h3>
          <div className="relative w-full h-60 md:h-80 lg:h-96">
            <Line
              data={lineData}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                plugins: {
                  legend: {
                    position: "top",
                  },
                  tooltip: {
                    callbacks: {
                      label: (tooltipItem) =>
                        `${tooltipItem.dataset.label}: ${tooltipItem.raw}`,
                    },
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
