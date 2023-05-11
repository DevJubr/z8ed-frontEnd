const { gql } = require("@apollo/client");

export const GETF = gql`
  query Futureds($filters: ProductFiltersInput) {
    products(filters: $filters) {
      data {
        id
        attributes {
          title
          slug
          price
        }
      }
    }
  }
`;
export const GAC = gql`
  query Categorys {
    categories {
      data {
        id
        attributes {
          category
          products {
            data {
              id
              attributes {
                body
                price
                slug
                title
              }
            }
          }
        }
      }
    }
  }
`;
export const GAP = gql`
  query Products {
    products {
      data {
        id
        attributes {
          body
          category {
            data {
              id
              attributes {
                category
              }
            }
          }
          futered
          price
          slug
          title
        }
      }
    }
  }
`;
export const GAFP = gql`
  query Fp {
    fPrices {
      data {
        id
        attributes {
          price
          products {
            data {
              id
              attributes {
                body
                price
                title
                slug
              }
            }
          }
        }
      }
    }
  }
`;
export const GAS = gql`
  query Size {
    sizes {
      data {
        id
        attributes {
          size
          products {
            data {
              id
              attributes {
                body
                futered
                price
                slug
                title
              }
            }
          }
        }
      }
    }
  }
`;
