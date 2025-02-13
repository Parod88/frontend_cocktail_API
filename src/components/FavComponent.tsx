import favFull from "../assets/images/fav-full.svg";
import favEmpty from "../assets/images/fav-empty.svg";
import { useFavContext } from "@/context/FavContext";
import { ICocktail } from "@/models/Cocktail";

type FavProps = {
  cocktail: ICocktail;
};

const FavComponent = ({ cocktail }: FavProps) => {
  const { favorites, addFavorite, removeFavorite } = useFavContext();

  const isFav = favorites.some((favCocktail) => favCocktail.id === cocktail.id);
  const handleClick = () => {
    if (isFav) {
      removeFavorite(cocktail);
    } else {
      addFavorite(cocktail);
    }
  };
  return (
    <div className="relative w-[30px] h-full">
      <img
        className="w-full h-full"
        src={isFav ? favFull : favEmpty}
        alt=""
        onClick={handleClick}
      />
    </div>
  );
};

export default FavComponent;
