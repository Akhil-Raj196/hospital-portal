export const patientsData = Array.from({ length: 100 }, (_, i) => ({
  id: i + 1,
  name: `Patient ${i + 1}`,
  age: 20 + (i % 60),
  disease: ["Fever", "Diabetes", "Hypertension", "Asthma", "Covid-19"][i % 5],
}));