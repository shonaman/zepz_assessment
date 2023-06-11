import { fireEvent, render, screen } from '@testing-library/react';
import Pagination, { PaginationProps } from './Pagination';

const defaultProps: PaginationProps = {
  currentPage: 1,
  itemsPerPage: 20,
  totalItems: 40,
  onPageChange: jest.fn(),
};

const setup = (props = defaultProps) => {
  render(<Pagination {...props} />);
};

describe('Pagination Component Unit Tests', () => {
  beforeEach(() => {
    setup();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should render the component with no errors', async () => {
    expect(await screen.findByTestId('previous-button')).toBeTruthy();
    expect(await screen.findByTestId('next-button')).toBeTruthy();
  });

  it('should go to next page when next-button is clicked', () => {
    fireEvent.click(screen.getByTestId('next-button'));

    expect(defaultProps.onPageChange).toHaveBeenCalledWith(
      defaultProps.currentPage + 1
    );
  });
});
