import { ICocktail } from "@/models/Cocktail";

const CocktailCard = ({ cocktail }: { cocktail: ICocktail }) => {
  return (
    <div className="relative group">
      <div className="relative min-h-full min-w-full flex flex-col p-4 border-2 border-blue-500 rounded-lg bg-gray-800 text-white transition-transform duration-300 ease-in-out group-hover:scale-105 group-hover:z-10 group-hover:absolute cursor-pointer">
        <img
          className="w-full h-40 object-cover rounded-md"
          src={cocktail.image}
          alt={cocktail.drink}
        />
        <div className="flex px-1">
          <h1 className="mt-2 text-lg font-bold">{cocktail.drink}</h1>
        </div>
        <p className="text-left mt-2 text-sm line-clamp-3 group-hover:line-clamp-none">
          {cocktail.instructions}
        </p>
      </div>
    </div>
  );
};

export default CocktailCard;
