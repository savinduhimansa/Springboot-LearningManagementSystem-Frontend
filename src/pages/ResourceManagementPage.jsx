import { useEffect, useState } from "react";
import {
  getAllResources,
  createResource,
  updateResource,
  deleteResource,
} from "../api/resourceApi";
import Navbar from "../components/layout/Navbar";
import SummaryCards from "../components/layout/SummaryCards";
import ResourceForm from "../components/resources/ResourceForm";
import ResourceFilterBar from "../components/resources/ResourceFilterBar";
import ResourceTable from "../components/resources/ResourceTable";

function ResourceManagementPage() {
  const [resources, setResources] = useState([]);
  const [selectedResource, setSelectedResource] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadResources = async (filters = {}) => {
    try {
      setLoading(true);
      const data = await getAllResources(filters);
      setResources(data);
    } catch (error) {
      console.error("Failed to load resources:", error);
      alert("Failed to load resources");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadResources();
  }, []);

  const handleSave = async (resourceData) => {
    try {
      if (selectedResource) {
        await updateResource(selectedResource.id, resourceData);
        alert("Resource updated successfully");
      } else {
        await createResource(resourceData);
        alert("Resource created successfully");
      }
      setSelectedResource(null);
      loadResources();
    } catch (error) {
      console.error("Save failed:", error);
      alert("Failed to save resource");
    }
  };

  const handleEdit = (resource) => {
    setSelectedResource(resource);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this resource?");
    if (!confirmDelete) return;

    try {
      await deleteResource(id);
      alert("Resource deleted successfully");
      loadResources();
    } catch (error) {
      console.error("Delete failed:", error);
      alert("Failed to delete resource");
    }
  };

  const handleCancelEdit = () => {
    setSelectedResource(null);
  };

  const handleFilter = (filters) => {
    loadResources(filters);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />

      <section className="bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white">
        <div className="max-w-7xl mx-auto px-6 py-10">
          <h1 className="text-4xl font-bold mb-3">Facilities & Assets Catalogue</h1>
          <p className="text-blue-100 max-w-3xl">
            Manage lecture halls, labs, meeting rooms, and equipment with availability,
            status control, search, filtering, and CRUD operations.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <SummaryCards resources={resources} />

        <ResourceForm
          onSubmit={handleSave}
          selectedResource={selectedResource}
          onCancel={handleCancelEdit}
        />

        <ResourceFilterBar onFilter={handleFilter} />

        {loading ? (
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-gray-600">
            Loading resources...
          </div>
        ) : (
          <ResourceTable
            resources={resources}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        )}
      </div>
    </div>
  );
}

export default ResourceManagementPage;