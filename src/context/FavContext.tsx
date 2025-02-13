import { ICocktail } from "@/models/Cocktail";
import { createContext, ReactNode, useContext, useState } from "react";

interface FavContextType {
  favorites: ICocktail[];
  addFavorite: (cocktail: ICocktail) => void;
  removeFavorite: (cocktail: ICocktail) => void;
}

type FavProps = {
  children?: ReactNode;
};

const FavContext = createContext<FavContextType | undefined>(undefined);

const useFavContext = () => {
  const context = useContext(FavContext);
  if (!context) {
    throw new Error("useFavContext must be used within a FavProvider");
  }
  return context;
};

const FavProvider = ({ children }: FavProps) => {
  const [favorites, setFavorites] = useState<ICocktail[]>([]);

  const addFavorite = (cocktail: ICocktail) => {
    setFavorites((prevFavorites) => [...prevFavorites, cocktail]);
  };

  const removeFavorite = (cocktail: ICocktail) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((item) => item.id !== cocktail.id)
    );
  };

  return (
    <FavContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavContext.Provider>
  );
};

export { useFavContext, FavProvider };
