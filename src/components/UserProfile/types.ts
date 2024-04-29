import { DocumentData } from 'firebase/firestore';

export type UserProfileProps = {
  userData: DocumentData | null;
  userId: string;
};
