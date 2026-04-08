
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const PAGE_SIZE = 15;

const Billing = () => {
  const { bills, setBills, patients } = useContext(AppContext);
  const [selectedPatient, setSelectedPatient] = useState("");
  const [amount, setAmount] = useState("");
  const [page, setPage] = useState(1);

  const addBill = () => {
    if (!selectedPatient || !amount) return;
    setBills([
      ...bills,
      {
        id: Date.now(),
        patient: selectedPatient,
        amount: Number(amount),
        status: "Pending",
      },
    ]);
    setSelectedPatient("");
    setAmount("");
  };

  const updateStatus = (id, status) => {
    setBills(
      bills.map((b) => (b.id === id ? { ...b, status } : b))
    );
  };

  // Pagination logic
  const totalPages = Math.ceil(bills.length / PAGE_SIZE);
  const paginated = bills.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Billing</h1>

      <div className="mb-4 flex flex-wrap gap-2 items-center">
        <select
          className="border p-2"
          value={selectedPatient}
          onChange={e => setSelectedPatient(e.target.value)}
        >
          <option value="">Select Patient</option>
          {patients.map(p => (
            <option key={p.id} value={p.name}>{p.name}</option>
          ))}
        </select>
        <input
          type="number"
          className="border p-2"
          placeholder="Amount"
          value={amount}
          onChange={e => setAmount(e.target.value)}
        />
        <button
          onClick={addBill}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add Bill
        </button>
      </div>

      <div className="overflow-x-auto max-h-[420px] overflow-y-auto rounded shadow bg-white">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Patient</th>
              <th className="py-2 px-4 text-left">Amount (₹)</th>
              <th className="py-2 px-4 text-left">Status</th>
              <th className="py-2 px-4 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((b) => (
              <tr key={b.id} className="border-b last:border-b-0">
                <td className="py-2 px-4">{b.patient}</td>
                <td className="py-2 px-4">{b.amount}</td>
                <td className="py-2 px-4">{b.status}</td>
                <td className="py-2 px-4">
                  <select
                    className="border p-1"
                    value={b.status}
                    onChange={e => updateStatus(b.id, e.target.value)}
                  >
                    <option value="Paid">Paid</option>
                    <option value="Pending">Pending</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
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

export default Billing;