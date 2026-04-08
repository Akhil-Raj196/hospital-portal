export const pharmacyData = Array.from({ length: 40 }, (_, i) => ({
  id: i + 1,
  name: `Medicine ${i + 1}`,
  stock: 100 - (i * 2),
  price: 10 + (i % 10) * 5,
  expiry: `202${7 + (i % 3)}-12-31`,
}));
