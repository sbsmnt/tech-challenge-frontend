import React from 'react';
import { mockActors, mockGenres } from 'utils/testsMockData';
import {
  fireEvent,
  render,
  screen,
  waitFor,
} from 'utils/tests';
import { MovieForm } from './MovieForm';

describe('MovieForm', () => {
  it('should render all the inputs for movie creation', () => {
    render(<MovieForm actors={mockActors} genres={mockGenres} />);

    expect(screen.getByLabelText('title')).toBeInTheDocument();
    expect(screen.getByLabelText('year')).toBeInTheDocument();
    expect(screen.getByLabelText('runtime')).toBeInTheDocument();
    expect(screen.getByLabelText('director')).toBeInTheDocument();
    expect(screen.getByLabelText('plot')).toBeInTheDocument();
    expect(screen.getByLabelText('poster')).toBeInTheDocument();
    expect(screen.getByTestId('select-actors')).toBeInTheDocument();
    expect(screen.getByTestId('select-genres')).toBeInTheDocument();
  });

  it('should change text input values', () => {
    render(<MovieForm actors={mockActors} genres={mockGenres} />);
    const textInputs = ['title', 'year', 'runtime', 'director', 'plot', 'poster'];

    textInputs.forEach((input: string) => {
      const testInput = screen.getByLabelText(input) as HTMLInputElement;
      fireEvent.change(testInput, { target: { value: 'New Value' } });
      expect(testInput.value).toBe('New Value');
    });
  });

  it('should change number input values', () => {
    render(<MovieForm actors={mockActors} genres={mockGenres} />);
    const numberInputs = ['year', 'runtime'];

    numberInputs.forEach((input: string) => {
      const testInput = screen.getByLabelText(input) as HTMLInputElement;
      fireEvent.change(testInput, { target: { value: '2021' } });
      expect(testInput.value).toBe('2021');
    });
  });

  it('should change actors select value', async () => {
    render(<MovieForm actors={mockActors} genres={mockGenres} />);

    const actorSelect = screen.getByTestId('select-actors').firstElementChild as HTMLInputElement;
    fireEvent.mouseDown(actorSelect);
    await waitFor(() => {
      fireEvent.mouseDown(screen.getByText('Alec Baldwin'));
      fireEvent.mouseDown(screen.getByText('Geena Davis'));
      expect(screen.getByText('Alec Baldwin')).toBeInTheDocument();
      expect(screen.getByText('Geena Davis')).toBeInTheDocument();
    });
  });

  it('should change genres select value', async () => {
    render(<MovieForm actors={mockActors} genres={mockGenres} />);

    const genreSelect = screen.getByTestId('select-genres').firstElementChild as HTMLInputElement;
    fireEvent.mouseDown(genreSelect);
    await waitFor(() => {
      fireEvent.mouseDown(screen.getByText('Drama'));
      expect(screen.getByText('Drama')).toBeInTheDocument();
    });
  });
});
