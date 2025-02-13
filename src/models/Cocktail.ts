export interface ICocktail {
  id: string;
  drink: string;
  image: string;
  instructions: string;
  instructionsES: string;
}

export class Cocktail implements ICocktail {
  id: string;
  drink: string;
  image: string;
  instructions: string;
  instructionsES: string;

  constructor({
    id,
    drink,
    image,
    instructions,
    instructionsES,
  }: {
    id: string;
    drink: string;
    image: string;
    instructions: string;
    instructionsES: string;
  }) {
    this.id = id;
    this.drink = drink;
    this.image = image;
    this.instructions = instructions;
    this.instructionsES = instructionsES;
  }
}
