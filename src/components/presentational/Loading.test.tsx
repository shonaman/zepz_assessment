import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading';

const setup = () => {
  render(<Loading />);
};

describe('Loading Component Unit test', () => {
  it('should render the component with no errors', async () => {
    setup();
    expect(await screen.findByTestId('spinner')).toBeTruthy();
  });
});
