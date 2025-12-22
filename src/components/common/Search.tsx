import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);

  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text });
  }, 500);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-primary/20 dark:border-dark-primary/20 mt-5 py-3">
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <Ionicons 
          name="search" 
          size={20} 
          className="text-light-subtext dark:text-dark-subtext" 
        />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for properties..."
          placeholderTextColor="#94A3B8"
          className="text-base font-body text-light-text dark:text-dark-text ml-3 flex-1"
        />
      </View>

      <TouchableOpacity>
        <Ionicons 
          name="options-outline" 
          size={20} 
          className="text-light-subtext dark:text-dark-subtext" 
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
