import React from 'react';
import { render, screen } from 'utils/tests';
import { mockActors } from 'utils/testsMockData';
import { ActorCard } from './ActorCard';

describe('ActorCard', () => {
  it('should render with movie details', () => {
    const actor = mockActors[0];
    render(<ActorCard actor={actor} />);

    const findName = new RegExp(actor.name, 'i');
    const findBio = actor.bio ? new RegExp(actor.bio, 'i') : '';
    const dobString = actor.dob ? new Date(actor.dob).toLocaleDateString() : '';
    const findDob = new RegExp(dobString, 'i');

    expect(screen.getByText(findName)).toBeInTheDocument();
    expect(screen.getByText(findBio)).toBeInTheDocument();
    expect(screen.getByText(findDob)).toBeInTheDocument();
  });
});
