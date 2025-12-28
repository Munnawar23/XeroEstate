import { Ionicons } from "@expo/vector-icons";
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

export const FeaturedCard = ({ item, onPress }: Props) => {
  // Helper to get image source - handles both require() and string paths
  const getImageSource = () => {
    if (item.image.includes('japan.png')) {
      return require('@/assets/images/japan.png');
    } else if (item.image.includes('new-york.png')) {
      return require('@/assets/images/new-york.png');
    }
    return { uri: item.image }; // fallback for URLs
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      className="flex flex-col items-start w-60 h-80 relative"
    >
      <Image
        source={getImageSource()}
        className="size-full rounded-2xl"
        resizeMode="cover"
      />

      <Image
        source={require("@/assets/images/card-background.webp")}
        className="size-full rounded-2xl absolute bottom-0"
        resizeMode="cover"
      />



      <View className="flex flex-col items-start absolute bottom-5 inset-x-5">
        <Text
          className="text-xl font-heading text-white"
          numberOfLines={1}
        >
          {item.name}
        </Text>
        <Text className="text-base font-body text-white/90" numberOfLines={1}>
          {item.address}
        </Text>

        <View className="flex flex-row items-center justify-between w-full mt-2">
          <Text className="text-xl font-heading text-white">
            ${item.price}
          </Text>
          <TouchableOpacity>
            <Ionicons name="heart-outline" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCard;
