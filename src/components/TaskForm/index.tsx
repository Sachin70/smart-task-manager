"use client";

import React, { useState, useEffect } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

const DEFAULT_POSITION: [number, number] = [28.6139, 77.209];
const ICON_URL = "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png";
const ICON_SIZE: [number, number] = [25, 41]; // Correctly defined icon size
const ICON_ANCHOR: [number, number] = [12, 41]; // Icon anchor position

const LocationMap: React.FC<{
  position: [number, number];
  onPositionChange: (position: [number, number]) => void;
}> = ({ position, onPositionChange }) => {
  const map = useMap(); // Access the map instance

  useEffect(() => {
    map.setView(position, 13); // Set the map center and zoom level
  }, [position, map]);

  useMapEvents({
    click(e) {
      const newPosition: [number, number] = [e.latlng.lat, e.latlng.lng];
      onPositionChange(newPosition);
    },
  });

  return (
    <>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker
        position={position}
        icon={L.icon({
          iconUrl: ICON_URL,
          iconSize: ICON_SIZE, // Correct type for iconSize
          iconAnchor: ICON_ANCHOR,
        })}
      >
        <Popup>{`Latitude: ${position[0]}, Longitude: ${position[1]}`}</Popup>
      </Marker>
    </>
  );
};

export const TaskForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [location, setLocation] = useState<[number, number]>(DEFAULT_POSITION); // Location state

  const handleSave = () => {
    console.log({
      title,
      description,
      dueDate,
      priority,
      location,
    });
  };

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        Create a New Task
      </h2>
      <form className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task Title"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Task Description"
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
        />
        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>

        {/* Map for location selection */}
        <div className="h-[300px] rounded-md overflow-hidden">
          <MapContainer
            style={{ height: "100%", width: "100%" }}
            center={DEFAULT_POSITION}
            zoom={13}
          >
            <LocationMap
              position={location}
              onPositionChange={(pos) => setLocation(pos)}
            />
          </MapContainer>
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Save
        </button>
      </form>
    </div>
  );
};
