import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";


import { facilities } from "@/constants/data";
import { getPropertyById } from "@/services/database";
import type { Property } from "@/types/property";

const PropertyDetails = () => {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const [property, setProperty] = useState<Property | null>(null);
  const [loading, setLoading] = useState(true);
  const windowHeight = Dimensions.get("window").height;

  useEffect(() => {
    const fetchProperty = async () => {
      if (!id) return;
      
      try {
        setLoading(true);
        const data = await getPropertyById(id);
        setProperty(data);
      } catch (error) {
        console.error("Error fetching property:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-light-background dark:bg-dark-background">
        <ActivityIndicator size="large" color="#3B82F6" />
        <Text className="text-base font-bodyMedium text-light-subtext dark:text-dark-subtext mt-4">
          Loading property details...
        </Text>
      </View>
    );
  }

  if (!property) {
    return (
      <View className="flex-1 items-center justify-center bg-light-background dark:bg-dark-background px-5">
        <Ionicons name="home-outline" size={64} color="#94A3B8" />
        <Text className="text-lg font-bodyMedium text-light-text dark:text-dark-text mt-4">
          Property not found
        </Text>
        <TouchableOpacity
          onPress={() => router.back()}
          className="mt-6 bg-light-primary dark:bg-dark-primary px-6 py-3 rounded-lg"
        >
          <Text className="text-base font-bodyMedium text-white">Go Back</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-light-background dark:bg-dark-background">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="pb-32"
      >
        {/* Property Image */}
        <View className="relative w-full" style={{ height: windowHeight / 2 }}>
          <Image
            source={{ uri: property.image || "https://via.placeholder.com/800x600" }}
            className="size-full"
            resizeMode="cover"
          />

          {/* Header Overlay */}
          <View
            className="absolute inset-x-5 flex flex-row items-center justify-between"
            style={{
              top: Platform.OS === "ios" ? 60 : 40,
            }}
          >
            <TouchableOpacity
              onPress={() => router.back()}
              className="bg-light-surface/90 dark:bg-dark-surface/90 rounded-full size-11 items-center justify-center"
            >
              <Ionicons
                name="arrow-back"
                size={20}
                className="text-light-text dark:text-dark-text"
              />
            </TouchableOpacity>

            <View className="flex flex-row items-center gap-3">
              <TouchableOpacity className="bg-light-surface/90 dark:bg-dark-surface/90 rounded-full size-11 items-center justify-center">
                <Ionicons name="heart-outline" size={24} color="#EF4444" />
              </TouchableOpacity>
              <TouchableOpacity className="bg-light-surface/90 dark:bg-dark-surface/90 rounded-full size-11 items-center justify-center">
                <Ionicons
                  name="share-outline"
                  size={20}
                  className="text-light-text dark:text-dark-text"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* Property Details */}
        <View className="px-5 mt-5 flex gap-2">
          {/* Title */}
          <Text className="text-2xl font-heading text-light-text dark:text-dark-text">
            {property.name}
          </Text>

          {/* Type */}
          <View className="flex flex-row items-center gap-3 mt-2">
            <View className="flex flex-row items-center px-4 py-2 bg-light-primary/10 dark:bg-dark-primary/10 rounded-full">
              <Text className="text-xs font-bodyMedium text-light-primary dark:text-dark-primary">
                {property.type}
              </Text>
            </View>


          </View>

          {/* Property Stats */}
          <View className="flex flex-row items-center mt-5 gap-6">
            <View className="flex flex-row items-center">
              <View className="flex flex-row items-center justify-center bg-light-primary/10 dark:bg-dark-primary/10 rounded-full size-10">
                <Ionicons name="bed-outline" size={20} color="#3B82F6" />
              </View>
              <Text className="text-light-text dark:text-dark-text text-sm font-bodyMedium ml-2">
                {property.bedrooms} Beds
              </Text>
            </View>

            <View className="flex flex-row items-center">
              <View className="flex flex-row items-center justify-center bg-light-primary/10 dark:bg-dark-primary/10 rounded-full size-10">
                <Ionicons name="water-outline" size={20} color="#3B82F6" />
              </View>
              <Text className="text-light-text dark:text-dark-text text-sm font-bodyMedium ml-2">
                {property.bathrooms} Baths
              </Text>
            </View>

            <View className="flex flex-row items-center">
              <View className="flex flex-row items-center justify-center bg-light-primary/10 dark:bg-dark-primary/10 rounded-full size-10">
                <Ionicons name="resize-outline" size={20} color="#3B82F6" />
              </View>
              <Text className="text-light-text dark:text-dark-text text-sm font-bodyMedium ml-2">
                {property.area} sqft
              </Text>
            </View>
          </View>

          {/* Agent Section */}
          {property.agent && (
            <View className="w-full border-t border-light-subtext/20 dark:border-dark-subtext/20 pt-5 mt-5">
              <Text className="text-light-text dark:text-dark-text text-xl font-heading">
                Agent
              </Text>

              <View className="flex flex-row items-center justify-between mt-4">
                <View className="flex flex-row items-center">
                  <View className="size-14 rounded-full bg-light-primary dark:bg-dark-primary items-center justify-center">
                    <Text className="text-xl font-heading text-white">
                      {property.agent.name.charAt(0).toUpperCase()}
                    </Text>
                  </View>

                  <View className="flex flex-col items-start justify-center ml-3">
                    <Text className="text-base text-light-text dark:text-dark-text font-bodyMedium">
                      {property.agent.name}
                    </Text>
                    <Text className="text-sm text-light-subtext dark:text-dark-subtext font-body">
                      {property.agent.email}
                    </Text>
                  </View>
                </View>

                <View className="flex flex-row items-center gap-3">
                  <TouchableOpacity className="bg-light-surface dark:bg-dark-surface rounded-full size-10 items-center justify-center">
                    <Ionicons
                      name="chatbubble-outline"
                      size={20}
                      className="text-light-primary dark:text-dark-primary"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity className="bg-light-surface dark:bg-dark-surface rounded-full size-10 items-center justify-center">
                    <Ionicons
                      name="call-outline"
                      size={20}
                      className="text-light-primary dark:text-dark-primary"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}

          {/* Overview */}
          <View className="mt-5">
            <Text className="text-light-text dark:text-dark-text text-xl font-heading">
              Overview
            </Text>
            <Text className="text-light-subtext dark:text-dark-subtext text-base font-body mt-2">
              {property.description}
            </Text>
          </View>

          {/* Facilities */}
          {property.facilities && property.facilities.length > 0 && (
            <View className="mt-5">
              <Text className="text-light-text dark:text-dark-text text-xl font-heading">
                Facilities
              </Text>

              <View className="flex flex-row flex-wrap items-start justify-start mt-3 gap-4">
                {property.facilities.map((item: string, index: number) => {
                  const facility = facilities.find(
                    (f: { title: string; value: string }) => f.value === item || f.title === item
                  );

                  return (
                    <View
                      key={index}
                      className="flex flex-col items-center min-w-20"
                    >
                      <View className="size-14 bg-light-primary/10 dark:bg-dark-primary/10 rounded-full flex items-center justify-center">
                        <Ionicons
                          name="checkmark-circle-outline"
                          size={24}
                          color="#3B82F6"
                        />
                      </View>

                      <Text
                        numberOfLines={1}
                        ellipsizeMode="tail"
                        className="text-light-text dark:text-dark-text text-xs text-center font-body mt-2"
                      >
                        {item}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          )}

          {/* Gallery */}
          {property.gallery && property.gallery.length > 0 && (
            <View className="mt-5">
              <Text className="text-light-text dark:text-dark-text text-xl font-heading">
                Gallery
              </Text>
              <FlatList
                data={property.gallery}
                keyExtractor={(item) => item.$id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (
                  <Image
                    source={{ uri: item.image }}
                    className="size-40 rounded-xl"
                  />
                )}
                contentContainerClassName="flex gap-4 mt-3"
              />
            </View>
          )}

          {/* Location */}
          <View className="mt-5">
            <Text className="text-light-text dark:text-dark-text text-xl font-heading">
              Location
            </Text>
            <View className="flex flex-row items-center justify-start mt-3 gap-2">
              <Ionicons name="location-outline" size={20} color="#3B82F6" />
              <Text className="text-light-subtext dark:text-dark-subtext text-sm font-body flex-1">
                {property.address}
              </Text>
            </View>
          </View>


        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View className="absolute bg-light-surface dark:bg-dark-surface bottom-0 w-full rounded-t-2xl border-t border-light-subtext/20 dark:border-dark-subtext/20 p-5 shadow-2xl">
        <View className="flex flex-row items-center justify-between gap-4">
          <View className="flex flex-col items-start">
            <Text className="text-light-subtext dark:text-dark-subtext text-xs font-body">
              Price
            </Text>
            <Text
              numberOfLines={1}
              className="text-light-primary dark:text-dark-primary text-2xl font-heading"
            >
              ${property.price.toLocaleString()}
            </Text>
          </View>

          <TouchableOpacity className="flex-1 flex flex-row items-center justify-center bg-light-primary dark:bg-dark-primary py-3 rounded-xl shadow-lg">
            <Text className="text-white text-lg font-heading">
              Book Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PropertyDetails;
