import { hasMany, Model, RestSerializer } from 'miragejs';
import { Actor } from '../actors';
import { Genre } from '../genres/genres.model';

export interface Movie {
  id: string
  title: string
  year: number
  runtime: number
  genres: Genre[]
  director: string
  actors: Actor[]
  plot: string
  posterUrl: string
}

export interface MoviePayload extends Omit<Movie, 'id' | 'actors' | 'genres'> {
  id?: Movie['id']
  actorIds: string[]
  genreIds: string[]
}

export const MovieModel = Model.extend({
  actors: hasMany('actor'),
  genres: hasMany('genre'),
});

export const MovieSerializer = RestSerializer.extend({
  include: ['actors', 'genres'],
  embed: true,
});
