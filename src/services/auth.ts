import { appwriteConfig } from "@/config/appwrite";
import * as Linking from "expo-linking";
import { openAuthSessionAsync } from "expo-web-browser";
import {
    Account,
    Avatars,
    Client,
    OAuthProvider
} from "react-native-appwrite";
import "react-native-url-polyfill/auto";

export const client = new Client();
client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

export const avatar = new Avatars(client);
export const account = new Account(client);

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
