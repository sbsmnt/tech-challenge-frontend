import { Model, RestSerializer } from 'miragejs';

export interface Actor {
  id: string
  name: string
  bio?: string
  dob?: Date
}

export interface ActorPayload extends Omit<Actor, 'id'> {
  id?: Actor['id']
}

export const ActorModel = Model.extend<Partial<Actor>>({});
export const ActorSerializer = RestSerializer.extend();
