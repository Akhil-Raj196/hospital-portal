export const bedsData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  ward: ["General", "ICU", "Emergency", "Pediatrics"][i % 4],
  occupied: i % 3 === 0,
  patient: i % 3 === 0 ? `Patient ${i + 1}` : null,
}));
