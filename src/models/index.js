// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Info, Resumes, User } = initSchema(schema);

export {
  Info,
  Resumes,
  User
};