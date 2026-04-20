export const IMAGES = {
  merc: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=800&auto=format&fit=crop",
  lc1: "https://images.unsplash.com/photo-1594502220478-f076bca0f074?q=80&w=600&auto=format&fit=crop",
  bmw: "https://images.unsplash.com/photo-1555215695-3004980ad54e?q=80&w=600&auto=format&fit=crop",
  raptor: "https://images.unsplash.com/photo-1605810756770-ceeb11db84c0?q=80&w=600&auto=format&fit=crop",
  jeep: "https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?q=80&w=600&auto=format&fit=crop",
  kia: "https://images.unsplash.com/photo-1616422285623-13ff0162193c?q=80&w=800&auto=format&fit=crop",
  profile: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  cihanBg: "https://images.unsplash.com/photo-1506469717960-433cebe3f181?q=80&w=800&auto=format&fit=crop",
};

export const CITIES = [
  'Baghdad', 'Basra', 'Mosul', 'Erbil', 'Sulaymaniyah', 
  'Karbala', 'Najaf', 'Kirkuk', 'Ramadi', 'Fallujah', 'Nasiriyah'
];

export const MOCK_CARS = [
  { id: 1, title: 'Toyota Land Cruiser (2024)', year: '2024', location: 'Iraq', price: '$79,000', image: IMAGES.lc1, badge: 'VIP' },
  { id: 2, title: 'BMW M5 Competition', year: '2024', location: 'Iraq', price: '$79,000', image: IMAGES.bmw },
  { id: 3, title: 'Ford Raptor R', year: '2024', location: 'Iraq', price: '$79,000', image: IMAGES.raptor },
  { id: 4, title: 'Jeep Wrangler Rubicon', year: '2024', location: 'Iraq', price: '$79,000', image: IMAGES.jeep, badge: 'VIP' },
  { id: 5, title: 'Toyota Land Cruiser', year: '2023', location: 'Iraq, Erbil', price: '$79,000', image: IMAGES.lc1, badge: 'Private' },
  { id: 6, title: 'BMW M5 Competition', year: '2024', location: 'Iraq', price: '$79,000', image: IMAGES.bmw },
  { id: 7, title: 'Ford Raptor R', year: '2024', location: 'Iraq', price: '$79,000', image: IMAGES.raptor },
  { id: 8, title: 'Jeep Wrangler Rubicon', year: '2024', location: 'Iraq', price: '$79,000', image: IMAGES.jeep, badge: 'VIP' },
  { id: 9, title: 'Toyota Land Cruiser', year: '2023', location: 'Iraq, Erbil', price: '$79,000', image: IMAGES.lc1 },
  { id: 10, title: 'BMW M5 Competition', year: '2024', location: 'Iraq', price: '$79,000', image: IMAGES.bmw, badge: 'VIP' },
  { id: 11, title: 'Toyota Land Cruiser', year: '2023', location: 'Iraq', price: '$79,000', image: IMAGES.lc1 },
  { id: 12, title: 'Toyota Land Cruiser', year: '2023', location: 'Iraq', price: '$79,000', image: IMAGES.lc1 },
  { id: 13, title: 'BMW M5 Competition', year: '2024', location: 'Iraq', price: '$79,000', image: IMAGES.bmw },
  { id: 14, title: 'BMW M5 Competition', year: '2024', location: 'Iraq', price: '$79,000', image: IMAGES.bmw },
  { id: 15, title: 'Toyota Land Cruiser', year: '2023', location: 'Iraq', price: '$79,000', image: IMAGES.lc1 },
  { id: 16, title: 'BMW M5 Competition', year: '2024', location: 'Iraq', price: '$79,000', image: IMAGES.bmw },
];

export const MOCK_COMPANIES = Array(12).fill(0).map((_, i) => ({
  id: i,
  name: i % 2 === 0 ? 'Cihan Motors' : 'Sardar Group',
  location: i % 2 === 0 ? 'Erbil, 100M Road' : 'Sulaymaniyah, Salim St',
  carsCount: 145,
  logo: i % 2 === 0 ? 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop' : 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=100&h=100&fit=crop',
  brand: i % 2 === 0 ? 'Toyota' : 'Ford'
}));

export const MOCK_BRANDS = [
  { name: 'Mercedes', count: '1,234' },
  { name: 'Toyota', count: '5,678' },
  { name: 'Ford', count: '890' },
  { name: 'BMW', count: '456' },
  { name: 'Honda', count: '3,456' },
  { name: 'Chevrolet', count: '2,345' },
  { name: 'Nissan', count: '1,567' },
  { name: 'Hyundai', count: '4,567' }
];
