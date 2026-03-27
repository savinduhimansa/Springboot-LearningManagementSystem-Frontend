function getStatusStyle(status) {
  switch (status) {
    case "ACTIVE":
      return "bg-green-100 text-green-700";
    case "OUT_OF_SERVICE":
      return "bg-red-100 text-red-700";
    case "MAINTENANCE":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "bg-gray-100 text-gray-700";
  }
}

function ResourceTable({ resources, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-x-auto">
      <table className="w-full min-w-[1000px]">
        <thead className="bg-gray-50">
          <tr className="text-left text-sm text-gray-700">
            <th className="px-4 py-4">ID</th>
            <th className="px-4 py-4">Name</th>
            <th className="px-4 py-4">Type</th>
            <th className="px-4 py-4">Capacity</th>
            <th className="px-4 py-4">Location</th>
            <th className="px-4 py-4">Status</th>
            <th className="px-4 py-4">Availability</th>
            <th className="px-4 py-4">Bookable</th>
            <th className="px-4 py-4">Actions</th>
          </tr>
        </thead>

        <tbody>
          {resources.length > 0 ? (
            resources.map((resource) => (
              <tr key={resource.id} className="border-t hover:bg-gray-50 transition">
                <td className="px-4 py-4">{resource.id}</td>
                <td className="px-4 py-4 font-semibold text-gray-800">{resource.name}</td>
                <td className="px-4 py-4">{resource.type}</td>
                <td className="px-4 py-4">{resource.capacity}</td>
                <td className="px-4 py-4">{resource.location}</td>
                <td className="px-4 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusStyle(resource.status)}`}>
                    {resource.status}
                  </span>
                </td>
                <td className="px-4 py-4">
                  {resource.availableFrom} - {resource.availableTo}
                </td>
                <td className="px-4 py-4">{resource.isBookable ? "Yes" : "No"}</td>
                <td className="px-4 py-4 flex gap-2">
                  <button
                    onClick={() => onEdit(resource)}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => onDelete(resource.id)}
                    className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="9" className="px-4 py-8 text-center text-gray-500">
                No resources found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ResourceTable;