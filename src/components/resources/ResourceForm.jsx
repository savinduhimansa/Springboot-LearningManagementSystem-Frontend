import { useEffect, useState } from "react";

const initialState = {
  name: "",
  type: "LECTURE_HALL",
  capacity: "",
  location: "",
  description: "",
  status: "ACTIVE",
  availableFrom: "08:00:00",
  availableTo: "17:00:00",
  isBookable: true,
};

function ResourceForm({ onSubmit, selectedResource, onCancel }) {
  const [formData, setFormData] = useState(initialState);

  useEffect(() => {
    if (selectedResource) {
      setFormData({
        ...selectedResource,
      });
    } else {
      setFormData(initialState);
    }
  }, [selectedResource]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? checked
          : name === "capacity"
          ? Number(value)
          : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    if (!selectedResource) setFormData(initialState);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 mb-6">
      <div className="mb-5">
        <h2 className="text-2xl font-bold text-gray-800">
          {selectedResource ? "Update Resource" : "Add New Resource"}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Manage lecture halls, labs, meeting rooms, and equipment.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          name="name"
          placeholder="Resource Name"
          value={formData.name}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <select
          name="type"
          value={formData.type}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="LECTURE_HALL">Lecture Hall</option>
          <option value="LAB">Lab</option>
          <option value="MEETING_ROOM">Meeting Room</option>
          <option value="PROJECTOR">Projector</option>
          <option value="CAMERA">Camera</option>
          <option value="EQUIPMENT">Equipment</option>
        </select>

        <input
          type="number"
          name="capacity"
          placeholder="Capacity"
          value={formData.capacity}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Location"
          value={formData.location}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <select
          name="status"
          value={formData.status}
          onChange={handleChange}
          className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="ACTIVE">Active</option>
          <option value="OUT_OF_SERVICE">Out of Service</option>
          <option value="MAINTENANCE">Maintenance</option>
        </select>

        <div className="flex items-center gap-3 border border-gray-300 rounded-xl px-4 py-3">
          <label className="text-gray-700 font-medium">Bookable</label>
          <input
            type="checkbox"
            name="isBookable"
            checked={formData.isBookable}
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Available From</label>
          <input
            type="time"
            name="availableFrom"
            value={formData.availableFrom}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label className="block text-sm text-gray-600 mb-1">Available To</label>
          <input
            type="time"
            name="availableTo"
            value={formData.availableTo}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          rows="4"
          className="md:col-span-2 border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <div className="md:col-span-2 flex gap-3">
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition"
          >
            {selectedResource ? "Update Resource" : "Save Resource"}
          </button>

          {selectedResource && (
            <button
              type="button"
              onClick={onCancel}
              className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-xl font-medium transition"
            >
              Cancel
            </button>
          )}
        </div>
      </form>
    </div>
  );
}

export default ResourceForm;