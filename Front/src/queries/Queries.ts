export const PRODUCTS_BY_CATEGORY_QUERY = `
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

export const PRODUCTS_BY_ID_QUERY = `
  query GetProduct($id: ID!) {
    product(id: $id) {
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

export const CREATE_ORDER_MUTATION = `
  mutation CreateOrder($productId: ID!, $quantity: Int!, $attributes: String) {
    createOrder(productId: $productId, quantity: $quantity, attributes: $attributes) {
      success
      message
      order {
        id
        product_id
        product_name
        quantity
        price
        total_price
        attributes
        image_url
        created_at
      }
    }
  }
`;