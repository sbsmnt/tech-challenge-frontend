import React from 'react';
import { fireEvent, render, screen } from 'utils/tests';
import { MovieModal } from './MovieModal';

describe('MovieModal', () => {
  const mockProps = {
    isVisible: true,
    actorId: '1',
    handleModal: jest.fn(),
  };

  it('should render modal title', () => {
    const { isVisible, actorId, handleModal } = mockProps;
    render(<MovieModal isVisible={isVisible} actorId={actorId} handleModal={handleModal} />);
    expect(screen.getByText('Starred Movies')).toBeInTheDocument();

    // const movieTitle = await screen.findByText('Beetlejuice');
    // expect(movieTitle).toBeInTheDocument();
    // expect(screen.getByAltText('Beetlejuice')).toBeInTheDocument();
  });

  it('should fire handleModal function on close', () => {
    const { isVisible, actorId, handleModal } = mockProps;
    render(<MovieModal isVisible={isVisible} actorId={actorId} handleModal={handleModal} />);

    const closeBtn = screen.getByLabelText('Close');
    fireEvent.click(closeBtn);
    expect(handleModal).toBeCalled();
  });
});
