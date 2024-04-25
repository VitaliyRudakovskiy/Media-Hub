export type UserButtonsProps = {
  userType: string;
  handleSendFriendRequest: () => Promise<void>;
  handleCancelFriendRequest: () => Promise<void>;
  handleApproveRequest: () => Promise<void>;
  handleDeletFriend: () => Promise<void>;
};
