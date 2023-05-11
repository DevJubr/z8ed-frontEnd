const {
  InMemoryCache,
  createHttpLink,
  ApolloClient,
} = require("@apollo/client");
import { setContext } from "@apollo/client/link/context";

export const getClient = () => {
  let client = null;

  const httpLink = createHttpLink({
    uri: "http://127.0.0.1:1337/graphql",
  });
  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: `bearer 566187ded8c6cfc4e4e2358cc006fd1920fa6660728242225640c70066d490beac1ee30e087c00de90c958802043dbb27e7f425aff1f9375a7b59b68643fb24effea9f2a828b2c96d1f0d6d802e817895fe5dce2a369ec1fd34da251e9b4d0cd1645ef80046ae0d5519e094dffb3a6f7aba09ed869f39b896100d729974c9bfb`,
      },
    };
  });

  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: authLink.concat(httpLink),
      cache: new InMemoryCache(),
    });
  }

  return client;
};
