import { ApolloServer, gql } from 'apollo-server';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Product {
    ID: ID!
    title: String!
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    product(ID: ID!): Product
    products: [Product]
  }
`;

const Products = [
  {
    ID: 1,
    title: 'Профлист ПМ-10 400мкм 1500×960мм зеленый',
  }
];

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    product: (_, { ID }) => Products.find(product => product.ID.toString() === ID.toString()),
    products: () => Products,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

export default server;

