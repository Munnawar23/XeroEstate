import { appwriteConfig } from "@/config/appwrite";
import type { Agent, Property } from "@/types/property";
import { Databases, Query } from "react-native-appwrite";
import { client } from "./auth";

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
