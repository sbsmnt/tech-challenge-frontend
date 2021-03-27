import React from 'react';
import { Card, Image } from 'antd';
import { Movie } from 'api/movies';
import classes from './MovieCard.module.scss';

interface Props {
  movie: Movie;
}

export const MovieCard = ({ movie }: Props) => {
  const {
    title,
    year,
    runtime,
    director,
    posterUrl,
  } = movie;

  const defaultImg = 'https://picsum.photos/seed/moviedefault/300/450';

  return (
    <Card
      className={classes.moviecard}
      hoverable
      cover={(
        <Image
          className={classes.poster}
          src={posterUrl}
          preview={false}
          width="100%"
          alt={title}
          fallback={defaultImg}
        />
      )}
    >
      <div>
        <h3>{title}</h3>
        <div>
          {`${year} | ${runtime} min` }
        </div>
        <div>
          <small>{director}</small>
        </div>
      </div>
    </Card>
  );
};
