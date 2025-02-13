import { ICocktail } from "@/models/Cocktail";
import FavComponent from "./FavComponent";

const CocktailCard = ({ cocktail }: { cocktail: ICocktail }) => {
  return (
    <div className="relative group">
      <div className="relative min-h-full min-w-full flex flex-col p-4 border-2 border-blue-500 rounded-lg bg-gray-800 text-white ease-in-out transition-transform duration-300 group-hover:scale-105 group-hover:z-10 group-hover:absolute cursor-pointer">
        <img
          className="w-full h-40 object-cover rounded-md"
          src={cocktail.image}
          alt={cocktail.drink}
        />
        <div className="flex px-1 justify-between items-center pt-2">
          <h1 className=" text-lg font-bold">{cocktail.drink}</h1>
          <FavComponent cocktail={cocktail} />
        </div>
        <p className="text-left mt-2 text-sm line-clamp-3 group-hover:line-clamp-none">
          {cocktail.instructionsES}
        </p>
      </div>
    </div>
  );
};

export default CocktailCard;
