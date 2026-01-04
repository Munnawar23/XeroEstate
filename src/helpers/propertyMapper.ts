import type { Property, PropertyCardData } from "@/types/property";

/**
 * Convert Appwrite Property to PropertyCardData for UI
 */
export function convertToPropertyCardData(property: Property): PropertyCardData {
  return {
    id: property.$id,
    name: property.name,
    address: property.address,
    price: property.price,
    category: property.type,
    image: property.image || "https://via.placeholder.com/400x300",
    bedrooms: property.bedrooms,
    bathrooms: property.bathrooms,
  };
}
