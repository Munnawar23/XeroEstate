import { appwriteConfig } from "@/config/appwrite";
import {
    Client,
    ID,
    Storage
} from "react-native-appwrite";
import { account } from "./auth";

const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

export const storage = new Storage(client);

// Upload avatar to Appwrite Storage
export async function uploadAvatar(file: { uri: string; name: string; type: string }, bucketId: string) {
  try {
    // Fetch the file to get its size
    const response = await fetch(file.uri);
    const blob = await response.blob();
    
    // Create file object in the format expected by react-native-appwrite
    const fileObject = {
      name: file.name,
      type: file.type,
      size: blob.size,
      uri: file.uri,
    };
    
    const uploadedFile = await storage.createFile(
      bucketId,
      ID.unique(),
      fileObject as any
    );

    // Construct the file URL manually
    const fileUrl = `${appwriteConfig.endpoint}/storage/buckets/${bucketId}/files/${uploadedFile.$id}/view?project=${appwriteConfig.projectId}`;
    
    console.log('Uploaded avatar URL:', fileUrl);
    
    return fileUrl;
  } catch (error) {
    console.error("Upload error:", error);
    throw error;
  }
}

// Update user's avatar in preferences
export async function updateUserAvatar(avatarUrl: string) {
  try {
    await account.updatePrefs({
      avatarUrl,
    });
    return true;
  } catch (error) {
    console.error("Update avatar error:", error);
    return false;
  }
}
