function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-blue-700">Smart Campus 360</h1>
          <p className="text-sm text-gray-500">Facilities & Assets Management</p>
        </div>

        <div className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600">
          <a href="#" className="hover:text-blue-600 transition">Dashboard</a>
          <a href="#" className="text-blue-600 font-semibold">Resources</a>
          <a href="#" className="hover:text-blue-600 transition">Bookings</a>
          <a href="#" className="hover:text-blue-600 transition">Reports</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;