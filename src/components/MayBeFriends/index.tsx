'use client';

import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';

import getPotentialFriends from '@/helpers/getPotentialFriends';
import { selectUser } from '@/store/slices/userSlice';
import { selectReadonlyUsers } from '@/store/slices/usersSlice';
import { UserWithId } from '@/types/user';
import Button from '@/UI/Button';

import PotentialFriend from './PotentialFriend';
import { MayBeFriendsContainer, MayBeFriendsTitle, PotentialFriendsContainer } from './styled';

const MayBeFriends = () => {
  const users = useSelector(selectReadonlyUsers);
  const { id: myId, email: myEmail } = useSelector(selectUser);
  const [recommendedFriends, setRecommendedFriends] = useState<UserWithId[]>([]);
  const router = useRouter();

  useEffect(() => {
    const potentialFriends = getPotentialFriends(users, myId, myEmail);
    setRecommendedFriends(potentialFriends);
  }, [users, myId, myEmail]);

  const redirectToFriends = () => router.push(`/friends`);

  return (
    <MayBeFriendsContainer>
      <MayBeFriendsTitle>Recommended Friends</MayBeFriendsTitle>
      <PotentialFriendsContainer>
        {recommendedFriends.map(({ id, userData }) => (
          <PotentialFriend key={id} id={id} userData={userData} />
        ))}
      </PotentialFriendsContainer>
      <Button variant='secondary' width='100%' onClick={redirectToFriends}>
        Show all
      </Button>
    </MayBeFriendsContainer>
  );
};

export default MayBeFriends;
