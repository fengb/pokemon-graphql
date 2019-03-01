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
      {types.map((t, i) => (
        <div key={t.identifier || i}>{t.identifier}</div>
      ))}
    </div>
  );
}
