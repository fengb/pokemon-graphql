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

export function isTypeName(val: string): val is TypeName {
  return TYPE_NAMES.hasOwnProperty(val);
}

export interface Type<T extends TypeName> {
  name: T;
  id: string;
  efficacy: Partial<Record<TypeName, number>>;
}

const TYPES: Partial<{ [N in TypeName]: Type<N> }> = {
  normal: {
    name: "normal",
    id: "1",
    efficacy: {
      ghost: 0
    }
  },
  fighting: {
    name: "fighting",
    id: "2",
    efficacy: {
      normal: 2,
      steel: 2,
      rock: 2,
      ice: 2,
      dark: 2,
      flying: 0.5,
      poison: 0.5,
      bug: 0.5,
      psychic: 0.5,
      fairy: 0.5,
      ghost: 0,
    }
  }
};

export default TYPES;
