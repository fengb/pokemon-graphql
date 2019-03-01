const TYPE_NAMES = {
  normal: 0,
  fighting: 0,
  flying: 0,
  poison: 0,
  ground: 0,
  rock: 0,
  bug: 0,
  ghost: 0,
  steel: 0,
  fire: 0,
  water: 0,
  grass: 0,
  electric: 0,
  psychic: 0,
  ice: 0,
  dragon: 0,
  dark: 0,
  fairy: 0
};

export type TypeName = keyof typeof TYPE_NAMES;

export function typeNames(...vals: TypeName[]) {
  return vals;
}

export function isTypeName(val: string): val is TypeName {
  return TYPE_NAMES.hasOwnProperty(val);
}

export class Type<T extends TypeName> {
  constructor(
    public name: T,
    public efficacy: {
      2.0?: TypeName[];
      0.5?: TypeName[];
      0.0?: TypeName[];
    }
  ) {}

  attack(typeName: TypeName): number {
    if (this.efficacy[2.0] && this.efficacy[2.0].includes(typeName)) {
      return 2.0;
    }
    if (this.efficacy[0.5] && this.efficacy[0.5].includes(typeName)) {
      return 0.5;
    }
    if (this.efficacy[0.0] && this.efficacy[0.0].includes(typeName)) {
      return 0.0;
    }
    return 1.0;
  }

  defense(typeName: TypeName): number {
    return TYPES[typeName].attack(this.name);
  }
}

const TYPES: { [N in TypeName]: Type<N> } = {
  normal: new Type("normal", {
    0.0: ["ghost"]
  }),
  fighting: new Type("fighting", {
    2.0: ["normal", "steel", "rock", "ice", "dark"],
    0.5: ["flying", "poison", "bug", "psychic", "fairy"],
    0.0: ["ghost"]
  }),
  flying: new Type("flying", {
    2.0: ["fighting", "bug", "grass"],
    0.5: ["rock", "steel", "electric"]
  }),
  poison: new Type("poison", {
    2.0: ["grass", "fairy"],
    0.5: ["poison", "ground", "rock", "ghost"],
    0.0: ["steel"]
  }),
  ground: new Type("ground", {
    2.0: ["poison", "rock", "steel", "fire", "electric"],
    0.5: ["bug", "grass"],
    0.0: ["flying"]
  }),
  rock: new Type("rock", {
    2.0: ["flying", "bug", "fire", "ice"],
    0.5: ["fighting", "ground", "steel"]
  }),
  bug: new Type("bug", {
    2.0: ["grass", "psychic", "dark"],
    0.5: ["fighting", "flying", "poison", "ghost", "steel", "fire", "fairy"]
  }),
  ghost: new Type("ghost", {
    2.0: ["ghost", "psychic"],
    0.5: ["dark"],
    0.0: ["normal"]
  }),
  steel: new Type("steel", {
    2.0: ["rock", "ice", "fairy"],
    0.5: ["steel", "fire", "water", "electric"]
  }),
  fire: new Type("fire", {
    2.0: ["bug", "steel", "grass", "ice"],
    0.5: ["rock", "fire", "water", "dragon"]
  }),
  water: new Type("water", {
    2.0: ["ground", "rock", "fire"],
    0.5: ["water", "grass", "ice"]
  }),
  grass: new Type("grass", {
    2.0: ["ground", "rock", "water"],
    0.5: ["flying", "poison", "bug", "steel", "fire", "grass", "dragon"]
  }),
  electric: new Type("electric", {
    2.0: ["flying", "water"],
    0.5: ["grass", "electric", "dragon"],
    0.0: ["ground"]
  }),
  psychic: new Type("psychic", {
    2.0: ["fighting", "poison"],
    0.5: ["steel", "psychic"],
    0.0: ["dark"]
  }),
  ice: new Type("ice", {
    2.0: ["flying", "ground", "grass", "dragon"],
    0.5: ["steel", "fire", "water", "ice"]
  }),
  dragon: new Type("dragon", {
    2.0: ["dragon"],
    0.5: ["steel"],
    0.0: ["fairy"]
  }),
  dark: new Type("dark", {
    2.0: ["ghost", "psychic"],
    0.5: ["fighting", "dark", "fairy"]
  }),
  fairy: new Type("fairy", {
    2.0: ["fighting", "dragon", "dark"],
    0.5: ["poison", "steel", "fire"]
  })
};

export default TYPES;
