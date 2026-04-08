
import { useState } from "react";

const PAGE_SIZE = 15;
const analyticsData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  metric: ["Admissions", "Discharges", "Revenue", "Tests Conducted", "Surgeries"][i % 5],
  value: Math.floor(Math.random() * 1000) + 100,
  date: `2026-04-${(i % 28) + 1}`,
}));

const Analytics = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(analyticsData.length / PAGE_SIZE);
  const paginated = analyticsData.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Analytics</h1>
      <div className="overflow-x-auto max-h-[420px] overflow-y-auto rounded shadow bg-white">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Metric</th>
              <th className="py-2 px-4 text-left">Value</th>
              <th className="py-2 px-4 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((a) => (
              <tr key={a.id} className="border-b last:border-b-0">
                <td className="py-2 px-4">{a.metric}</td>
                <td className="py-2 px-4">{a.value}</td>
                <td className="py-2 px-4">{a.date}</td>
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

export default Analytics;
