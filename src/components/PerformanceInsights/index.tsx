export const PerformanceInsights: React.FC = () => {
  return (
    <div className="p-4">
      <h2 className="text-lg font-bold mb-4">Performance Insights</h2>
      <div className="bg-white p-4 rounded-md shadow-md">
        <h3 className="text-md font-semibold">Insights</h3>
        <p>
          Your completion rate has improved by 20% this week. Keep up the good
          work!
        </p>
      </div>
      <div className="bg-white p-4 rounded-md shadow-md mt-4">
        <h3 className="text-md font-semibold">Machine Learning Tips</h3>
        <p>
          Consider setting more realistic deadlines for your tasks to improve
          completion rates.
        </p>
      </div>
    </div>
  );
};
