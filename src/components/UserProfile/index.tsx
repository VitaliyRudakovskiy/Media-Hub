import { UserType } from '@/types/user'
import DynamicAvatar from '@/UI/Avatars/DynamicAvatar'
import UserButtons from '@/UI/UserButtons'

import * as S from './styled'
import { UserProfileProps } from './types'

const UserProfile = ({ userData, userId }: UserProfileProps) => {
  if (!userData) return null

  const { email, name, secondName, description, favourites } = userData

  return (
    <S.UserProfileWrapper>
      <S.BackgroundColorWrapper />
      <S.ProfileInfo>
        <S.LeftSection>
          <S.AvatarContainer>
            <DynamicAvatar
              email={email}
              width={150}
              height={150}
              isBordered
              unoptimized
              initialsFontSize='62px'
            />
          </S.AvatarContainer>
          <S.Username>
            {name} {secondName}
          </S.Username>
          <S.UserDescriptionContainer>
            {description && <S.SecondaryText>{description}</S.SecondaryText>}
            {favourites && <S.SecondaryText>{favourites}</S.SecondaryText>}
          </S.UserDescriptionContainer>
        </S.LeftSection>
        <UserButtons id={userId} userData={userData as UserType} />
      </S.ProfileInfo>
    </S.UserProfileWrapper>
  )
}

export default UserProfile
