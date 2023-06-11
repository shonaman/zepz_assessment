import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

export const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  max-width: auto;
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

interface IUserCardDivProps {
  isblocked?: boolean;
}

export const UserCardDiv = styled.div<IUserCardDivProps>`
  background-color: #f5f8fa;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  &:hover {
    cursor: pointer;
  }

  ${(props) =>
    props.isblocked &&
    css`
      opacity: 0.5;
      pointer-events: none;
    `}
`;

export const ProfilePictureContainer = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 0 auto;
`;

export const ProfilePicture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const UserName = styled.h3`
  font-size: 16px;
  margin-bottom: 5px;
  text-align: center;
`;

export const Reputation = styled.p`
  font-size: 14px;
  color: #657786;
  margin-bottom: 10px;
  text-align: center;

  span {
    font-weight: bold;
    color: #1da1f2;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

export const UnfollowButton = styled.button`
  background-color: #fff;
  color: #1da1f2;
  border: 1px solid #1da1f2;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
`;

export const FollowButton = styled.button`
  background-color: #1da1f2;
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

export const FollowingText = styled.span`
  font-size: 12px;
  color: #657786;
  margin-right: 5px;
`;

export const FollowingFlag = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  background-color: #1da1f2;
  border-radius: 50%;
  color: #fff;
  font-size: 12px;
  margin-right: 5px;
`;

export const BlockButton = styled.button`
  background-color: #e0245e;
  color: #fff;
  padding: 8px 16px;
  border-radius: 20px;
  border: none;
  font-size: 14px;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  color: red;
  font-size: 16px;
  margin: 20px 0;
  font-weight: bold;
  text-align: center;
`;
