import React from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { getPriorityColor } from "../TaskList";

const DEFAULT_POSITION: [number, number] = [28.6139, 77.209];

interface Task {
  title: string;
  description: string;
  dueDate: string;
  priority: string;
  location?: string;
}

interface TaskInfoProps {
  task: Task;
}

const MapView: React.FC<{ position: [number, number] }> = ({ position }) => {
  const map = useMap();
  React.useEffect(() => {
    map.setView(position, 13);
  }, [position, map]);

  return (
    <>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={position}>
        <Popup>{position.toString()}</Popup>
      </Marker>
    </>
  );
};

export const TaskInfo: React.FC<TaskInfoProps> = ({ task }) => {
  const location = task.location ? task.location.split(", ") : [];
  const latitude = parseFloat(location[0]);
  const longitude = parseFloat(location[1]);

  const position: [number, number] =
    !isNaN(latitude) && !isNaN(longitude)
      ? [latitude, longitude]
      : DEFAULT_POSITION;

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-gray-800">{task.title}</h2>
      <p className="mt-2 text-gray-600">{task.description}</p>
      <p className="mt-4 text-gray-800">
        <span className="font-semibold">Due:</span> {task.dueDate}
      </p>
      <p className={`mt-2 text-sm p-2 ${getPriorityColor(task.priority)}`}>
        <span className="font-semibold">Priority:</span> {task.priority}
      </p>

      <div className="mt-6 h-[500px] rounded-lg overflow-hidden">
        <MapContainer style={{ height: "100%", width: "100%" }}>
          <MapView position={position} />
        </MapContainer>
      </div>
    </div>
  );
};
