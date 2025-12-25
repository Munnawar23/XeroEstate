export const appwriteConfig = {
  endpoint: process.env.EXPO_PUBLIC_APPWRITE_ENDPOINT!,
  platform: process.env.EXPO_PUBLIC_APPWRITE_PLATFORM!,
  projectId: process.env.EXPO_PUBLIC_APPWRITE_PROJECT_ID!,
  databaseId: process.env.EXPO_PUBLIC_APPWRITE_DATABASE_ID!,
  
  collections: {
    properties: process.env.EXPO_PUBLIC_APPWRITE_PROPERTIES_COLLECTION_ID!,
    agents: process.env.EXPO_PUBLIC_APPWRITE_AGENTS_COLLECTION_ID!,
    reviews: process.env.EXPO_PUBLIC_APPWRITE_REVIEWS_COLLECTION_ID!,
    galleries: process.env.EXPO_PUBLIC_APPWRITE_GALLERIES_COLLECTION_ID!,
  },
};
