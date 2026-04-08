export const staffData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  name: `Staff Member ${i + 1}`,
  role: i % 2 === 0 ? "Nurse" : "Receptionist",
  department: ["General", "ICU", "Emergency", "Pediatrics"][i % 4],
  contact: `99999${10000 + i}`,
  salary: 20000 + (i % 5) * 5000,
}));
