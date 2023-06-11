import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 20px;
  margin-right: 1.3rem;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 14px;
`;

export interface SearchInputProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <InputContainer>
      <Input
        type="text"
        placeholder="Search users..."
        value={value}
        onChange={onChange}
        data-testid="search"
      />
    </InputContainer>
  );
};

export default SearchInput;
