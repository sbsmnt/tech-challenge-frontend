import React from 'react';
import { Actor } from 'api/actors';
import { Card } from 'antd';
import classes from './ActorCard.module.scss';

interface Props {
  actor: Actor;
}

export const ActorCard = ({ actor }: Props) => {
  const { name, bio, dob } = actor;
  const birthDate = dob ? new Date(dob).toLocaleDateString() : '';

  return (
    <Card className={classes.actorcard} hoverable>
      <h3 className={classes.name} style={{ cursor: 'pointer' }}>
        {name}
      </h3>
      <div>
        <strong>Birthdate: </strong>
        {birthDate}
      </div>
      <div className={classes.bio}>{bio}</div>
    </Card>
  );
};
