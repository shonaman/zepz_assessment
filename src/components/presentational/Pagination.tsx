import styled from 'styled-components';

const PagingContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 999;
`;

const PageButton = styled.button`
  background-color: #ffffff;
  border: none;
  color: #333333;
  font-size: 14px;
  padding: 8px 12px;
  margin: 0 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #eaeaea;
  }
`;

export interface PaginationProps {
  currentPage: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange: (pageNumber: number) => void;
}

const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  onPageChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <PagingContainer>
      <PageButton
        data-testid="previous-button"
        onClick={() => handlePageChange(currentPage - 1)}>
        Previous
      </PageButton>
      <span>{currentPage}</span>
      <PageButton
        data-testid="next-button"
        onClick={() => handlePageChange(currentPage + 1)}>
        Next
      </PageButton>
    </PagingContainer>
  );
};

export default Pagination;
