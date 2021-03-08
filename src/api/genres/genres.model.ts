import { Model, RestSerializer } from 'miragejs';

export interface Genre {
  id: string
  name: string
}

export interface GenrePayload extends Omit<Genre, 'id'> {
  id?: Genre['id']
}

export const GenreModel = Model.extend<Partial<Genre>>({});
export const GenreSerializer = RestSerializer.extend();
