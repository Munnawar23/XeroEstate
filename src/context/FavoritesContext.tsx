import React, { createContext, useCallback, useContext, useState } from 'react';

interface Property {
  id: string;
  name: string;
  address: string;
  price: string | number;
  image: string;
  category: string;
}

interface FavoritesContextType {
  favorites: Property[];
  isFavorite: (propertyId: string) => boolean;
  toggleFavorite: (property: Property) => void;
  removeFavorite: (propertyId: string) => void;
  clearFavorites: () => void;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Property[]>([]);

  const isFavorite = useCallback((propertyId: string) => {
    return favorites.some(fav => fav.id === propertyId);
  }, [favorites]);

  const toggleFavorite = useCallback((property: Property) => {
    setFavorites(prev => {
      const exists = prev.some(fav => fav.id === property.id);
      
      if (exists) {
        // Remove from favorites
        return prev.filter(fav => fav.id !== property.id);
      } else {
        // Add to favorites
        return [...prev, property];
      }
    });
  }, []);

  const removeFavorite = useCallback((propertyId: string) => {
    setFavorites(prev => prev.filter(fav => fav.id !== propertyId));
  }, []);

  const clearFavorites = useCallback(() => {
    setFavorites([]);
  }, []);

  return (
    <FavoritesContext.Provider
      value={{
        favorites,
        isFavorite,
        toggleFavorite,
        removeFavorite,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}
