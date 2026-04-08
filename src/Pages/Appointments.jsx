
import { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";

const Appointments = () => {
  const { appointments, setAppointments, patients, doctors } = useContext(AppContext);
  const [selectedPatient, setSelectedPatient] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("Confirmed");

  const addAppointment = () => {
    if (!selectedPatient || !selectedDoctor || !date) return;
    const newAppointment = {
      id: Date.now(),
      patient: selectedPatient,
      doctor: selectedDoctor,
      date,
      status,
    };
    setAppointments([...appointments, newAppointment]);
    setSelectedPatient("");
    setSelectedDoctor("");
    setDate("");
    setStatus("Confirmed");
  };

  // Pagination logic
  const PAGE_SIZE = 15;
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(appointments.length / PAGE_SIZE);
  const paginated = appointments.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div>
      <h1 className="text-xl font-bold mb-4">Appointments</h1>

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
        <select
          className="border p-2"
          value={selectedDoctor}
          onChange={e => setSelectedDoctor(e.target.value)}
        >
          <option value="">Select Doctor</option>
          {doctors.map(d => (
            <option key={d.id} value={d.name}>{d.name}</option>
          ))}
        </select>
        <input
          type="date"
          className="border p-2"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
        <select
          className="border p-2"
          value={status}
          onChange={e => setStatus(e.target.value)}
        >
          <option value="Confirmed">Confirmed</option>
          <option value="Pending">Pending</option>
          <option value="Cancelled">Cancelled</option>
        </select>
        <button
          onClick={addAppointment}
          className="bg-blue-500 text-white px-3 py-1 rounded"
        >
          Add
        </button>
      </div>

      <div className="overflow-x-auto max-h-[420px] overflow-y-auto rounded shadow bg-white">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4 text-left">Patient</th>
              <th className="py-2 px-4 text-left">Doctor</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {paginated.map((a) => (
              <tr key={a.id} className="border-b last:border-b-0">
                <td className="py-2 px-4">{a.patient}</td>
                <td className="py-2 px-4">{a.doctor}</td>
                <td className="py-2 px-4">{a.date}</td>
                <td className="py-2 px-4">{a.status}</td>
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

export default Appointments;