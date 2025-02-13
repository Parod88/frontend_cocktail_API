import CocktailList from "@/components/CocktailList";
import Layout from "@/components/Layout";
import { ICocktail } from "@/models/Cocktail";
import CocktailService from "@/service/cocktails";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [cocktails, setCocktails] = useState<ICocktail[]>([]);

  const drink = "vodka";

  useEffect(() => {
    const fetchCocktails = async () => {
      const data = await CocktailService.getCocktailsByMainDrink({
        drink,
      });
      setCocktails(data);
    };

    fetchCocktails();
  }, []);

  return (
    <Layout>
      <div className="text-white text-center max-w-[90%] mx-auto">
        <h1 className="text-left text-3xl font-bold mb-[5%] mt-[2%]">
          Cócteles con {drink} 🍸
        </h1>
        <CocktailList cocktailList={cocktails} />
      </div>
    </Layout>
  );
};

export default HomePage;
