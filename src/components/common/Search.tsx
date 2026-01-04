import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useColorScheme } from "nativewind";
import React, { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {
  const params = useLocalSearchParams<{ query?: string }>();
  const [search, setSearch] = useState(params.query);
  const { colorScheme } = useColorScheme();
  const isDark = colorScheme === "dark";

  const debouncedSearch = useDebouncedCallback((text: string) => {
    router.setParams({ query: text });
  }, 500);

  const handleSearch = (text: string) => {
    setSearch(text);
    debouncedSearch(text);
  };

  const handleClear = () => {
    setSearch("");
    router.setParams({ query: "" });
  };

  return (
    <View className="flex flex-row items-center justify-between w-full px-4 rounded-lg bg-light-surface dark:bg-dark-surface border border-light-primary/20 dark:border-dark-primary/20 mt-5 py-3">
      <View className="flex-1 flex flex-row items-center justify-start z-50">
        <Ionicons 
          name="search" 
          size={20} 
          color={isDark ? "#A1A1AA" : "#64748B"}
        />
        <TextInput
          value={search}
          onChangeText={handleSearch}
          placeholder="Search for properties..."
          placeholderTextColor={isDark ? "#71717A" : "#94A3B8"}
          className="text-base font-body text-light-text dark:text-dark-text ml-3 flex-1"
        />
        {search && search.length > 0 && (
          <TouchableOpacity onPress={handleClear} className="ml-2">
            <Ionicons 
              name="close-circle" 
              size={20} 
              color={isDark ? "#A1A1AA" : "#64748B"}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default Search;
