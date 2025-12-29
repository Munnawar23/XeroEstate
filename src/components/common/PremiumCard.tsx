import { useFavorites } from "@/context/FavoritesContext";
import { Ionicons } from "@expo/vector-icons";
import * as Haptics from "expo-haptics";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Toast from "react-native-toast-message";

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

export const PremiumCard = ({ item, onPress }: Props) => {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorite = isFavorite(item.id);

  // Helper to get image source
  const getImageSource = () => {
    return { uri: item.image };
  };

  const handlePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    onPress?.();
  };

  const handleFavoritePress = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    toggleFavorite(item);
    
    Toast.show({
      type: 'success',
      text1: !favorite ? 'Added to favorites!' : 'Removed from favorites',
      text2: !favorite ? '❤️ Property saved' : '💔 Property removed',
      position: 'top',
      visibilityTime: 2000,
    });
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
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
          <TouchableOpacity onPress={handleFavoritePress}>
            <Ionicons 
              name={favorite ? "heart" : "heart-outline"} 
              size={24} 
              color={favorite ? "#EF4444" : "#FFFFFF"} 
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PremiumCard;
