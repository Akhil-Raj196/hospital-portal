export const labReportsData = Array.from({ length: 30 }, (_, i) => ({
  id: i + 1,
  patient: `Patient ${i + 1}`,
  test: ["Blood Test", "X-Ray", "MRI", "CT Scan"][i % 4],
  date: `2026-04-${(i % 28) + 1}`,
  result: i % 2 === 0 ? "Normal" : "Abnormal",
}));
