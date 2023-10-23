export class Character {
  name: string;
  age: number;
  family: string;
  status: boolean = true;

  constructor(name: string, family: string, age: number) {
    this.name = name;
    this.family = family;
    this.age = age;
  }

  phrase(value: string) {
    return value;
  }

  dead() {
    this.status = false;
  }
}
