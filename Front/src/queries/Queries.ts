import { gql } from '@apollo/client';

export const PRODUCTS_BY_CATEGORY_QUERY = gql`
  query ProductsByCategory($categoryName: String!) {
    productsByCategory(categoryName: $categoryName) {
      id
      name
      in_stock
      description
      brand
      category {
        id
        name
      }
      images {
        id
        url
      }
      attributes {
        id
        name
        value
      }
      prices {
        id
        amount
        currency
      }
    }
  }
`;
