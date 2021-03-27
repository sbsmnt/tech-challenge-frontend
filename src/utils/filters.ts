import { Actor } from 'api/actors';
import { Movie } from 'api/movies';

export const filterOptions = (input: string, option: string) => (
  option.toLowerCase().indexOf(input.toLowerCase()) >= 0
);

export const starredMovies = (movies: Movie[], actorId: string) => (
  movies.filter((movie: Movie) => movie.actors.find((actor: Actor) => actor.id === actorId))
);
