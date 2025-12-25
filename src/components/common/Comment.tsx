import type { Review } from "@/types/property";
import { Ionicons } from "@expo/vector-icons";
import { Text, View } from "react-native";

interface Props {
  item: Review;
}

const Comment = ({ item }: Props) => {
  return (
    <View className="flex flex-col items-start bg-light-surface dark:bg-dark-surface p-4 rounded-xl">
      <View className="flex flex-row items-center">
        <View className="size-12 rounded-full bg-light-primary dark:bg-dark-primary items-center justify-center">
          <Text className="text-lg font-heading text-white">
            {item.name.charAt(0).toUpperCase()}
          </Text>
        </View>
        <Text className="text-base text-light-text dark:text-dark-text font-bodyMedium ml-3">
          {item.name}
        </Text>
      </View>

      <Text className="text-light-subtext dark:text-dark-subtext text-sm font-body mt-3">
        {item.review}
      </Text>

      <View className="flex flex-row items-center w-full justify-between mt-4">
        <View className="flex flex-row items-center">
          <Ionicons name="star" size={16} color="#F59E0B" />
          <Text className="text-light-text dark:text-dark-text text-sm font-bodyMedium ml-1">
            {item.rating}
          </Text>
        </View>
        <Text className="text-light-subtext dark:text-dark-subtext text-xs font-body">
          {item.$createdAt ? new Date(item.$createdAt).toLocaleDateString() : "Recently"}
        </Text>
      </View>
    </View>
  );
};

export default Comment;
