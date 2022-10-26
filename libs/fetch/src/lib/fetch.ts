import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export interface UseFetchHook {
  loading: string;
  error: string;
  data: string;
}

export const useFetchHook = () => {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    // fetch the current todo from the server every 0.5 seconds
    pollInterval: 500,
  });
  return { error, data, loading };
};
