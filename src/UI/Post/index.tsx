'use client';

import { memo, useState } from 'react';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';

import Comment from '@/assets/images/comment.png';
import Goto from '@/assets/images/goto.png';
import Remove from '@/assets/images/remove.png';
import Repost from '@/assets/images/repost.png';
import deletePost from '@/firebase/api/deletePost';
import convertCreationDate from '@/helpers/convertCreationDate';
import usePhotosFromFirestore from '@/hooks/usePhotosFromFirestore';
import { selectUser } from '@/store/slices/userSlice';
import { PostWithId } from '@/types/postType';
import ConfirmForm from '@/UI/ConfirmForm';
import PostBookmark from '@/UI/PostBookmark';
import PostLikes from '@/UI/PostLikes';
import PostReaction from '@/UI/PostReaction';
import PostViews from '@/UI/PostViews';

const CommentsSection = dynamic(() => import('@/components/CommentsSection'));
const NewComment = dynamic(() => import('@/components/NewComment'));

import Avatar from '../Avatar';

import * as S from './styled';

const Post = ({ id, postData }: PostWithId) => {
  const {
    createdAt,
    title,
    feedback,
    category,
    rating,
    tags,
    email,
    name,
    files,
    likedBy,
    bookmarks,
    views,
    repostTimes,
    comments,
    visibility,
  } = postData;

  const { email: currentUserEmail } = useSelector(selectUser);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [areCommentsVisible, setAreCommentsVisible] = useState(false);
  const router = useRouter();

  const fileLinks = usePhotosFromFirestore(files);

  const openPost = () => router.push(`/dashboard/${id}`);
  const handleOpenModal = () => setIsConfirmModalOpen(true);
  const handleCloseModal = () => setIsConfirmModalOpen(false);
  const handleDeletePost = () => deletePost(id);
  const handleToggleComments = () => setAreCommentsVisible((prevVisible) => !prevVisible);

  return (
    <>
      <S.PostWrapper>
        <S.TopSection>
          <Avatar width={50} height={50} initialsFontSize='20px' />
          <S.PostInfo>
            <S.UserName>{name}</S.UserName>
            <S.Date>{convertCreationDate(createdAt)}</S.Date>
          </S.PostInfo>
          <PostBookmark id={id} bookmarks={bookmarks} />
          {currentUserEmail === email && (
            <S.Icon src={Remove} alt='remove icon' onClick={handleOpenModal} />
          )}
          <S.Icon src={Goto} alt='go to post icon' onClick={openPost} />
        </S.TopSection>
        <S.MainSection>
          <S.Title>{title}</S.Title>
          <S.Category>{category}</S.Category>
          <p>{rating}</p>
          <S.MainText>{feedback}</S.MainText>
          {fileLinks && fileLinks.length > 0 && (
            <S.ImageSection>
              {fileLinks.map((file) => (
                <S.SingleImage key={file} src={file} alt={`post image ${file}`} />
              ))}
            </S.ImageSection>
          )}
        </S.MainSection>
        <S.NumbersSection>
          <S.ReactionsSection>
            <PostLikes id={id} likedBy={likedBy} />
            <PostReaction
              icon={Comment}
              reactionsCount={comments.length}
              onClick={handleToggleComments}
            />
            <PostReaction icon={Repost} reactionsCount={repostTimes} />
          </S.ReactionsSection>
          <PostViews visibility={visibility} views={views} />
        </S.NumbersSection>

        {areCommentsVisible && (
          <>
            <CommentsSection commentsIds={comments} postId={id} />
            <NewComment postId={id} />
          </>
        )}
      </S.PostWrapper>

      {isConfirmModalOpen && (
        <ConfirmForm
          subtitle='Вы уверены, что хотите удалить этот пост?'
          closeModal={handleCloseModal}
          onConfirm={handleDeletePost}
        />
      )}
    </>
  );
};

export default memo(Post);
