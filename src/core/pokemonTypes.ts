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

type Efficacy = Partial<Record<TypeName, number>>;

export interface Type<T extends TypeName> {
  name: T;
  id: string;
  efficacy: Efficacy;
}

function pivot(defs: Record<number, TypeName[]>): Efficacy {
  const ret = {} as Efficacy;
  for (const [key, names] of Object.entries(defs)) {
    for (const name of names) {
      ret[name] = Number(key);
    }
  }
  return ret;
}

const TYPES: { [N in TypeName]: Type<N> } = {
  normal: {
    name: "normal",
    id: "1",
    efficacy: pivot({
      0.0: ["ghost"]
    })
  },
  fighting: {
    name: "fighting",
    id: "2",
    efficacy: pivot({
      2.0: ["normal", "steel", "rock", "ice", "dark"],
      0.5: ["flying", "poison", "bug", "psychic", "fairy"],
      0.0: ["ghost"]
    })
  },
  flying: {
    name: "flying",
    id: "3",
    efficacy: pivot({
      2.0: ["fighting", "bug", "grass"],
      0.5: ["rock", "steel", "electric"]
    })
  },
  poison: {
    name: "poison",
    id: "4",
    efficacy: pivot({
      2.0: ["grass", "fairy"],
      0.5: ["poison", "ground", "rock", "ghost"],
      0.0: ["steel"]
    })
  },
  ground: {
    name: "ground",
    id: "5",
    efficacy: pivot({
      2.0: ["poison", "rock", "steel", "fire", "electric"],
      0.5: ["bug", "grass"],
      0.0: ["flying"]
    })
  },
  rock: {
    name: "rock",
    id: "6",
    efficacy: pivot({
      2.0: ["flying", "bug", "fire", "ice"],
      0.5: ["fighting", "ground", "steel"]
    })
  },
  bug: {
    name: "bug",
    id: "7",
    efficacy: pivot({
      2.0: ["grass", "psychic", "dark"],
      0.5: ["fighting", "flying", "poison", "ghost", "steel", "fire", "fairy"]
    })
  },
  ghost: {
    name: "ghost",
    id: "8",
    efficacy: pivot({
      2.0: ["ghost", "psychic"],
      0.5: ["dark"],
      0.0: ["normal"]
    })
  },
  steel: {
    name: "steel",
    id: "9",
    efficacy: pivot({
      2.0: ["rock", "ice", "fairy"],
      0.5: ["steel", "fire", "water", "electric"]
    })
  },
  fire: {
    name: "fire",
    id: "10",
    efficacy: pivot({
      2.0: ["bug", "steel", "grass", "ice"],
      0.5: ["rock", "fire", "water", "dragon"]
    })
  },
  water: {
    name: "water",
    id: "11",
    efficacy: pivot({
      2.0: ["ground", "rock", "fire"],
      0.5: ["water", "grass", "ice"]
    })
  },
  grass: {
    name: "grass",
    id: "12",
    efficacy: pivot({
      2.0: ["ground", "rock", "water"],
      0.5: ["flying", "poison", "bug", "steel", "fire", "grass", "dragon"]
    })
  },
  electric: {
    name: "electric",
    id: "13",
    efficacy: pivot({
      2.0: ["flying", "water"],
      0.5: ["grass", "electric", "dragon"],
      0.0: ["ground"]
    })
  },
  psychic: {
    name: "psychic",
    id: "14",
    efficacy: pivot({
      2.0: ["fighting", "poison"],
      0.5: ["steel", "psychic"],
      0.0: ["dark"]
    })
  },
  ice: {
    name: "ice",
    id: "15",
    efficacy: pivot({
      2.0: ["flying", "ground", "grass", "dragon"],
      0.5: ["steel", "fire", "water", "ice"]
    })
  },
  dragon: {
    name: "dragon",
    id: "16",
    efficacy: pivot({
      2.0: ["dragon"],
      0.5: ["steel"],
      0.0: ["fairy"]
    })
  },
  dark: {
    name: "dark",
    id: "17",
    efficacy: pivot({
      2.0: ["ghost", "psychic"],
      0.5: ["fighting", "dark", "fairy"]
    })
  },
  fairy: {
    name: "fairy",
    id: "18",
    efficacy: pivot({
      2.0: ["fighting", "dragon", "dark"],
      0.5: ["poison", "steel", "fire"]
    })
  }
};

export default TYPES;
