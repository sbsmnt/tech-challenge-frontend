import { createServer } from 'miragejs';
import {
  Movie, MovieModel, movies, MovieSerializer,
} from './movies';
import {
  Actor, ActorModel, actors, ActorSerializer,
} from './actors';
import {
  Genre, GenreModel, genres, GenreSerializer,
} from './genres';

export const makeServer = () => createServer({
  namespace: 'api',
  models: {
    actor: ActorModel,
    genre: GenreModel,
    movie: MovieModel,
  },
  serializers: {
    actor: ActorSerializer,
    genre: GenreSerializer,
    movie: MovieSerializer,
  },
  fixtures: {
    actors,
    genres,
    movies,
  },
  routes() {
    this.timing = 1000;
    this.post('movies', (schema, request) => {
      const moviePayload: Movie = JSON.parse(request.requestBody);
      return schema.create('movie', moviePayload);
    });
    this.get('movies');
    this.get('movies/:id');
    this.put('movies/:id', async (schema, request) => {
      const movieId = request.params.id;
      if (!movieId) throw new Error('id was not provided');

      const movieInstance = await schema.find('movie', movieId);
      if (!movieInstance) throw new Error(`Movie ${movieId} was not found`);

      const moviePayload: Partial<Movie> = JSON.parse(request.requestBody);

      await movieInstance.update(moviePayload);
      return moviePayload.id;
    });
    this.del('movies/:id');

    this.post('actors', (schema, request) => {
      const actorPayload: Actor = JSON.parse(request.requestBody);
      return schema.create('actor', actorPayload);
    });
    this.get('actors');
    this.get('actors/:id');
    this.put('actors/:id', async (schema, request) => {
      const actorId = request.params.id;
      if (!actorId) throw new Error('id was not provided');

      const actorInstance = await schema.find('actor', actorId);
      if (!actorInstance) throw new Error(`Actor ${actorId} was not found`);

      const actorPayload: Partial<Actor> = JSON.parse(request.requestBody);

      await actorInstance.update(actorPayload);
      return actorPayload.id;
    });
    this.del('actors/:id');

    this.post('genres', (schema, request) => {
      const genresPayload: Genre = JSON.parse(request.requestBody);
      return schema.create('genre', genresPayload);
    });
    this.get('genres');
    this.get('genres/:id');
    this.put('genres/:id', async (schema, request) => {
      const genreId = request.params.id;
      if (!genreId) throw new Error('id was not provided');

      const genreInstance = await schema.find('genre', genreId);
      if (!genreInstance) throw new Error(`Actor ${genreId} was not found`);

      const genrePayload: Partial<Genre> = JSON.parse(request.requestBody);

      await genreInstance.update(genrePayload);
      return genrePayload.id;
    });
    this.del('genres/:id');
  },
});
