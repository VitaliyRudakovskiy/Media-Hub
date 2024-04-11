export type EditProfileElementsType = {
  placeholder: string;
  name: 'name' | 'secondName' | 'description' | 'birthday' | 'phone' | 'favourites';
};

export type EditProfileType = {
  name: string;
  secondName: string;
  description: string;
  birthday: string;
  phone: string;
};
