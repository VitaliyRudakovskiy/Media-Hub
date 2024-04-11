import { CommentType } from '@/types/commentType';

const createComment = (text: string, name: string, email: string): CommentType => {
  return {
    createdAt: Date.now(),
    text,
    name,
    email,
    likedBy: [],
  };
};

export default createComment;
