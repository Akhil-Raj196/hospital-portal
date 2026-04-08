import { useContext } from "react";
import { AppContext } from "../context/AppContext";
import Card from "../components/Card";


const Dashboard = () => {
  const { patients, doctors, appointments, bills, staff, beds } = useContext(AppContext);

  // Calculate total revenue and pending bills
  const totalRevenue = bills.filter(b => b.status === "Paid").reduce((sum, b) => sum + b.amount, 0);
  const pendingBills = bills.filter(b => b.status === "Pending").length;

  // Beds stats
  const totalBeds = beds.length;
  const freeBeds = beds.filter(b => !b.occupied).length;
  const occupiedBeds = beds.filter(b => b.occupied).length;

  // Get recent appointments (last 5)
  const recentAppointments = [...appointments].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        <Card title="Total Patients" value={patients.length} />
        <Card title="Doctors" value={doctors.length} />
        <Card title="Staff" value={staff.length} />
        <Card title="Beds (Free/Total)" value={`${freeBeds}/${totalBeds}`} />
        <Card title="Revenue (₹)" value={totalRevenue} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Recent Appointments */}
        <div className="bg-white rounded shadow p-4">
          <h2 className="text-lg font-semibold mb-3">Recent Appointments</h2>
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-100">
                <th className="py-1 px-2 text-left">Patient</th>
                <th className="py-1 px-2 text-left">Doctor</th>
                <th className="py-1 px-2 text-left">Date</th>
                <th className="py-1 px-2 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentAppointments.map(a => (
                <tr key={a.id} className="border-b last:border-b-0">
                  <td className="py-1 px-2">{a.patient}</td>
                  <td className="py-1 px-2">{a.doctor}</td>
                  <td className="py-1 px-2">{a.date}</td>
                  <td className="py-1 px-2">{a.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Overview Pie Chart Placeholder */}
        <div className="bg-white rounded shadow p-4 flex flex-col items-center justify-center">
          <h2 className="text-lg font-semibold mb-3">Overview</h2>
          <div className="w-32 h-32 bg-gray-100 rounded-full flex items-center justify-center mb-2">
            <span className="text-gray-400">[Pie Chart]</span>
          </div>
          <div className="flex flex-col gap-1 w-full">
            <div className="flex justify-between text-sm">
              <span>Patients</span>
              <span>{patients.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Doctors</span>
              <span>{doctors.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Staff</span>
              <span>{staff.length}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Beds (Occupied/Total)</span>
              <span>{occupiedBeds}/{totalBeds}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Pending Bills</span>
              <span>{pendingBills}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;