import * as Haptics from "expo-haptics";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity } from "react-native";

import { categories } from "@/constants/data";

const Filters = () => {
  const params = useLocalSearchParams<{ filter?: string }>();
  const [selectedCategory, setSelectedCategory] = useState(
    params.filter || "All"
  );

  const handleCategoryPress = (category: string) => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    
    if (selectedCategory === category) {
      setSelectedCategory("All");
      router.setParams({ filter: "All" });
      return;
    }

    setSelectedCategory(category);
    router.setParams({ filter: category });
  };

  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="mt-3 mb-2"
    >
      {categories.map((item, index) => (
        <TouchableOpacity
          onPress={() => handleCategoryPress(item.category)}
          key={index}
          className={`flex flex-col items-start mr-4 px-4 py-2 rounded-full ${
            selectedCategory === item.category
              ? "bg-light-primary dark:bg-dark-primary"
              : "bg-light-surface dark:bg-dark-surface border border-light-primary/30 dark:border-dark-primary/30"
          }`}
        >
          <Text
            className={`text-sm ${
              selectedCategory === item.category
                ? "text-white font-bodyMedium"
                : "text-light-text dark:text-dark-text font-body"
            }`}
          >
            {item.title}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default Filters;
