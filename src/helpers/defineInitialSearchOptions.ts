import searchCheckboxes from '@/constants/searchCheckboxes';

export const defineInitialSearchOptions = () => {
  return searchCheckboxes.map((item) => item.name);
};
