export const doctorsData = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  name: `Dr. Doctor ${i + 1}`,
  specialization: ["Cardiology", "Dermatology", "Neurology", "Orthopedics", "Pediatrics"][i % 5],
}));