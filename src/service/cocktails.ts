import { get } from "@/axios";
import { Cocktail, ICocktail } from "@/models/Cocktail";

const cocktailsUrl = `${import.meta.env.VITE_APP_BASE_URL}`;

interface IApiCocktail {
  idDrink: string;
  strDrink: string;
  strDrinkThumb: string;
  strInstructions?: string;
  strInstructionsES?: string;
}

interface IApiResponse {
  drinks: IApiCocktail[] | null;
}

export default class CocktailService {
  static async getCocktailsByMainDrink({
    drink,
  }: {
    drink: string;
  }): Promise<ICocktail[]> {
    try {
      const res: IApiResponse = await get<IApiResponse>(
        `${cocktailsUrl.toString()}/search.php?s=${drink}`
      );

      if (!res.drinks) return [];

      return res.drinks?.map(
        (drink) =>
          new Cocktail({
            id: drink.idDrink,
            drink: drink.strDrink,
            image: drink.strDrinkThumb,
            instructions: drink.strInstructions ?? "No instructions available",
            instructionsES:
              drink.strInstructionsES ?? "No hay instrucciones disponibles",
          })
      );
    } catch (error) {
      console.error("Error fetching cocktails: ", error);
      return [];
    }
  }
}
