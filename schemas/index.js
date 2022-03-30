import animalSchema from './animalSchema';
import { gql } from 'apollo-server-express';
import speciesSchema from './speciesSchema';
import categorySchema from './categorySchema';

const linkSchema = gql`
  type Query {
    _: Boolean
  }
  type Mutation {
    _: Boolean
  }
`;

export default [linkSchema, animalSchema, speciesSchema, categorySchema];
