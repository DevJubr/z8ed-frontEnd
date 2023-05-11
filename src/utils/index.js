// export const items = [
//   {
//     icon: '<i class="bi bi-arrow-up-right"></i>',
//     title: "speedy turnover",
//     subtitile: "lorem b al",
//   },
//   {
//     icon: '<i class="bi bi-arrow-up-right"></i>',
//     title: "speedy turnover",
//     subtitile: "lorem b al",
//   },
//   {
//     icon: '<i class="bi bi-arrow-up-right"></i>',
//     title: "speedy turnover",
//     subtitile: "lorem b al",
//   },
//   {
//     icon: '<i class="bi bi-arrow-up-right"></i>',
//     title: "speedy turnover",
//     subtitile: "lorem b al",
//   },
//   {
//     icon: '<i class="bi bi-arrow-up-right"></i>',
//     title: "speedy turnover",
//     subtitile: "lorem b al",
//   },
//   {
//     icon: '<i class="bi bi-arrow-up-right"></i>',
//     title: "speedy turnover",
//     subtitile: "lorem b al",
//   },
// ];

const { ApolloClient, HttpLink, InMemoryCache } = require("@apollo/client");

export const getClient = () => {
  let client;
  if (!client || typeof window === "undefined") {
    client = new ApolloClient({
      link: new HttpLink({
        uri: "http://localhost:1337/graphql",
      }),
      cache: new InMemoryCache(),
    });
  }
  return client;
};
