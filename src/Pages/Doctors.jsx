
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const PAGE_SIZE = 15;

const Doctors = () => {
  const { doctors } = useContext(AppContext);
  const [page, setPage] = useState(1);

  // Pagination logic
  const totalPages = Math.ceil(doctors.length / PAGE_SIZE);
  const paginated = doctors.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Doctors</h1>
      <div className="overflow-x-auto max-h-[420px] overflow-y-auto rounded shadow bg-white">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Name</th>
              <th className="py-2 px-4 text-left">Specialization</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((d) => (
              <tr key={d.id} className="border-b last:border-b-0">
                <td className="py-2 px-4">{d.name}</td>
                <td className="py-2 px-4">{d.specialization}</td>
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

export default Doctors;