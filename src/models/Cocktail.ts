export interface ICocktail {
  drink: string;
  image: string;
  instructions: string;
}

export class Cocktail implements ICocktail {
  drink: string;
  image: string;
  instructions: string;

  constructor({
    drink,
    image,
    instructions,
  }: {
    drink: string;
    image: string;
    instructions: string;
  }) {
    this.drink = drink;
    this.image = image;
    this.instructions = instructions;
  }
}
