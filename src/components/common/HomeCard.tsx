import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface Property {
  id: string;
  name: string;
  address: string;
  price: string | number;

  image: string;
  category: string;
}

interface Props {
  item: Property;
  onPress?: () => void;
}

export const HomeCard = ({ item, onPress }: Props) => {
  // Helper to get image source
  const getImageSource = () => {
    return { uri: item.image };
  };

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress?.();
  };

  return (
    <TouchableOpacity
      className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-light-surface dark:bg-dark-surface shadow-lg relative"
      onPress={handlePress}
    >
      <Image
        source={getImageSource()}
        className="w-full h-40 rounded-lg"
        resizeMode="cover"
      />

      <View className="flex flex-col mt-2">
        <Text className="text-base font-bodyMedium text-light-text dark:text-dark-text">
          {item.name}
        </Text>
        <Text className="text-xs font-body text-light-subtext dark:text-dark-subtext">
          {item.address}
        </Text>

        <View className="flex flex-row items-center justify-between mt-2">
          <Text className="text-base font-heading text-light-primary dark:text-dark-primary">
            ${item.price}
          </Text>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={20} color="#64748B" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default HomeCard;
