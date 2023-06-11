import { useEffect, useState } from 'react';
import {
  ProfilePicture,
  Reputation,
  ButtonContainer,
  FollowingFlag,
  FollowButton,
  BlockButton,
  ProfilePictureContainer,
  UnfollowButton,
  UserName,
  UserCardDiv,
  FollowingText,
  Container,
} from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUserPlus,
  faBan,
  faTimes,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons';
import { toNumbersArray } from '../../../commons/utils/strings.utils';
import { User } from '../../../commons/store/Users/Users.interface';

interface UserCardProps {
  user: User;
}

const UserCard = ({ user }: UserCardProps) => {
  const [expanded, setExpanded] = useState(false);
  const [followedUsersIds, setFollowedUsersIds] = useState<number[]>([]);
  const [blockedUsersIds, setBlockedUsersIds] = useState<number[]>([]);

  const isUserFollowed = (): boolean => followedUsersIds?.includes(user.userId);
  const isUserBlocked = (): boolean => blockedUsersIds?.includes(user.userId);

  useEffect(() => {
    // fetch followed & blocked users from localstorage on component mount
    const storedFollowedUsersIds =
      localStorage.getItem('followedUsers') || '[]';
    const storedBlockedUsersIds = localStorage.getItem('blockedUsers') || '[]';
    if (storedFollowedUsersIds) {
      setFollowedUsersIds(toNumbersArray(storedFollowedUsersIds));
    }
    if (storedBlockedUsersIds) {
      setBlockedUsersIds(toNumbersArray(storedBlockedUsersIds));
    }
  }, []);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  const handleFollowUserClick = () => {
    if (followedUsersIds?.indexOf(user.userId) < 0) {
      followedUsersIds.push(user.userId);
    }
    localStorage.setItem('followedUsers', followedUsersIds?.toString());
  };

  const handleUnFollowUserClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setFollowedUsersIds((prevFollowedUsers) =>
      prevFollowedUsers.filter((id) => id !== user.userId)
    );
    e.stopPropagation();
  };

  const handleBlockUserClick = () => {
    if (blockedUsersIds.indexOf(user.userId) < 0) {
      blockedUsersIds.push(user.userId);
    }
    if (followedUsersIds.indexOf(user.userId) !== -1) {
      followedUsersIds.filter((u) => u !== user.userId);
    }
    localStorage.setItem('blockedUsers', blockedUsersIds.toString());
    localStorage.setItem('followedUsers', followedUsersIds.toString());
  };

  return (
    <Container>
      <UserCardDiv onClick={handleCardClick} isblocked={isUserBlocked()}>
        <ProfilePictureContainer>
          <ProfilePicture src={user?.profileImage} alt="Profile Picture" />
        </ProfilePictureContainer>
        <UserName>{user?.displayName}</UserName>
        <Reputation>
          Reputation: <span>{user.reputation}</span>
        </Reputation>{' '}
        {isUserFollowed() && (
          <ButtonContainer>
            <FollowingFlag>
              <FontAwesomeIcon icon={faUserCheck} />
            </FollowingFlag>
            <span>
              <FollowingText>Following</FollowingText>
            </span>
            <UnfollowButton onClick={(e) => handleUnFollowUserClick(e)}>
              Unfollow <FontAwesomeIcon icon={faTimes} />
            </UnfollowButton>
          </ButtonContainer>
        )}
        {expanded && (
          <ButtonContainer>
            {!isUserFollowed() && (
              <FollowButton onClick={handleFollowUserClick}>
                Follow <FontAwesomeIcon icon={faUserPlus} />
              </FollowButton>
            )}
            <BlockButton onClick={handleBlockUserClick}>
              Block <FontAwesomeIcon icon={faBan} />
            </BlockButton>
          </ButtonContainer>
        )}
      </UserCardDiv>
    </Container>
  );
};

export default UserCard;
