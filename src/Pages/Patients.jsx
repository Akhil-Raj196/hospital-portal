
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const PAGE_SIZE = 15;

const Patients = () => {
  const { patients, setPatients } = useContext(AppContext);
  const [name, setName] = useState("");
  const [page, setPage] = useState(1);

  const addPatient = () => {
    if (!name) return;
    const newPatient = {
      id: Date.now(),
      name,
      age: 20,
      disease: "General",
    };
    setPatients([...patients, newPatient]);
    setName("");
  };

  const deletePatient = (id) => {
    setPatients(patients.filter((p) => p.id !== id));
  };

  // Pagination logic
  const totalPages = Math.ceil(patients.length / PAGE_SIZE);
  const paginated = patients.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Patients</h1>

      <div className="mb-4 flex flex-wrap gap-2 items-center">
        <input
          className="border p-2"
          placeholder="Enter patient name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          onClick={addPatient}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>

      <div className="overflow-x-auto max-h-[420px] overflow-y-auto rounded shadow bg-white">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Age</th>
              <th className="py-2 px-4 text-left">Disease</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((p) => (
              <tr key={p.id} className="border-b last:border-b-0">
                <td className="py-2 px-4">{p.name}</td>
                <td className="py-2 px-4">{p.age}</td>
                <td className="py-2 px-4">{p.disease}</td>
                <td className="py-2 px-4">
                  <button
                    onClick={() => deletePatient(p.id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination controls */}
      <div className="flex justify-center items-center gap-2 mt-4">
        <button
          className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
        >
          Prev
        </button>
        <span>
          Page {page} of {totalPages}
        </span>
        <button
          className="px-3 py-1 rounded bg-gray-200 disabled:opacity-50"
          onClick={() => setPage(page + 1)}
          disabled={page === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Patients;