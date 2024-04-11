import { z } from 'zod';

import { DATE, FAVOURITES, PHONE_NUMBER } from '@/constants/regulars';

export const editProfileScheme = z.object({
  name: z
    .string()
    .min(2, 'Name should have at least 2 symbols')
    .max(25, 'Name should be not more than 25 symbols'),
  secondName: z
    .string()
    .min(2, 'Second name should have at least 2 symbols')
    .max(25, 'Second name should be not more than 30 symbols'),
  description: z
    .string()
    .min(10, 'Description should have at least 10 symbols')
    .max(300, 'Description should be not more than 300 symbols')
    .optional()
    .or(z.literal('')),
  birthday: z
    .string()
    .regex(DATE, 'Date of birth should be in format: DD.MM.YYYY')
    .optional()
    .or(z.literal('')),
  phone: z.string().regex(PHONE_NUMBER, 'Phone number should be in format: +375xxxxxxxxx'),
  favourites: z
    .string()
    .regex(FAVOURITES, 'This field should contain only Cyrillic and Latin letters and comma')
    .optional()
    .or(z.literal('')),
});

export type EditProfileSchemeType = z.infer<typeof editProfileScheme>;
