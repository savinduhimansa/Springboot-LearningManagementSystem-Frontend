import { useState } from "react";

function ResourceFilterBar({ onFilter }) {
  const [filters, setFilters] = useState({
    type: "",
    minCapacity: "",
    location: "",
    status: "",
  });

  const handleChange = (e) => {
    setFilters((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleFilter = () => {
    const cleanedFilters = {};
    Object.keys(filters).forEach((key) => {
      if (filters[key] !== "") {
        cleanedFilters[key] = filters[key];
      }
    });
    onFilter(cleanedFilters);
  };

  const handleReset = () => {
    const reset = {
      type: "",
      minCapacity: "",
      location: "",
      status: "",
    };
    setFilters(reset);
    onFilter({});
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4">Search & Filter Resources</h3>

      <div className="grid md:grid-cols-5 gap-4">
        <select
          name="type"
          value={filters.type}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3"
        >
          <option value="">All Types</option>
          <option value="LECTURE_HALL">Lecture Hall</option>
          <option value="LAB">Lab</option>
          <option value="MEETING_ROOM">Meeting Room</option>
          <option value="PROJECTOR">Projector</option>
          <option value="CAMERA">Camera</option>
          <option value="EQUIPMENT">Equipment</option>
        </select>

        <input
          type="number"
          name="minCapacity"
          placeholder="Min Capacity"
          value={filters.minCapacity}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3"
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3"
        />

        <select
          name="status"
          value={filters.status}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3"
        >
          <option value="">All Status</option>
          <option value="ACTIVE">Active</option>
          <option value="OUT_OF_SERVICE">Out of Service</option>
          <option value="MAINTENANCE">Maintenance</option>
        </select>

        <div className="flex gap-2">
          <button
            onClick={handleFilter}
            className="flex-1 bg-green-600 hover:bg-green-700 text-white rounded-xl px-4 py-3"
          >
            Apply
          </button>
          <button
            onClick={handleReset}
            className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 rounded-xl px-4 py-3"
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResourceFilterBar;