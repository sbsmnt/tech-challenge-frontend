import { Actor } from 'api/actors';
import { Movie } from 'api/movies';
import { Genre } from 'api/genres';

export const mockActors: Actor[] = [
  {
    id: '1',
    name: 'Alec Baldwin',
    bio:
      'Enim aut maxime dolorem dolores. Impedit accusantium corrupti quo quidem veritatis rem totam nobis. Id consequatur quasi eum ut omnis. Explicabo qui officiis impedit tempore culpa.',
    dob: new Date('2012-01-07T22:28:40.054Z'),
  },
  {
    id: '2',
    name: 'Geena Davis',
    bio:
      'Laudantium non aut ut. Rem officia corrupti maxime est. Nihil rem ipsum numquam. Nostrum aut necessitatibus necessitatibus itaque. Doloremque est ad voluptatibus animi.',
    dob: new Date('2011-03-07T02:51:35.868Z'),
  },
  {
    id: '3',
    name: 'Annie McEnroe',
    bio:
      'At enim blanditiis. Debitis magni corporis dolore et quod. Qui molestiae sint incidunt expedita nostrum. Inventore non non sint repudiandae alias.',
    dob: new Date('2003-10-11T00:11:56.795Z'),
  },
  {
    id: '4',
    name: 'Maurice Page',
    bio: 'Impedit est aut culpa. Ipsam nam cum. At rem harum soluta optio. Quo autem inventore.',
    dob: new Date('2013-12-15T02:01:14.864Z'),
  },
  {
    id: '5',
    name: 'Richard Gere',
    bio:
      'Eaque nulla voluptas quae voluptatum quo occaecati omnis. Nobis voluptatum aliquam rerum quia qui. Asperiores eaque et ad nobis debitis quaerat. Qui et facilis.',
    dob: new Date('2015-10-07T17:17:02.229Z'),
  },
  {
    id: '6',
    name: 'Gregory Hines',
    bio:
      'Et odio molestias esse assumenda beatae quia explicabo molestiae sed. Hic molestiae quam vero deleniti ex itaque ea. Animi ipsam deserunt a quam ex. Quo eaque rem. Voluptates molestiae recusandae sit debitis aliquam.',
    dob: new Date('2009-10-16T09:16:26.190Z'),
  },
  {
    id: '7',
    name: 'Diane Lane',
    bio:
      'Quo et quia. Beatae tenetur sunt architecto quibusdam molestias est commodi facere ut. Excepturi earum officiis officiis saepe omnis necessitatibus earum enim. Possimus qui voluptatem et pariatur molestias veritatis et consequuntur at. Et consequatur nobis laudantium qui sunt voluptatem ea.',
    dob: new Date('2007-01-21T06:45:07.516Z'),
  },
  {
    id: '8',
    name: 'Lonette McKee',
    bio:
      'Expedita omnis id distinctio. Id dolores repellat laborum fugiat ut ut quibusdam. Repellendus magni aut dolorem.',
    dob: new Date('2006-04-17T07:56:58.796Z'),
  },
];

export const mockMovies: Movie[] = [
  {
    title: 'Beetlejuice',
    year: 1988,
    runtime: 92,
    director: 'Tim Burton',
    plot:
      'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg',
    id: '1',
    actors: [
      {
        id: '1',
        name: 'Alec Baldwin',
        bio:
          'Enim aut maxime dolorem dolores. Impedit accusantium corrupti quo quidem veritatis rem totam nobis. Id consequatur quasi eum ut omnis. Explicabo qui officiis impedit tempore culpa.',
        dob: new Date('2012-01-07T22:28:40.054Z'),
      },
      {
        id: '2',
        name: 'Geena Davis',
        bio:
          'Laudantium non aut ut. Rem officia corrupti maxime est. Nihil rem ipsum numquam. Nostrum aut necessitatibus necessitatibus itaque. Doloremque est ad voluptatibus animi.',
        dob: new Date('2011-03-07T02:51:35.868Z'),
      },
      {
        id: '3',
        name: 'Annie McEnroe',
        bio:
          'At enim blanditiis. Debitis magni corporis dolore et quod. Qui molestiae sint incidunt expedita nostrum. Inventore non non sint repudiandae alias.',
        dob: new Date('2003-10-11T00:11:56.795Z'),
      },
      {
        id: '4',
        name: 'Maurice Page',
        bio:
          'Impedit est aut culpa. Ipsam nam cum. At rem harum soluta optio. Quo autem inventore.',
        dob: new Date('2013-12-15T02:01:14.864Z'),
      },
    ],
    genres: [
      {
        id: '1',
        name: 'Comedy',
      },
      {
        id: '2',
        name: 'Fantasy',
      },
    ],
  },
  {
    title: 'The Cotton Club',
    year: 1984,
    runtime: 127,
    director: 'Francis Ford Coppola',
    plot:
      'The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.',
    posterUrl:
      'https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg',
    id: '2',
    actors: [
      {
        id: '5',
        name: 'Richard Gere',
        bio:
          'Eaque nulla voluptas quae voluptatum quo occaecati omnis. Nobis voluptatum aliquam rerum quia qui. Asperiores eaque et ad nobis debitis quaerat. Qui et facilis.',
        dob: new Date('2015-10-07T17:17:02.229Z'),
      },
      {
        id: '6',
        name: 'Gregory Hines',
        bio:
          'Et odio molestias esse assumenda beatae quia explicabo molestiae sed. Hic molestiae quam vero deleniti ex itaque ea. Animi ipsam deserunt a quam ex. Quo eaque rem. Voluptates molestiae recusandae sit debitis aliquam.',
        dob: new Date('2009-10-16T09:16:26.190Z'),
      },
      {
        id: '7',
        name: 'Diane Lane',
        bio:
          'Quo et quia. Beatae tenetur sunt architecto quibusdam molestias est commodi facere ut. Excepturi earum officiis officiis saepe omnis necessitatibus earum enim. Possimus qui voluptatem et pariatur molestias veritatis et consequuntur at. Et consequatur nobis laudantium qui sunt voluptatem ea.',
        dob: new Date('2007-01-21T06:45:07.516Z'),
      },
      {
        id: '8',
        name: 'Lonette McKee',
        bio:
          'Expedita omnis id distinctio. Id dolores repellat laborum fugiat ut ut quibusdam. Repellendus magni aut dolorem.',
        dob: new Date('2006-04-17T07:56:58.796Z'),
      },
    ],
    genres: [
      {
        id: '3',
        name: 'Crime',
      },
      {
        id: '4',
        name: 'Drama',
      },
      {
        id: '5',
        name: 'Music',
      },
    ],
  },
];

export const mockGenres: Genre[] = [
  {
    id: '1',
    name: 'Comedy',
  },
  {
    id: '2',
    name: 'Fantasy',
  },
  {
    id: '3',
    name: 'Crime',
  },
  {
    id: '4',
    name: 'Drama',
  },
  {
    id: '5',
    name: 'Music',
  },
];
