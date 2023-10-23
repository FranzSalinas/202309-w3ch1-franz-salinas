import { Character } from "./character";

export class King extends Character {
  years: Number;

  constructor(name: string, family: string, age: number, years: number) {
    super(name, family, age);
    this.years = years;
  }

  phrase() {
    return super.phrase("Vais a morir todos");
  }
}
