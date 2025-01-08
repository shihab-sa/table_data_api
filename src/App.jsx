import React, { useState, useEffect } from "react";

function CustomTable() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");
  const [paginate, setPaginate] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`/api/?paginate=${paginate}&search=${search}`)
      .then((response) => response.json())
      .then((result) => {
        setData(result.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Error fetching data.");
        setLoading(false);
      });
  }, [paginate, search]);

  return (
    <div className="max-w-6xl mx-auto p-4">
      {/* Search Bar */}
      <div className="mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name..."
          className="w-full p-3 text-lg border rounded-md shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        {loading && <p className="text-center text-lg">Loading...</p>}
        {error && <p className="text-center text-red-600">{error}</p>}

        <table className="w-full table-auto shadow-lg rounded-lg overflow-hidden">
          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4 text-left">ID</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Email</th>
              <th className="p-4 text-left">Email Verified At</th>
              <th className="p-4 text-left">Created At</th>
              <th className="p-4 text-left">Updated At</th>
            </tr>
          </thead>

          <tbody>
            {data.length > 0 ? (
              data.map((item) => (
                <tr key={item.id} className="border-b hover:bg-gray-100">
                  <td className="p-4">{item.id}</td>
                  <td className="p-4">{item.name}</td>
                  <td className="p-4">{item.email}</td>
                  <td className="p-4">{item.email_verified_at}</td>
                  <td className="p-4">{item.created_at}</td>
                  <td className="p-4">{item.updated_at}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="p-4 text-center text-gray-600">
                  No data found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center space-x-4 mb-6 ml-10">
        <button
          onClick={() => setPaginate(paginate - 5)}
          disabled={paginate <= 5}
          className="px-6 py-2 text-white bg-blue-600 rounded-md disabled:bg-gray-400"
        >
          Previous
        </button>
        <button
          onClick={() => setPaginate(paginate + 5)}
          className="px-6 py-2 text-white bg-blue-600 rounded-md"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CustomTable;
