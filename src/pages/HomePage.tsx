import CocktailList from "@/components/CocktailList";
import Layout from "@/components/Layout";
import SearchInput from "@/components/SearchInput";
import { useFavContext } from "@/context/FavContext";
import useDebounce from "@/hooks/UseDebounce";
import { ICocktail } from "@/models/Cocktail";
import CocktailService from "@/service/cocktails";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [cocktails, setCocktails] = useState<ICocktail[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const { favorites } = useFavContext();
  const [showFavoritesFirst, setShowFavoritesFirst] = useState<boolean>(false);

  const debouncedSearchTerm = useDebounce(searchTerm, 350);

  const fetchCocktails = async (search: string) => {
    const data = await CocktailService.getCocktailsByMainDrink({
      drink: search,
    });
    setCocktails(data);
  };

  useEffect(() => {
    if (debouncedSearchTerm) {
      fetchCocktails(debouncedSearchTerm);
    } else {
      setCocktails([]);
    }
  }, [debouncedSearchTerm]);

  const filteredCocktails = cocktails.filter((cocktail) =>
    cocktail.drink.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  );

  const sortedCocktails = filteredCocktails.length
    ? showFavoritesFirst
      ? [
          ...filteredCocktails.filter((cocktail) =>
            favorites.some((favCocktail) => favCocktail.id === cocktail.id)
          ),
          ...filteredCocktails.filter(
            (cocktail) =>
              !favorites.some((favCocktail) => favCocktail.id === cocktail.id)
          ),
        ]
      : filteredCocktails
    : favorites;

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Layout>
      <div className="text-white text-center max-w-[90%] mx-auto">
        <div className="flex justify-between items-center">
          <h1 className="text-left text-3xl font-bold mb-[5%] mt-[2%]">
            Cócteles 🍸
          </h1>
          <SearchInput handleSearchChange={handleSearchChange} />
          <button
            className="relative min-w-[25%] mb-4 px-2 bg-blue-500 text-white rounded h-full cursor-pointer"
            onClick={() => setShowFavoritesFirst((prev) => !prev)}
          >
            {showFavoritesFirst
              ? "Desactivar favoritos primero"
              : "Mostrar favoritos primero"}
          </button>
        </div>
        <CocktailList cocktailList={sortedCocktails} />
      </div>
    </Layout>
  );
};

export default HomePage;
