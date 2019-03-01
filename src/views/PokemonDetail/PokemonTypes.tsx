import * as React from "react";
import * as query from "./query";

export default function PokemonTypes(props: { identifier: string }) {
  const { data, error, loading } = query.use({
    variables: { identifier: props.identifier }
  });

  const types = query.extractTypes(data);
  if (!types) {
    return null;
  }

  return (
    <div>
      {types.map(t => (
        <div>{t.identifier}</div>
      ))}
    </div>
  );
}
