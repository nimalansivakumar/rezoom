import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type InfoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ResumesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Info {
  readonly id: string;
  readonly resume_id?: string | null;
  readonly name?: string | null;
  readonly role?: string | null;
  readonly about_me?: string | null;
  readonly skills?: string | null;
  readonly projects?: string | null;
  readonly experience?: string | null;
  readonly achievement?: string | null;
  readonly interests?: string | null;
  readonly languages_known?: string | null;
  readonly education?: string | null;
  readonly image_link?: string | null;
  readonly mobile?: string | null;
  readonly email?: string | null;
  readonly website?: string | null;
  readonly address?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Info, InfoMetaData>);
  static copyOf(source: Info, mutator: (draft: MutableModel<Info, InfoMetaData>) => MutableModel<Info, InfoMetaData> | void): Info;
}

export declare class Resumes {
  readonly id: string;
  readonly user_id?: string | null;
  readonly resume_name?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Resumes, ResumesMetaData>);
  static copyOf(source: Resumes, mutator: (draft: MutableModel<Resumes, ResumesMetaData>) => MutableModel<Resumes, ResumesMetaData> | void): Resumes;
}

export declare class User {
  readonly id: string;
  readonly user_id?: string | null;
  readonly username?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}