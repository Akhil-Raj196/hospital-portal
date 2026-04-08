export const appointmentsData = Array.from({ length: 60 }, (_, i) => ({
  id: i + 1,
  patient: `Patient ${(i % 100) + 1}`,
  doctor: `Dr. Doctor ${(i % 20) + 1}`,
  date: `2026-04-${(i % 28) + 1}`,
  status: ["Confirmed", "Pending", "Cancelled"][i % 3],
}));