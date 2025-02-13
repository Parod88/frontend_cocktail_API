import { ICocktail } from "@/models/Cocktail";
import CocktailCard from "./CocktailCard";

const CocktailList = ({ cocktailList }: { cocktailList: ICocktail[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cocktailList.map((cocktail, index) => (
        <CocktailCard key={index} cocktail={cocktail} />
      ))}
    </div>
  );
};

export default CocktailList;
