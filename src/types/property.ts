export interface Property {
  $id: string;
  name: string;
  address: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  type: string;
  description: string;
  area: number;

  image?: string;
  geolocation?: string;
  facilities?: string[];
  agent?: Agent;
  $createdAt?: string;
  $updatedAt?: string;
}

export interface Agent {
  $id: string;
  name: string;
  email: string;
  url?: string;
  $createdAt?: string;
  $updatedAt?: string;
}

export interface PropertyCardData {
  id: string;
  name: string;
  address: string;
  price: number;

  category: string;
  image: string;
  bedrooms: number;
  bathrooms: number;
}
