// Property Categories - aligned with database schema
export const categories = [
  { title: "All", category: "All" },
  { title: "House", category: "House" },
  { title: "Apartment", category: "Apartment" },
  { title: "Villa", category: "Villa" },
  { title: "Cottage", category: "Cottage" },
  { title: "Castle", category: "Castle" },
  { title: "Penthouse", category: "Penthouse" },
  { title: "Studio", category: "Studio" },
  { title: "Duplex", category: "Duplex" },
  { title: "Condo", category: "Condo" },
  { title: "Townhouse", category: "Townhouse" },
];

// Property Facilities - matching database enum values
export const facilities = [
  { title: "Parking", value: "Parking" },
  { title: "Swimming Pool", value: "Swimming Pool" },
  { title: "Gym", value: "Gym" },
  { title: "Garden", value: "Garden" },
  { title: "Balcony", value: "Balcony" },
  { title: "Garage", value: "Garage" },
  { title: "Security", value: "Security" },
  { title: "Laundry", value: "Laundry" },
  { title: "Wi-Fi", value: "Wi-Fi" },
  { title: "Air Conditioning", value: "Air Conditioning" },
  { title: "Heating", value: "Heating" },
  { title: "Elevator", value: "Elevator" },
  { title: "Pet Friendly", value: "Pet Friendly" },
  { title: "Fireplace", value: "Fireplace" },
  { title: "Home Theater", value: "Home Theater" },
];

// Settings Menu Options
export const settings = [
  {
    title: "My Bookings",
    icon: "calendar-outline" as const,
    route: "/(tabs)/bookings" as const,
  },
  {
    title: "Payments",
    icon: "wallet-outline" as const,
    route: null,
  },
  {
    title: "Notifications",
    icon: "notifications-outline" as const,
    route: null,
  },
  {
    title: "Security",
    icon: "shield-checkmark-outline" as const,
    route: null,
  },
  {
    title: "Language",
    icon: "language-outline" as const,
    route: null,
  },
  {
    title: "Help Center",
    icon: "help-circle-outline" as const,
    route: null,
  },
  {
    title: "Invite Friends",
    icon: "people-outline" as const,
    route: null,
  },
];

// Sort Options for Property Listings
export const sortOptions = [
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
  { label: "Newest First", value: "newest" },
  { label: "Oldest First", value: "oldest" },
  { label: "Bedrooms: Most to Least", value: "bedrooms_desc" },
  { label: "Bedrooms: Least to Most", value: "bedrooms_asc" },
];

// Price Range Filters (in your currency)
export const priceRanges = [
  { label: "All Prices", min: 0, max: Infinity },
  { label: "Under $100,000", min: 0, max: 100000 },
  { label: "$100,000 - $250,000", min: 100000, max: 250000 },
  { label: "$250,000 - $500,000", min: 250000, max: 500000 },
  { label: "$500,000 - $1,000,000", min: 500000, max: 1000000 },
  { label: "Over $1,000,000", min: 1000000, max: Infinity },
];

// Bedroom Filter Options
export const bedroomOptions = [
  { label: "Any", value: null },
  { label: "1+", value: 1 },
  { label: "2+", value: 2 },
  { label: "3+", value: 3 },
  { label: "4+", value: 4 },
  { label: "5+", value: 5 },
];

// Bathroom Filter Options
export const bathroomOptions = [
  { label: "Any", value: null },
  { label: "1+", value: 1 },
  { label: "2+", value: 2 },
  { label: "3+", value: 3 },
  { label: "4+", value: 4 },
];