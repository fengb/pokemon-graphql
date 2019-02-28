import { gql, makeQuery } from "../helpers/apollo";
import * as T from "./__generated__/Preview";

export function pad(num: number) {
  return Math.ceil(num / 100) * 100;
}

export const useQuery = makeQuery<T.Preview, T.PreviewVariables>(
  gql`
    query Preview($first: Int, $after: String) {
      Pokemon(first: $first, after: $after) {
        totalCount
        pageInfo {
          hasPreviousPage
          hasNextPage
          startCursor
          endCursor
        }
        edges {
          cursor
          node {
            id
            identifier
            sprites {
              normal {
                male {
                  front
                }
              }
            }
          }
        }
      }
    }
  `
);

export function merge(previous: T.Preview, next?: T.Preview): T.Preview {
  if (next == null || next.Pokemon == null || next.Pokemon.edges == null) {
    return previous;
  }

  return {
    Pokemon: {
      ...previous.Pokemon!,
      __typename: previous.Pokemon!.__typename,
      edges: [...previous.Pokemon!.edges!, ...next.Pokemon.edges],
      pageInfo: next.Pokemon!.pageInfo
    }
  };
}
