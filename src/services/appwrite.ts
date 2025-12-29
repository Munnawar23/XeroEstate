import { appwriteConfig } from "@/config/appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import {
  Account,
  Avatars,
  Client,
  ID,
  OAuthProvider,
  Storage
} from "react-native-appwrite";
import "react-native-url-polyfill/auto";

export const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

  
export const avatar = new Avatars(client);
export const account = new Account(client);
export const storage = new Storage(client);


export async function login() {
  try {
    // Check if there's an active session and delete it first
    try {
      const currentSession = await account.get();
      if (currentSession) {
        console.log("Existing session found, deleting...");
        await account.deleteSession("current");
      }
    } catch (error) {
      // No active session, which is fine
      console.log("No existing session found");
    }

    const redirectUri = Linking.createURL("/");

    const response = await account.createOAuth2Token(
      OAuthProvider.Google,
      redirectUri
    );
    if (!response) throw new Error("Create OAuth2 token failed");

    const browserResult = await openAuthSessionAsync(
      response.toString(),
      redirectUri
    );
    if (browserResult.type !== "success")
      throw new Error("Create OAuth2 token failed");

    const url = new URL(browserResult.url);
    const secret = url.searchParams.get("secret")?.toString();
    const userId = url.searchParams.get("userId")?.toString();
    if (!secret || !userId) throw new Error("Create OAuth2 token failed");

    const session = await account.createSession(userId, secret);
    if (!session) throw new Error("Failed to create session");

    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function logout() {
  try {
    const result = await account.deleteSession("current");
    return result;
  } catch (error) {
    console.error(error);
    return false;
  }
}

export async function getCurrentUser() {
  try {
    const result = await account.get();
    if (result.$id) {
      // Get custom avatar from preferences if exists
      const prefs = result.prefs as { avatarUrl?: string };
      const customAvatar = prefs?.avatarUrl;
      
      console.log('Custom avatar from prefs:', customAvatar);
      
      // Validate avatar URL - only use if it's a valid string starting with http
      const isValidAvatar = customAvatar && typeof customAvatar === 'string' && customAvatar.startsWith('http');
      
      const userAvatar = isValidAvatar ? customAvatar : avatar.getInitials(result.name).toString();
      
      console.log('Final avatar URL:', userAvatar);

      return {
        ...result,
        avatar: userAvatar,
      };
    }

    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
}

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