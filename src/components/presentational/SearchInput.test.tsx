import { render, screen } from '@testing-library/react';
import SearchInput, { SearchInputProps } from './SearchInput';

const defaultProps: SearchInputProps = {
  value: 'value',
  onChange: jest.fn(),
};

const setup = (props = defaultProps) => {
  render(<SearchInput {...props} />);
};

describe('Search Input Component Unit Tests', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component with no errors', async () => {
    setup();
    expect(await screen.findByTestId('search')).toBeTruthy();
  });
});
