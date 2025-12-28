import { appwriteConfig } from "@/config/appwrite";
import type { Agent, Gallery, Property, PropertyCardData } from "@/types/property";
import { Databases, Query } from "react-native-appwrite";
import { client } from "./appwrite";

const databases = new Databases(client);

/**
 * Fetch all properties from Appwrite database
 */
export async function getProperties(): Promise<Property[]> {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.collections.properties,
      [Query.orderDesc("$createdAt"), Query.limit(100)]
    );

    return response.documents as unknown as Property[];
  } catch (error) {
    console.error("Error fetching properties:", error);
    throw error;
  }
}

/**
 * Fetch a single property by ID with populated relationships
 */
export async function getPropertyById(propertyId: string): Promise<Property | null> {
  try {
    const response = await databases.getDocument(
      appwriteConfig.databaseId,
      appwriteConfig.collections.properties,
      propertyId
    );

    const property = response as unknown as Property;

    // Fetch agent data if agent ID exists
    if (property.agent && typeof property.agent === 'string') {
      try {
        const agentData = await databases.getDocument(
          appwriteConfig.databaseId,
          appwriteConfig.collections.agents,
          property.agent
        );
        property.agent = agentData as unknown as Agent;
      } catch (error) {
        console.warn("Error fetching agent:", error);
      }
    }



    // Fetch gallery data if gallery IDs exist
    if (property.gallery && Array.isArray(property.gallery) && property.gallery.length > 0) {
      // Check if gallery items are strings (IDs) or already objects
      if (typeof property.gallery[0] === 'string') {
        try {
          const galleryPromises = (property.gallery as unknown as string[]).map((galleryId: string) =>
            databases.getDocument(
              appwriteConfig.databaseId,
              appwriteConfig.collections.galleries,
              galleryId
            )
          );
          const galleryData = await Promise.all(galleryPromises);
          property.gallery = galleryData as unknown as Gallery[];
        } catch (error) {
          console.warn("Error fetching gallery:", error);
          property.gallery = [];
        }
      }
    }

    return property;
  } catch (error) {
    console.error("Error fetching property:", error);
    return null;
  }
}

/**
 * Fetch featured properties (top rated or recent)
 */
export async function getFeaturedProperties(limit: number = 5): Promise<Property[]> {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.collections.properties,
      [Query.orderDesc("$createdAt"), Query.limit(limit)]
    );

    return response.documents as unknown as Property[];
  } catch (error) {
    console.error("Error fetching featured properties:", error);
    throw error;
  }
}

/**
 * Search properties by name or address
 */
export async function searchProperties(searchQuery: string): Promise<Property[]> {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.collections.properties,
      [
        Query.or([
          Query.search("name", searchQuery),
          Query.search("address", searchQuery),
        ]),
        Query.limit(50),
      ]
    );

    return response.documents as unknown as Property[];
  } catch (error) {
    console.error("Error searching properties:", error);
    throw error;
  }
}

/**
 * Filter properties by type
 */
export async function getPropertiesByType(type: string): Promise<Property[]> {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.collections.properties,
      [Query.equal("type", type), Query.limit(100)]
    );

    return response.documents as unknown as Property[];
  } catch (error) {
    console.error("Error fetching properties by type:", error);
    throw error;
  }
}

/**
 * Fetch all agents
 */
export async function getAgents(): Promise<Agent[]> {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.collections.agents,
      [Query.limit(100)]
    );

    return response.documents as unknown as Agent[];
  } catch (error) {
    console.error("Error fetching agents:", error);
    throw error;
  }
}



/**
 * Fetch gallery images
 */
export async function getGalleryImages(): Promise<Gallery[]> {
  try {
    const response = await databases.listDocuments(
      appwriteConfig.databaseId,
      appwriteConfig.collections.galleries,
      [Query.limit(100)]
    );

    return response.documents as unknown as Gallery[];
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    throw error;
  }
}

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
